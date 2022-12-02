import transactionModel from "../models/transactionModel.js";


export const transactAmount = async(req,res)=>{
    const{username} = req.body
    try {
        
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        console.log("i am from server",newTransaction)
        res.json({status:"success",data:newTransaction}); 
      } catch (err) {
        res.json({ err });
      }
    };


 export const viewTransactions = async (req,res) =>{
  const{username} = req.body
  try {
    const tranasDetails = await transactionModel.find(username);
   
    res.json({status : "success", data :tranasDetails}) //  sent data to frontend for storing  in context variable transactionData
  } catch (error) {
    res.json(error)
  }
}
 

