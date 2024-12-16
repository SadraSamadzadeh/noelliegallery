import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('✅ Middleware is running for:', req.nextUrl.pathname);

  const response = NextResponse.next();
  response.headers.set('x-middleware-check', 'middleware-passed');
  return response;
}

// Apply the middleware globally
export const config = {
  matcher: '/:path*',
};
