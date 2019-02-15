const express = require('express');
const Router = express.Router();

const getModel = require('../Model');
const Port = getModel('Port');

const TIME = require('../utils/time');
const { Sussess, ServerError, LogicError } = require('../utils/response');

const _filter = { __v: 0 };

Router.get('/', (req, res) => {
  res.send('<h2>口岸</h2>');
});

Router.post('/get', (req, res) => {
  const { query, page_size, cur_page } = req.body;
  let queryBody = {};
  for (let key in query) {
    if (query[key]) {
      queryBody[key] = query[key];
    }
  }
  Port.count(queryBody, (err, count) => {
    if (err) {
      res.json(new ServerError());
    } else {
      Port.find(queryBody, _filter)
          .skip((cur_page - 1) * page_size)
          .limit(page_size)
          .sort({ createTime: -1 })
          .exec((err, ports) => {
            if (err) {
              res.json(new ServerError());
            } else {
              res.json(new Sussess('', {
                list: ports,
                total: count
              }));
            }
          });
    }
  });
});

Router.delete('/delete', (req, res) => {
  const ids = req.body;
  Port.remove({ _id: { $in: ids } }, (err, doc) => {
    if (!err) {
      res.json(new Sussess('删除成功！'));
    } else {
      console.log(err);
      res.json(new ServerError());
    }
  });
});

Router.post('/create', (req, res) => {
  console.log(req.body);
  let params = req.body;
  Port.findOne({ port: params.port }, (err, doc) => {
    if (err) {
      res.json(new ServerError());
    }
    
    if (doc) {
      res.json(new LogicError('该口岸已存在！'));
    } else {
      params.createTime = TIME.getTime();
      console.log(params);
      let port = new Port(params);
      console.log(port);
      
      port.save((err, doc) => {
        if (err) {
          res.json(new ServerError());
        }
        
        if (doc) {
          res.json(new Sussess('新增成功', doc));
        }
      });
    }
  });
});

Router.post('/update', (req, res) => {
  let port = req.body;
  Port.findOneAndUpdate({ _id: port._id }, port, { new: true }, (err, doc) => {
    if (!err) {
      console.log(doc);
      res.json(new Sussess('更新成功！', doc));
    } else {
      res.json(new ServerError());
    }
  });
});

Router.get('/getCountries', (req, res) => {
  let continent = req.query.continent;
  switch (continent) {
    case 'Asia':
      res.json(new Sussess('', ['China', 'Taiwai', 'Japan', 'Thailand', 'Korea']));
      break;
    case 'Europe':
      res.json(new Sussess('', ['Germany', 'Netherlands', 'Britain', 'Sweden']));
      break;
    case 'Africa':
      res.json(new Sussess('', ['Egypt']));
      break;
    case 'Oceania':
      res.json(new Sussess('', ['Australia', 'NewZealand ']));
      break;
    case 'NorthAmerica':
      res.json(new Sussess('', ['America', 'Canada']));
      break;
    case 'SouthAmerica':
      res.json(new Sussess('', ['Brazil', 'Chile']));
      break;
    default:
      res.json(new Sussess('', []));
  }
});


module.exports = Router;
