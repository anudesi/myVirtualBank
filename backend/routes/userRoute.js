import express from 'express'
import {registerAccount,updateAccount,deactivateAccount, loginAccount} from "../controller/userController.js"
const router = express.Router();


//post
router.post("/registerAccount",registerAccount);
router.post("/updateAccount",updateAccount);
router.post("/deactivateAccount",deactivateAccount)
router.post("/loginAccount",loginAccount) 



export default router;