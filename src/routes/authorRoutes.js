const express = require('express');
const authorsRouter = express.Router();
// receiving argument 
function router(nav) {
    //array of authors
    var authors = [{
                title: 'Tom',
                author: 'Joseph Barbera',
                genre: 'cartoon',
                img: 'Barbera.jpg'
            },
            {
                title: 'Potter',
                author: 'J K Rowelling',
                genre: 'Fantasy',
                img: 'JK.jpeg'
            },
            {
                title: 'Pathumayuda adu',
                author: 'Baseher',
                genre: 'Drama',
                img: 'vkbr.jpeg'
            }
        ]
        //book page
    authorsRouter.get('/', (req, res) => {
        res.render("authors", {
            nav,
            title: 'Authors',
            authors
        })
    });

    authorsRouter.get('/:id', (req, res) => {
        const id = req.params.id
        res.render("author", {
            nav,
            title: 'Author',
            authors: authors[id]
        })
    });
    return authorsRouter;
};
module.exports = router;
//module.exports = authorRoutes;