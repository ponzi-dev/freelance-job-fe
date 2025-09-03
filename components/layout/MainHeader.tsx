'use client'

import { clsx } from 'clsx'
import React, { useEffect, useState } from 'react'

const MainHeader = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={clsx("header-primary header-transparent", {
            "sticky": isSticky
        })}>
            <div className="container">
                <nav className="navbar navbar-expand-xl justify-content-between">
                    <a href="index.html">
                        <img src="assets/img/logo/logo-light.svg" alt="" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="d-block d-xl-none">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo-light.svg" alt="" />
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link "
                                    href="index.html#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    Home
                                </a>

                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link "
                                    href="index.html#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    Freelancer
                                </a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">
                                    About Us
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link "
                                    href="index.html#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    Blog
                                </a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center gap-4 mt-4">
                            <div className="d-flex d-lg-none">
                                <a href="signin.html" className="header-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={13}
                                        height={17}
                                        viewBox="0 0 13 17"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.5 7.55556C8.55134 7.55556 10.2143 5.86419 10.2143 3.77778C10.2143 1.69137 8.55134 0 6.5 0C4.44866 0 2.78571 1.69137 2.78571 3.77778C2.78571 5.86419 4.44866 7.55556 6.5 7.55556ZM6.5 17C10.0899 17 13 15.3086 13 13.2222C13 11.1358 10.0899 9.44444 6.5 9.44444C2.91015 9.44444 0 11.1358 0 13.2222C0 15.3086 2.91015 17 6.5 17Z"
                                            fill="white"
                                        />
                                    </svg>
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-right d-flex align-items-center gap-4">
                        <div className="header-dropdown d-none d-sm-flex gap-2 align-items-center">

                            <div className="d-flex align-items-center">
                                <svg
                                    className="text-lime-300 flex-shrink-0 mt-n2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.4881 2.14377C5.2365 2.77789 5.03173 3.54816 4.89336 4.41291C5.56283 4.35158 6.27016 4.31894 7.00002 4.31894C7.72988 4.31894 8.43721 4.35158 9.10668 4.41291C8.96831 3.54816 8.76354 2.77789 8.51194 2.14377C8.27012 1.53428 7.99547 1.07703 7.71771 0.780915C7.441 0.485938 7.1983 0.386864 7.00002 0.386864C6.80174 0.386864 6.55903 0.485938 6.28233 0.780915C6.00456 1.07703 5.72992 1.53428 5.4881 2.14377ZM4.50048 1.7455C4.18655 2.53672 3.94567 3.48985 3.79803 4.54354C3.07129 4.6516 2.40808 4.79577 1.83286 4.96975C1.16357 5.17217 0.583188 5.42386 0.158263 5.72771C0.104579 5.7661 0.0515911 5.80668 3.20909e-05 5.84945C0.469066 2.9266 2.6958 0.597519 5.55163 8.85086e-07C5.53747 0.0145331 5.52342 0.0292256 5.50949 0.0440711C5.10854 0.471503 4.77196 1.06123 4.50048 1.7455ZM8.4484 0C8.46257 0.0145325 8.47662 0.0292253 8.49055 0.0440711C8.8915 0.471503 9.22807 1.06123 9.49956 1.7455C9.81349 2.53672 10.0544 3.48985 10.202 4.54354C10.9287 4.6516 11.592 4.79577 12.1672 4.96975C12.8365 5.17217 13.4168 5.42386 13.8418 5.72772C13.8955 5.7661 13.9484 5.80668 14 5.84945C13.531 2.92661 11.3042 0.597517 8.4484 0ZM14 8.15034C13.9485 8.19312 13.8955 8.2337 13.8418 8.2721C13.4168 8.57595 12.8365 8.82764 12.1672 9.03007C11.592 9.20404 10.9287 9.34822 10.202 9.45627C10.0544 10.51 9.81349 11.4631 9.49956 12.2543C9.22807 12.9386 8.8915 13.5283 8.49055 13.9557C8.47655 13.9707 8.46243 13.9854 8.44819 14C11.3042 13.4026 13.5311 11.0733 14 8.15034ZM5.55185 14C5.53761 13.9854 5.52349 13.9707 5.50949 13.9557C5.10854 13.5283 4.77196 12.9386 4.50048 12.2543C4.18655 11.4631 3.94567 10.51 3.79803 9.45627C3.07129 9.34822 2.40808 9.20404 1.83286 9.03007C1.16357 8.82764 0.583188 8.57595 0.158263 8.2721C0.104568 8.2337 0.0515691 8.19312 0 8.15034C0.468976 11.0733 2.69584 13.4026 5.55185 14ZM2.13851 8.00291C2.58965 8.13936 3.10872 8.25764 3.68083 8.35255C3.64845 7.91282 3.63163 7.46069 3.63163 6.99991C3.63163 6.53912 3.64845 6.08699 3.68083 5.64727C3.10872 5.74218 2.58965 5.86046 2.13851 5.9969C1.52453 6.1826 1.0664 6.39307 0.773646 6.60242C0.467074 6.82164 0.440533 6.96373 0.440533 6.99991C0.440533 7.03608 0.467074 7.17818 0.773646 7.3974C1.0664 7.60674 1.52453 7.81721 2.13851 8.00291ZM4.69533 6.99991C4.69533 7.51552 4.71763 8.01627 4.75957 8.4965C5.45881 8.56879 6.21241 8.60849 7.00002 8.60849C7.78763 8.60849 8.54123 8.56879 9.24047 8.4965C9.28241 8.01627 9.3047 7.51552 9.3047 6.99991C9.3047 6.4843 9.28241 5.98354 9.24047 5.50331C8.54123 5.43102 7.78763 5.39133 7.00002 5.39133C6.21241 5.39133 5.45881 5.43102 4.75957 5.50331C4.71763 5.98354 4.69533 6.4843 4.69533 6.99991ZM5.4881 11.856C5.2365 11.2219 5.03173 10.4517 4.89336 9.58691C5.56283 9.64823 6.27016 9.68087 7.00002 9.68087C7.72988 9.68087 8.43721 9.64823 9.10668 9.58691C8.96831 10.4517 8.76354 11.2219 8.51194 11.856C8.27012 12.4655 7.99547 12.9228 7.71771 13.2189C7.441 13.5139 7.1983 13.613 7.00002 13.613C6.80174 13.613 6.55903 13.5139 6.28233 13.2189C6.00456 12.9228 5.72992 12.4655 5.4881 11.856ZM11.8615 8.00291C11.4104 8.13936 10.8913 8.25764 10.3192 8.35255C10.3516 7.91282 10.3684 7.46069 10.3684 6.99991C10.3684 6.53912 10.3516 6.08699 10.3192 5.64727C10.8913 5.74218 11.4104 5.86046 11.8615 5.9969C12.4755 6.1826 12.9336 6.39307 13.2264 6.60242C13.533 6.82164 13.5595 6.96373 13.5595 6.99991C13.5595 7.03609 13.533 7.17818 13.2264 7.3974C12.9336 7.60674 12.4755 7.81721 11.8615 8.00291Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <select
                                    id="language"
                                    className="select-dropdown border-0 shadow-none ps-1"
                                >
                                    <option value="">EN</option>
                                    <option value="">VI</option>
                                </select>
                            </div>
                        </div>
                        <div className="align-items-center d-none d-lg-flex">
                            <a href="signin.html" className="w-btn-secondary-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={13}
                                    height={17}
                                    viewBox="0 0 13 17"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.5 7.55556C8.55134 7.55556 10.2143 5.86419 10.2143 3.77778C10.2143 1.69137 8.55134 0 6.5 0C4.44866 0 2.78571 1.69137 2.78571 3.77778C2.78571 5.86419 4.44866 7.55556 6.5 7.55556ZM6.5 17C10.0899 17 13 15.3086 13 13.2222C13 11.1358 10.0899 9.44444 6.5 9.44444C2.91015 9.44444 0 11.1358 0 13.2222C0 15.3086 2.91015 17 6.5 17Z"
                                        fill="white"
                                    />
                                </svg>
                                Login
                            </a>
                        </div>
                        <button
                            className="navbar-toggler d-block d-xl-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span />
                        </button>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default MainHeader