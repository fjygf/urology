var express = require('express');
var router = express.Router();
var loginCheckMiddleware = require('../util').loginCheckMiddleware;
var mysql = require('../util').mysql;
var only = require('../util').only;
var ipssTable = 'ipss';
//var ipssAttrs = 'ipss1 ipss2 ipss3 ipss4 ipss5 ipss6 ipss7 qol';

router.use(loginCheckMiddleware);

router.all('*', function (req, res, next) {
    if (!req.session) {
        res.status(401).json({
            error: '未登录'
        });
        return;
    }
    next();
});

/*
{
  name: "xxx",
  phone: 13612341234,
  score:[1，2，3，4，5，0，1，2]
}
*/

//搜索
router.post('/ipss-history', function (req, res, next) {
    var history = req.body;
    //console.log(ipss)

    if (!history.phone) {
        res.status(400).json({
            error: '参数缺失'
        });
        return;
    }

    mysql(ipssTable).select('*')
        .then(rows => {
            console.log(rows)
            res.json(rows)
        })
        // Finally, add a .catch handler for the promise chain
        .catch(e => {
            console.error(e);
        });

});

module.exports = router;