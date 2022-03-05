const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const randomNo = () => Math.floor( Math.random() * 10 )

// Update api to store fruit and veg in memory, with mutating methods to allow the addition of more fruit. No need to worry about update or delete for now.
// Update front end to allow input, calling of api to add whichever, and then update the local view (whichever was visible, fruit or veg), by calling the api again.
// Write every logical step on paper FIRST for the whole solution before touching any code

const fruit = [
    {
        "name":"banana",
        "beauty":3,
        "age":8
    },
    {
        "name":"kiwi",
        "beauty":5,
        "age":7
    },
    {
        "name":"apple",
        "beauty":6,
        "age":1
    },
    {
        "name":"orange",
        "beauty":8,
        "age":4
    },
]

const veg = [
  {
    "name": 'potato', 
    "beauty": 5,
    "age": 2
  },
  {
    "name": 'green bean', 
    "beauty": 5,
    "age": 2
  },
  {
    "name": 'tomato', 
    "beauty": 5,
    "age": 2
  },
  {
    "name": 'onion', 
    "beauty": 5,
    "age": 2
  },
]

app.get('/api/:type', (req, res) => {
    const arg = req.params.type
    switch ( arg ) {
        case 'getVeg':
            res.send(veg)
            break
        case 'getFruit': 
            res.send(fruit)
            break
        default:
            res.send(fruit)
            // res.send(`Could not find anything for ${req.params.type}`)
    }
})

app.post('/api/add/:type/', (req, res) => {
  const type = req.params.type
  console.log(req.body)
  switch ( type ) {
    case 'fruit': 
      fruit.push({"name" : req.body, "beauty" : randomNo(), "age" : randomNo() })
      res.send(fruit)
    case 'veg': 
      veg.push({"name" : req.body, "beauty" : randomNo(), "age" : randomNo() })
      res.send(veg)
    default: 
      res.send('Unrecognized type; please try again')
  }
})

app.listen(4000, () => console.log('listening @ 4k'))