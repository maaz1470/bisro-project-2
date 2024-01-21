const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(express.json())
app.use(cors())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oj8rmok.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const menusCollection = client.db('Bistro').collection('menu');
    const reviewsCollection = client.db('Bistro').collection('reviews')
    const cartCollection = client.db('Bistro').collection('cart')
    app.get('/menus', async (req, res) => {
        const result = await menusCollection.find().toArray();
        res.send(result)
    })

    app.get('/reviews', async (req, res) => {
        const result = await reviewsCollection.find().toArray();
        res.send(result)
    })

    app.post('/add-cart', async (req, res) => {
      const data = req.body;
      const result = await cartCollection.insertOne(data);
      res.send(result)
    });

    app.get('/cart', async (req, res) => {
      const {email} = req.query;
      const query = {
        email: email
      }
      const result = await cartCollection.find(query).toArray();
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello Something')
})



app.listen(port, () => {
    console.log(`Server is Running on ${port}`)
})

