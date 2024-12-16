import jwt, {JwtPayload} from "jsonwebtoken";

const secret = process.env.SECRET_KEY || "secret";

export interface AuthPayload {
    name: string;
    email: string;
    password: string;
}


export const generateToken = (user: AuthPayload): string => {
    return jwt.sign(user, secret, {expiresIn: "1h"});
}

export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, secret) as JwtPayload;
}