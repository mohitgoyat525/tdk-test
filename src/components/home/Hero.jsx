import React from 'react'
import Header from '../../common/Header'

const Hero = () => {
    return (
        <>
            <section className='bg-darkBlue'>
                <Header />
                <div className='bg-hero-image bg-no-repeat bg-center bg-cover h-[930px] max-sm:h-[603px]'>
                    <div className='container' >
                        <h1 className='text-white font-bold text-[61px] max-w-[1072px] mx-auto text-center max-xl:max-w-[753px] pt-[51px] max-xl:pt-[54px] leading-[83.08px] max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>Driving Transformation for Performance and Passion Within </h1>
                        <p className='text-[22px] font-normal leading-[29.96px] text-center text-white pt-[15px] max-sm:text-base max-xl:max-w-[548px] mx-auto max-xl:pt-[53px] max-md:pt-4 max-sm:pt-[14px]'>The future of electric mobility is here. TDK and NEOM McLaren Formula E</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero