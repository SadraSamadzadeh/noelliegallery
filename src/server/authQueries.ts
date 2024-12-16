"server-only"
import { db } from "~/server/db";
import { users } from "~/server/db/schema";
import { v4 as uuidv4 } from 'uuid';
import { deHashPassword } from "~/utils/passwordHash";
export interface User{
    name: string,
    email: string,
    password: string,
    id: string,
}
export async function checkUserAlreadyExists({email} : {email: string}) {
    const userAvaiable = await db.query.users.findMany({
        where: (model, {eq}) => eq(model.email, email),
    });
    if (userAvaiable.length > 0) return {error: "User already exists"};
}

export async function addUser(user: User) {
    const userExists = await checkUserAlreadyExists({email: user.email});
    if (userExists?.error) return userExists;
        const addUser = await db.insert(users).values({
            name: user.name,
            email: user.email,
            password: user.password,
            id: uuidv4(),
        }).returning({
            name: users.name,
            email: users.email,
            id: users.id,
        })
        return addUser[0];
}

export async function checkCredentials(email: string, password: string) {
        const userLogIn = await db.query.users.findFirst({
            where: (model, {eq}) => eq(model.email, email),
        })
        if (!userLogIn) return {error: "User not found"};
        console.log(password, " " , userLogIn.password);
        if (await deHashPassword(password, userLogIn.password)) {
            return {name: userLogIn.name, email: userLogIn.email, id: userLogIn.id};
        }else {
            return {error: "Incorrect password"};
        }
}