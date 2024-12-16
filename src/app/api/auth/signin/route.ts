import { NextRequest, NextResponse } from "next/server";
import { checkCredentials } from "~/server/authQueries";
import { generateToken } from "~/utils/jwt";


export async function POST(req: NextRequest) {
    try {
        const {email, password} = await req.json();
        if (!email || !password) {
            return NextResponse.json({massage: "Please fill in all the fields"}, {status: 400});
        }
       const userLogIn = await checkCredentials(email, password);
       if ('error' in userLogIn) {
            return NextResponse.json({message: userLogIn.error}, {status: 401});
       }else {
            const token = generateToken({name: userLogIn.name, email: userLogIn.email, id: userLogIn.id });
            return NextResponse.json({message: "Logged in successfully", token: token, user: userLogIn}, {status: 200});
       }
    }catch(e){
        return NextResponse.json({message: "error"});
    }
}