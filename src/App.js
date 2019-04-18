import React, { Component } from 'react';
import { deleteActivities, deletePlaces, removeBooks, setBooks, setDataActivities, setDataPlaces } from './api';
import './App.css';
import axios from 'axios';
import data from './data/libros';

class App extends Component {

    state = {
        books: [],
    };

    getDataGoogleBooks = async () => {
        let counter = 0;
        while (counter < data.length - 3530) {
            await data.slice(counter, counter + 10).map((book, index) => {
                let bookData = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${ encodeURI(book) }&key=AIzaSyBoT1SaD59FTZ8Nv0iCFilpDk_FZq_vRxw`)
                    .then(res => res.data.items);
                return bookData.then(async res => {
                        let books = this.state.books;
                        books.push({
                            titulo: book.TITULO,
                            categoria: book.GENERO || res[ 0 ].volumeInfo.categories[ 0 ] || '',
                            autor: book.AUTOR || res[ 0 ].volumeInfo.authors[ 0 ] || '',
                            precio: book.PVP,
                        });
                        await this.setState({books: books})
                    },
                );
            });
            counter += await 10;
            await setTimeout(() => console.log('Waiting for response'), 1000);
        }
        console.log(this.state.books);
        setBooks(this.state.books).then(res => console.log(res)).catch(e => e);
    };

    render () {
        return (
            <div className="App" style={ {flexDirection: 'row'} }>
                <div style={ {alignContent: 'center'} }>
                    <h2> Places </h2>
                    <button onClick={ setDataPlaces }>
                        Set data places
                    </button>
                    <button onClick={ deletePlaces }>
                        Delete data places
                    </button>

                </div>
                <div style={ {alignContent: 'center'} }>
                    <h2> Activities </h2>
                    <button onClick={ setDataActivities }>
                        Set data Activities
                    </button>
                    <button onClick={ deleteActivities }>
                        Delete data Activities
                    </button>
                </div>
                <div>
                    <h2> Books </h2>
                    <button onClick={ this.getDataGoogleBooks }>Set books</button>
                    <button onClick={ removeBooks }>Delete books</button>
                </div>
            </div>
        );
    }
}

export default App;
