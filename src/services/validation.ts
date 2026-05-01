export const validateFullName = (name: string) => {
  const parts = name.trim().split(/\s+/);
  return parts.length >= 2 && parts.every((p) => p.length >= 2);
};

export const validatePhone = (phone: string) => {
  return /^\d{6,15}$/.test(phone.trim());
};

export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const validateFile = (file: File | null) => {
  const MAX_SIZE = 10 * 1024 * 1024;

  if (!file) return "File is required";
  if (file.type !== "application/pdf") return "Only PDF files are allowed";
  if (file.size > MAX_SIZE) return "File must be 10MB or less";

  return null;
};
