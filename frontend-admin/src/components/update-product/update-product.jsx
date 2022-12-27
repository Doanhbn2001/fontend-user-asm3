import { useParams, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminAPI from '../../API/AdminAPI';
import './update-product.css';
import { Button } from 'reactstrap';

const UpdateProduct = () => {
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  const [category, setCategory] = useState('');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [img4, setImg4] = useState('');
  const [long_desc, setLongDesc] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [short_desc, setShortDesc] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await AdminAPI.getProduct(id);
      // console.log(response);
      if (response.data.error) {
        alert('Can not find this product');
        setRedirect(true);
      } else {
        const data = response.data.product;
        setCategory(data.category);
        setImg1(data.img1);
        setImg2(data.img2);
        setImg3(data.img3);
        setImg4(data.img4);
        setLongDesc(data.long_desc);
        setName(data.name);
        setPrice(data.price);
        setShortDesc(data.short_desc);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = () => {
    const product = {
      category: category,
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      long_desc: long_desc,
      short_desc: short_desc,
      name: name,
      prict: price,
    };
    const fetchData = async () => {
      const response = await AdminAPI.updateProduct(product, id);
      if (!response.data.ok) {
        alert('This product exits in carts!Can not edit this product! ');
      } else {
        alert('Updatae successfully!');
        setRedirect(true);
      }
    };
    fetchData();
  };
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className="main">
      <div className="title">Update Product</div>
      <div className="form-add">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(evt) => {
              setName(evt.target.value);
            }}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            value={category}
            onChange={(evt) => {
              setCategory(evt.target.value);
            }}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            value={price}
            onChange={(evt) => {
              setPrice(evt.target.value);
            }}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="long_desc">Long Desc</label>
          <input
            id="long_desc"
            name="long_desc"
            type="text"
            value={long_desc}
            onChange={(evt) => {
              setLongDesc(evt.target.value);
            }}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="short_desc">Short Desc</label>
          <input
            id="short_desc"
            name="short_desc"
            type="text"
            value={short_desc}
            onChange={(evt) => {
              setShortDesc(evt.target.value);
            }}
          ></input>
        </div>
        <img src={img1} className="img1" />
        <div className="input">
          <label htmlFor="img1">Image1</label>
          <input
            id="img1"
            name="img1"
            type="text"
            value={img1}
            onChange={(evt) => {
              setImg1(evt.target.value);
            }}
          ></input>
        </div>
        <img src={img2} className="img1" />
        <div className="input">
          <label htmlFor="img2">Image2</label>
          <input
            id="img2"
            name="img2"
            type="text"
            value={img2}
            onChange={(evt) => {
              setImg2(evt.target.value);
            }}
          ></input>
        </div>
        <img src={img3} className="img1" />
        <div className="input">
          <label htmlFor="img3">Image3</label>
          <input
            id="img3"
            name="img3"
            type="text"
            value={img3}
            onChange={(evt) => {
              setImg3(evt.target.value);
            }}
          ></input>
        </div>
        <img src={img4} className="img1" />
        <div className="input">
          <label htmlFor="img4">Image4</label>
          <input
            id="img4"
            name="img4"
            type="text"
            value={img4}
            onChange={(evt) => {
              setImg4(evt.target.value);
            }}
          ></input>
        </div>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Link to="/">
          <Button color="warning">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateProduct;
