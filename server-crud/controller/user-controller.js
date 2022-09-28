
import User from '../schema/users-schema.js'


export const addUser = async (req, res) => {
    console.log("add user page")
    //npm i body-parser
    //to get the body data  body parser is important

    const user = req.body;                   //req  contains data 
    const newUser = new User(user)         // creating an object of userschema
    console.log(user)//

    try {
        await newUser.save(); // mongoose write function
        res.status(201).json(newUser)
        console.log(" added user data")  //   out put
    } catch (error) {

        console.log(" adding  user to database faild :", error.message)
        res.status(409).json({ message: error.message })
    }
}


export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}) //fetching  users data 
        res.status(200).json(users)
    } catch (error) {
        console.log(" fetching users from  database faild :", error.message)
        res.status(404).json({ message: error.message })
    }
}