const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const firestore = admin.firestore()

// exports.onUserCreate = functions.firestore.document('users/{userId}').onCreate((snap, context) => {
//     const newValue = snap.data()
// })
// exports.isOnline = functions.https.onRequest((req, res) => {
//     admin.firestore().collection('users').get().then((snapshot) => {
//         snapshot.forEach((doc) => {
//             res.send(doc.data())
//         })
//         return console.log("get admin_account data.")
//     }).catch(err => {
//         res.status(500).send(err)
//     })
// })

// exports.checkOnline = functions.https.onRequest((req, res) => {
//     admin.database().ref('.info/connected').on('value', snapshot => {
//         // Set the Firestore User's online status to true
//         usersRef
//           .doc(userId)
//           .set({
//             online: true,
//           }, { merge: true});  
        
//         // Let's also create a key in our real-time database
//         // The value is set to 'online'
//         admin.firebase().ref(`/status/${userId}`).set('online')
//     })
// })

// app.use(cors({ origin: true }));

// app.get('/', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
//     res.set('Access-Control-Allow-Headers', '*');
//     admin.firestore().collection("admin_account").get()
//     .then(snapshot => {
//         snapshot.forEach((doc) => {
//             res.send(doc.data())
//         });
//         return console.log("get admin_account data.")
//     })  
//     .catch(err => {
//         res.status(500).send(err)
//     })
// })

// exports.getAdminAccount = functions.https.onRequest(app)