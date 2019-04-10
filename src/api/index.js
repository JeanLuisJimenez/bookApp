import { data } from '../data/libros';import { places } from '../data/places'const IP = ''; // Change this for your current ipconst DEV_API_URL = 'http://68.183.18.192:3000/'; // This is the URL of the api in devconst LOCAL_API_URL = 'http://localhost:3000/'; // This is the URL of the api in your local machineconst LAN_API_URL = `http://${IP}:3000/books`; // This is the URL of the api in your LAN, If you want to use a device test you need use this URLconst API_URL = DEV_API_URL; // Change to URL that you needexport async function setData () {    let counter = 0;    while (data.length >= counter) {        try {            let books = {books: data.slice(counter, counter + 10)};            let response = await fetch(`${API_URL}/books`, {                method: 'POST',                headers: {                    'mode': 'no-cors',                    'Content-Type': 'application/json',                },                body: JSON.stringify(books),            }).then(() => 'Success').catch((e) => e);            console.log(response);        } catch (e) {            console.log(e);            break;        }        counter += 10;    }}export async function setDataPlaces () {    try {        let response = await fetch(`${API_URL}/places`, {            method: 'POST',            headers: {                'mode': 'no-cors',                'Content-Type': 'application/json',            },            body: JSON.stringify(places),        }).then(() => 'Success').catch((e) => e);        console.log(response)    } catch (e) {        console.log(e);    }}