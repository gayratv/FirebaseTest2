// import React from 'react';
// import ReactDom from 'react-dom';
// import regeneratorRuntime from "regenerator-runtime";
import  "regenerator-runtime";

console.log('main1');

import firebase, {GetDataList} from '~f/firebase';
// import  '~f/data';



// const rootRef = firebase.realTimeDB.ref();
// const attendees = firebase.realTimeDB.child('eventAttendees/fm');

/*
const attendees = firebase.realTimeDB.ref('eventAttendees');

attendees.on('value', (snapshot) =>
    {
        console.log(snapshot.val());
    }
);
*/

/*
const attendees = firebase.realTimeDB.ref('eventAttendees');
const promiceAtt = attendees.once('value');
console.log( promiceAtt);

promiceAtt.then(
    (snap) => {
        // console.log(snap);
        console.log(snap.val());
    }
);
*/

 // Запись сразу в два листа
/*
function writeNewEvent(uid, username, eventname) {
    // A post entry.
    var eventData = {
        date : Date.now(),
        name: eventname
    };

    let userData = {
        [uid] : username
    };

    // Get a key for a new Post.
    let newEventKey = firebase.realTimeDB.ref().child('events').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    let updates = {};
    updates['/events/' + newEventKey] = eventData;
    updates['/eventAttendees/' + newEventKey ] = userData;

    return firebase.realTimeDB.ref().update(updates);
}

let p1 = writeNewEvent(4,'Маша','Событие6');
console.log(p1);
*/


// both set() and update() can return a Promise you can use to know when the write is committed to the database.


/*
// Saves a new message on the Cloud Firestore.
function saveMessage(messageText) {
    // Add a new message entry to the Firebase database.
    return firebase.db.collection('messages').add({
        userId: 'a4M1cWYWGhnJitqfLzQk',
        text: messageText

    }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
    });
}

saveMessage('MSG1');
*/

// запросы по одному полю
let citiesRef = firebase.db.collection("cities");
// let p = citiesRef.where("state", "==", "CA")
// console.log(p);

// citiesRef.where("population", "<", 100000)
// citiesRef.where("name", ">=", "San Francisco")
//
// citiesRef.where("regions", "array-contains", "west_coast")
//
// citiesRef.where("state", "==", "CO").where("name", "==", "Denver")
// citiesRef.where("country", "==", "USA")
//         .where("capital", "==", false)
//         .where("state", "==", "CA")
//         .where("population", "==", 860000)


//***************************************************
// composite index
let result;

 result = citiesRef.where("country", "==", "USA").orderBy("population", "asc")
GetDataList(result,'composite index Запрос1');

 result = citiesRef.where("country", "==", "USA").where("population", ">", 10);
GetDataList(result);

result = citiesRef.where("country", "==", "USA").where("population", ">", 690000);
GetDataList(result);




// Queries supported by collection group indexes
let landmarksGroupRef = firebase.db.collectionGroup("landmarks");
result = landmarksGroupRef.where("category", "==", "park");
GetDataList(result,'Queries supported by collection group indexes');


/*
result.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        console.log(doc);
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
*/



let docRef = firebase.db.collection("cities").doc("SF");



console.log('--- SUB collection ----');

