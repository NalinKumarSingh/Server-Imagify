import express from 'express'
import {registerUser, loginUser, userCredits} from '../Controller/usercontroller.js'
import userAuth from '../Middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits',userAuth, userCredits)
export default userRouter

//localhost:4000/api/user/register
//localhost:4000/api/user/login
