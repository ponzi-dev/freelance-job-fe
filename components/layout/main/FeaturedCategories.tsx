'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

const FeaturedCategories = () => {
    return (
        <section className="bg-offWhite py-110">
            <div className="container">
                <div className="row mb-40 justify-content-between align-items-end">
                    <div className="col-md-auto">
                        <h2 className="fw-bold section-title">Featured Categories</h2>
                        <p className="section-desc">Get some Inspirations from 86K+ skills</p>
                    </div>
                    <div className="col-md-auto position-relative mt-30 mt-md-0">
                        <div className="d-flex gap-3">
                            <button
                                className="featurePrev swiper-prev"
                                tabIndex={0}
                                aria-label="Previous slide"
                                aria-controls="swiper-wrapper-38cf82a5d6ad2121"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5 8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </button>
                            <button
                                className="featureNext swiper-next"
                                tabIndex={0}
                                aria-label="Next slide"
                                aria-controls="swiper-wrapper-38cf82a5d6ad2121"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop
                        navigation={{
                            prevEl: '.featurePrev',
                            nextEl: '.featureNext',
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        autoplay={{
                            delay: 3000, // 3 giây đổi slide
                            disableOnInteraction: false, // vẫn chạy khi user bấm
                        }}
                        className="swiper featureCategory swiper-initialized swiper-horizontal swiper-backface-hidden"
                    >
                        <SwiperSlide >
                            <div className="feature-category-card bg-white">
                                <img src="assets/img/categories/5.svg" className="mb-4" alt="" />
                                <h3 className="feature-category-link fw-semibold">
                                    <a href="services.html">Sales &amp; Marketing</a>
                                </h3>
                                <p className="feature-category-desc fs-6">850 Skills</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="feature-category-card bg-white">
                                <img src="assets/img/categories/5.svg" className="mb-4" alt="" />
                                <h3 className="feature-category-link fw-semibold">
                                    <a href="services.html">Sales &amp; Marketing</a>
                                </h3>
                                <p className="feature-category-desc fs-6">850 Skills</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="feature-category-card bg-white">
                                <img src="assets/img/categories/5.svg" className="mb-4" alt="" />
                                <h3 className="feature-category-link fw-semibold">
                                    <a href="services.html">Sales &amp; Marketing</a>
                                </h3>
                                <p className="feature-category-desc fs-6">850 Skills</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="feature-category-card bg-white">
                                <img src="assets/img/categories/5.svg" className="mb-4" alt="" />
                                <h3 className="feature-category-link fw-semibold">
                                    <a href="services.html">Sales &amp; Marketing</a>
                                </h3>
                                <p className="feature-category-desc fs-6">850 Skills</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>

    )
}

export default FeaturedCategories