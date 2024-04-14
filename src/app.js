import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()

/*
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true 
}))
*/

/*
const allowedOrigins = ['https://jio-music-frontend.vercel.app/'];
app.use(
  cors({
    origin: (origin, callback) => {
     
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error(`${origin} not allowed by cors`));
        }
    
    },
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);
*/
app.use(cors());

app.use(cors({
    origin: 'https://jio-music-frontend.vercel.app',
    credentials: true
}));
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from "./router/user.router.js"
import songRouter from "./router/song.router.js"
import followerRouter from "./router/follower.router.js"
import playlistRouter from "./router/playlist.router.js"


app.use('/api/v1/users',userRouter)
app.use('/api/v1/songs',songRouter)
app.use('/api/v1/follower',followerRouter)
app.use('/api/v1/playlist',playlistRouter)

export {app}

