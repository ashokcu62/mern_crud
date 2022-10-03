
import User from '../schema/users-schema.js'

// create
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

// read
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}) //fetching  users data 
        res.status(200).json(users)
    } catch (error) {
        console.log(" fetching users from  database faild :", error.message)
        res.status(404).json({ message: error.message })
    }
}

// read

export const getUser = async (req, res) => {
    console.log(req.params.id)
    try {
        // const user = await User.find({ _id: req.params.id })    //find function 1st 0bject and  fn data
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        console.log("fetching user details from database faild :", error.message)
        res.status(404).json({ message: error.message })
    }
}

// update
export const editUser = async (req, res) => {
    const user = req.body
    const updateUser = new User(user)

    try {
        await User.updateOne({ _id: req.params.id }, updateUser)  //id and updated object
        res.status(201).json(updateUser)
        console.log(" updated user data")

    } catch (error) {
        console.log(" updating userdata to database faild :", error.message)
        res.status(409).json({ message: error.message })

    }
}