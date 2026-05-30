import { SITE_METADATA } from "@/src/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-on-background text-on-primary px-margin-mobile md:px-margin-desktop py-20 flex flex-col border-t border-white/5 mt-auto">
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 space-y-6">
          <div className="flex items-center gap-2.5">
            <img
              src="/aarvi_solutions_logo.png"
              alt="Aarvi Solutions Logo"
              className="w-8 h-8 object-contain rounded-lg shadow-sm"
            />
            <span className="font-headline-sm text-headline-sm font-bold text-surface-bright tracking-tight">
              {SITE_METADATA.name}
            </span>
          </div>
          <p className="text-surface-variant/60 font-body-md leading-relaxed">
            Premium freelance services bridging high-performance engineering
            with custom search optimization models.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-surface-variant/60 hover:text-tertiary transition-colors cursor-pointer text-xl">
              language
            </span>
            <span className="material-symbols-outlined text-surface-variant/60 hover:text-tertiary transition-colors cursor-pointer text-xl">
              terminal
            </span>
            <span className="material-symbols-outlined text-surface-variant/60 hover:text-tertiary transition-colors cursor-pointer text-xl">
              alternate_email
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="font-label-md text-xs uppercase tracking-widest text-on-primary mb-6 font-semibold">
            Company
          </h6>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#team"
              >
                About Team
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="font-label-md text-xs uppercase tracking-widest text-on-primary mb-6 font-semibold">
            Capabilities
          </h6>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#services"
              >
                Web Applications
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#services"
              >
                Mobile Engineering
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#services"
              >
                DevOps Automation
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#services"
              >
                Technical SEO
              </a>
            </li>
          </ul>
        </div>

        {/* Detailed Services */}
        <div>
          <h6 className="font-label-md text-xs uppercase tracking-widest text-on-primary mb-6 font-semibold">
            Account
          </h6>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#"
              >
                Support Center
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/60 font-medium hover:text-tertiary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="font-label-md text-xs uppercase tracking-widest text-on-primary mb-6 font-semibold">
            Connect
          </h6>
          <p className="text-surface-variant/60 font-body-md leading-relaxed text-sm mb-4">
            {SITE_METADATA.address}
          </p>
          <p className="text-surface-variant/60 font-body-md leading-relaxed text-sm">
            {SITE_METADATA.email}
            <br />
            {SITE_METADATA.phone}
          </p>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-surface-variant/40 text-xs">
        &copy; {new Date().getFullYear()} {SITE_METADATA.name}. All rights
        reserved.
      </div>
    </footer>
  );
}
