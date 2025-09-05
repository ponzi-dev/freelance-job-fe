import createMiddleware from "next-intl/middleware";
import { routing } from "./locale/routing";


export default createMiddleware(routing);

export const config = {
  // Chặn những path không cần i18n (api, _next, file tĩnh)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
