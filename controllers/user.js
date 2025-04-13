const model = require("../models/user");

async function getAllUsers(req, res) {
  const result = await model.find({}); // Ask MongoDB to return all users  also {} means no filter.also await: Wait for MongoDB to finish responding.
  return res.json(result, "got all users"); // Send the list of users back to the client as JSON.
}

async function getAllUsersById(req, res) {
  const user = await model.findById(req.params.id); // Fetch user by that id
  if (!user) res.status(404).json({ error: "user not found" });
  res.json(user); //send back the user data
}

async function createNewUser(req, res) {
  const body = req.body; // JSON data sent by client in POST request Extracts JSON sent from frontend (POST data)
  const naya = await model.create({
    // Save new user to DB
    firstName: body.firstName,
    lastName: body.lastName,
    age: body.age,
    gender: body.gender,
  });
  return res.json({ msg: "Sucess", id: naya._id }); //	MongoDB gives you the unique ID of that user
}

async function updateUser(req, res) {
  const id = req.params.id; // Get the user ID from URL
  const updates = req.body; // Get updated fields from the body

  try {
    const updatedUser = await model.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
      runValidators: true, // Make sure updates follow schema rules
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ status: "success", data: updatedUser });
  } catch (err) {
    res.status(500).json({ error: "Update failed", details: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    const deleted = await model.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      msg: "User deleted successfully",
      deletedUser: deleted,
    });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to delete user", details: err.message });
  }
}

module.exports = {
  getAllUsers,
  getAllUsersById,
  createNewUser,
  updateUser,
  deleteUser,
};
