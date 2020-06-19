const express = require('express');
const authRouter = express.Router();
const emailDB = "admin@admin.ac";
const passwordDB = "Admin@1234";

function router(nav) {
    authRouter.get('/', (req, res) => {
        res.render("login", {
            nav,
            title: 'Login',
            msg: 'Welcome'
        })
    });
    authRouter.post('/', (req, res) => {
        const { uemail, upassword } = req.body;
        //console.log(uemail);
        // (uemail === emailDB && upassword === passwordDB) ? res.send("LoginSuccessfull"): res.send("LoginFailed")
        if (uemail === emailDB && upassword === passwordDB) {
            res.render("index", {
                nav,
                title: 'Library',
                msg: 'succesfully Login'
            })
        } else {
            res.render("login", {
                nav,
                title: 'Library',
                msg: 'Invalid Credential'
            })
        }

    });
    authRouter.get('/signup', (req, res) => {
        res.render("signup", {
            nav,
            title: 'Signup',
            msg: 'Welcome'
        })
    });

    return authRouter;
}

module.exports = router;