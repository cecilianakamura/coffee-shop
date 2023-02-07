const { restart } = require("nodemon")

exports.get404 = (req,res,next) => {
    restart.status(404).render('404',{pageTitle:'Page Not Found', path:'/404'});

};