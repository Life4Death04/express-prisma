import prisma from "../prisma/client.js";

export const getUserService = async () =>{
    return await prisma.user.findMany();
}

export const findUserById = async (id) =>{
    return await prisma.user.findFirst({
        where: {id: parseInt(id)}
    })
}

export const createNewUser = async (userData) =>{
    return await prisma.user.create({
        data: userData
    })
}

export const CreateNewManyUsers = async (userData) =>{
    return await prisma.user.createMany({
        data: userData
    })
}

export const dropUser = async (id) =>{
    return await prisma.user.delete({
        where: {id: parseInt(id)}
    })
}