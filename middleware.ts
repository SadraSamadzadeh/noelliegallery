import { NextRequest, NextResponse } from "next/server";
import { checkToken } from "~/middlewares/authMiddelware";

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === "/api/auth/signup") {
        return checkToken(req);
    }
    









    return NextResponse.next();
}
export const config = {
    matcher: ["/api/:path*"],
};