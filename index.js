const express = require("express"); //  Why: You need Express to make the server.

const Router = require("./routes/user"); // You don't want to write all routes in this file; keeping them in a separate file is clean and modular.
const { connectToMongo } = require("./connect"); //  MongoDB needs to be connected before we can use it. This file contains that connection logic.

// Setting up the building and giving it an address.
const app = express();
const PORT = 4000;

// CONNECTION : Connect to MongoDB FIRST before starting the server // connect your Node.js app to your MongoDB database running locally.
// Call the function with a MongoDB URL
connectToMongo("mongodb://127.0.0.1:27017/app-user").then(() =>
  console.log("Mongo db connected")
);
// MongoDB connection is asynchronous, meaning: It takes time (maybe milliseconds or seconds)
// You don't want the server to start before it's ready So: .then() waits for the connection to finish.

// app.use(...) This is Express’ way of adding middleware or routing logic

// MIDDLEWARE : This allows Express to understand incoming JSON (body of POST/PUT requests :  A receptionist learning to understand written English. Without it, she can’t read the form
app.use(express.json()); // if u remove it You won’t be able to read POST request body.

// ROUTES :  Routes setup (after JSON middleware so it can parse req.body)
app.use("/users", Router); // It tells Express:Whenever someone visits a URL that starts with /users, please handle it using the logic
//  inside the Router we imported from routes/user.js
// This is the base URL path. // Means: Only requests starting with /users will be passed to the Route // ❌ /products → Router won’t handle it.

/*
Behind the Scenes: What Actually Happens?
Request comes to your server: GET /users/123

Express checks: Is there a route that handles /users?
Sees this line: app.use("/users", Router)
Sends control to routes/user.js

In that file, it finds:
router.get("/:id", getAllUsersById)

Controller runs the logic. Response is sent.

BUT IF if a POST request comes in, Express needs to parse the JSON body first (i.e., use express.json()) before handing it to the router.
*/
app.listen(PORT, () => {
  console.log(`Started started at localhost:${PORT}`);
});

// Step	     Reason
// 1 & 2. Imports first	    Keeps things clean and organized.
// 3.     app & PORT      	You can't add middleware/routes without app.
// 4.     connectToMongo  	It's critical DB is connected before handling any routes. Else, app might crash if DB is unavailable.
// 5.     express.json()    Needed before any route that needs to read req.body.
// 6.      Routes	          Should come after middleware so requests are fully processed.
// 7.     app.listen	      Start the server after everything is ready (especially DB).
