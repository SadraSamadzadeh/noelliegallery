import { addUser, User } from "~/server/authQueries";
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "~/utils/jwt";
import { hashPassword } from "~/utils/passwordHash";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const {name, email, password} = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({massage: "Please fill in all the fields"}, {status: 400});
        }
        const hashedPassword = await hashPassword(password);
        const generatedId = uuidv4();
        const newUser =  await addUser({
            name: name,
            email: email,
            password: hashedPassword,
            id: generatedId,
        });
        const token = generateToken({name: name, email: email, id: generatedId });
        return NextResponse.json({message: "user created successfully", token, user: newUser}, {status: 201});
    }catch(e){
        return NextResponse.json({message: "error"}, {status: 500});
    }

}