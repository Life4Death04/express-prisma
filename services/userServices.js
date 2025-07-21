import prisma from "../prisma/client.js";

export const getUserService = async () =>{
    return prisma.user.findMany();
}