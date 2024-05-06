import { Router } from "express";

import { getAllSongs, getYourSongs, publishSong,getEverySong } from "../controllers/song.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {upload} from "../middleware/multer.middleware.js"



const router = Router()


router.use(verifyJWT)
router
    .route("/")
 
    .post(
        upload.fields([
            {
                name: "songFile",
                maxCount: 1,
            },
            {
                name: "thumbnail",
                maxCount: 1,
            },
            
        ]),
        publishSong
    );

 router.route("/").get(getAllSongs);   
router.route("/every/song").get(getEverySong);
 router.route("/ys").get(getYourSongs);

export default router;
