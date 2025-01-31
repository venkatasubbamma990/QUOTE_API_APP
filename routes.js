const router = require("express").Router()
const uploader = require("./multer")
const cloudinary = require("./cloudinary")
const Quotes = require("./models/schema")
const bodyParser = require("body-parser");
router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }))

router.get("/data", async (req, res) => {
    try {
        const getdata = await Quotes.find().sort({Date:-1});
        res.json({
            result: getdata , 
            status : "success"
        })
    }
    catch (e) {
        res.json({
            status: "failed",
            message: e.message
        })
    }
})
router.post("/form", uploader.single('file'), async (req, res) => {
    console.log(req.body)
    try {
        const upload = await cloudinary.v2.uploader.upload(req.file.path);
        // console.log(upload)
        const data=await Quotes.insertMany({
            file: upload.secure_url,
            Author:req.body.Author,
            Description:req.body.Description,
            Likes:Math.ceil(Math.random()*1000),
            Date:Date.now()
        });
        // console.log(data)
        return res.json({
            success: true,
            result:data,
        });
    }
    catch (e) {
        return res.json({
            err: e.message
        });
    }
});


module.exports = router