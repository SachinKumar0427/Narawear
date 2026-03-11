const multer = require("multer");
const path = require("path")
const Product = require("../Models/Product")


const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const randomString = Math.floor(Math.random() * 1000000).toString() + Date.now();
    cb(null, randomString + " - " + file.originalname)
  },
  destination: (req, file, cb) => {
    cb(null, path.join("./images"))
  }

})

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedMimeTypes.includes(file.mimetype)) {
    return cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'));
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
}).array('images', 5);



const createNewProduct = async (req, res, next) => {
  try {
    images = req.files.map(file => file.filename);
    const { title, description, price, sizes, quantity } = req.body;

    const newProduct = await Product.create({
      title,
      description,
      price,
      sizes,
      images,
      quantity
    });

    if (!newProduct) throw new Error("Could not create the product!")
    res.status(200).json({ newProduct })

  } catch (error) {
    next(error)
    
  }
}

    // Hum product ki Id se use find kar sakte h

exports.getOne = async(req, res, next)=>{
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if(!product) throw new Error("Could not find the product!")

    res.status(200).json({status: "OK", message: product});
  } catch (error) {
    next(error)
  }
}

exports.addOne = async (req, res, next) => {
  upload(req, res, err => {
    if (err) {
      return next(err)
    }
    createNewProduct(req, res, next)
  });
}
   
  // allProducts dek sakte h 

exports.getAll = async (Req, res, next) => {
  try {
    let allProducts = await Product.find().select("images title price").lean();

    res.status(200).json({
      stauts: "OK",
      message: allProducts
    });
  } catch (error) {
    next(error)
    console.log(error)
  }
}