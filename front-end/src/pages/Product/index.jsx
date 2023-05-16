import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//? Functions
import useFetch from "../../hooks/useFetch";

//? Store
import { addToCart } from "../../redux/cartReducer";

//? Icons
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";

//? Styles
import "./index.scss";

const Product = () => {
  const productId = parseInt(useParams().id);
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const addToCartButton = quantity === 0 ? "add disabled" : "add";

  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  return (
    <div className="product">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        <img src="/img/oval.svg" alt="loding" />
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImage("img")}
              />
              {/* Enable this if all of the products have extra images */}
              {/* <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImage("img2")}
              /> */}
            </div>
            <div className="main-img">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImage]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">Php. {data?.attributes?.price}.00</span>
            <p>{data?.attributes?.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className={addToCartButton}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    price: data?.attributes?.price,
                    img: data?.attributes?.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <ShoppingCartRoundedIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <BalanceRoundedIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: Sweatshirt</span>
              <span>Tag: Sweatshhirt, Black</span>
            </div>
            <hr />
            <div className="details">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
