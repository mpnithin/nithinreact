const multer= require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, 'images');
    },
    filename:(req,file,cb)=>{
        const {originalname} = file;
        cb(null,originalname)
    }
   });

   const upload= multer({ storage });
   module.exports=upload;