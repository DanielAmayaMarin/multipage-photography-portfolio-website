import React from 'react'
import imagen from '../assets/about/woman.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={imagen} alt="" srcset="" />
          </div>
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p  className='mb-12 max-w-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nihil tempore accusantium placeat beatae eos veritatis reiciendis illum at rem dicta iste nam inventore omnis pariatur consectetur qui. Voluptate, ut?
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod hic consectetur animi libero cupiditate facilis iusto distinctio sunt vel est.
            </p>
            
            
            <Link className='btn mt-4' to={'/portfolio'}>
              Ver mis trabajos
            </Link>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About