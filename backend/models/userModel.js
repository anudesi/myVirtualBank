import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    title:{type:String},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true}, 
    email:{type:String,required:true},
    password:{type:String,required:true},
    
    address:{
    streetName: {type:String,required:true},
    streetNumber:{type:Number,required:true},
    city:{type:String,required:true},
    zipcode:{type:Number,required:true},
    country:{type:String,required:true}, 
    },
    phone:{type:Number,required:true},


   customerType:{type:String,required:true,default:"personal"},// personal or business
    accountType:{type:String,required:true,default:"SA"},//SA= saving account CA = current account

     accountNumber: {type:String,default:""}, 
     BICNumber:{type:String,default:""},
    withdrawLimit:{type:Number,default:2000},
    accountStatus:{type:Boolean, default:true},//active,  deactive ,blocked
    dateOpened: { type: Date, default: Date.now }     
    
});


const userModel = mongoose.model("user",userSchema);
export default userModel;