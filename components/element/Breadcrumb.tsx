import React from 'react'
import banner_ from '@/assets/img/common/breadcrumb-bg.png'

const Breadcrumb = () => {
    return (
        <section className="w-breadcrumb-area" style={{
            background: `url(${banner_.src}) no-repeat
            center center/cover`
        }}

        >
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <div className="position-relative z-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                            <h2 className="section-title-light mb-2">Job Details</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb w-breadcrumb">
                                    <li className="breadcrumb-item"><a href="job-posts.html#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Job Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb