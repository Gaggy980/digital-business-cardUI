import React from 'react'
import picture from '../assets/ImageProfile.png'
import { HiMail } from 'react-icons/hi'
import { RiLinkedinBoxFill } from 'react-icons/ri'


export default function Info() {
  return (
    <div>
      <img className='pic' src={picture} width="317px" height='317px' />
      <div className='info-data-box'>
        <h1 className='full-name'>Igor Gagic</h1>
        <h5 className='profesion'>Frontend Developer</h5>
        <p className='web-site' href='/'>igorgagic.webpage</p>
        <div className='button-box'>
          <button className='btn-email'>
            <HiMail className='mail-icon' />
            <p>Email</p>
          </button>
          <button className='btn-linked'>
            <RiLinkedinBoxFill className='linked-icon' />
            <p>LinkedIn</p>
          </button>
        </div>
      </div>
    </div>
  )
}
