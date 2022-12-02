import express from 'express'
import {transactAmount,viewTransactions} from "../controller/transactionController.js"
const router = express.Router();


router.post("/transactAmount",transactAmount);
router.post("/viewTransactions",viewTransactions);



export default router;