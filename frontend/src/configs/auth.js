const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = 'ger-process@sugarhigh.ind.br'
const Senha = 'SH33ct125'

function authenticateUser(username, password, done) {
    if (username !== User) return done(null, false, { message: 'Usuário incorreto.' })
    if (password !== Senha) return done(null, false, { message: 'Senha incorreta.' })
    return done(null, username)
}

passport.use(new LocalStrategy(authenticateUser))

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((user, done) =>  done(null, user))
