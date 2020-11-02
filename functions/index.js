const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51Hij2xDAwdLsSOX5zT67dujSUbiodXjerf8DYllhjD703M24G75Ow98qwOB78TLNjoeSNd07ydqq7k0jnMWLPYgE00aCvVTURl"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello word"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //   OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-cc4e3/us-central1/api
