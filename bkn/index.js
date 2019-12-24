const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path =require("path");

const app = express();
app.use("/static", express.static(path.join(__dirname, "static")));

const up = multer({
    dest: "./ups/"
})

app.post("/up", up.single('file'), async(req,res) => {
    try {
        await sharp(req.file.path)
        .embed()
        .toFile(`./static/${req.file.originalname}`);

        fs.unlink(req.file.path, () => {
            res.json({ file: ` /static/${req.file.originalname}`})
        })
    }
    catch(err) {
        res.json(err);

    }

});

app.listen(3344, () => console.log("Running"))