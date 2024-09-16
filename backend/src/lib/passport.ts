import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { db } from "./db";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      callbackURL: "http://localhost:8000/api/v1/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      const name = profile.displayName;
      const email = profile.emails ? profile.emails[0].value : "";
      const avatar = profile.photos ? profile.photos[0].value : "";
      console.log(avatar);

      if (!email) {
        return cb(new Error("Email is required"));
      }
      if (!name) {
        return cb(new Error("Name is required"));
      }
      const user = await db.user.upsert({
        where: {
          email,
        },
        update: {},
        create: {
          email: email,
          name: name,
          avatar: avatar,
        },
      });

      return cb(null, user);
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj: any, done) {
  done(null, obj);
});
