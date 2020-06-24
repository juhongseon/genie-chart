const express = require('express')
const app = express()
const mc = require("mongodb").MongoClient
const ObjectID = require('mongodb').ObjectID

const mUrl = 'mongodb://localhost:27017'

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})

app.listen(3355, () => {
    console.log("Server Start...", "http://localhost:3355")
})

app.get('/top200', (req, res) => {
    var ymd = req.query.ymd
    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_music').find({ymd: ymd})
            .toArray((err, docs) => {
                res.json(docs)
                client.close()
            })
    })
})

app.get('/detail', (req, res) => {
    var songid = req.query.songid
    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_music').find({songid: songid})
            .toArray((err, docs) => {
                res.json(docs)
                client.close()
            })
    })
})

app.get('/search', (req, res) => {
    var where = req.query.where
    var keyword = req.query.keyword
    var exactly = req.query.exactly

    if (keyword.length == 0) res.json([])
    else mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        if (exactly == 0) db.collection('genie_music').find({[where]: {$regex: keyword}})
            .toArray((err, docs) => {
                var datas = Array.from(new Set(docs.map(doc => doc.songid))).map(songid => {
                    return {
                        songid: songid,
                        imgsrc: docs.find(doc => doc.songid === songid).imgsrc,
                        title: docs.find(doc => doc.songid === songid).title,
                        artist: docs.find(doc => doc.songid === songid).artist,
                        album: docs.find(doc => doc.songid === songid).album
                    }
                })
                res.json(datas)
                client.close()
            })
        else db.collection('genie_music').find({[where]: keyword})
            .toArray((err, docs) => {
                var datas = Array.from(new Set(docs.map(doc => doc.songid))).map(songid => {
                    return {
                        songid: songid,
                        imgsrc: docs.find(doc => doc.songid === songid).imgsrc,
                        title: docs.find(doc => doc.songid === songid).title,
                        artist: docs.find(doc => doc.songid === songid).artist,
                        album: docs.find(doc => doc.songid === songid).album
                    }
                })
                res.json(datas)
                client.close()
            })
    })
})

app.get('/addReply', (req, res) => {
    var songid = req.query.songid
    var nickname = req.query.nickname
    var password = req.query.password
    var content = req.query.content

    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_reply').insert({
            songid: songid,
            nickname: nickname,
            password: password,
            content: content,
            timestamp: new Date().getTime()
        })
        client.close()
    })
})

app.get('/reply', (req, res) => {
    var songid = req.query.songid
    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_reply').find({songid: songid}).sort('timestamp', -1)
            .toArray((err, docs) => {
                res.json(docs)
                client.close()
            })
    })
})

app.get('/removeReply', (req, res) => {
    var _id = req.query._id
    var password = req.query.password
    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_reply').remove({_id: new ObjectID(_id), password: password})
        client.close()
    })
})

app.get('/Top2002', (req, res) => {
    var ymd = req.query.ymd
    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_music').find({ymd: ymd})
            .toArray((err, docs) => {
                res.json({data:docs})
                client.close()
            })
    })
})

app.get('/Detail2', (req, res) => {
    var songid = req.query.songid
    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_music').find({songid: songid})
            .toArray((err, docs) => {
                res.json({data:docs})
                client.close()
            })
    })
})

app.get('/Search2', (req, res) => {
    var where = req.query.where
    var keyword = req.query.keyword
    var exactly = req.query.exactly

    if (keyword.length == 0) res.json([])
    else mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        if (exactly == 0) db.collection('genie_music').find({[where]: {$regex: keyword}})
            .toArray((err, docs) => {
                var datas = Array.from(new Set(docs.map(doc => doc.songid))).map(songid => {
                    return {
                        songid: songid,
                        imgsrc: docs.find(doc => doc.songid === songid).imgsrc,
                        title: docs.find(doc => doc.songid === songid).title,
                        artist: docs.find(doc => doc.songid === songid).artist,
                        album: docs.find(doc => doc.songid === songid).album
                    }
                })
                res.json({data:datas})
                client.close()
            })
        else db.collection('genie_music').find({[where]: keyword})
            .toArray((err, docs) => {
                var datas = Array.from(new Set(docs.map(doc => doc.songid))).map(songid => {
                    return {
                        songid: songid,
                        imgsrc: docs.find(doc => doc.songid === songid).imgsrc,
                        title: docs.find(doc => doc.songid === songid).title,
                        artist: docs.find(doc => doc.songid === songid).artist,
                        album: docs.find(doc => doc.songid === songid).album
                    }
                })
                res.json({data:datas})
                client.close()
            })
    })
})

app.get('/AddReply2', (req, res) => {
    var songid = req.query.songid
    var nickname = req.query.nickname
    var password = req.query.password
    var content = req.query.content

    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_reply').insert({
            songid: songid,
            nickname: nickname,
            password: password,
            content: content,
            timestamp: new Date().getTime()
        })
        client.close()
    })
})

app.get('/Reply2', (req, res) => {
    var songid = req.query.songid
    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_reply').find({songid: songid}).sort('timestamp', -1)
            .toArray((err, docs) => {
                res.json({data:docs})
                client.close()
            })
    })
})

app.get('/RemoveReply2', (req, res) => {
    var _id = req.query._id
    var password = req.query.password
    mc.connect(mUrl, (err, client) => {
        var db = client.db('genie')
        db.collection('genie_reply').remove({_id: new ObjectID(_id), password: password})
        client.close()
    })
})