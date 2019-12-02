const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')
const express = require('express')
const app = express()
admin.initializeApp()

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', '*');
    admin.firestore().collection("admin_account").get()
    .then(snapshot => {
        snapshot.forEach((doc) => {
            res.send(doc.data())
        });
        return console.log("get admin_account data.")
    })  
    .catch(err => {
        res.status(500).send(err)
    })
})

exports.getAdminAccount = functions.https.onRequest(app)