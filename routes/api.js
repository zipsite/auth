const express = require('express')
const router = express.Router()

router.get('/book', (req, res) => {res.send("index")})
router.get('/book/:bookId', (req, res) => {res.send("show")})
router.post('/book', (req, res) => {res.send("store")})
router.put('/book/:bookId', (req, res) => {res.send("update")})
router.delete('/book/:bookId', (req, res)=>{res.send("delete")})

module.exports = router
