const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CoureController {

    show(req, res) {
        res.send('COURSE DETAIL');
    }

    list(req, res, next) {
        Course.find({})
            .then(courses => {
                res.json(courses)
            })
            .catch(next);
    }

}

module.exports = new CoureController(); 