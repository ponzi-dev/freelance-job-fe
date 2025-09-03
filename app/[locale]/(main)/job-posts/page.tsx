import React from 'react'
import banner_ from '@/assets/img/common/breadcrumb-bg.png'
const JobPosts = () => {
    return (
        <>
            <section className="w-breadcrumb-area" style={{
                background: `url(${banner_.src}) no-repeat
            center center/cover`
            }}

            >
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <div className="position-relative z-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                                <h2 className="section-title-light mb-2">Job Post</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb w-breadcrumb">
                                        <li className="breadcrumb-item"><a href="job-posts.html#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Job Post
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="job-posts py-110 bg-offWhite">
                <div className="container">
                    <div className="row gap-4 justify-content-between mb-40">
                        <div className="col-auto d-none d-lg-block">
                            <div className="bg-white job-post-filter py-2 px-2">
                                <form action="job-posts.html">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center job-post-input">
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.9 10.9L13 13M12.4 6.7C12.4 3.55198 9.84802 1 6.7 1C3.55198 1 1 3.55198 1 6.7C1 9.84802 3.55198 12.4 6.7 12.4C9.84802 12.4 12.4 9.84802 12.4 6.7Z"
                                                    stroke="#A7AEBA"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                                placeholder="Job Title or Keywords"
                                            />
                                        </div>

                                        <div className="d-flex align-items-center job-post-input">
                                            <select className="form-select shadow-none">
                                                <option value={1}>All Categories</option>
                                                <option value={1}>Design</option>
                                                <option value={1}>Development</option>
                                            </select>
                                        </div>
                                        <div className="ps-3 flex-shrink-0">
                                            <button className="job-filter-btn">Find Job</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade"
                            id="nav-grid"
                            role="tabpanel"
                            aria-labelledby="nav-grid-tab"
                            tabIndex={0}
                        >
                            <div className="row row-gap-4 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/1.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-posts.html#">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/2.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Senior Sales and Marketing Executive
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/3.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/3.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/4.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/4.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/1.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/2.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Web Developer cum Designer (for ngen LTD.)
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/3.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Jr. Software Project Coordinator (Onsite)
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                                <article>
                                    <div className="job-post bg-white position-relative">
                                        <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                                            <p className="job-type-badge-tertiary">Hourly</p>
                                            <p className="job-type-badge-secondary">Urgent</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="job-post-icon">
                                                <img src="assets/img/job/3.svg" alt="" />
                                            </div>
                                            <p className="job-post-subtitle fw-normal">$10 - $15</p>
                                            <h3 className="job-post-title fw-semibold">
                                                <a href="job-details.html">
                                                    Senior Manager, Finance and Administration
                                                </a>
                                            </h3>
                                            <a href="job-details.html" className="w-btn-primary-lg">
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
                                </article>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade active show"
                            id="nav-list"
                            role="tabpanel"
                            aria-labelledby="nav-list-tab"
                            tabIndex={0}
                        >
                            <div className="row">
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-1-1.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-2-2.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Senior Sales and Best Marketing Executive
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-3-3.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Senior Manager, Finance and Administration
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-4.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-5.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Senior Sales and Best Marketing Executive
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-6.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Senior Manager, Finance and Administration
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-7.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Software engineer for android Development...
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-8.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Senior Sales and Best Marketing Executive
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-xl-4 col-md-6 mb-4">
                                    <div className="job-post-horizontal align-items-center d-flex gap-3 bg-white">
                                        <div className="job-post-horizontal-img">
                                            <img src="assets/img/job/jp-9.png" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="mb-2 d-flex gap-3 align-items-center">
                                                <p className="job-type-badge-primary">Urgent</p>
                                                <h4 className="job-price-range fw-medium">$25-$30</h4>
                                            </div>
                                            <h3 className="job-post-horizontal-title fw-semibold mb-2">
                                                <a href="job-posts.html#">
                                                    Senior Manager, Finance and Administration
                                                </a>
                                            </h3>
                                            <a href="job-posts.html#" className="w-btn-link">
                                                Apply Now
                                                <svg
                                                    width={14}
                                                    height={11}
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 9.77393L13 5.53583M13 5.53583L9 1.29774M13 5.53583L1 5.53583"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default JobPosts