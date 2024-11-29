const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

const returner = new Map([  
    ["statuscode", 201],
    ["message", 'successful'],
    ["body", items]
]);

const putRp = new Map([  
    ["statuscode", 202],
    ["message", 'successfully created'],
    ["body", items]
]);

const delRp = new Map([  
    ["statuscode", 204],
    ["message", 'successfully deleted'],
    ["body", items]
]);

const delRpIdNotFound = new Map([  
    ["statuscode", 404],
    ["message", 'id not found'],
    ["body", items]
]);

const usedId = new Map([  
    ["statuscode", 401],
    ["message", 'used id'],
    ["body", items]
]);

// Convert Map to plain object
const responseObj = Object.fromEntries(returner);
const responseObjPut = Object.fromEntries(putRp);
const responseObjDel = Object.fromEntries(delRp);
const responseObjDelNotFound = Object.fromEntries(delRpIdNotFound);
const responseObjPutUsedId = Object.fromEntries(usedId);

app.get('/', (req, res) => {
  res.json(responseObj);
});

app.put('/addItems', function(req, res) {
    flag=false
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (req.body.id==item.id) {
            res.json(responseObjPutUsedId);
            flag=true
            break
        }
    }
    if (flag==false) {
        items.push({ id: req.body.id, name: req.body.name })
        res.json(responseObjPut);
    }
    
});

app.delete('/deleteItem/:id', function(req, res) {
  const { id } = req.params;
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    if (item.id==req.params.id) {
        items.splice(index,1)
        res.json(responseObjDel);
    }
    else{
        
        res.json(responseObjDelNotFound);
    }
    
  }
  
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

