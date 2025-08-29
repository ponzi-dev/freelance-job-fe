import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "vi"] as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    notFound();
    // notFound() will throw, so the following code won't run
    return {} as never;
  }

  return {
    locale: locale as string, // đảm bảo kiểu string
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
