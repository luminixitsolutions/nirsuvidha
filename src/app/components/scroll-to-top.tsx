'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ScrollToTop() {
    let [scroll,setScroll] = useState<boolean>(false)

    let scrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
      const handlerScroll = () => {
          const scrolled = window.scrollY;
          setScroll(scrolled > 50);
      };

      window.addEventListener('scroll', handlerScroll);
      return () => {
          window.removeEventListener('scroll', handlerScroll);
      };
  }, []);

  return (
    <>
     <Link id="back2Top" onClick={()=>scrollToTop()} className={`top-scroll ${scroll ? 'd-block' : 'd-none'}`}  title="Back to top" href="#"><i className="fa-solid fa-arrow-up" aria-hidden /></Link>   
    </>
  )
}
