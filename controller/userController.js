import { 
    getUserService,
    findUserById,
    createNewUser,
    CreateNewManyUsers,
    dropUser
 } from "../services/userServices.js";


export const getUserById = async (req, res) =>{
    try{
        const user = await findUserById(req.params.id);
        if(!user) return res.status(404).json({ error: 'User not found'});
        res.send(user);
    }catch(error){
        console.log(error)
        console.log(req.params.id)
        res.status(500).json({error: 'Server Error'})
    }
}

export const getAllUser = async (req, res) => {
    try{
        const users = await getUserService();
        res.json(users);
    }catch(error){
        res.status(500).json({error: 'Server Error'})
    }
}

export const createUser = async (req, res) =>{
    try{
        const user = await createNewUser(req.body);
        res.status(201).json(user)
    }catch(error){
        console.error(error);
        console.log(req.body);
        res.status(500).json({ error: 'Server Error' })
    }
}

export const createUsers = async (req, res) =>{
    try{
        const users = await CreateNewManyUsers(req.body);
        res.status(201).json(users);
    }catch{
        console.error(error)
        res.status(500).json({error: 'Server Error'})
    }
}

export const deleteUserById = async (req, res) =>{
    try{
        const userToDelete = await dropUser(req.params.id)
        if(!userToDelete) return res.status(404).json({error: 'User not found!'})
        res.send(`The user: ${userToDelete.name} was deleted`)
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Server Error'})
    }
}