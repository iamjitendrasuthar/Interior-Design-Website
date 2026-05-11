import { NextResponse } from "next/server";

const AUTH_COOKIE = "admin_auth";

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  // Protect /admin/* but NOT /admin/login
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const cookieValue = request.cookies.get(AUTH_COOKIE)?.value;
    const isAuthenticated = cookieValue === "true";

    if (!isAuthenticated) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
