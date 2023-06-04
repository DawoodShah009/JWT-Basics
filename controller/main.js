const { BadRequestError } = require('../error')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const logIn = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new BadRequestError('Please provide username and password!')
  }
  const id = new Date().getDate()
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  res.status(StatusCodes.OK).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)

  res.status(StatusCodes.OK).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your lucky number: ${luckyNumber}`,
  })
}

module.exports = { logIn, dashboard }
