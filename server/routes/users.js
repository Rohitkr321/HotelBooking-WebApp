import express from 'express'
import { updateUser, deleteUser, getUser,getUsers } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

router.get('/checkauthentication',verifyToken, (req, res, next)=>{
    res.send("Hello user you are logged in")
})

router.get('/checkuser/:id',verifyUser, (req, res, next)=>{
    res.send("Hello user you are logged in and you can delete your account!")
})

router.get('/checkadmin/:id',verifyAdmin, (req, res, next)=>{
    res.send("Hello Admin you are logged in and you Can delete All Accounts!")
})
//update
router.put("/:id", updateUser)

//Delete
router.delete("/:id", deleteUser)

//GET
router.get("/:id", getUser)

//GET All
router.get("/", getUsers)


export default router;