
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import  "firebase/database"

import firebaseConfig from "./config";

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
        this.realTimeDB = app.database();
    }

    async register(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(
            email,
            password
        );
        return await newUser.user.updateProfile({
            displayName: name
        });
    }

    async login(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }

    async logout() {
        await this.auth.signOut();
    }

    async resetPassword(email) {
        await this.auth.sendPasswordResetEmail(email);
    }
}

console.log('firebase Start');

const firebase = new Firebase();
// const firebase = 1;

console.log('firebase END');

/*
    result - Query
 */
function GetDataList(result, comment = 'Комментарий') {
    result.get()
        .then(querySnapshot => {
            console.log(`---------- ${comment} -----------`);
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}

export  {GetDataList};
export default firebase;
