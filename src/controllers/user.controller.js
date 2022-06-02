import User from "../models/Users.js";

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
      res.json({ message: "New User Stored" });
    }
  } catch (error) {
    res.status(400);
    res.json({ message: "Error creating New User Stored", error: error });
  }
  try {
    error;
  } catch (error) {}
}

/* 
ejemplo de aut segun https://javascript.plainenglish.io/password-encryption-using-bcrypt-sequelize-and-nodejs-fb9198634ee7
const authenticateUserWithemail = (user) => {
    return new Promise((resolve, reject) => {
     try {
      usermodel.findOne({
      where: {
       user_email: user.userName // user email
      }
      }).then(async (response) => {
       if (!response) {
        resolve(false);
       } else {
         if (!response.dataValues.password || 
          !await response.validPassword(user.password, 
           response.dataValues.password)) {
            resolve(false);
         } else {
          resolve(response.dataValues)
         }
        }
       })
      } catch (error) {
      const response = {
       status: 500,
       data: {},
      error: {
       message: "user match failed"
      }
      };
     reject(response);
     }
    })
   } */
