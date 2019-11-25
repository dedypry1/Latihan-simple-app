import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context'

class Product extends Component {
    render() {
        const {id,title,img,price,incart}= this.props.product;
        return (
            <ProductWrraper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log('clicked')}>
                        <Link to="/details">
                        <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={incart ? true : false}
                            onClick={() =>{
                                console.log('add to cart')
                            }}
                        />\{incart ? (
                            <p className="text-capitalize mb-0" disabled>{""} in cart</p>
                        ):(
                            <i className="fas fa-cart-plus"></i>
                        )}
                    </div>
                </div>
            </ProductWrraper>
        );
    }
}

export default Product;

const ProductWrraper = styled.div``;