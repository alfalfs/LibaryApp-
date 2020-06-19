const express = require('express');
const app = new express();
const port = process.env.port || 7333
const nav = [{
        link: '/books',
        name: 'Books'
    },
    {
        link: '/authors',
        name: 'Authors'
    },
    {
        link: '/login',
        name: 'Login'
    },
    {
        link: '/login/signup',
        name: 'Signup'
    }
];
// router handler
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const authRouter = require('./src/routes/authRoutes')(nav)
app.use(express.static('./public'))
    //middleware to use static file
    //app.use(express.static(path.join(__dirname,"/public")))  //altetnat method
app.set('view engine', 'ejs'); // ejs setting
app.set('views', './src/views') //setting path
app.use(express.urlencoded({ extended: true })); //body parser inbuild in express
app.use(express.json())
    //routerings
app.use('/books', booksRouter) //book router
app.use('/authors', authorsRouter) //author router
app.use('/login', authRouter)

app.get('/', (req, res) => {
    res.render("index", {
        nav,
        title: 'Library'
    })
});


app.listen(port)

//creating your endpoints /route  handlers normal html
//app.get('/', (req, res) => res.sendfile(__dirname + "/src/views/index.html"));
//rending in ejs
// trail - app.get('/', (req, res) => res.render("index", { books: ['book1', 'book2'], title: 'Library' }));

// const emailDB = "admin@admin.ac";
// const passwordDB = "Admin@1234";
// app.post('/login', (req, res) => {
//     const { uemail, upassword } = req.body;
//     //console.log(uemail);
//     (uemail === emailDB && upassword === passwordDB) ? res.send("LoginSuccessfull"): res.send("LoginFailed")

// });