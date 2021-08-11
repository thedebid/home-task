import react, { useState } from "react";
import httpClient from "./../../utils/httpClient";
function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(product);
    httpClient
      .POST("/product", product, true)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {" "}
      <div className="container mydiv">
        <div className="row">
          <h4>Add Product Form</h4>
          <form>
            <div className="form-group">
              <label htmlFor="inputTitle">Title</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                className="form-control"
                value={product.title}
                placeholder="Enter Product Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Descrition</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleChange}
                name="description"
                value={product.description}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="inputPrice">Price</label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={product.price}
                className="form-control"
                placeholder="Enter Product Price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Image</label>
              <br />
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddProduct;
