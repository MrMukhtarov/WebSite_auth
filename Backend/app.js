// Import All Dependencies
const detenv = require('dotenv')
const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


const app = express();

// Configure ENV File & Require Connection File
detenv.config({path: './config.env'})
require('./db/conn')
const port = process.env.PORT;

// Require Model
const Users = require('./models/userSchema')
const Message = require('./models/msgSchema')

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())

app.get('/', (req,res) => {
    res.send("Hello World")
})

// Registration
app.post('/register', async (req,res) => {
    try {
        // Get Body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password


        const createUser = new Users({
            username : username,
            email : email, 
            password : password
        });

        const created = await createUser.save()
        console.log(created);
        res.status(200).send('Registered');

    } catch (error) {
        res.status(400).send(error)
    }
})

// Login User
app.post('/login', async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Find User If Exist
        const user = await Users.findOne({email : email})
        if(user) {
            // Verify Password
            const isMatch = await bcryptjs.compare(password , user.password);

            if(isMatch) {
                const token = await user.generateToken();
                res.cookie('jwt', token, {
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send('LoggedIn')
            }else{
                res.status(400).send('Invalid Credentials')
            }
        }else{
            res.status(400).send('Invalid Credentials')
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

// LogOut Page
app.get('/logout', (req,res) => {
    res.clearCookie('jwt', {path : '/'})
    res.status(200).send("User Logged Out")
})


// Run Server
app.listen(port, () => {
    console.log('Server is Listening');
})

// Message
app.post('/message', async (req,res) => {
    try {
        // Get Body or Data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message


        const sendMsg = new Message({
            name : name,
            email : email, 
            message : message
        });

        const created = await sendMsg.save()
        console.log(created);
        res.status(200).send('Sent');

    } catch (error) {
        res.status(400).send(error)
    }
})