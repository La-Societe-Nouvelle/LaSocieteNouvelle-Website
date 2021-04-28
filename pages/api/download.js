var fs = require('fs');

export default async (req,res) => {

    const filePath = req.query.filename;     
    // filename only
    const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
    // set header
    let test = fs.readFileSync('./public/documentation-api.md');
    
    res.setHeader("content-disposition", "attachment; filename="+fileName);
    //res.download(filePath);
    var filestream = fs.createReadStream(filePath);
    filestream.pipe(res);

}