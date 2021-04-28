import express from 'express'

var fs = require('fs');

export default async (req,res) => {

    const filePath = req.query.filename;     
    // filename only
    const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
    // set header
    res.setHeader("content-disposition", "attachment; filename="+fileName);
    //res.download(filePath);
    console.log(process.cwd());
    console.log(__dirname);
    var filestream = fs.createReadStream(filePath);
    filestream.pipe(res);

}