import React from 'react'
import pageLogo from '../assets/image/svg/pageLogo.svg'
import { Container } from 'react-bootstrap'

const Preloader = () => {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none"
        document.body.classList.remove("overflow-hidden")
    }, 3000)
    return (
        <section className=''>
            <Container>
                <div className="preloader">
                    <div className="d-flex align-items-center justify-content-center preloader">
                        <div className="preloader_animation"><img className='z_index_5' src={pageLogo} alt="pageLogo" /></div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Preloader