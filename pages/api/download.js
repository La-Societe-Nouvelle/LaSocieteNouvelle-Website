var fs = require('fs');

export default async (req,res) => {

    const filePath = req.query.filename;     
    console.log("checka");
    // filename only
    const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
    console.log("check0");
    // set header
    res.setHeader("content-disposition", "attachment; filename="+fileName);
    console.log("check");
    //res.download(filePath);
    var filestream = fs.createReadStream(filePath);
    filestream.pipe(res);

}