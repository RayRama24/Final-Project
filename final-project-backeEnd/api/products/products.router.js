const { createProducts, getProductById, getProduct, updateProduct, deleteProduct } = require("./products.controller");

const router = require("express").Router();

const multer = require("multer");
const { checkToken } = require("../../auth/token_validation");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "..//..//assets/");
  },
  fileName: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/", createProducts);
router.get("/", getProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
