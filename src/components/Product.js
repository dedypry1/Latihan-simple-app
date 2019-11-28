import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context'

class Product extends Component {
    render() {
        const {id,title,img,price,inCart}= this.props.product;
        return (
            <ProductWrraper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log('clicked')}>
                        <Link to="/details">
                        <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false}
                            onClick={() =>{
                                console.log('add to cart')
                            }}
                            >
                            {inCart ? (
                            <p className="text-capitalize mb-0" disabled>{""} in cart</p>
                        ):(
                            <i className="fas fa-cart-plus">cart</i>
                        )}
                        </button>
                            
                    </div>
                     {/* product footer */}
                     <div className="card-footer d-flex justyfy-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">Rp.</span>{price}
                        </h5>

                     </div>
                </div>

               
            </ProductWrraper>
        );
    }
}

export default Product;

const ProductWrraper = styled.div`
.card{
    border-color : transparent;
    transition : all 1s linear;

}
.card-footer {
    background : transparent;
    border-top : transparent;
    transition : all 1s linear
}
&:hover{
    .card{
        border : 0.04rem solid rgba(0,0,0,0.2);
        box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background :rgba (247,247,247);
    }
}
.img-container {
    position : relative;
    overflow : hidden;
}
.card-img-top {
    transition : all 1s linear;
}
.img-container:hover, card-img-top{
    transform : scale (1.2);
}
.cart-btn{
    position : absolute;
    botoom : 0;
    right : 0;
    padding : 0.2rem 0.4rem;
    background : blue;
    border : none;
    margin-top : 170px;
    color : white;
    font-size : 1.4rem;
    border-radius : 0.5rem 0 0 0;
    // transition : all 1s linear;
    // transform : translate(100%,100%)
}
.img-container:hover, .cart-btn{
    transform : tranlate(0,0);
}
.cart-btn:hover {
    color : blue;
    cursor: pointer;
}
`;