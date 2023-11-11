const jwt = require("jsonwebtoken");

const RefreshToken = require("../models/token");
 const ACCEESS_TOKEN_SECRET ="0595b285c92247cdeb9e41d7c4a0d47f8c785d6d01dfeb0b1820a1c07130bb927803cef49f1307712c39abacb7052ccc12356a904735b70d19ce3e3e7b2c1300"
 const REFRESH_TOKEN_SECRET ="829b1d1851fa3685e9327fd1d0e5a384e372ea8eecd85f18e0cb72be4e9ab518d439626681b114b049c175d3d151a734b97ce1f0a569d4d682ccceeeb1ec72de"
class JWTService {
  // sigin access token
  static signAccessToken(payload, expiryTime) {
    return jwt.sign(payload, ACCEESS_TOKEN_SECRET, { expiresIn: expiryTime });
  }
  //  sigin refresh token
  static signRefreshToken(payload, expiryTime) {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: expiryTime });
  }
  //   verify access token
  static verifyAccessToken(token) {
    return jwt.verify(token, ACCEESS_TOKEN_SECRET);
  }
  //  verify refresh token
  static verifyRefreshToken(token) {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
  }
  

}
module.exports = JWTService;
