import express from 'express';
import { getAllUser } from '../controller/userController.js';

const userRoutes = express.Router();

userRoutes.get('/find', getAllUser);

export default userRoutes;