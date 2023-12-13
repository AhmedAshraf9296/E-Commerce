import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://gcshopeg.com/cdn/shop/files/6_e23d3f92-8555-4470-a5ad-185b6692633a.jpg?v=1682861076&width=1200",
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title='Product Name' />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='other-product-image d-flex flex-wrap gap-15'>
                <div>
                  <img
                    className='img-fluid'
                    src='https://gcshopeg.com/cdn/shop/files/6_e23d3f92-8555-4470-a5ad-185b6692633a.jpg?v=1682861076&width=1200'
                    alt='watch'
                  />
                </div>
                <div>
                  <img
                    className='img-fluid'
                    src='https://gcshopeg.com/cdn/shop/files/6_e23d3f92-8555-4470-a5ad-185b6692633a.jpg?v=1682861076&width=1200'
                    alt='watch'
                  />
                </div>
                <div>
                  <img
                    className='img-fluid'
                    src='https://gcshopeg.com/cdn/shop/files/6_e23d3f92-8555-4470-a5ad-185b6692633a.jpg?v=1682861076&width=1200'
                    alt='watch'
                  />
                </div>
                <div>
                  <img
                    className='img-fluid'
                    src='https://gcshopeg.com/cdn/shop/files/6_e23d3f92-8555-4470-a5ad-185b6692633a.jpg?v=1682861076&width=1200'
                    alt='watch'
                  />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>
                    saepe perspiciatis impedit, sequi vel voluptate recusandae.
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor='#ffd700'
                    />
                    <p className='mb-0 t-review'>( 2 Reviews )</p>
                  </div>
                  <a className='review-btn' href='#review'>
                    Write a Review
                  </a>
                </div>
                <div className=' py-3'>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type :</h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand :</h3>
                    <p className='product-data'>Havels</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Category :</h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags :</h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Availability :</h3>
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size :</h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        S
                      </span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        M
                      </span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        XL
                      </span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className='d-flex  gap-15 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color :</h3>
                    <Color />
                  </div>
                  <div className='d-flex gap-10 flex-row my-2'>
                    <h3 className='product-heading'>Quantity :</h3>
                    <div>
                      <input
                        type='number'
                        name=''
                        min={1}
                        max={10}
                        className='form-control'
                        style={{ width: "70px" }}
                        id=''
                      />
                    </div>
                    <div className='d-flex align-items-center gap-30 ms-5'>
                      <button className='button border-0'>Add To Cart</button>
                      <button to='/signup' className='button signup'>
                        Buy it Now
                      </button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <a href=''>
                        <TbGitCompare className='fs-5 m-2' /> Add To Compare
                      </a>
                    </div>
                    <div>
                      <a href=''>
                        <AiOutlineHeart className='fs-5 m-2' /> Add To Wishlist
                      </a>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column my-3'>
                    <h3 className='product-heading'>Shipping & Returns :</h3>
                    <p className='product-data'>
                      Free shipping and returns available on all orders! <br />
                      We ship all US domestic orders within
                      <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h3 className='product-heading'>Copy Product Link :</h3>
                    <a
                      href='javascript:void(0)'
                      onClick={() => {
                        copyToClipboard("imaaaaaaaaaaaaaaaaage");
                      }}
                    >
                      Copy Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit minima cumque porro veritatis veniam esse voluptate,
                  a ut. Veniam reprehenderit labore, mollitia autem dolor nulla
                  vitae possimus necessitatibus provident inventore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='reviews-wrapper  home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 id='review'>Reviews</h3>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex  align-items-center gap-10'>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor='#ffd700'
                      />
                      <p className='mb-0'>Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className='text-dark text-decoration-underline'
                        href=''
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className='review-form py-4'>
                  <h4>Write a Review</h4>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={true}
                        size={24}
                        activeColor='#ffd700'
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        placeholder='Comments'
                        id=''
                        cols='30'
                        rows='4'
                        className='w-100 form-control'
                      />
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className='reviews mt-3'>
                  <div className='review'>
                    <div className='d-flex gap-10 align-items-center'>
                      <h6 className='mb-0'>Navdeep</h6>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor='#ffd700'
                      />
                    </div>
                    <p className='mt-3'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sit reiciendis est pariatur unde incidunt facilis, sequi
                      magnam fugiat modi, reprehenderit illum facere iste, porro
                      ullam at a explicabo accusantium sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
