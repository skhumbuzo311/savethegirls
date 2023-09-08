import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  const [isSideNavVisible, setSideNavVisible] = useState(false);
  const [isCloseBtnClicked, setCloseBtnClicked] = useState(false);
  return (
    <div className={`header-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="header-navbar-interactive">
        <Link to="/" className="header-navlink">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="header-image"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="header-desktop-menu">
          <nav className="header-links">
            <Link to="/educational-workshops" className="header-text">
              {props.Text}
            </Link>
            <Link to="/community-projects" className="header-navlink01">
              {props.text}
            </Link>
            <Link to="/team-activities" className="header-navlink02">
              {props.text1}
            </Link>
            <Link to="/mentorship-sessions" className="header-navlink03">
              {props.text2}
            </Link>
          </nav>
          <div className="header-buttons">
            <Link to="/" className="header-navlink04">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="header-burger-menu" onClick={() => setSideNavVisible(true)}>
          <svg viewBox="0 0 1024 1024" className="header-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className={isSideNavVisible ? 'header-mobile-menu-open' : isCloseBtnClicked ? 'header-mobile-menu-close' : 'header-mobile-menu'}>
          <div className="header-sidebar">
            <nav className="header-nav">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="header-image1"
              />
              <Link to="/educational-workshops" className="header-navlink05">
                {props.text4}
              </Link>
              <Link to="/community-projects" className="header-navlink06">
                {props.text5}
              </Link>
              <Link to="/mentorship-sessions" className="header-navlink07">
                {props.text6}
              </Link>
              <Link to="/team-activities" className="header-navlink08">
                {props.text7}
              </Link>
              <Link to="/founder" className="header-navlink09">
                {props.text71}
              </Link>
            </nav>
            <span className="header-text1" onClick={() => {
              setSideNavVisible(false)
              setCloseBtnClicked(true)
            }}>{props.text3}</span>
          </div>
        </div>
        {/*
        <div data-thq="thq-mobile-menu" className={isSideNavVisible ? 'home-mobile-menu-open' : isCloseBtnClicked ? 'home-mobile-menu-close' : 'home-mobile-menu'}>
            <div className="home-sidebar">
              <nav className="home-nav">
                <img
                  alt="avatar"
                  src="/icon-1500h.png"
                  className="home-image1"
                />
                <Link to="/software-development" className="home-text01 home-text">
                  Software Development
                </Link>
                <Link to="/outsourcing" className="home-text01 home-text">
                  Outsourcing
                </Link>
                <Link to="/ui-ux-design" className="home-text01 home-text">
                  UI &amp; UX Design
                </Link>
                <Link to="/consulting" className="home-text01 home-text">
                  Consulting
                </Link>
                <Link to="/partnership" className="home-text01 home-text">
                  Partnership
                </Link>
                <span className="home-text01 home-text" 
                  onClick={() => {
                  setSideNavVisible(false)
                  setCloseBtnClicked(true)
                }}>Home</span>
                <span />
                <Link to="/login" className="home-text01 home-text">
                  Logout
                </Link>
              </nav>
              <span className="home-text06" onClick={() => {
                setSideNavVisible(false)
                setCloseBtnClicked(true)
              }}>Close</span>
            </div>
          </div>
            */}
      </header>
    </div>
  )
}

Header.defaultProps = {
  text4: 'Educational Workshops',
  rootClassName: '',
  text71: 'Founder',
  image_src: '/assets/logo-square-transparent-200h.png',
  text5: 'Community Projects',
  text2: 'Mentorship Sessions',
  text1: 'Team Activities',
  image_src1: '/assets/logo-square-transparent-200h.png',
  image_alt: 'logo',
  image_alt1: 'image',
  text: 'Community Projects',
  text3: 'Close',
  text8: 'Founder',
  text6: 'Mentorship Sessions',
  Text: 'Educational Workshops',
  text7: 'Team Activities',
}

Header.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text71: PropTypes.string,
  image_src: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  text6: PropTypes.string,
  Text: PropTypes.string,
  text7: PropTypes.string,
}

export default Header
