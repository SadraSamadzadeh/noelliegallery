import { addUser, User } from "~/server/authQueries";
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from "next/server";
interface ResponseData {
    massage?: string;
    error?: string;
}
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const {name, email, password} = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({massage: "Please fill in all the fields"}, {status: 400});
        }

        const newUser =  await addUser({
            name: name,
            email: email,
            password: password,
            id: uuidv4(),
        });

        return NextResponse.json({message: "user created successfully", newUser}, {status: 201});
    }catch(e){
        return NextResponse.json({message: "error"}, {status: 500});
    }

}