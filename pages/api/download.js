var fs = require('fs');

export default async (req,res) => {

    const filePath = req.query.filename;     
    // filename only
    const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
    // set header
    res.setHeader("content-disposition", "attachment; filename="+fileName);
    //res.download(filePath);
    var filestream = fs.createReadStream(process.cwd()+filePath);
    filestream.pipe(res);

}