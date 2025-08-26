// middleware.ts
export { default } from "next-auth/middleware"

export const config = { 
  // Bảo vệ tất cả các trang trong khu vực admin
  matcher: [
    '/dashboard/:path*',
    '/products/:path*',
    '/posts/:path*',
    '/projects/:path*',
    '/settings/:path*',
    '/profile/:path*',
  ] 
};