import { LinkedInIcon, TwitterIcon, InstagramIcon, FacebookIcon } from "@/components/icons/social-icons";
import faviconUrl from "@/assets/favicon.svg";
import { showComingSoon } from "@/lib/util";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl overflow-hidden group-hover:rotate-12 transition-transform flex-shrink-0">
                <img src={faviconUrl} alt="HellOOpass" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter text-foreground">HellOOpass</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering African cooperatives, Unions, and Associations to build self-sufficient digital economies through innovative
              technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link to="/income-generation" className="hover:text-primary transition-colors">
                  Income Generation Model
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Digital Wallets
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  QR & NFC Payments
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  P2P Lending
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Merchant Accounts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#team" className="hover:text-primary transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="/#case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/#blog" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with the latest in community digital trade.</p>
            <form
              className="relative"
              onSubmit={(e) => {
                e.preventDefault();
                showComingSoon("Newsletter", "Newsletter subscriptions will be available soon.");
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-12 bg-muted/50 border border-border rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />

              <button
                type="submit"
                className="absolute right-2 top-2 h-8 px-4 bg-primary text-primary-foreground rounded-md text-xs font-bold hover:opacity-90 transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Belcash Technology Solutions PLC. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
