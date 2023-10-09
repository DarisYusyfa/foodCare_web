import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import DetailsDonate from './section/details.donate'
import InputDetails from './section/input.details'
import React from 'react'


export default function MoneyDonate() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto h-screen flex flex-row justify-center items-center gap-[78px]">
                <DetailsDonate />
                <InputDetails />
            </div>
            <Footer />
        </>
    )
}
