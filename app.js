const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors'); 

const app = express();
const port = 4000;

const url = 'mongodb://127.0.0.1:27017';
const database = 'Payment';
const client = new MongoClient(url);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

app.post('/payment', async (req, res) => {
  try {
    const { cardholdername, cardnumber, expirydate, cvv, amount } = req.body;
    const paymentData = {
        cardholdername,
        cardnumber,
        expirydate,
        cvv,
        amount,
    };

    await connectToMongoDB();
    await insertPaymentData(paymentData);

    res.status(201).send('Payment saved successfully');
  } catch (error) {
    console.error('Error saving payment data:', error);
    res.status(500).send('Error saving payment data');
  }
});

async function insertPaymentData(paymentData) {
  try {
    const db = client.db(database);
    const collection = db.collection('Customer');
    await collection.insertOne(paymentData);
  } catch (error) {
    console.error('Error inserting payment data:', error);
  }
}

// app.use(express.static(__dirname));

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});