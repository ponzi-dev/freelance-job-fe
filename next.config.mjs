import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./locale/request.ts");

const nextConfig = {};

export default withNextIntl(nextConfig);
