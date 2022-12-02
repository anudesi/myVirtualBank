import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema({
    username:{type:String,required:true},
    accountNumber: {type:String,default:""}, 
    openingBalance:{type:Number,default :0},
    currentBalance:{type:Number,default:0},
    transactionType:{type:String},  // deposit (credit) withdraw(debit)
    transactionAmount:{type:Number,required:true},
    transactionDate:{type: Date,default:Date.now},
    transactionNumber:{type:String},
    transactionRemarks:{type:String, max:50,required:true},
    clientName:{type:String,required:true},
    clientAccountNumber:{type:String}, 
    clientBICNumber:{type:String}, 
    ClientBank:{type:String},    
});

const transactionModel = mongoose.model("transaction",transactionSchema);
export default transactionModel;