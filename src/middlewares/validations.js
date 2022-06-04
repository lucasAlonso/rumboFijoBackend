import jwt from "jsonwebtoken";

const validateToken = function (req, res, next) {
  const verif = jwt.verify(
    req.headers.authorization.split(" ")[1],
    "claveSuperSecreta"
  );

  if (verif) {
    next();
  } else {
    return res.status(403).send("Token invalid");
  }
};
