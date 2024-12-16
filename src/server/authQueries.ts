"server-only"
import { db } from "~/server/db";
import { users } from "~/server/db/schema";
import { v4 as uuidv4 } from 'uuid';
export interface User{
    name: string,
    email: string,
    password: string,
    id: string,
}


export async function addUser(user: User) {
    try {
        const addUser = await db.insert(users).values({
            name: user.name,
            email: user.email,
            password: user.password,
            id: uuidv4(),
        }).returning({
            name: users.name,
            email: users.email,
            createdAt: users.createdAt,
        });
        return addUser;
    }catch(error) {
        return {error: "Error adding user"};
    }
}