import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title='Cart' />
      <section className='cart-warpper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-75'>
                    <img src={watch} className='img-fluid' alt='watch' />
                  </div>
                  <div>
                    <p>HAAHAGAGG</p>
                    <p>agagag</p>
                    <p>ggffdd</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h6 className='price'>$ 600</h6>
                </div>
                <div className='cart-col-3'>
                  <div className='d-flex align-items-center gap-15'>
                    <input
                      className='form-control'
                      type='number'
                      min={1}
                      max={10}
                      name=''
                      id=''
                    />
                    <div>
                      <AiFillDelete className='text-danger' />
                    </div>
                  </div>
                </div>
                <div className='cart-col-4'>
                  <h6 className='price'>$ 600</h6>
                </div>
              </div>
            </div>
            <div className='col-12 py-2 mt-4'>
              <div className='d-flex justify-content-between align-items-baseline'>
                <Link to='/product' className='button'>
                  Continue To Shopping
                </Link>
                <div className='d-flex flex-column align-items-end'>
                  <h4>SubTotal: $ 1000</h4>
                  <p>Taxes and shipping calculated in checkout</p>
                  <Link to='/checkout' className='button'>
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
