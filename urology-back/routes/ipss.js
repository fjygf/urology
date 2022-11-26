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

//添加ipss
router.post('/', function (req, res, next) {
  var ipss = req.body;
  //console.log(ipss)

  if(!ipss.name || !ipss.phone || !ipss.score || ipss.score.length != 8){
    console.log("缺失参数！")
    res.status(400).json({
      error: '参数缺失'
    });
    return;
  }

  if(ipss.phone.length != 11 || ipss.phone < "10000000000" || ipss.phone > "19999999999"){
    console.log("手机号非法！")
    res.status(400).json({
      error: '手机号非法！'
    });
    return;
  }

  ipss.score.forEach(p => {
    if (p < 0 || p > 5) {
      console.log("参数错误！")
      res.status(400).json({
        error: '参数错误'
      });
      return;
    }
  });

  var ipssInsert = {
    open_id: req.session.open_id,
    name: ipss.name,
    phone: ipss.phone,
    ipss1: ipss.score[0],
    ipss2: ipss.score[1],
    ipss3: ipss.score[2],
    ipss4: ipss.score[3],
    ipss5: ipss.score[4],
    ipss6: ipss.score[5],
    ipss7: ipss.score[6],
    qol: ipss.score[7]
  }

  mysql(ipssTable).insert(ipssInsert)
    .then(function (result) {
      console.log("db result: " + result)
      ipss.id = result[0];
      delete ipss.open_id;
      res.json(ipss);
    })
    .catch(function (e) {
      next(e);
    });

});


//搜索
router.post('/history', function (req, res, next) {
    var history = req.body;
    //console.log(ipss)

    if (!history.phone) {
        res.status(400).json({
            error: '参数缺失'
        });
        return;
    }
    //console.log(history.phone)
    mysql(ipssTable)
        .select('create_date', 'ipss1', 'ipss2', 'ipss3', 'ipss4', 'ipss5', 'ipss6', 'ipss7', 'qol')
        .where('phone', history.phone)
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