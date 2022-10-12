const mongoose = require('mongoose');
const File = require('../models/Files');
const cloudinary = require('cloudinary');
const fs = require('fs');

cloudinary.config({ 
  cloud_name: 'djhdfdrld', 
  api_key: '122194797381583', 
  api_secret: 'CmKXKbZmy39O72i4zGaQKAnY9-8',
  secure: true
});

exports.addFile = async(req, res) => {
    try {
        const file = req.files.file;
        console.log(file)
        cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: 'avatar', width: 150, height: 150, crop: 'fill'
        }, async(err, result) => {
            if(err) throw err;
            console.log({result});
            const files = new File({
                cv: result.secure_url
            })
            files.save();
            return res.json("Send Successfully")
        })
    } catch (error) {
        
    }
}

exports.addFsc = async(req, res) => {
    const url = [];
    try {
        const file = req.files.file;
        const matric = req.files.matric;
        const fsc = req.files.fsc;
        await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: 'avatar', width: 150, height: 150, crop: 'fill'
        }, async(err, result) => {
            if(err) throw err;
            removeTmp(file.tempFilePath);
            console.log({result});
            url.push(result.secure_url)
        })

        await cloudinary.v2.uploader.upload(matric.tempFilePath, {
            folder: 'avatar', width: 150, height: 150, crop: 'fill'
        }, async(err, result) => {
            if(err) throw err;
            removeTmp(matric.tempFilePath);
            console.log({result});
            url.push(result.secure_url)
        })

        await cloudinary.v2.uploader.upload(fsc.tempFilePath, {
            folder: 'avatar', width: 150, height: 150, crop: 'fill'
        }, async(err, result) => {
            if(err) throw err;
            removeTmp(fsc.tempFilePath);
            console.log({result});
            await url.push(result.secure_url);
            console.log(url)
            const files = await new File({
            cv: url[0], matric: url[1], fsc: url[2]
            })
            files.save();
            res.json(files)
        })
        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.update = async(req, res) => {
    try {
        const {id, name, email} = req.body;
        console.log(id, name, email)
        await File.findOneAndUpdate({_id: id}, {name: name, email: email})
        res.json("Send Successfully")
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.viewApplicants = async(req, res) => {
    try {
        const data = await File.find();
        res.json(data);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if(err) throw err;
    })
}