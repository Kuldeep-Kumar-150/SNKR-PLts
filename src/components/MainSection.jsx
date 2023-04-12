import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footLockerImg from '../assets/image/png/foot_locker.png'
import sideStepImg from '../assets/image/png/side_step.png'


const MainSection = () => {
    return (
        <section className='mb-5 pt-lg-2'>
            <Container>
                <h2 className='fs_2xl fw-semibold ff_poppins mt-5'>You can buy the Nike Air Max 97 Men's Shoe - White here:</h2>
                <Row className='py-lg-5'>
                    <Col sm={6} lg={4} xl={3} className='mt-5 mt-lg-1' data-aos="zoom-out-down">
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
                                    <p className='fs_xsm fw-normal ff_poppins text-white bestPrice_btn mb-0'>Best Price</p>
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
                                <button className='fs_sm fw-semibold ff_poppins text-primary mb-0 mt-2 bg-transparent border-0'>Foot Locker NL</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='mt-5 mt-lg-1' data-aos="zoom-out-right">
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
                                    <p className='fs_xsm fw-normal ff_poppins text-white bestPrice_btn mb-0'>Best Price</p>
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
                                <button className='fs_sm fw-semibold ff_poppins text-primary mb-0 mt-2 bg-transparent border-0'>Foot Locker NL</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='mt-5 mt-lg-1' data-aos="zoom-out-left">
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
                                    <p className='fs_xsm fw-normal ff_poppins text-white bestPrice_btn mb-0'>Best Price</p>
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
                                <button className='fs_sm fw-semibold ff_poppins text-primary mb-0 mt-2 bg-transparent border-0'>Foot Locker NL</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='mt-5 mt-lg-1' data-aos="fade-up">
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
                                    <p className='fs_xsm fw-normal ff_poppins text-white bestPrice_btn mb-0'>Best Price</p>
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
                                <button className='fs_sm fw-semibold ff_poppins text-primary mb-0 mt-2 bg-transparent border-0'>Foot Locker NL</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default MainSection