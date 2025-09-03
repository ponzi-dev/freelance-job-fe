import React from 'react'
import hero_bg from '@/assets/img/hero/hero-bg-2.jpeg'

const HeroStart = () => {
    return (
        <section
            className="hero-two position-relative overflow-hidden"
            style={{ background: `url(${hero_bg.src}) no-repeat center` }}
        >
            <div className="container">
                <div className="row align-items-center position-relative z-3">
                    <div className="col-12 col-xl-7">
                        <div>
                            <h1
                                className="hero-two-title text-white fw-bold mb-4"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-easing="linear"
                            >
                                Hire the best freelancers for any job, online.
                            </h1>
                            <p
                                className="text-white fs-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-easing="linear"
                            >
                                {`For optimal online freelancing hires, precisely outline
                                project requirements, select reputable <br />
                                platforms, and thoroughly vet candidates' profiles, ensuring a
                                seamless collaboration.`}
                            </p>
                            <div className="pt-5">
                                <form>
                                    <div
                                        className="hero-form-wrapper bg-white d-flex position-relative"
                                    >
                                        <div>
                                            <select className="form-select shadow-none">
                                                <option value="0" selected>All Categories</option>
                                                <option value="1">Animation</option>
                                                <option value="2">Web Design</option>
                                                <option value="3">Graphics</option>
                                            </select>
                                        </div>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                                placeholder="Search for any service..."
                                            />
                                            <button className="hero-form-btn position-absolute">
                                                <svg
                                                    width="19"
                                                    height="18"
                                                    viewBox="0 0 19 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                                                        stroke="#F2F2F2"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M18 17L14 13"
                                                        stroke="#F2F2F2"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-4 d-flex align-items-center gap-3">
                                <p className="text-white fs-6">Popular Search</p>
                                <div className="hero-search-tag d-flex gap-3 align-items-center">
                                    <span className="tag-item">Designer</span>
                                    <span className="tag-item">Developer</span>
                                    <span className="tag-item">Web</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-5 position-relative">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-easing="linear"
                        >
                            <img
                                src="assets/img/hero/hero-2-girl.png"
                                className="hero-two-img img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroStart