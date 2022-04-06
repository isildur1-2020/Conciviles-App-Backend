import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

export const sign = (payload) => {
  try {
    const token = jwt.sign(payload, secret);
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const verify = (token) => {
  try {
    let isValid = false;
    jwt.verify(token, secret, (err, decoded) => {
      if (decoded) isValid = true;
    });
    return isValid;
  } catch (err) {
    console.log(err);
    return false;
  }
};
