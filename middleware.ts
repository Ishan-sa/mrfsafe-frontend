import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = request.nextUrl;

  // Check if the requested path requires authentication (not in public paths)
  const protectedRoutes = ["/dashboard" /* Add other protected routes here */];
  if (protectedRoutes.includes(pathname) && !session) {
    // User is not signed in and trying to access a protected route, redirect to sign-in
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // User is either signed in or trying to access a public path, let them through
  return NextResponse.next();
}
