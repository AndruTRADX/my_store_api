const passport = require('passport')

const { localStrategy } = require('./strategies/local.stategy')
const { jwtStrategy } = require('./strategies/jwt.stategy')

passport.use(localStrategy)
passport.use(jwtStrategy)

