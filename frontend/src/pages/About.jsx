import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/NewsletterBox'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever today is a people-led, tech-powered omnichannel retailer dedicated to helping people save money and live better, we have opened thousands of stores across the U.S. and internationally. </p>
        <p>In a world that's always changing, we believe we need to be willing to evolve while staying true to who we are. And we are. We innovate and change alongside our associates and customers in ways that align with our timeless values. By doing this, we help communities thrive and strengthen the world around us.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Forever's mission is to help people save money so they can live better." At its core, the company's mission statement encapsulates its commitment to affordability and improved quality of life for its customers.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Forever Assured is an assurance program offered by Forever to boost shoppers’ confidence. The program promises high-quality products and fast delivery services.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Forever has enabled millions of consumers, sellers, merchants, and small businesses to be a part of India's digital commerce revolution, with a registered customer base of more than 400 million, offering over 150 million products across 80+ categories.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer services:</b>
          <p className='text-gray-600'>The Forever Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About