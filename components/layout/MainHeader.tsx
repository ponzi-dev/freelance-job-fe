'use client'

import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LanguageSwitcher from '../element/LanguageSwitcher'

const MainHeader = () => {
    const [isSticky, setIsSticky] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={clsx('header-primary ', {
                sticky: isSticky,
                'header-transparent': pathname === '/',
            })}
        >
            <div className="container">
                <nav className="navbar navbar-expand-xl justify-content-between">
                    <Link href="/" className="d-flex align-items-center">
                        <img src="/assets/img/logo/logo-light.svg" alt="logo" />
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="d-block d-xl-none">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/assets/img/logo/logo-light.svg" alt="logo" />
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    href="/"
                                    className="nav-link"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    href="/job-posts"
                                    className="nav-link"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    Jobs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className="nav-link">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    href="/blogs"
                                    className="nav-link"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center gap-4 mt-4">
                            <div className="d-flex d-lg-none">
                                <Link href="/signin" className="header-btn">
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
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-right d-flex align-items-center gap-4">
                        <LanguageSwitcher />
                        <div className="align-items-center d-none d-lg-flex">
                            <Link href="/signin/freelancer" className="w-btn-secondary-lg">
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
                            </Link>
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
