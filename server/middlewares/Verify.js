const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const authenticate = async (req, res, next) => {
    const publicKeyPath = path.join('./', 'keys', 'public_key.pem');
    const publicKey = fs.readFileSync(publicKeyPath, 'utf8');
    const token = req.header('Authorization');
    
    try {
        const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        next();
      } catch (error) {
        console.error('JWT verification failed:', error);
        res.json('Invalid Token')
      }
        
}

module.exports =authenticate;