const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    // console.log(req.headers);

    // const token = req.headers.authorization.split(' ')[1]
    const token = req.headers.authorization
    console.log(token);

    if (!token) {
      return res.status(401).json({ message: 'Нет авторизации' })
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded
    console.log(req.user);
    next()

  } catch (e) {
    res.status(401).json({ message: 'Нет авторизации' })
  }
}