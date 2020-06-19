const express = require('express');
const booksRouter = express.Router();
// receiving argument 
function router(nav) {
    const innernav = [{
        link: '/add_book',
        name: 'Add Book'
    }];
    //array of books
    var books = [{
                title: 'Tom & Jerry',
                author: 'Joseph Barbera',
                genre: 'cartoon',
                img: 'tom&jerry.jpeg'
            },
            {
                title: 'Harry Potter',
                author: 'J K Rowelling',
                genre: 'Fantasy',
                img: 'tom&jerry.jpeg'
            },
            {
                title: 'Tom&Jerry',
                author: 'Baseher',
                genre: 'Drama',
                img: 'tom&jerry.jpeg'
            }
        ]
        //book page
    booksRouter.get('/', (req, res) => {
        res.render("books", {
            nav,
            title: 'Books',
            books
        })
    });
    booksRouter.get('/add_book', (req, res) => {
        res.render("add_book", {
            nav,
            title: 'Add Book'
        })
    });
    booksRouter.get('/:id', (req, res) => {
        const id = req.params.id
        res.render("book", {
            nav,
            title: 'Book',
            book: books[id]
        })
    });
    return booksRouter;
};
module.exports = router;