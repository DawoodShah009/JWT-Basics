const { StatusCodes } = require('http-status-codes')

const notFound = async (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: 'Route doen not exists!!!' })
}
module.exports = notFound
