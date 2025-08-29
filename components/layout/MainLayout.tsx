'use client'

import React from 'react'
import MainHeader from './MainHeader'

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

        </>
    )
}

export default MainLayout