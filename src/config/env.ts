/**
 * Centralized, type-safe configuration loader for environment variables.
 * Enforces key requirements and provides type inference.
 */

export const env = {
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "",
  smtpHost: process.env.NEXT_PUBLIC_SMTP_HOST || "",
  smtpPort: Number(process.env.NEXT_PUBLIC_SMTP_PORT || 587),
  smtpLogin: process.env.NEXT_PUBLIC_SMTP_LOGIN || "",
  smtpPassword: process.env.NEXT_PUBLIC_SMTP_PASSWORD || "",
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "",
};

// Simple runtime validation helper
export function validateEnv() {
  const required = [
    { key: "NEXT_PUBLIC_COMPANY_EMAIL", value: env.companyEmail },
    { key: "NEXT_PUBLIC_SMTP_HOST", value: env.smtpHost },
    { key: "NEXT_PUBLIC_SMTP_LOGIN", value: env.smtpLogin },
    { key: "NEXT_PUBLIC_SMTP_PASSWORD", value: env.smtpPassword },
    { key: "NEXT_PUBLIC_COMPANY_PHONE", value: env.companyPhone },
  ];

  const missing = required
    .filter((item) => !item.value)
    .map((item) => item.key);

  if (missing.length > 0) {
    console.warn(
      `⚠️ [Config Warning]: The following environment variables are missing:\n${missing
        .map((k) => `   - ${k}`)
        .join("\n")}\nSMTP email dispatch capabilities might be disabled.`,
    );
  }
}
