// core module
const readJWT = require('../../utils/util/readJWT');

// npm module

class HomeController {
    homepage(req, res) {
        res.render('index');
    }

    index(req, res) {
        const { token } = req.params;
        console.log(token);
        const data = readJWT(token);
        console.log(data);
        res.render('logined', { data });
    }

    contact(req, res) {
        res.render('contact');
    }
}

module.exports = new HomeController();