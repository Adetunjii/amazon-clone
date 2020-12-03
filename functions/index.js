const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Hu5uKHTBJjnhUl8FC7XIdKPu7NoNqx7Brq3GYELm4qx33loxOvlnw966DWQZUsDuH2olQAgMqkjukDNvXQ79m1c00H3g9JlJK"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request recieved boom!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

//   OK - created;
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command
exports.api = functions.https.onRequest(app);
