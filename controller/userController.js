import { getUserService } from "../services/userServices.js";

export const getAllUser = async (req, res) => {
    try{
        const users = await getUserService();
        res.json(users);
    }catch(error){
        res.status(500).json({error: 'Server Error'})
    }
}