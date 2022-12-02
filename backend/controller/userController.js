import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import transactionModel from "../models/transactionModel.js";
import jwt from "jsonwebtoken";

export const registerAccount = async (req, res) => {
  const { email, username, password } = req.body;
  const userExits = await userModel.findOne({ email });
  try {
    //check if the user already exits
    if (userExits) {
      return res.json({ status: "false", msg: "user already exits" });
    }

    // Hash the password before saving on database
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.json({status:"success",newUser})
   //creating jwt
  /*   const payload = {
       id: newUser._id,
      email: newUser.email, 
    };
    console.log("before jwt i register",payload.username, payload.email)
    jwt.sign(payload, "randomString", { expires: "1hr" }, (err, token) => {
      console.log("i am payload inside jwt",payload,token)
      if (err) throw err;
      res.json({"token": token, status: "success", newUser }); */
      //console.log("from backend", newUser,token);
   /*  }); */

    /*    res.status(201).json(newUser); */ 
  } catch (err) {
    res.json({ err });
  }
};

export const loginAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    //login and token generation
    const currentUser = await userModel.findOne({ email });

    if (!currentUser)
      return res.json({ status: "failed", message: "user does not exits" });
    const verified = await bcrypt.compare(password, currentUser.password);

    if (!verified)
      return res.json({
        status: "failed",
        message: "credentials not matching",
      });
   
    //creating jwt
/*      const payload = {
       id: currentUser._id,
      email: currentUser.email 
    };
console.log("before token",payload.username,payload.email)
 const token =jwt.sign(payload, "randomString", { expires: "1hr" } )
    console.log("token--------------",token)
      res.status(200).json({  status: "success",  currentUser, token }); 
      //console.log("from backend", newUser,token); */
      res.json({  status: "success",  currentUser}); //  sent data to frontend for storing  in context variable userData
  } catch (err) {
    res.json({ err });
  }

    
  
};

export const updateAccount = async (req, res) => {
  const { phone, email, withdrawLimit, password } = req.body;
  console.log("in backend req.body",req.body);
  try {

    // hashing userpassword as password is being changed
   /*  if(password){
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt); } */


    const dataToBeUpdated = { //updatedAccount
      phone: phone,
      withdrawLimit: withdrawLimit,
      //password: hashedPassword,
    };
    console.log("before update dataToBeUpdated",dataToBeUpdated);
    const updateAccount = await userModel.findOneAndUpdate( { email }, dataToBeUpdated, { new: true }
    );

    res.json(updateAccount);
    console.log(updateAccount);
  } catch (error) {
    res.json(error);
  }
};

export const deactivateAccount = async (req, res) => {
  //just change the status to deactivate
  const { email } = req.body;
  try {
    const updatedAccount = { accountStatus: false };

    const update = await userModel.findOneAndUpdate({ email }, updatedAccount, {
      new: true,
    });
    console.log(update);

    console.log(update.accountStatus);
  } catch (error) {
    console.log(error);
  }
};
