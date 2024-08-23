import mongoose from 'mongoose';
const donationSchema = new mongoose.Schema(
    {
       
          title: { type: String},
          Date: { type: String},
          Donate: { type: String},
          Total_Donate: { type: String},
          img: { type: String},
        
    },
    { timestamps: true, versionKey: false }
);

const donationPlaceholder = mongoose.model('donationPlaceholder', donationSchema);

export default donationPlaceholder;
