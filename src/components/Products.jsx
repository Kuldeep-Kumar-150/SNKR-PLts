import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import redShoes from '../assets/image/png/red_shoes.png'
import greyShoes from '../assets/image/png/grey-shoes.png'
import cartIcon from '../assets/image/svg/cart_icon.svg'
import starGroup2 from '../assets/image/svg/starGroups2.svg'

const Products = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
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
                <h3 className='fs_30 fw-semibold ff_poppins mb-5'>RELATED PRODUCT</h3>
                <Row className='justify-content-center'>
                    <Col sm={6} md={4} lg={3}>
                        <div className="products_cards_shadow">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={redShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className='ms-2'>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$90.00</span></p>
                                </div>
                                <div className='ms-2'>
                                    <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                                </div>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className="products_cards_shadow mt-4 mt-sm-0">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={greyShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className='ms-2'>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$90.00</span></p>
                                </div>
                                <div className='ms-2'>
                                    <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                                </div>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className="products_cards_shadow mt-4 mt-md-0">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={redShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className='ms-2'>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$90.00</span></p>
                                </div>
                                <div className='ms-2'>
                                    <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                                </div>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className="products_cards_shadow mt-4 mt-lg-0">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={greyShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className='ms-2'>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$90.00</span></p>
                                </div>
                                <div className='ms-2'>
                                    <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                                </div>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className="products_cards_shadow mt-4">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={redShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className='ms-2'>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$90.00</span></p>
                                </div>
                                <div className='ms-2'>
                                    <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                                </div>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className="products_cards_shadow mt-4">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={greyShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className='ms-2'>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$90.00</span></p>
                                </div>
                                <div className='ms-2'>
                                    <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                                </div>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className="products_cards_shadow mt-4">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={redShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className='ms-2'>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$90.00</span></p>
                                </div>
                                <div className='ms-2'>
                                    <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                                </div>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className="products_cards_shadow mt-4">
                            <div className="position-relative overflow-hidden">
                                <img className='w-100' src={greyShoes} alt="shoes-images" />
                                <span className="offer_text bg_darkyellow d-inline-block">
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-5 py-1'>-10% OFF</p>
                                </span>
                                <span className='new_offer_text bg_lightblack d-inline-block'>
                                    <p className='text-white ff_poppins fs_2xsm fw-light mb-0 px-3 py-1'>NEW</p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className='ms-2'>
                                    <p className='fs_2sm fw_madium ff_poppins mb-1'>Quickiins Mens Shoes</p>
                                    <p className='fs_2sm fw_madium ff_poppins text_lightgrey mb-0'>$90.00 <span className='text-danger'>$90.00</span></p>
                                </div>
                                <div className='ms-2'>
                                    <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a>
                                </div>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                </Row>
                <div className="d-flex align-items-center justify-content-end my-5">
                    <button className='fs_xl fw-semibold ff_poppins border-0 nexT_page_icon me-2'>1</button>
                    <button className='fs_xl fw-semibold ff_poppins border-0 nexT_page_icon me-2'>2</button>
                    <button className='fs_xl fw-semibold ff_poppins border-0 nexT_page_icon me-2'>3</button>
                    <button className='fs_ms fw-light ff_poppins nexT_icon px-3'>Next&gt;&gt;</button>
                </div>
            </Container>
        </section >
    )
}

export default Products