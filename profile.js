import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true

    },
    username : {
        type: String,
        required:true,
        unique:true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]+$/.test(v); 
            },
            message: props => `${props.value} is not a valid username!`,
        },

    },
    password : {
        type: String,
        required:true,
        minlength:8,
        
    },
    image: {
        type: String,
        required: true
    },
    location : {
        type:String,
        required:true
    },
    seller:{
        type:Boolean,
        required:false,
        default:false
    }
},{
    timestamps: true
});
 const Profile = mongoose.model('Profile',profileSchema);

export default Profile;
