import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/image/svg/pageLogo.svg'
import navImage from '../assets/image/svg/navImage.svg'
// import Hamburger from 'hamburger-react'
const MyNavBar = () => {
    const [Nav, setNav] = useState(true)
    if (Nav) {
        document.body.style.overflow = "visible"
    }
    else {
        document.body.style.overflow = "hidden"
    }
    return (
        <section>
            <nav>
                <Container>
                    <div className="d-flex align-items-center justify-content-between py-3">
                        <a className='z_index_5' href="#"><img className='w-75' src={pageLogo} alt="pageLogo" /></a>
                        <img className='w-50 d-none d-sm-flex' src={navImage} alt="navImage" />
                        {/* <div className='z_index_5 d-lg-none' onClick={() => setNav(false)}>
                            <Hamburger />
                        </div> */}
                        <div onClick={() => setNav(!Nav)} className={Nav === true ? "menu_icon_1 d-lg-none z_index_5" : "menu_icon z_index_5"}>
                            <span className='menu_line'></span>
                            <span className='menu_line'></span>
                            <span className='menu_line'></span>
                        </div>
                    </div>
                    <div className="nav_shadow d-lg-none">
                        <div>
                            <ul className={Nav ? "py-lg-3 show_nav d-flex flex-column justify-content-center text-center" : " d-flex flex-column justify-content-center text-center hide_nav py-lg-3"}>
                                <li onClick={() => setNav(true)} className='my-3'><a href="#reviews">HOME</a></li>
                                <li onClick={() => setNav(true)} className='my-3'><a href="#reviews">SNEAKERS KOPEN</a></li>
                                <li onClick={() => setNav(true)} className='my-3'><a href="#reviews">INTERVIEWS</a></li>
                                <li onClick={() => setNav(true)} className='my-3'><a href="#reviews">SALE</a></li>
                                <li onClick={() => setNav(true)} className='my-3'><a href="#reviews">SNEAKER VAN DE DAG</a></li>
                                <li onClick={() => setNav(true)} className='my-3'><a href="#reviews">SNEAKER FORUM</a></li>
                                <li onClick={() => setNav(true)} className='my-3'><a href="#reviews">BLOG</a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
                <div className="nav_shadow py-lg-3 d-none d-lg-block">
                    <Container>
                        <ul className='p-0 m-0 d-none d-lg-flex align-items-center justify-content-end gap-3'>
                            <li><a className='position-relative' href="#">HOME</a></li>
                            <li><a className='position-relative' href="#">SNEAKERS KOPEN</a></li>
                            <li><a className='position-relative' href="#">INTERVIEWS</a></li>
                            <li><a className='position-relative' href="#">SALE</a></li>
                            <li><a className='position-relative' href="#">SNEAKER VAN DE DAG</a></li>
                            <li><a className='position-relative' href="#">SNEAKER FORUM</a></li>
                            <li><a className='position-relative' href="#">BLOG</a></li>
                        </ul>
                    </Container>
                </div>
            </nav>
        </section >
    )
}

export default MyNavBar