import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";

//? Components
import Carousel from "../../components/Carousel";
import TrendingProducts from "../../components/TrendingProducts";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
import Contact from "../../components/Contact";

//? Styles
import "./index.scss";

const customStyles = {
  overlay: {
    position: "fixed",
    inset: "0px",
    animation: "fadeIn 1s ease both",
    background: "rgb(255 255 255 / 40%)",
    zIndex: "2",
    backdropFilter: "blur(20px)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "5px",
    boxShadow: "0 5px 30px 0 rgb(0 0 0 / 10%)",
    width: "40%",
  },
};

const Home = () => {
  const location = useLocation();
  const [success, setSuccess] = useState(false);
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    const getParameterByName = (name) => {
      const urlSearchParams = new URLSearchParams(location.search);
      return urlSearchParams.get(name);
    };

    const successParams = getParameterByName("success") === "true";
    const canceled = getParameterByName("canceled") === "true";

    if (successParams) {
      console.info("Checkout successful");
      setSuccess(true);
    } else if (canceled) {
      console.info("Checkout canceled");
      setCancel(true);
    }
  }, [location]);

  const closeModal = () => {
    setSuccess(false);
    setCancel(false);
  };

  const CheckoutModal = () => {
    return (
      <Modal
        isOpen={success || cancel}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="modal-content">
          <div className="top">
            <h2>Alert.</h2>
            <button className="close" onClick={closeModal}>
              ❌
            </button>
          </div>
          <hr />
          <div className="bottom">
            <span>
              You have {success && "completed"} {cancel && "cancelled"} your
              transaction.
            </span>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <div className="home">
      {(success || cancel) && <CheckoutModal />}
      <Carousel />
      <TrendingProducts type={"trending"} />
      <Categories />
      <FeaturedProducts type={"featured"} />
      <Contact />
    </div>
  );
};

export default Home;
