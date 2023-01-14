import { HeartOutlined } from "@ant-design/icons";
import React from "react";
import { Post1, Post2 } from "../../assets/index";
import baseColors from "../../constants/colors";

function Product_cards({ data }) {
  const style = {
    card: {
      maxWidth: "350px",
      minWidth: "230px",
      height: "420px",
      minHeight: "auto",
      margin: "",
    },

    image_back: {
      maxWidth: "100%",
      minWidth: "auto",
      height: "55%",
      background: `${baseColors.darkColor}`,
    },

    image: {
      maxWidth: "100%",
      minWidth: "auto",
      height: "35vh",
      borderRadius: "none",
    },
    card_body: {
      minWidth: "auto",
      color: baseColors.darkTextColor,
    },
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 py-2">
      <div className="card" style={style.card} key={data?.key}>
        <img
          style={style.image}
          src={data?.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body p-0 m-0 row">
          <h6 className="card-title col-9 " style={style.card_body}>
            {data?.title}
          </h6>
          <span className="col-3 fs-4">
            <HeartOutlined style={style.card_body} />
          </span>
          <h5 className="card-text col-12 " style={style.card_body}>
            {data?.amount}
          </h5>
          <p className="card-text col-12 m-0">{data?.more}</p>
          <p className="card-text col-12">{data?.area}</p>
        </div>
      </div>
    </div>
  );
}
export default Product_cards;
