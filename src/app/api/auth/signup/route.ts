import { addUser, User } from "~/server/authQueries";
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "~/utils/jwt";
import { hashPassword } from "~/utils/passwordHash";

export async function POST(req: NextRequest) {
    try {
        const {name, email, password} = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({massage: "Please fill in all the fields"}, {status: 400});
        }
        const hashedPassword = await hashPassword(password);
        const newUser =  await addUser({
            name: name,
            email: email,
            password: hashedPassword,
            id: uuidv4(),
        });
        if (newUser === undefined || 'error' in newUser ) {
            return NextResponse.json({message: newUser?.error || "new user is undefined"}, {status: 500});
        }else {
            const token = generateToken({name: newUser.name, email: newUser.email, id: newUser.id });
            return NextResponse.json({message: "user created successfully", token: token, user: newUser}, {status: 201});
        }
    }catch(e){
        return NextResponse.json({message: "error"}, {status: 500});
    }

}