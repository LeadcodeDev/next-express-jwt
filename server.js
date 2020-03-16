const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
var dotenv = require('dotenv').config()
const dotenvExpand = require('dotenv-expand')
dotenvExpand(dotenv)

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.use(cookieParser())

        server.get('/signin', (req, res) => {
            if(req.cookies.token) {
                res.redirect('/')
            } else {
                return app.render(req, res, '/signin', req.query)
            }
        })

        server.get('/signup', (req, res) => {
            if(req.cookies.token) {
                res.redirect('/')
            } else {
                return app.render(req, res, '/signup', req.query)
            }
        })

        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(process.env.STARTING_MESSAGE)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
