const express = require('express')

const server = express();

const userRouter = require('../users/user-router')
const authRouter = require('../auth/auth-router')


server.use(express.json());


server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);


server.get('/', (req, res) => {
    res.send({
        Greeting: 'Greetings from Port 4000'
    })
})


module.exports = server;