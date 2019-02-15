const express = require('express');
const Router = express.Router();
const Excel = require('excel-export');

const getModel = require('../Model');
const Company = getModel('Company');

const TIME = require('../utils/time');
const {Sussess, ServerError, LogicError} = require('../utils/response');

const _filter = {__v: 0};

Router.get('/', (req, res) => {
  res.send('<h2>上下游公司</h2>');
});

Router.post('/get', (req, res) => {
  const {query, page_size, cur_page} = req.body;
  let queryBody = {};
  for (let key in query) {
    if (query[key]) {
      queryBody[key] = query[key];
    }
  }
  Company.count(queryBody, (err, count) => {
    if (err) {
      res.json(new ServerError());
    } else {
      Company.find(queryBody, _filter).skip((cur_page - 1) * page_size).limit(page_size).sort({createTime: -1}).exec((err, companies) => {
        if (err) {
          res.json(new ServerError());
        } else {
          res.json(new Sussess('', {
            list: companies,
            total: count
          }));
        }
      });
    }
  });
});

Router.delete('/delete', (req, res) => {
  const ids = req.body;
  Company.remove({_id: {$in: ids}}, (err, doc) => {
    if (!err) {
      res.json(new Sussess('删除成功！'));
    } else {
      console.log(err);
      res.json(new ServerError());
    }
  });
});

Router.post('/create', (req, res) => {
  let params = req.body.data;
  let {companyCode} = params;
  Company.findOne({companyCode}, (err, doc) => {
    if (err) {
      res.json(new ServerError());
    }
    
    if (doc) {
      res.json(new LogicError('该公司已存在！'));
    } else {
      params.createTime = TIME.getTime();
      let company = new Company(params);
      
      company.save((err, doc) => {
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
  let company = req.body;
  Company.findOneAndUpdate({_id: company._id}, company, _filter, (err, doc) => {
    if (!err) {
      res.json(new Sussess('更新成功！', doc));
    } else {
      res.json(new ServerError());
    }
  });
});

Router.get('/export', (req, res) => {
  let conf = {};
  Company.find({}, {_id: 0, __v: 0}, (err, companies) => {
    if (err) {
      res.json(new ServerError());
    } else {
      conf.rows = [];
      companies.forEach(company => {
        let {companyCode, companyName, companyAbbr, country, telphone, language, encryptId, secretKey, createTime} = company;
        let arr = [
          companyCode,
          companyName,
          companyAbbr,
          country,
          telphone,
          language,
          encryptId,
          secretKey,
          createTime
        ];
        conf.rows.push(arr);
      });
    }
    conf.stylesXmlFile = "styles.xml";
    conf.name = 'mysheet';
    conf.cols = [
      {
        caption: '公司编号',
        type: 'string',
        width: 20
      },
      {
        caption: '公司名称',
        type: 'string',
        width: 60
      },
      {
        caption: '公司简称',
        type: 'string',
        width: 20
      },
      {
        caption: '国家',
        type: 'string',
        width: 15
      },
      {
        caption: '手机电话',
        type: 'string',
        width: 20
      },
      {
        caption: '语言',
        type: 'string',
        width: 10
      },
      {
        caption: '加密ID',
        type: 'string',
        width: 15
      },
      {
        caption: '密钥',
        type: 'string',
        width: 20
      },
      {
        caption: '创建时间',
        type: 'string',
        width: 20
      }
    ];
    const result = Excel.execute(conf);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'company.xlsx');
    res.end(result, 'binary');
  });
});


module.exports = Router;
