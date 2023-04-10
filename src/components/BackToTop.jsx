import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import backToTop from '../assets/image/svg/back-to-top-.svg'

const BackToTop = () => {
    const [first, setfirst] = useState(true);
    const onTop = () => {
        document.documentElement.scrollTop = 0;
    };
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 200) {
            setfirst(false)
        }
        else {
            setfirst(true)
        }
    });
    return (
        <section>
            <Container>
                <div className='z-index-5'>
                    <img onClick={() => onTop()} className={first ? "d-none backtotop_btn" : "d-block backtotop_btn"} src={backToTop} alt="image" />
                </div>
            </Container>
        </section>
    )
}

export default BackToTop