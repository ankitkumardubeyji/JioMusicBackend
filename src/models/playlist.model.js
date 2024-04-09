import mongoose from "mongoose"



const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },

    description:{
        type:String,
        required:true,
    },

    thumbnail:{
        type:String,
        required:true 
    },

    songs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Song"
        }
    ],

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Playlist = mongoose.model("playlist",playlistSchema)

