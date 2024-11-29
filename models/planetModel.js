import mongoose from "mongoose";

const planetSchema = mongoose.Schema({
    planetname:{type:String,required:true},
    planetdescription:{type:String,required:true},
    planetmoons:{type:String,required:true},
    planetcolor:{type:String,required:true}
},
{timestamp:true}
)

const planetModel = mongoose.model('planets',planetSchema)

export default planetModel