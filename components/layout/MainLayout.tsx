'use client'

import React from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

interface Props {
    children: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
    return (
        <>
            <MainHeader />
            <main>
                {
                    children
                }
            </main>
            <MainFooter />
        </>
    )
}

export default MainLayout