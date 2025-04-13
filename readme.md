Imagine your app is like a reception desk at a company.

The user sends a request (like a visitor asking for help).
The routes act like the receptionist: who listens to the request.
The controllers are the office staff : who know what to do.
The model is like a file format — : rules on how to write employee data.
The database (MongoDB) is the file cabinet where : all data is stored.
index.js is the front door — opens the building and sets everything up.

✅ 1. Start with index.js – Your server entry point
This is the main file that runs when you do node index.js.
It connects to MongoDB, uses middleware, and loads your routes.

✅ 2. Create connect.js – For MongoDB connection
Keeps the Mongo connection logic separate for clarity.
Your App
↓
connectToMongo(uri) : Call the function with a specific MongoDB address
↓
await mongoose.connect(uri) : uri will receive that value & await mongoose.connect(uri) Use the received uri to connect to MongoDB
↓
MongoDB connection established
↓
.then(...) callback runs — "Mongo db connected"

✅ 3. Create models/user.js – MongoDB Schema
This tells MongoDB what a user should look like (what fields it has).

✅ 4. Create controllers/user.js – Logic for routes
All logic of what should happen when an API is hit (like saving, getting users) is written here.

Client (Postman/Browser) sends request to → Express Route
↓
Route calls a Controller Function (like getAllUsers)
↓
Controller uses Mongoose Model (model.find())
↓
Model talks to MongoDB
↓
MongoDB returns data
↓
Controller sends data back to client

✅ 5. Create routes/user.js – Handles routing
It connects endpoints (/users/...) with the controller functions.
