import firebase from './firebase';

console.log('Данные старт');

let citiesRef = firebase.db.collection("cities");
console.log('Данные старт1');

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
console.log('Данные SF');

citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
console.log('Данные LA');
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
console.log('Данные DC');
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
console.log('Данные TOK');
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

console.log('Данные BJ');




citiesRef.doc("SF").collection("landmarks").doc().set({
    name: "Golden Gate Bridge",
    category : "bridge" });
citiesRef.doc("SF").collection("landmarks").doc().set({
    name: "Golden Gate Park",
    category : "park" });

citiesRef.doc("DC").collection("landmarks").doc().set({
    name: "National Gallery of Art",
    category : "museum" });
citiesRef.doc("DC").collection("landmarks").doc().set({
    name: "National Mall",
    category : "park" });

console.log('Данные сформированы');