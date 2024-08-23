import donationBlogPlaceholder from "../models/donationBlogModel.js";
// Controller for donation
export const donationBlogCreate = async (req, res) => {
    try {
        // Your Code Here
        const reqBody=req.body;
        const data = await donationBlogPlaceholder.create(reqBody);
       return res.status(200).json({status:"success",data:data})
        
    } catch (error) {
        return res.status(400).json({ status: "fail", data: error });
    }
};

export const donationBlogData = async (req, res) => {
    try {
        const data = await donationBlogPlaceholder.find();
        return res.status(200).json({ status: "success", data: data });
    } catch (error) {
        return res.status(400).json({ status: "fail", data: error });
    }
};
export const donationBlogByID = async (req, res) => {
    try {
        const data = await donationBlogPlaceholder.findById(req.params.id);
        if (!data) {
            return res.status(404).send({ message: 'Donation data by id not found' });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching donation card' });
    }
};



