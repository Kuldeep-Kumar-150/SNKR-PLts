import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import heroShoes from '../assets/image/png/hero-shoes.png'
import starGroups from '../assets/image/svg/starGroups.svg'
import shoes1 from '../assets/image/svg/hero_shoes_1.svg'
import shoes2 from '../assets/image/svg/hero_shoes_2.svg'
import shoes3 from '../assets/image/svg/hero_shoes_3.svg'
import shoes4 from '../assets/image/svg/hero_shoes_4.svg'
import shareIcon from '../assets/image/svg/shareIcon.svg'
import faceBook from '../assets/image/svg/facebook.svg'
import twitterIcon from '../assets/image/svg/twitter.svg'
import pinterestIcon from '../assets/image/svg/pinterest.svg'
import googleIcon from '../assets/image/svg/google.svg'

const Header = () => {
    const [plus, setplus] = useState(1)
    const [image, setimage] = useState(1)
    let minus = () => {
        if (plus === 1) {
            setplus(1);
        } else {
            setplus(plus - 1)
        }
    }
    return (
        <header className='my-5'>
            <Container>
                <Row className='align-items-center'>
                    <Col xl={6} data-aos="zoom-out">
                        <div className="bg_grey red_headershoes_width">
                            <img className={image === 2 ? "w-100 h-100 d-inline-block" : "d-none"} src={shoes1} alt="heroShoes" />
                            <img className={image === 1 ? "w-100 h-100 d-inline-block" : "d-none"} src={shoes2} alt="shoes" />
                            <img className={image === 3 ? "w-100 h-100 d-inline-block" : "d-none"} src={shoes3} alt="shoes" />
                            <img className={image === 4 ? "w-100 h-100 d-inline-block" : "d-none"} src={shoes4} alt="shoes" />
                        </div>
                        <Row className='mt-4'>
                            <Col xs={3}><img onClick={() => setimage(1)} className='crusor_pointer w-100' src={shoes2} alt="shoes" /></Col>
                            <Col xs={3}><img onClick={() => setimage(2)} className='crusor_pointer w-100' src={shoes1} alt="shoes" /></Col>
                            <Col xs={3}><img onClick={() => setimage(3)} className='crusor_pointer w-100' src={shoes3} alt="shoes" /></Col>
                            <Col xs={3}><img onClick={() => setimage(4)} className='crusor_pointer w-100' src={shoes4} alt="shoes" /></Col>
                        </Row>
                    </Col>

                    <Col xl={6} data-aos="zoom-out-up">
                        <div className=' ps-xl-4'>
                            <h1 className='fs_30 fw-semibold ff_poppins mt-4 mt-xl-0'>PREMIUM MENS SPORTS LATHER KEDS</h1>
                            <div className="d-flex align-items-center mt-3 mb-4">
                                <img src={starGroups} alt="starGroups" />
                                <p className='mb-0 fs_lg fw-normal ff_poppins text_lightblack'>( 5 Customer Review )</p>
                            </div>
                            <p className='mb-4 text_lightblack ff_poppins fs_lg fw-normal lineheight_30'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium </p>
                            <div className="d-flex align-items-center">
                                <p className='fs_lg fw-semibold ff_poppins mb-0'>Qty: </p>
                                <span className='d-flex align-items-center qty_btn mx-4 py-2'>
                                    <button onClick={(minus)} className='mb-0 fs_lg fw-normal text-black border-0 bg-transparent'>-</button>
                                    <p className='mb-0 px-3 ff_poppins fw-normal'>{plus}</p>
                                    <button onClick={() => setplus(plus + 1)} className='mb-0 fs_lg fw-normal text-black border-0 bg-transparent'>+</button>
                                </span>
                                <a className='add_cart_btn d-none d-sm-flex' href="#">Add to Cart</a>
                            </div>
                            <form>
                                <label className='fs_lg fw-semibold ff_poppins' htmlfor="cars">Size:</label>
                                <select className='size_option ms-4 mt-3' id="cars" name="cars">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </form>
                            <div className="d-flex align-items-center mt-3">
                                <p className='fs_lg fw-semibold ff_poppins mb-0'>Color:</p>
                                <div className='d-flex gap-2 ms-3'>
                                    <div className="crusor_pointer colors_box_border d-flex align-items-center justify-content-center"> <span className='colors_box1'></span></div>
                                    <div className="crusor_pointer colors_box_border d-flex align-items-center justify-content-center"> <span className='colors_box2'></span></div>
                                    <div className="crusor_pointer colors_box_border d-flex align-items-center justify-content-center"> <span className='colors_box3'></span></div>
                                    <div className="crusor_pointer colors_box_border d-flex align-items-center justify-content-center"> <span className='colors_box4'></span></div>
                                </div>
                            </div>
                            <a className='add_cart_btn d-inline-block mt-3 d-sm-none' href="#">Add to Cart</a>
                            <div className="d-flex align-items-center my-4">
                                <div className="d-flex align-items-center crusor_pointer">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M4.00977 0C2.07977 0 0.509766 1.57 0.509766 3.5C0.509766 5.08 1.56977 6.403 3.00977 6.837V13.997C3.00877 14.176 3.03677 15.778 4.18377 16.928C4.89177 17.64 5.83977 18 6.99977 18V20L10.9998 17L6.99977 14V16C5.17677 16 5.01577 14.466 5.00977 14V6.837C6.44977 6.403 7.50977 5.08 7.50977 3.5C7.50977 1.57 5.93877 0 4.00977 0ZM4.00977 5C3.18277 5 2.50977 4.327 2.50977 3.5C2.50977 2.673 3.18277 2 4.00977 2C4.83677 2 5.50977 2.673 5.50977 3.5C5.50977 4.327 4.83677 5 4.00977 5ZM17.0098 13.163V5.997C17.0048 4.391 15.9328 2 12.9998 2V0L8.99977 3L12.9998 6V4C14.8288 4 15.0008 5.539 15.0098 6V13.163C13.5698 13.597 12.5098 14.92 12.5098 16.5C12.5098 18.43 14.0798 20 16.0098 20C17.9398 20 19.5098 18.43 19.5098 16.5C19.5098 14.92 18.4498 13.597 17.0098 13.163ZM16.0098 18C15.1828 18 14.5098 17.327 14.5098 16.5C14.5098 15.673 15.1828 15 16.0098 15C16.8368 15 17.5098 15.673 17.5098 16.5C17.5098 17.327 16.8368 18 16.0098 18Z" fill="black" />
                                    </svg>
                                    <p className='mb-0 fs_sm fw-light ff_poppins ms-2'>Compare</p>
                                </div>
                                <div className="d-flex align-items-center ms-5 crusor_pointer">
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M10.5006 18.0258L10.1526 17.7358C2.67062 11.6458 0.640625 9.4998 0.640625 6.0198C0.640625 3.1198 2.96062 0.799805 5.86062 0.799805C8.23862 0.799805 9.57263 2.1338 10.5006 3.1778C11.4286 2.1338 12.7626 0.799805 15.1406 0.799805C18.0406 0.799805 20.3606 3.1198 20.3606 6.0198C20.3606 9.4998 18.3306 11.6458 10.8486 17.7358L10.5006 18.0258ZM5.86062 1.9598C3.59862 1.9598 1.80062 3.7578 1.80062 6.0198C1.80062 8.9778 3.65662 10.9498 10.5006 16.5178C17.3446 10.9498 19.2006 8.9778 19.2006 6.0198C19.2006 3.7578 17.4026 1.9598 15.1406 1.9598C13.1106 1.9598 12.0086 3.1778 11.1386 4.1638L10.5006 4.9178L9.86262 4.1638C8.99262 3.1778 7.89062 1.9598 5.86062 1.9598Z" fill="black" />
                                    </svg>
                                    <p className='mb-0 fs_sm fw-light ff_poppins ms-2'>Wishlist</p>
                                </div>
                            </div>
                            <div className="hr_line"></div>
                            <a className='me-3' href="#"><img className='mt-4 header_logo' src={shareIcon} alt="shareIcon" /></a>
                            <a className='mx-3' href="#"><img className='mt-4 header_logo' src={faceBook} alt="faceBook" /></a>
                            <a className='mx-3' href="#"><img className='mt-4 header_logo' src={twitterIcon} alt="twitterIcon" /></a>
                            <a className='mx-3' href="#"><img className='mt-4 header_logo' src={pinterestIcon} alt="pinterestIcon" /></a>
                            <a className='mx-3' href="#"><img className='mt-4 header_logo' src={googleIcon} alt="googleIcon" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header