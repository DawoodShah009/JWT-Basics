const jwt = require('jsonwebtoken')
const { UnAuthorisedError } = require('../error')
const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  // console.log(authHeader.startsWith('Bearer'))
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthorisedError('No token provided!!!')
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    const { id, username } = decoded

    req.user = { id, username }

    next()
  } catch (error) {
    throw new UnAuthorisedError('Not Authorised to access this route!!!')
  }
}

module.exports = authenticationMiddleware
