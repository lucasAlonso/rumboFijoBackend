import jwt from "jsonwebtoken";

export const validateToken = function (req, res, next) {
  try {
    const verif = jwt.verify(
      req.headers.authorization.split(" ")[1],
      "claveSuperSecreta"
    );

    if (verif) {
      next();
    }
  } catch (error) {
    return res.status(403).json({ message: "Wrong Token", error: error });
  }
};
