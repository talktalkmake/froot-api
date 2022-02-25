const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const fruit = [
    {
        "name":"banana",
        "beauty":3,
        "age":8
    },
    {
        "name":"kiwi",
        "beauty":3,
        "age":8
    },
    {
        "name":"apple",
        "beauty":3,
        "age":8
    },
    {
        "name":"orange",
        "beauty":3,
        "age":8
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

app.listen(4000, () => console.log('listening @ 4k'))