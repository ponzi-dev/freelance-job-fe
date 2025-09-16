import createMiddleware from "next-intl/middleware";
import { routing } from "./locale/routing";
import { NextResponse, NextRequest } from "next/server";
import { publicRoutes, roleRoutes } from "./routes/permissions";

// Middleware i18n
const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const url = new URL(req.url);
  
  const pathname = url.pathname;

  // i18n xử lý trước
  const response = intlMiddleware(req);

  // Nếu route public → cho qua
  if (publicRoutes.includes(pathname)) {
      return response;
  }

  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const role: string | null = ""

  // Nếu role không tồn tại → về 403
  if (!role) {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  // Kiểm tra quyền truy cập route theo role
  
  const allowedRoutes = roleRoutes[role] || [];

  const isAllowed = allowedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isAllowed) {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};


