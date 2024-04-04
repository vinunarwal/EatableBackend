const { Products } = require('../models/productSchema')

const addProduct = async (req, res) => {
   try {
      const { name, price, description, type, status, discount, userId, rating, likes } = req.body;

      const newProduct = new Products({
         name,
         price,
         description,
         type,
         status,
         discount,
         userId,
         rating,
         likes,
      });

      await newProduct.save();

      res.status(201).json(
         {
            message: 'Product added successfully',
            product: newProduct
         }
      );
   } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ message: 'Internal server error' });
   }
};

const getProducts = async ( res) => {
   try {
      const products = await Products.find();
      res.status(200).json({ products });
   } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Internal server error' });
   }
};

const updateProduct = async (req, res) => {
   try {
      const productId = req.params.productId;
      const { name, price, description, type, status, discount, userId, rating, likes } = req.body;

      const updatedProduct = await Products.findByIdAndUpdate(productId, {
         name,
         price,
         description,
         type,
         status,
         discount,
         userId,
         rating,
         likes,
      },
         { new: true }); 

      if (!updatedProduct) {
         return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json({
         message: 'Product updated successfully',
         product: updatedProduct
      });
   } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Internal server error' });
   }
};

const deleteProduct = async (req, res) => {
   try {
      const productId = req.params.productId;
      const deletedProduct = await Products.findByIdAndDelete(productId);

      if (!deletedProduct) {
         return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json({
         message: 'Product deleted successfully',
         product: deletedProduct
      });
   } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Internal server error' });
   }
};

module.exports = { addProduct, getProducts, updateProduct, deleteProduct };

