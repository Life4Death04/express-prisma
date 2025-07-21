import express from 'express';

import { 
    getAllUser,
    getUserById,
    createUser,
    createUsers,
    deleteUserById
} from '../controller/userController.js';

const userRoutes = express.Router();

userRoutes.get('/findAll', getAllUser);
userRoutes.post('/create', createUser);
userRoutes.post('/createMany', createUsers);

userRoutes.get('/find/:id', getUserById);
userRoutes.delete('/delete/:id', deleteUserById);

export default userRoutes;