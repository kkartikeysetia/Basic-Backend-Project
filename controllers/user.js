const model = require("../models/user");

async function getAllUsers(req, res) {
  const result = await model.find({});
  return res.json(result, "got all users");
}

async function getAllUsersById(req, res) {
  const user = await model.findById(req.params.id);
  if (!user) res.status(404).json({ error: "user not found" });
  res.json(user);
}

async function createNewUser(req, res) {
  const body = req.body;
  const naya = await model.create({
    firstName: body.firstName,
    lastName: body.lastName,
    age: body.age,
    gender: body.gender,
  });
  return res.json({ msg: "Sucess", id: naya._id });
}

async function updateUser(req, res) {
  await model.findByIdAndUpdate(req.params.id, { lastName: "changed" });
  res.json({ status: "success" });
}

async function deleteUser(params) {
  await model.findByIdAndDelete(req.params.id);
  res.json({ status: "success" });
}

module.exports = {
  getAllUsers,
  getAllUsersById,
  createNewUser,
  //   updateUser,
  //   deleteUser,
};
