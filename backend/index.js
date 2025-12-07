const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const productRoute = require('./routes/product.route.js')


const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("hello from node api server")
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log('Connected!');
    app.listen(process.env.PORT, () => {
        console.log('server is running on port 3000');
    })
})
  .catch(() => console.log('Failed to connect!'));