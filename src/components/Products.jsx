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
        speed: 800,
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
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 1200,
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
                                {/* <a href="#"><img className='cart_icon' src={cartIcon} alt="cart-icon" /></a> */}
                                <a href="#">
                                    <svg className='cart_icon' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745" />
                                    </svg>
                                </a>
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
                                <a href="#">
                                    <svg className='cart_icon' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745" />
                                    </svg>
                                </a>
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
                                <a href="#">
                                    <svg className='cart_icon' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745" />
                                    </svg>
                                </a>
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
                                <a href="#">
                                    <svg className='cart_icon' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745" />
                                    </svg>
                                </a>
                            </div>
                            <img className='ms-2 my-3' src={starGroup2} alt="star-group" />
                        </div>
                    </Col>
                </Slider>
            </Container>
            <Container>
                <Slider {...settings2}>
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
                                <a href="#">
                                    <svg className='cart_icon' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745" />
                                    </svg>
                                </a>
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
                                <a href="#">
                                    <svg className='cart_icon' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745" />
                                    </svg>
                                </a>
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
                                <a href="#">
                                    <svg className='cart_icon' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745" />
                                    </svg>
                                </a>
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
                                <a href="#">
                                    <svg className='cart_icon' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745" />
                                    </svg>
                                </a>
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