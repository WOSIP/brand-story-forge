import countriesFallback from "@/data/countries.json";

export type Country = {
  country: string;
  countryCode: string;
  currency: string;
  currencyCode: string;
  dialCode: string;
};

class CountryStore {
  private static instance: CountryStore;
  private countries: Country[] = countriesFallback;
  private fetchPromise: Promise<void> | null = null;

  private constructor() {}

  static getInstance() {
    if (!CountryStore.instance) CountryStore.instance = new CountryStore();
    return CountryStore.instance;
  }

  // Call once at app startup -- safe to call multiple times
  init() {
    if (this.fetchPromise) return;
    this.fetchPromise = this.fetchInBackground();
  }

  // Await this if you need guaranteed fresh data
  async ready(): Promise<void> {
    return this.fetchPromise ?? Promise.resolve();
  }

  private async fetchInBackground() {
    const MAX_RETRIES = 3;
    const RETRY_DELAY = 2000;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const res = await fetch("https://hpk-api.belcashlabs.com/v1/api/public/dube/international/contact/fetch");

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        if (data?.success && Array.isArray(data.countries)) {
          this.countries = data.countries;
          return;
        }
      } catch (err) {
        console.warn(`⚠️ Country fetch attempt ${attempt} failed:`, err);
        if (attempt < MAX_RETRIES) {
          await new Promise((r) => setTimeout(r, RETRY_DELAY * attempt)); // exponential-ish backoff
        } else {
          console.error("❌ All country fetch attempts failed, using fallback");
        }
      }
    }
  }

  getAll() {
    return this.countries;
  }

  getByCode(code: string) {
    return this.countries.find((c) => c.countryCode === code);
  }

  getByDialCode(dial: string) {
    return this.countries.find((c) => c.dialCode === dial);
  }
}

export const countryStore = CountryStore.getInstance();
