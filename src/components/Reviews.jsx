import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Reviews = () => {
    const [first, setfirst] = useState(1)
    return (
        <section id='reviews'>
            <Container>
                <div>
                    <div className="overflow-scroll hidescrll_bar">
                        <div className="max_width_500 mb-2 d-flex align-items-start justify-content-md-evenly justify-content-lg-start">
                            <button className={first === 1 ? "description_btns color_pink position-relative fs_lg fw-normal ff_poppins border-0 bg-transparent me-4" : "border-0 bg-transparent me-4 fs_lg fw-normal ff_poppins"} onClick={() => setfirst(1)}>DESCRIPTION</button>
                            <button className={first === 2 ? "description_btns color_pink position-relative fs_lg fw-normal ff_poppins border-0 bg-transparent mx-4" : "border-0 bg-transparent mx-4 fs_lg fw-normal ff_poppins"} onClick={() => setfirst(2)}>ADDITIONAL INFORMATION</button>
                            <button className={first === 3 ? "description_btns color_pink position-relative fs_lg fw-normal ff_poppins border-0 bg-transparent mx-4" : "border-0 bg-transparent mx-4 fs_lg fw-normal ff_poppins"} onClick={() => setfirst(3)}>REVIEWS (1)</button>
                        </div>
                    </div>
                    <div className={first == 1 ? "d-flex" : "d-none"}>
                        <p className="fs_2sm fw-normal ff_poppins mt-4">Sed nec ultricies felis,
                            vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper,
                            in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in
                            vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit.
                            Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura </p>
                    </div>
                    <div className={first == 2 ? "d-flex" : "d-none"}>
                        <p className="fs_2sm fw-normal ff_poppins mt-4">Sed nec ultricies felis,
                            vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper,
                            in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula
                            vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit.
                            Etiam vel lectus tortor.</p>
                    </div>
                    <div className={first == 3 ? "d-flex" : "d-none"}>
                        <p className="fs_2sm fw-normal ff_poppins mt-4">Sed nec ultricies felis,
                            vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper,
                            in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula
                            vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus.
                            Morbi auctor vulputate hendrerit.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Reviews