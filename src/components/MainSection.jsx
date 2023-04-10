import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footLockerImg from '../assets/image/png/foot_locker.png'
import sideStepImg from '../assets/image/png/side_step.png'
import Slider from "react-slick";


const MainSection = () => {
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
                breakpoint: 8000,
                settings:"unslick",
            },
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
        <section>
            <Container>
                <h2 className='fs_2xl fw-semibold ff_poppins mt-5'>You can buy the Nike Air Max 97 Men's Shoe - White here:</h2>

                <Slider {...settings} className='d-flex row'>
                    <Col className='py-5 mb-5'>
                        <div className="cards_shadow mx-2">
                            <div className="footlocker_img_border d-flex justify-content-center p-3">
                                <img className="w-75" src={footLockerImg} alt="footLockerImg" />
                            </div>
                            <div className='py-3 px-2'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center my-2">
                                        <p className='fs_sm fw-normal ff_poppins mb-0'>Price:</p>
                                        <p className='fs_lg fw-semibold ff_poppins mb-0 ms-3'>€179,99</p>
                                    </div>
                                    <a className='fs_xsm fw-normal ff_poppins text-white bestPrice_btn' href="#">Best Price</a>
                                </div>
                                <p className='fs_sm fw-normal ff_poppins mb-2'>Size:</p>
                                <div className='d-flex align-items-center justify-content-around'>
                                    <button className='size_btn fs_sm ff_poppins text-black'>41</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>42</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>43</button>
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <button className='size_btn fs_sm ff_poppins text-black'>44</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>45</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>46</button>
                                </div>
                                <p className='fs_sm fw-normal ff_poppins mt-3 mb-0'>View this product as:</p>
                                <p className='fs_sm fw-semibold ff_poppins text-primary mb-0 mt-2'>Foot Locker NL</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='py-5 mb-5'>
                        <div className="cards_shadow mx-2">
                            <div className="footlocker_img_border d-flex justify-content-center p-3">
                                <img className="w-75" src={sideStepImg} alt="footLockerImg" />
                            </div>
                            <div className='py-3 px-2'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center my-2">
                                        <p className='fs_sm fw-normal ff_poppins mb-0'>Price:</p>
                                        <p className='fs_lg fw-semibold ff_poppins mb-0 ms-3'>€179,99</p>
                                    </div>
                                    <a className='fs_xsm fw-normal ff_poppins text-white bestPrice_btn' href="#">Best Price</a>
                                </div>
                                <p className='fs_sm fw-normal ff_poppins mb-2'>Size:</p>
                                <div className='d-flex align-items-center justify-content-around'>
                                    <button className='size_btn fs_sm ff_poppins text-black'>41</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>42</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>43</button>
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <button className='size_btn fs_sm ff_poppins text-black'>44</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>45</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>46</button>
                                </div>
                                <p className='fs_sm fw-normal ff_poppins mt-3 mb-0'>View this product as:</p>
                                <p className='fs_sm fw-semibold ff_poppins text-primary mb-0 mt-2'>Foot Locker NL</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='py-5 mb-5'>
                        <div className="cards_shadow mx-2">
                            <div className="footlocker_img_border d-flex justify-content-center p-3">
                                <img className="w-75" src={footLockerImg} alt="footLockerImg" />
                            </div>
                            <div className='py-3 px-2'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center my-2">
                                        <p className='fs_sm fw-normal ff_poppins mb-0'>Price:</p>
                                        <p className='fs_lg fw-semibold ff_poppins mb-0 ms-3'>€179,99</p>
                                    </div>
                                    <a className='fs_xsm fw-normal ff_poppins text-white bestPrice_btn' href="#">Best Price</a>
                                </div>
                                <p className='fs_sm fw-normal ff_poppins mb-2'>Size:</p>
                                <div className='d-flex align-items-center justify-content-around'>
                                    <button className='size_btn fs_sm ff_poppins text-black'>41</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>42</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>43</button>
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <button className='size_btn fs_sm ff_poppins text-black'>44</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>45</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>46</button>
                                </div>
                                <p className='fs_sm fw-normal ff_poppins mt-3 mb-0'>View this product as:</p>
                                <p className='fs_sm fw-semibold ff_poppins text-primary mb-0 mt-2'>Foot Locker NL</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='py-5 mb-5'>
                        <div className="cards_shadow mx-2">
                            <div className="footlocker_img_border d-flex justify-content-center p-3">
                                <img className="w-75" src={sideStepImg} alt="footLockerImg" />
                            </div>
                            <div className='py-3 px-2'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center my-2">
                                        <p className='fs_sm fw-normal ff_poppins mb-0'>Price:</p>
                                        <p className='fs_lg fw-semibold ff_poppins mb-0 ms-3'>€179,99</p>
                                    </div>
                                    <a className='fs_xsm fw-normal ff_poppins text-white bestPrice_btn' href="#">Best Price</a>
                                </div>
                                <p className='fs_sm fw-normal ff_poppins mb-2'>Size:</p>
                                <div className='d-flex align-items-center justify-content-around'>
                                    <button className='size_btn fs_sm ff_poppins text-black'>41</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>42</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>43</button>
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <button className='size_btn fs_sm ff_poppins text-black'>44</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>45</button>
                                    <button className='size_btn fs_sm ff_poppins text-black'>46</button>
                                </div>
                                <p className='fs_sm fw-normal ff_poppins mt-3 mb-0'>View this product as:</p>
                                <p className='fs_sm fw-semibold ff_poppins text-primary mb-0 mt-2'>Foot Locker NL</p>
                            </div>
                        </div>
                    </Col>
                </Slider>
            </Container>
        </section>
    )
}

export default MainSection