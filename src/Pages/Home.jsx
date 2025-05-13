import React, { useState } from 'react'

import image1 from '../assets/Images/News.jpg'
import msg from '../assets/Images/message.jpg'
import self from '../assets/Images/sellf-image.jpeg'
import { CiInstagram } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import coffee from '../assets/Images/cofee.jpg'
import weather from '../assets/Images/weather.jpg'
import blog from '../assets/Images/blog.jpg'
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { PiFramerLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import resume from "../assets/Images/Resume10.pdf"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";






function Home() {
 const [openMenu , setMenu] = useState(false)
 
  return (
    <div>

    <section className=' h-screen md:h-screen md:bg-gradient-to-tr from-stone-900 to-stone-800 '>
        
        <div className=' home-screen h-screen md:h-screen flex flex-row relative justify-center items-center bg-cover bg-center ' >
          <div className='absolute z-10 top-0 md:hidden w-full h-16 bg-black items-center text-white flex justify-between p-3'>
              <div className='flex gap-2 slide-y'>
                <a href='www.instagram.com'><CiInstagram  size={20}/></a>
                <FaXTwitter size={20}/>
                <FaLinkedin size={20}/>
                <FaFacebookMessenger  size={20}/>
              </div>
              <div className='slide-y cursor-pointer' onClick={()=>{setMenu(!openMenu)}}>
                <GiHamburgerMenu size={20} />

              </div>
  
          </div>
          <div className={openMenu ?'absolute md:hidden h-[90vh] w-full z-30 bg-black top-16 right-0 slide-y' : 'hidden'}>
             <ul className=' text-white text-center mt-10 px-2'>
              <li className='text-2xl font-semibold border-b-[0.3px]  p-4 '><a href=''>Home</a></li>
              <li className='text-2xl font-semibold border-b-[0.3px]  p-4'><a href='#About'>About</a></li>
              <li className='text-2xl font-semibold border-b-[0.3px]  p-4'><a href='#portfolio'>Portfolio</a></li>
              <li className='text-2xl font-semibold border-b-[0.3px]  p-4'><a href='#Contact'>Contact</a></li>
            </ul>

            <div className='rounded-full w-16 h-16 opacity-50 bg-white ms-32 mt-24 text-center flex items-center justify-center' onClick={()=>{setMenu(!openMenu)}}><RxCross2 />
</div>
          </div>

          <div className='w-3/4 h-16 bg-black  hidden md:block absolute z-10 top-12 border-white border-solid border-2 left-44 slide-y '>
            <ul className='flex flex-row text-white justify-center items-center h-16 gap-10'>
              <a href="#"><li className='scale-100 hover:scale-110 hover:font-semibold cursor-pointer '>Home</li></a>
              <a href="#About"><li className='scale-100 hover:scale-110 hover:font-semibold cursor-pointer'>About</li></a>
              <a href='#portfolio'><li className='scale-100 hover:scale-110 hover:font-semibold cursor-pointer'>Portfolio</li></a>
              <a href='#Contact'><li className='scale-100 hover:scale-110 hover:font-semibold cursor-pointer'>Contact</li></a>
            </ul>
          </div>
          {/* <div className='h-screen absolute md:hidden '>
              <img src={self} className='h-screen'></img>
          </div> */}
          <div className='absolute animate-slider-y-reverse p-3 md:animate-slider-x z-10 w-full md:h-[19rem] md:w-[32rem] md:top-60 md:left-0  text-white flex flex-col bottom-16 justify-center'>
               <div className='text-red-600 text-lg font-semibold'> <p><span>-</span> Hello</p></div>
               <div className=' text-6xl md:text-6xl  font-semibold'>I'm Ram Babu, Full Stack Developer and a Web Designer</div>
               <div className='flex flex-row gap-8'>
                <button className='bg-indigo-600  w-full md:w-40 p-3 md:p-3  md:mt-10 mt-6 border-white border-solid border-2 inset-4 hover:bg-slate-100  hover:text-black' ><a href={resume} download='RamBabuResume'>Get My Resume </a></button>
                <button className='bg-slate-100 w-40  text-black p-2 mt-6 md:p-3 md:mt-10 inset-4 hidden md:inline-block hover:border-2 hover:inset-4 hover:border-white hover:bg-indigo-600 hover:text-white'><a href="#About">Read More</a></button>
               </div>
          </div>
          <div className='rounded-full w-10 h-10 md:h-16 md:w-16 bg-black text-white p-3 absolute bottom-0 flex justify-center items-center opacity-70 z-20 border-2 animate-bounce'> <FaArrowDown size={20}/>
</div>
          <div className=' h-screen top-0 md:h-[95vh] w-full md:w-1/2 md:bg-gradient-to-bl from-stone-900 to-stone-700 absolute right-0 md:opacity-90  opacity-50 bg-black'>
                <div className='hidden md:h-[95vh]  md:block'>
                <div className='md:h-[95vh] '>
                  <img src={self} className='h-[95vh] w-full '></img>
                </div>
                <div className='absolute h-52 bg-red-800 w-[3px] top-0 right-[7.3rem] slide-y '></div>
                <div className='absolute right-24 top-60 slide-y '>
                  
                  <div className='h-10 w-10 rounded-full text-white  mb-3 flex justify-center items-center bg-black hover:scale-125  '>
                  <FaXTwitter size={20}/>

                  </div>
                 
                  <div className='h-10 w-10 rounded-full text-white  mb-3 flex justify-center items-center bg-black hover:scale-125  '>
                    <FaLinkedin size={20}/>
                  </div>
                  <div className='h-10 w-10 rounded-full text-white  mb-3 flex justify-center items-center bg-black hover:scale-125 '>
                    <FaInstagram size={20}/>
                  </div>
      
               
                    <div className='h-10 w-10 rounded-full text-white  mb-3 flex justify-center items-center bg-black hover:scale-125  '>
                    <FaGithub size={20} />

                  </div>
                  
                </div>
                
                </div>
          </div>

        </div>
        

      </section>
      <section id='About' className=' md:h-[85vh] w-full p-4 bg-stone-100  relative'>

                <div className='w-64 h-24 md:h-24 flex flex-col justify-center md:absolute left-44 top-20  mt-4 md:mt-0 show-x border-b-2 border-red-900'>
                    <p className='text-8xl font-bold opacity-10 absolute '>02</p>
                    <p className='text-5xl font-bold absolute  '>About Me</p>
                    
                </div>
                <div className='md:absolute left-44 right-44 top-48 mt-4 md:mt-0 md:text-lg show-x md:mb-0 mb-4'>
                  <p>
                As a multidisciplinary creative, I blend design intuition with technical expertise to craft meaningful digital experiences. With a strong foundation in both visual design and software development, I approach projects from a holistic perspective—ensuring that every pixel serves a purpose and every line of code enhances the user experience.
                I thrive at the intersection of aesthetics and functionality, whether I'm designing intuitive interfaces or building responsive, scalable applications. My design work is rooted in usability and clarity, while my development skills allow me to bring ideas to life with clean, efficient code.
                Passionate about problem-solving and innovation, I enjoy collaborating with teams to turn complex challenges into elegant solutions. Whether it's branding, UI/UX, or full-stack development, I bring creativity, precision, and a user-first mindset to everything I do.
                </p>

                </div>
      </section>
      <section className=' h-[75vh] md:h-[95vh] bg-gradient-to-r from-stone-900 to-stone-800'>
        <div className='h-[75vh] md:h-[95vh] p-4 relative '>
        <div className='md:absolute md:h-[300px] md:w-[500px] top-28 left-44  text-white flex flex-col justify-center '>
        <p className='text-6xl line-height font-bold leading-[6rem] show-x'><span className='text-red-950 font-bold me-6'>|</span>Skills</p>
         <hr className='show-x'></hr>
          <ul className=' text-2xl md:text-3xl mt-8 show-x'>
            <li className='mb-4 '><span className='me-6'>-</span>Frontend Development</li>
            <li className='mb-4 '><span className='me-6'>-</span>Backend Development</li>
            <li className='mb-4 '><span className='me-6'>-</span>UI/UX Development</li>
            <li className='mb-4 '><span className='me-6'>-</span>Prototyping</li>
          </ul>
            
        </div>
        <div className='h-[90vh] w-1/2 bg-zinc-800 shadow-xl absolute top-0 right-0 hidden md:block '>
          <div className='text-white p-6  '>
            <IoLogoCss3 size={160} className='absolute left-[18rem] show-x'/>
            
            <FaReact  size={160} className='absolute right-[6rem] top-[7rem] show-x-delay'/>
            <RiNextjsFill size={160} className='absolute top-[7rem] left-16 show-x'/>
            <FaNodeJs size={160} className='absolute left-[18rem] bottom-8 show-x-delay'/>
            <FaFigma size={150}className='absolute  bottom-[10rem] right-[5rem] show-x' />
            <PiFramerLogoFill size={160} className='absolute bottom-[10rem] left-16 show-x-delay'/>
            <IoLogoJavascript size={150} className='absolute left-[18rem] top-[15rem] show-x'/>

          </div>
        </div>
        </div>
      </section>
      <section  id="portfolio"className='bg-stone-100   pb-56'>
        <div className='w-full p-4 show-x-delay'>
              <div className='w-64 h-24 mb-4 md:mb-0 md:h-24 flex flex-col justify-center md:ms-36 mt-10  border-b-2 border-red-900'>
                    <p className='text-8xl font-bold opacity-10 absolute '>03</p>
                    <p className='text-5xl font-bold absolute  '>Portfolio</p>

                </div>
          <div className='flex flex-col justify-center items-center mt-16'>
          <div className='md:flex  md:bg-black '>
            <div className='relative  text-white   contrast-125 mb-3 md:mb-0'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center z-20'>
                  <p className='text-2xl font-bold  '>News Website</p>
                  <p className='text-xl font-bold'>Frontend Development</p>
                  <p className='italic text-white flex justify-center items-center gap-2'>Tap to Visit <LuSquareArrowOutUpRight /></p>
                </div>
              </div>
              <a href='https://newsapp-ui.vercel.app/'><img src={image1} className=' rounded-xl md:rounded-none h-[18rem] md:h-[43rem] w-[41rem] transition  ease-in hover:sacle-110 brightness-50 hover:opacity-0'></img></a>
            </div>
            <div className='relative text-white contrast-125 mb-3 md:mb-0'>
              <div className='absolute inset-0 flex items-center justify-center '>
               <div className='text-center z-20'>
                  <p className='text-2xl font-bold  '>Coffee Website</p>
                  <p className='text-xl font-bold'>Full Stack Development</p>
                  <p className='italic text-white flex justify-center items-center gap-2'>Tap to Visit <LuSquareArrowOutUpRight /></p>
                </div>
              </div>
<a href='https://github.com/RamBabu072001/'> <img src={coffee} className='rounded-xl md:rounded-none h-[18rem] md:h-[43rem] w-[41rem] transition  ease-in hover:sacle-110 brightness-50 hover:opacity-0'></img></a>            </div>
          </div>
          <div className='md:flex  md:bg-black'>
          <div className='relative text-white contrast-125 mb-3 md:mb-0'>
              <div className='absolute inset-0 flex items-center justify-center'>
               <div className='text-center z-20'>
                  <p className='text-2xl font-bold  '>Weather Website</p>
                  <p className='text-xl font-bold'>Frontend Development</p>
                  <p className='italic text-white flex justify-center items-center gap-2'>Tap to Visit <LuSquareArrowOutUpRight /></p>
                </div>
              </div>
              <a href='https://weatherapp-ashen-one.vercel.app/'><img src={weather} className='rounded-xl md:rounded-none h-[18rem] md:h-[43rem] w-[41rem] transition  ease-in hover:sacle-110 brightness-50 hover:opacity-0'></img></a>
            </div>
            <div className='relative text-white contrast-125 mb-3 md:mb-0'>
              <div className='absolute inset-0 flex items-center justify-center'>
               <div className='text-center z-20'>
                  <p className='text-2xl font-bold'>Blog Website</p>
                  <p className='text-xl font-bold'>Full Stack Development</p>
                  <p className='italic text-white flex justify-center items-center gap-2'>Tap to Visit <LuSquareArrowOutUpRight /></p>
                </div>
              </div>
             <a href='https://github.com/RamBabu072001/Blog-Project.git'> <img src={blog} className=' rounded-xl md:rounded-none h-[18rem] md:h-[43rem] w-[41rem] transition ease-in hover:sacle-110 brightness-50 hover:opacity-0'></img></a>
            </div>
          </div>
       


          </div>
          <a href='https://github.com/RamBabu072001/'><button className='absolute w-[18rem] p-4 md:left-[40%] text-2xl text-white bg-gradient-to-r shadow-lg from-stone-900  to-stone-800 mt-16 flex justify-center items-center gap-2 hover:brightness-75'><FaGithub/>Visit my Github</button></a>
        </div>
      </section>

      <section id='Contact' className='h-[95vh] bg-gradient-to-r from-stone-900 to-stone-800  text-white' >
      <div className='h-[95vh] md:flex '>
        <div className='p-3 md:w-1/2'>
          <div className='w-full md:w-1/2 flex'>
            <div className='md:ms-44  md:mt-16'>
               <div className='w-64 flex flex-col justify-center border-b-2 border-red-900 '>
                    <p className='text-8xl font-bold opacity-10'>04</p>
                    <p className='text-5xl font-bold absolute '>Contact</p>
                   

                </div>
                <div className='w-64 mt-4 '>
                    <p>Contact me for interactive design and attractive website.
                      Available for freelancing and
                      Collaboration</p>
                </div>
               
               
                      </div>
                <div className=' md:mt-40 md:ms-16 hidden md:block'>
                  <p className='text-white text-xl w-40 font-bold'>Follow Me on</p>
                  <p className='flex gap-2 items-center'><span><CiInstagram size={20}></CiInstagram></span>InstaGram</p>
                  <p className='flex gap-2 items-center'><span><FaXTwitter size={20}></FaXTwitter></span>Twitter</p>
                  <p className='flex gap-2 items-center'><span><FaLinkedin size={20}></FaLinkedin></span>LinkedIn</p>
                
                </div>
             
              
        
        </div>  
        <div className=' w-full md:w-[22rem] md:ms-44 md:mt-16 mt-16'>
                
                <form className='w-full md:w-[20rem] flex flex-col gap-4'> 
                
                <h2 className='text-2xl  font-semibold'>Leave a message</h2>
                
                <input type='text' className='h-8 outline-none border-none rounded-sm p-2 '  placeholder='Name'></input>
              
                <input type='text' className='h-8 outline-none border-none rounded-sm p-2' placeholder='Email'></input>
                
                <textarea className='h-28 outline-none border-none rounded-sm p-2' placeholder='message'></textarea>
                <button className='bg-slate-100 text-black p-2 w-28 hover:border-2 hover:text-white hover:bg-indigo-600' >Submit</button>
                </form>
              </div> 
      </div>
      
          <div className='h-[90vh] w-1/2 bg-zinc-500 shadow-xl relative hidden md:block'>
            <div className='absolute bg-black w-[100%]'>
              <img src={msg} className='h-[90vh] w-[100%]'></img>
            </div>
              
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home