import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At FOREVER, we believe fashion is more than just clothing—it’s an expression of identity, confidence, and story. Founded in [2019] in [INDIA], our journey began with a simple vision: to bring high-quality, thoughtfully designed pieces to individuals who want to look great and feel great</p>
        <p></p>
        <b className='text-gray-800'>Our Mission</b>
        <p>We strive to make style accessible, sustainable, and inspiring. By carefully selecting fabrics, embracing timeless designs, and working with ethical production partners, we create collections that you’ll love today and wear again and again. Every piece is crafted with the belief that fashion should be fun, empowering, and kind—to both people and planet.</p>
        </div>

      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We partner with artisans and factories that share our commitment to excellence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convineince:</b>
            <p className='text-gray-600'>From eco-friendly materials to packaging with purpose, we’re taking steps to reduce our footprint.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>We care about your shopping experience as much as we care about style. Our support team is always here to help with quick responses, easy returns, and hassle-free service—because your satisfaction comes first.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About