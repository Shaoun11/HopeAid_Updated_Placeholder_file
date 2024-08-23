import mongoose from 'mongoose';
const donationBlogSchema = new mongoose.Schema(
    {
       
          title: { type: String},
          Date: { type: String},
          Image:{type:String},
          description:{type:String},
        
    },
    { timestamps: true, versionKey: false }
);

const donationBlogPlaceholder = mongoose.model('donationBlogPlaceholder', donationBlogSchema);

export default donationBlogPlaceholder;
