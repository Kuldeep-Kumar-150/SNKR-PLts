import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageLogo from '../assets/image/svg/footer_logo.svg'
import fbGoogle from '../assets/image/svg/footer_google.svg'
import fbTwitter from '../assets/image/svg/footer_twitter.svg'
import fbFooter from '../assets/image/svg/footer_fb.svg'

const MyFooter = () => {
    return (
        <footer>
            <div className='bg-black mt-5 py-5'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <img className='' src={pageLogo} alt="logo" />
                            <p className='me-lg-5 fs_sm fw-normal ff_poppins text-white opacity-75'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. </p>
                            <button className='border-0 bg-transparent mt-4'><img className='footer_icon' src={fbFooter} alt="fbFooter" /></button>
                            <button className='border-0 bg-transparent mx-4'><img className='footer_icon' src={fbTwitter} alt="fbTwitter" /></button>
                            <button className='border-0 bg-transparent'><img className='footer_icon' src={fbGoogle} alt="fbGoogle" /></button>
                        </Col>
                        <Col lg={8} className='mt-5'>
                            <Row className='mt-lg-5'>
                                <Col sm={6} md={3}>
                                    <ul className='p-0 m-0'>
                                        <li className='fs_2sm fw-semibold ff_poppins text-white'>CUSTOM LINKS</li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipsum</a></li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipsum</a></li>
                                    </ul>
                                </Col>
                                <Col sm={6} md={3}>
                                    <ul className='p-0 m-0 mt-4 mt-sm-0'>
                                        <li className='fs_2sm fw-semibold ff_poppins text-white'>PRODUCTS</li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipum</a></li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipum</a></li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipum</a></li>
                                    </ul>
                                </Col>
                                <Col sm={6} md={3}>
                                    <ul className='p-0 m-0 mt-4 mt-md-0'>
                                        <li className='fs_2sm fw-semibold ff_poppins text-white'>OUR COMPANY</li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipum</a></li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipum</a></li>
                                    </ul>
                                </Col>
                                <Col sm={6} md={3}>
                                    <ul className='p-0 m-0 mt-4 mt-md-0'>
                                        <li className='fs_2sm fw-semibold ff_poppins text-white'>YOUR ACCOUNT</li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipum</a></li>
                                        <li className='my-2'><a className='position-relative' href="#">Lorem ipum</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg_dark py-3">
                <Container>
                    <p className='text-center fs_2sm fw-normal ff_poppins text-white opacity-75 mb-0'>© Copyright SNKRPLTS 2021. </p>
                </Container>
            </div>
        </footer >
    )
}

export default MyFooter