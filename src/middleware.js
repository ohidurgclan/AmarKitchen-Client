import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {
    const token = await getToken({ req });
    const { pathname } = req.nextUrl;

    const isTokenOK = Boolean(token);
    
    // 1. Role-Based Redirects for landing pages (/ or /Home)
    if (isTokenOK && (pathname === "/" || pathname === "/Home")) {
        // Redirect Admin
        if (token?.role === 'admin') {
            return NextResponse.redirect(new URL("/AdminDashboard", req.url));
        }
        // Redirect Customer
        if (token?.role === 'customer') {
            return NextResponse.redirect(new URL("/CustomerDashboard", req.url));
        }
    }

    // 2. Checkout protection logic
    const isCheckoutRoute = pathname.startsWith("/Checkout");
    if (isCheckoutRoute && !isTokenOK) {
        const callbackUrl = encodeURIComponent(pathname);
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/", 
        "/Home", 
        "/Checkout/:path*", 
        "/AdminDashboard/:path*", 
        "/CustomerDashboard/:path*"
    ],
};