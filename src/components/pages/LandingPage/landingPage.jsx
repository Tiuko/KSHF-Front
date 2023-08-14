import { Avatar, Box } from '@mui/material';
import React, { useLayoutEffect, useRef } from 'react';
import Typed from 'typed.js';
import './landingPage.css';
import image from '../../../assets/avatar.png';
import { Link } from 'react-router-dom';

const landingBoxStyles = {
    width: '50%',
    height: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

function LandingPage() {
  const mascottDescriptionRef = useRef(null);

  useLayoutEffect(() => {
    if (mascottDescriptionRef.current) {
        const typed = new Typed(mascottDescriptionRef.current, {
            strings: ["Salut, c'est Keep Score And Have Fun ...",
             "On vous permet de suivre et de contrôler les dépenses, d'établir des objectifs d'économies.",
             "En plus de cela, on vous offre des récompenses telles que des cadeaux et des points de fidélité pour vous encourager à économiser et à atteindre des objectifs financiers." 
            ],
            typeSpeed: 70,
            backSpeed: 30,
            backDelay: 1000,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }
  });
  return (
      <>
          <div className='landing_title'>Keep Score & Have Fun</div>
          <Box className='landing_box'>
              <Avatar className="mascott_avatar" alt='mascott' src={image} />
              <p className="mascott_description" ref={mascottDescriptionRef}></p>
              <div className='navigation_btn'>
                  <Link className='navigation_btn-link' to={'/signin'}>Sign In</Link>
                  <Link to={'/signup'}>Sign Up</Link>
              </div>
          </Box>
      </>
  );
}
export default LandingPage;