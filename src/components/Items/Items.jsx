import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Buttons"
import "./itemStyle.css"

function Item(product) {

    let urlDetail = `/detalle/${product.id}`;

    return (
        <div className="newCard">
            <div className="card-img">
                <img src={product.img} alt="Product img" />
            </div>
            <div className="cardDetail">
                <h2>{product.name}</h2>
                <p>{product.descripcion}</p>
                <h4 className="priceTag">$ {product.price}</h4>
                <Link to={urlDetail}>
            <Button>Ver más!</Button>
            </Link>
            </div>
            
        </div>
    );
}

export default Item;

