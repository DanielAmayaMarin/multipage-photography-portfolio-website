import React from 'react'
import {ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube} from 'react-icons/im'

const Socials = () => {
  return (
    <section className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li><a href="https://www.google.com" target='_blank'><ImFacebook /></a></li>
        <li><a href="https://www.google.com" target='_blank'><ImTwitter /></a></li>
        <li><a href="https://www.google.com" target='_blank'><ImPinterest /></a></li>
        <li><a href="https://www.google.com" target='_blank'><ImInstagram /></a></li>
        <li><a href="https://www.google.com" target='_blank'><ImYoutube /></a></li>
 
      </ul>
    </section>
  )
}

export default Socials