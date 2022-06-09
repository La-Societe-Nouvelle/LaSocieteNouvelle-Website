var fs = require('fs');

const path = require('path')

export default async (req,res) => {

    const filePath = req.query.filename;     
    // filename only
    const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
    // set header    
    res.setHeader("content-disposition", "attachment; filename="+fileName);
    
    var filestream = fs.createReadStream(filePath);
    filestream.pipe(res);

}