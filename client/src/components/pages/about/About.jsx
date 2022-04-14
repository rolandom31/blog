import React from 'react'
import './about.css'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'


export default function About() {
  return (
    <>
    <Header/>
    <div className='about'>
        <div className="aboutwrapper">
            <div className='titleLg'>Who Am I?</div>

                
                
                <div className='aboutText'>
                <img src="./images/me-b&n.jpeg" alt="" className='imgAbout'/>
                    My name is Rolando Mata, im a Software Engineer graduted on 2020 (yes, mid pandemic) from Tec de Monterrey,
                    after my graduation, I enrolled on a cybersecurity Mastertrack at ASU, and later switched back to Tec de Monterrey, after completing the Mastertrack, to enroll in a cybersecurity master's degree.
                    <br></br><br></br>
                    Regarding my professional experience, I did internships as a emerging tech research, where I worked closely with blockchain technology at Mostla, later I became a freelance web designer and then land
                    a job on a creative marketing agency called LionNet, also as a web designer. And now Im here, happy to be part of the ClickIt family.
                    <br></br><br></br>
                    In my spare time, I also volunteer as IT support at Postdata, a digital "women-powered" newspaper focused on local news of Monterrey.
                    You can also find my portfolio at <a href='https://www.rmata.dev'>this link</a>
                </div>
                
                
        </div>
        <Sidebar/>
    </div>
    
    
    </>
  )
}
