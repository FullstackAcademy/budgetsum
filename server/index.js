const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const db = require("./db");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dbStore = new SequelizeStore({ db: db });

// if (process.env.NODE_ENV === 'development') {
//   require('../secrets'); // this will mutate the process.env object with your secrets.
// }

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || "a wildly insecure secret",
    store: dbStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./auth"))
app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const port = process.env.PORT || 3000;

const startServer = async () => {
  await db.sync({force: true});
  await dbStore.sync();
  app.listen(port, () => {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
  });
};

startServer();


module.exports = app;











// const express = require("express");
// const morgan = require("morgan");
// const path = require("path");
// const compression = require('compression');
// //const db
// const session = require("express-session");
// const passport = require("passport");
// // const SequelizeStore = require("connect-session-sequelize")(session.Store);
// //const sessionStore = new SequelizeStore({ db });
// const PORT = process.env.PORT || 3000;

// const app = express();
// //const socketio = require("socket.io");


// const createApp = () => {
  // app.use(morgan("dev"));
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));

//   // app.use(express.static(path.join(__dirname, "..", "public")));


//   // app.use(compression())

//   // app.use(
//   //   session({
//   //     secret: process.env.SESSION_SECRET || 'hello, session',
//   //     store: sessionStore,
//   //     resave: false,
//   //     saveUninitialized: false
//   //   })
//   // )

// //   app.use(passport.initialize());
// //   app.use(passport.session())

// //   app.use('/auth', require('./auth'));
// //   app.use('/api'), require('./api')

// //   app.use((req, res, next) => {
// //     if (path.extname(req.path).length) {
// //       const err = new Error('Not Found')
// //       err.status = 404
// //       next(err)
// //     } else {
// //       next()
// //     }
// //   })

// //   app.use('*', (req, res) => {
// //     res.sendFile(path.join(__dirname, '..', 'public/index.html'))
// //   })

// //   app.use((err, req, res, next) => {
// //     console.error(err)
// //     console.error(err.stack)
// //     res.status(err.status || 500).send(err.message || 'Internal server error.')
// //   })

// // };


// const startListening = () => {

//   const server = app.listen(PORT, () =>
//     console.log(`Turning it up on port ${PORT}`)
//   )

//   // const io = socketio(server)
//   // require('./socket')(io)
// }

// //const syncDb = () => db.sync()

// async function bootApp() {
//   try {
//     await createApp()
//     await startListening()
//   } catch (err){
//     console.error(err)
//   }
//  // await sessionStore.sync()
//   //await syncDb()
// }
// // // This evaluates as true when this file is run directly from the command line,
// // i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// // It will evaluate false when this module is required by another module - for example,
// // if we wanted to require our app in a test spec
// if (require.main === module) {////////////////////////////////////////////////////////////////////////////////////////////////
//   bootApp()
// } else {
//   createApp()
// }
