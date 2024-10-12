// pages/Products.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, removeProduct } from '../features/productSlice';

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  // State สำหรับฟอร์ม Input
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.description) {
      dispatch(addProduct({ 
        id: Date.now(), // ใช้ timestamp เป็น ID
        ...newProduct 
      }));
      setNewProduct({ id: '', name: '', price: '', description: '' }); // รีเซ็ตฟอร์ม
    }
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - {product.price}
            </Link>
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

{/* ฟอร์มเพิ่มสินค้า*/}
      <h2>Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          value={newProduct.name} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="price" 
          placeholder="Product Price" 
          value={newProduct.price} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="description" 
          placeholder="Product Description" 
          value={newProduct.description} 
          onChange={handleInputChange} 
          required 
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Products;
