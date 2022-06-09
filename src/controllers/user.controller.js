import User from "../models/Users.js";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
  try {
    const { name, password, email } = req.body;

    const emailExists = await User.findOne({ where: { email: email } });
    const userExists = await User.findOne({ where: { name: name } });
    if (emailExists) {
      res.status(409);
      res.json("Email already registered");
    } else if (userExists) {
      res.status(409);
      res.json("User name already registered");
    } else {
      const newUser = await User.create({
        name,
        password,
        email,
      });
      res.status(201);
      res.json({ message: "New User Created" });
    }
  } catch (error) {
    res.status(400);
    res.json({ message: "Error creating New User", error: error });
  }
  try {
    error;
  } catch (error) {}
}

export async function authenticateUserWithemail(req, res) {
  try {
    const user = req.body;
    const userFinded = await User.findOne({ where: { email: user.email } });
    if (!userFinded) {
      res.status(500);
      res.json({ message: "Invalid user" });
    } else if (
      !userFinded.password ||
      !(await userFinded.validPassword(
        user.password,
        userFinded.dataValues.password
      ))
    ) {
      res.status(401);
      res.json({ message: "Invalid Password" });
    } else {
      let token = jwt.sign(
        {
          ...userFinded.dataValues,
        },
        "claveSuperSecreta",
        { expiresIn: "2h" }
      );

      res.status(200);
      res.json({ message: "Login Succesfull", user: user.email, token: token });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: "Error LOGIN / user match failed", error: error });
  }
}
