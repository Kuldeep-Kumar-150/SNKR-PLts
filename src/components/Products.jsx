import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import redShoes from '../assets/image/png/red_shoes.png'
import greyShoes from '../assets/image/png/grey-shoes.png'
import cartIcon from '../assets/image/svg/cart_icon.svg'
import starGroup2 from '../assets/image/svg/starGroups2.svg'
import Slider from "react-slick";

const Products = () => {
    const [btn, setbtn] = useState(0);
    var settings = {
        dots: false,
        infinite: true,
        speed: 900,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='py-lg-5'>
            <Container>
                <h3 className='fs_30 fw-semibold ff_poppins mb-4 mb-sm-5 mt-2'>RELATED PRODUCT</h3>
                <Slider {...settings}>
                    <Col>
                        <div className="products_cards_shadow crusor_pointer mx-2">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={redShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3 p-2 justify-content-between">
                                <div>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$70.00</span></p>
                                </div>
                                <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col>
                        <div className="products_cards_shadow crusor_pointer mx-2">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={greyShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3 p-2 justify-content-between">
                                <div>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$70.00</span></p>
                                </div>
                                <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col>
                        <div className="products_cards_shadow crusor_pointer mx-2">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={redShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3 p-2 justify-content-between">
                                <div>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$70.00</span></p>
                                </div>
                                <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col>
                        <div className="products_cards_shadow crusor_pointer mx-2">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={greyShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3 p-2 justify-content-between">
                                <div>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$70.00</span></p>
                                </div>
                                <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                </Slider>
            </Container>
            <Container>
                <Slider {...settings}>
                    <Col>
                        <div className="products_cards_shadow crusor_pointer mt-4 mx-2">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={redShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3 p-2 justify-content-between">
                                <div>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$70.00</span></p>
                                </div>
                                <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col>
                        <div className="products_cards_shadow crusor_pointer mt-4 mx-2">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={greyShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3 p-2 justify-content-between">
                                <div>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$70.00</span></p>
                                </div>
                                <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col>
                        <div className="products_cards_shadow crusor_pointer mt-4 mx-2">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={redShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3 p-2 justify-content-between">
                                <div>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$70.00</span></p>
                                </div>
                                <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col>
                        <div className="products_cards_shadow crusor_pointer mt-4 mx-2">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={greyShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3 p-2 justify-content-between">
                                <div>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$70.00</span></p>
                                </div>
                                <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                </Slider>
            </Container>
            <Container>
                <div className="d-flex align-items-center justify-content-end my-5">
                    <button onClick={() => setbtn(0)} className={btn === 0 ? "fs_xl fw-semibold ff_poppins border-0 me-2 active_page" : "fs_xl fw-semibold ff_poppins nexT_page_icon border-0 me-2"}>1</button>
                    <button onClick={() => setbtn(1)} className={btn === 1 ? "fs_xl fw-semibold ff_poppins border-0 me-2 active_page" : "fs_xl fw-semibold ff_poppins nexT_page_icon border-0 me-2"}>2</button>
                    <button onClick={() => setbtn(2)} className={btn === 2 ? "fs_xl fw-semibold ff_poppins border-0 me-2 active_page" : "fs_xl fw-semibold ff_poppins nexT_page_icon border-0 me-2"}>3</button>
                    <button onClick={() => setbtn(btn + 1)} className={btn === 2 ? "d-none" : "fs_ms fw-light ff_poppins nexT_icon"}>Next&gt;&gt;</button>
                </div>
            </Container>


        </section >
    )
}

export default Products