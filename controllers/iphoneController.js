const { Iphone } = require('../models/iphoneModel');

let ipController = {
    addIp: async function (req, res) {
        try {
            let newIphone = new Iphone(req.body).save();
            res.status(200).json([new Iphone(req.body), 'added new iphone']); 
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateIp: async function (req, res) {
        try {
            let iphone = await Iphone.findById(req.params.id).updateOne({ $set: req.body });
            res.status(200).json([await Iphone.findById(req.params.id), 'Hello js']);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete 
    deleteIp: async function (req, res) {
        try {
            let iphone = await Iphone.findByIdAndDelete(req.params.id)
            res.status(200).json('Delete susscess');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteAllIp : async (req, res) => {
        try {
            await Iphone.deleteMany();
            res.status(200).json('Delete All susscess');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getIp: async function (req, res) {
        try {
            // const ip = await Iphone.find();
            res.status(200).json(await Iphone.find())
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = ipController;