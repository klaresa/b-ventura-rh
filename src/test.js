var axios = require('axios');
var data = JSON.stringify({
  "collection": "candidatos",
  "database": "rh",
  "dataSource": "funcao",
  "projection": {
    "_id": 1
  }
});

var config = {
  method: 'post',
  url: 'https://data.mongodb-api.com/app/data-hbtrx/endpoint/data/beta/action/findOne',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': 'RTpvekoGhdarDS2JM3SnnH5xa3OftSWDiXHzlihGy48JAgya1zcHNQX3AcbHXeac'
  },
  data : data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
