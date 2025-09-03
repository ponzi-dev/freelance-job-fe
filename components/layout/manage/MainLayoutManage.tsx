'use client'

import React from 'react'
import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu'
import HeaderManage from './HeaderManage'


interface Props {
    children: React.ReactNode
}

const MainLayoutManage = ({ children }: Props) => {
    return (
        <>
            <div className="d-xl-flex">
                <div className="flex-grow-1 align-items-center position-relative">
                    <Sidebar />
                    <MobileMenu />
                    <HeaderManage />
                    <main className="dashboard-main min-vh-100">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default MainLayoutManage