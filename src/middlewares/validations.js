import jwt from "jsonwebtoken";

export const validateToken = function (req, res, next) {
  try {
    const user = jwt.verify(
      req.headers.authorization.split(" ")[1],
      "claveSuperSecreta"
    );
    req.body = { ...req.body, user };

    if (user) {
      next();
    }
  } catch (error) {
    return res.status(403).json({ message: "Wrong Token", error: error });
  }
};
