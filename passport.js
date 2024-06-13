const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config()
const db = require("./models")
const passport = require("passport")
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.URL_SERVER}/api/auth/google/callback`
  },
   async function(accessToken, refreshToken, profile, cb) {
        if(profile?.id) {
            await db.UserThird.findOrCreate({
                where: {
                    id: profile.id
                },
                defaults: {
                    id: profile.id,
                    email: profile.emails[0]?.value,
                    typeLogin: profile?.provider
                }
            })
        }
        return cb(null, profile) 
   
  }
));