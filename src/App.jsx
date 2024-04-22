import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {books.map((book) => (
        <div key={book.id} className="book">
          <img
            className="img"
            src={book.imageLinks.smallThumbnail}
            alt={book.title}
          />
          <div className="details">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>
              <i>{book.authors}</i>
            </p>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
