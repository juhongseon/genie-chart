const express = require('express')
const app = express()
const mc=require("mongodb").MongoClient

const mUrl = 'mongodb://localhost:27017'

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})

app.listen(3355,()=>{
    console.log("Server Start...","http://localhost:3355")
})

app.get('/top200',(req,res)=>{
    var ymd = req.query.ymd
    mc.connect(mUrl,(err,client)=>{
        var db = client.db('genie')
        db.collection('genie_music').find({ymd:Number(ymd)})
            .toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})