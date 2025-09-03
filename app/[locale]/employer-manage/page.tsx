import React from 'react'

const Dashboard = () => {
    return (
        <div className="d-flex flex-column gap-4">
            {/* Page Header */}
            <div className="d-flex gap-4 flex-column flex-md-row align-items-md-center justify-content-between">
                <div>
                    <h3 className="text-24 fw-bold text-dark-300 mb-2">Dashboard</h3>
                    <ul className="d-flex align-items-center gap-2">
                        <li className="text-dark-200 fs-6">Dashboard</li>
                    </ul>
                </div>
                <div>
                    <a href="buyer-create-job-post.html" className="w-btn-secondary-lg">
                        Post a Job
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
                        <div>
                            <h3 className="dashboard-widget-title fw-bold text-dark-300">$52</h3>
                            <p className="text-18 text-dark-200">Total Balance</p>
                        </div>
                        <div className="dashboard-widget-icon">
                            <img src="assets/img/dashboard/icon/icon-1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
                        <div>
                            <h3 className="dashboard-widget-title fw-bold text-dark-300">50</h3>
                            <p className="text-18 text-dark-200">Total Job</p>
                        </div>
                        <div className="dashboard-widget-icon">
                            <img src="assets/img/dashboard/icon/icon-2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
                        <div>
                            <h3 className="dashboard-widget-title fw-bold text-dark-300">35</h3>
                            <p className="text-18 text-dark-200">Complete Order</p>
                        </div>
                        <div className="dashboard-widget-icon">
                            <img src="assets/img/dashboard/icon/icon-3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
                        <div>
                            <h3 className="dashboard-widget-title fw-bold text-dark-300">02</h3>
                            <p className="text-18 text-dark-200">Active Order</p>
                        </div>
                        <div className="dashboard-widget-icon">
                            <img src="assets/img/dashboard/icon/icon-4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div>
                <h3 className="text-24 fw-bold text-dark-300 mb-2">Latest Jobs</h3>
                {/* Table */}
                <div className="overflow-x-auto">
                    <div className="w-100">
                        <table className="w-100 dashboard-table">
                            <thead className="pb-3">
                                <tr>
                                    <th scope="col" className="ps-4">
                                        Project Name
                                    </th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Days</th>
                                    <th scope="col" className="text-end pe-5">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-3 align-items-center project-name">
                                            <div className="rounded-3">
                                                <img src="assets/img/dashboard/projects/1.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="text-dark-200">
                                                    Software engineer for android Development
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-dark-200">$15</td>
                                    <td>
                                        <span className="status-badge pending"> Close </span>
                                    </td>
                                    <td className="text-dark-200">02</td>
                                    <td>
                                        <div className="d-flex justify-content-end gap-2">
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={26}
                                                    height={19}
                                                    viewBox="0 0 26 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.3187 6.66195C24.6716 8.08537 24.6716 10.248 23.3187 11.6714C21.0369 14.0721 17.1181 17.3333 12.6667 17.3333C8.21523 17.3333 4.29641 14.0721 2.01466 11.6714C0.661781 10.248 0.661781 8.08537 2.01466 6.66195C4.29641 4.26122 8.21523 1 12.6667 1C17.1181 1 21.0369 4.26122 23.3187 6.66195Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx="12.667"
                                                        cy="9.16699"
                                                        r="3.5"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-3 align-items-center project-name">
                                            <div className="rounded-3">
                                                <img src="assets/img/dashboard/projects/2.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="text-dark-200">
                                                    Senior Manager, Finance and Administration
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-dark-200">$15</td>
                                    <td>
                                        <span className="status-badge in-progress"> Active </span>
                                    </td>
                                    <td className="text-dark-200">02</td>
                                    <td>
                                        <div className="d-flex justify-content-end gap-2">
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={26}
                                                    height={19}
                                                    viewBox="0 0 26 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.3187 6.66195C24.6716 8.08537 24.6716 10.248 23.3187 11.6714C21.0369 14.0721 17.1181 17.3333 12.6667 17.3333C8.21523 17.3333 4.29641 14.0721 2.01466 11.6714C0.661781 10.248 0.661781 8.08537 2.01466 6.66195C4.29641 4.26122 8.21523 1 12.6667 1C17.1181 1 21.0369 4.26122 23.3187 6.66195Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx="12.667"
                                                        cy="9.16699"
                                                        r="3.5"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={22}
                                                    height={20}
                                                    viewBox="0 0 22 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11 6V7M11 10V14M10 1H12C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19H5C2.79086 19 1 17.2091 1 15V10C1 5.02944 5.02944 1 10 1Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-3 align-items-center project-name">
                                            <div className="rounded-3">
                                                <img src="assets/img/dashboard/projects/3.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="text-dark-200">
                                                    Web Developer cum Designer (for ngen LTD.)
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-dark-200">$15</td>
                                    <td>
                                        <span className="status-badge canceled"> Complete </span>
                                    </td>
                                    <td className="text-dark-200">02</td>
                                    <td>
                                        <div className="d-flex justify-content-end gap-2">
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={26}
                                                    height={19}
                                                    viewBox="0 0 26 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.3187 6.66195C24.6716 8.08537 24.6716 10.248 23.3187 11.6714C21.0369 14.0721 17.1181 17.3333 12.6667 17.3333C8.21523 17.3333 4.29641 14.0721 2.01466 11.6714C0.661781 10.248 0.661781 8.08537 2.01466 6.66195C4.29641 4.26122 8.21523 1 12.6667 1C17.1181 1 21.0369 4.26122 23.3187 6.66195Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx="12.667"
                                                        cy="9.16699"
                                                        r="3.5"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={22}
                                                    height={20}
                                                    viewBox="0 0 22 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11 6V7M11 10V14M10 1H12C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19H5C2.79086 19 1 17.2091 1 15V10C1 5.02944 5.02944 1 10 1Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-3 align-items-center project-name">
                                            <div className="rounded-3">
                                                <img src="assets/img/dashboard/projects/4.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="text-dark-200">
                                                    Jr. Software Project Coordinator (Onsite)
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-dark-200">$15</td>
                                    <td>
                                        <span className="status-badge canceled"> Complete </span>
                                    </td>
                                    <td className="text-dark-200">02</td>
                                    <td>
                                        <div className="d-flex justify-content-end gap-2">
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={26}
                                                    height={19}
                                                    viewBox="0 0 26 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.3187 6.66195C24.6716 8.08537 24.6716 10.248 23.3187 11.6714C21.0369 14.0721 17.1181 17.3333 12.6667 17.3333C8.21523 17.3333 4.29641 14.0721 2.01466 11.6714C0.661781 10.248 0.661781 8.08537 2.01466 6.66195C4.29641 4.26122 8.21523 1 12.6667 1C17.1181 1 21.0369 4.26122 23.3187 6.66195Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx="12.667"
                                                        cy="9.16699"
                                                        r="3.5"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={22}
                                                    height={20}
                                                    viewBox="0 0 22 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11 6V7M11 10V14M10 1H12C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19H5C2.79086 19 1 17.2091 1 15V10C1 5.02944 5.02944 1 10 1Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-3 align-items-center project-name">
                                            <div className="rounded-3">
                                                <img src="assets/img/dashboard/projects/5.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="text-dark-200">
                                                    Software engineer for android Development...
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-dark-200">$15</td>
                                    <td>
                                        <span className="status-badge canceled"> Complete </span>
                                    </td>
                                    <td className="text-dark-200">02</td>
                                    <td>
                                        <div className="d-flex justify-content-end gap-2">
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={26}
                                                    height={19}
                                                    viewBox="0 0 26 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.3187 6.66195C24.6716 8.08537 24.6716 10.248 23.3187 11.6714C21.0369 14.0721 17.1181 17.3333 12.6667 17.3333C8.21523 17.3333 4.29641 14.0721 2.01466 11.6714C0.661781 10.248 0.661781 8.08537 2.01466 6.66195C4.29641 4.26122 8.21523 1 12.6667 1C17.1181 1 21.0369 4.26122 23.3187 6.66195Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx="12.667"
                                                        cy="9.16699"
                                                        r="3.5"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={22}
                                                    height={20}
                                                    viewBox="0 0 22 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11 6V7M11 10V14M10 1H12C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19H5C2.79086 19 1 17.2091 1 15V10C1 5.02944 5.02944 1 10 1Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-3 align-items-center project-name">
                                            <div className="rounded-3">
                                                <img src="assets/img/dashboard/projects/6.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="text-dark-200">
                                                    Senior Manager, Finance and Administration
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-dark-200">$15</td>
                                    <td>
                                        <span className="status-badge canceled"> Complete </span>
                                    </td>
                                    <td className="text-dark-200">02</td>
                                    <td>
                                        <div className="d-flex justify-content-end gap-2">
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={22}
                                                    height={20}
                                                    viewBox="0 0 22 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11 6V7M11 10V14M10 1H12C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19H5C2.79086 19 1 17.2091 1 15V10C1 5.02944 5.02944 1 10 1Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-3 align-items-center project-name">
                                            <div className="rounded-3">
                                                <img src="assets/img/dashboard/projects/7.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="text-dark-200">
                                                    Brote - Cleanin Service Elementor Template Kit
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-dark-200">$15</td>
                                    <td>
                                        <span className="status-badge pending"> Closed </span>
                                    </td>
                                    <td className="text-dark-200">02</td>
                                    <td>
                                        <div className="d-flex justify-content-end gap-2">
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={26}
                                                    height={19}
                                                    viewBox="0 0 26 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.3187 6.66195C24.6716 8.08537 24.6716 10.248 23.3187 11.6714C21.0369 14.0721 17.1181 17.3333 12.6667 17.3333C8.21523 17.3333 4.29641 14.0721 2.01466 11.6714C0.661781 10.248 0.661781 8.08537 2.01466 6.66195C4.29641 4.26122 8.21523 1 12.6667 1C17.1181 1 21.0369 4.26122 23.3187 6.66195Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx="12.667"
                                                        cy="9.16699"
                                                        r="3.5"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="dashboard-action-btn">
                                                <svg
                                                    width={22}
                                                    height={20}
                                                    viewBox="0 0 22 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11 6V7M11 10V14M10 1H12C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19H5C2.79086 19 1 17.2091 1 15V10C1 5.02944 5.02944 1 10 1Z"
                                                        stroke="#5B5B5B"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard