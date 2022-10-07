const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;

// place holder for the data
const books = [{
  book: "from API v2",
  category: "from API v2",
  author: "from API v2"
  }];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api2/books', (req, res) => {
  console.log('api/books called!')
  res.json(books);
});

app.post('/api2/book', (req, res) => {
  const book = req.body.book;
  console.log('Adding user:::::', book);
  books.push(book);
  res.json("book addedd");
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});