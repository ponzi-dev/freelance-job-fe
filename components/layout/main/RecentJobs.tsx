'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

const RecentJobs = () => {
    return (
        <section className="py-110">
            <div className="container">
                <div className="row mb-40 justify-content-between align-items-end">
                    <div className="col-md-auto">
                        <h2 className="fw-bold section-title">Recent Job Post</h2>
                        <p className="section-desc">Get some Inspirations from 86K+ skills</p>
                    </div>
                    <div className="col-md-auto position-relative mt-30 mt-md-0">
                        <div className="d-flex gap-3">
                            <button
                                className="recentJobPrev swiper-prev swiper-button-disabled"
                                tabIndex={-1}
                                aria-label="Previous slide"
                                aria-controls="swiper-wrapper-ee24ae7529fdc9ef"
                                aria-disabled="true"
                                disabled
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
                                className="recentJobNext swiper-next"
                                tabIndex={0}
                                aria-label="Next slide"
                                aria-controls="swiper-wrapper-ee24ae7529fdc9ef"
                                aria-disabled="false"
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
                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop
                    navigation={{
                        prevEl: '.recentJobPrev',
                        nextEl: '.recentJobNext',
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
                    className="swiper recentJob swiper-initialized swiper-horizontal swiper-backface-hidden"
                >
                    <SwiperSlide>
                        <div className="job-post bg-offWhite position-relative">
                            <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                <p className="job-type-badge-primary">Hourly</p>
                                <p className="job-type-badge-secondary">Urgent</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="job-post-icon">
                                    <img src="assets/img/job/1.svg" alt="" />
                                </div>
                                <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                <h3 className="job-post-title fw-semibold">
                                    <a href="job-details.html">
                                        Senior Sales and Marketing Executive
                                    </a>
                                </h3>
                                <a href="job-details.html" className="w-btn-primary-xl">
                                    Apply Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="job-post bg-offWhite position-relative">
                            <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                <p className="job-type-badge-primary">Hourly</p>
                                <p className="job-type-badge-secondary">Urgent</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="job-post-icon">
                                    <img src="assets/img/job/1.svg" alt="" />
                                </div>
                                <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                <h3 className="job-post-title fw-semibold">
                                    <a href="job-details.html">
                                        Senior Sales and Marketing Executive
                                    </a>
                                </h3>
                                <a href="job-details.html" className="w-btn-primary-xl">
                                    Apply Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="job-post bg-offWhite position-relative">
                            <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                <p className="job-type-badge-primary">Hourly</p>
                                <p className="job-type-badge-secondary">Urgent</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="job-post-icon">
                                    <img src="assets/img/job/1.svg" alt="" />
                                </div>
                                <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                <h3 className="job-post-title fw-semibold">
                                    <a href="job-details.html">
                                        Senior Sales and Marketing Executive
                                    </a>
                                </h3>
                                <a href="job-details.html" className="w-btn-primary-xl">
                                    Apply Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="job-post bg-offWhite position-relative">
                            <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                <p className="job-type-badge-primary">Hourly</p>
                                <p className="job-type-badge-secondary">Urgent</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="job-post-icon">
                                    <img src="assets/img/job/1.svg" alt="" />
                                </div>
                                <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                <h3 className="job-post-title fw-semibold">
                                    <a href="job-details.html">
                                        Senior Sales and Marketing Executive
                                    </a>
                                </h3>
                                <a href="job-details.html" className="w-btn-primary-xl">
                                    Apply Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="job-post bg-offWhite position-relative">
                            <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                <p className="job-type-badge-primary">Hourly</p>
                                <p className="job-type-badge-secondary">Urgent</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="job-post-icon">
                                    <img src="assets/img/job/1.svg" alt="" />
                                </div>
                                <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                <h3 className="job-post-title fw-semibold">
                                    <a href="job-details.html">
                                        Senior Sales and Marketing Executive
                                    </a>
                                </h3>
                                <a href="job-details.html" className="w-btn-primary-xl">
                                    Apply Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="job-post bg-offWhite position-relative">
                            <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                <p className="job-type-badge-primary">Hourly</p>
                                <p className="job-type-badge-secondary">Urgent</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="job-post-icon">
                                    <img src="assets/img/job/1.svg" alt="" />
                                </div>
                                <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                <h3 className="job-post-title fw-semibold">
                                    <a href="job-details.html">
                                        Senior Sales and Marketing Executive
                                    </a>
                                </h3>
                                <a href="job-details.html" className="w-btn-primary-xl">
                                    Apply Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>

    )
}

export default RecentJobs