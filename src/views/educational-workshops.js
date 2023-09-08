import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './educational-workshops.css'

const EducationalWorkshops = (props) => {
  React.useEffect(() => document.getElementById('educational-workshops-container').scrollIntoView(), [])
  return (
    <div className="educational-workshops-container" id="educational-workshops-container">
      <Helmet>
        <title>EducationalWorkshops - Save The Girls</title>
        <meta
          property="og:title"
          content="EducationalWorkshops - Save The Girls"
        />
      </Helmet>
      <Header></Header>
      <div className="educational-workshops-banner">
        <div className="educational-workshops-container1">
          <h1 className="educational-workshops-text">Educational Workshops</h1>
          <span className="educational-workshops-text1">
            Educational workshops provided by #SaveTheGirls empower young girls,
            fostering leadership, confidence, and skills crucial for their
            success while addressing issues like teenage pregnancy and
            gender-based violence.
          </span>
        </div>
      </div>
      <div className="educational-workshops-banner1">
        <h1 className="educational-workshops-text2">
          Empowering Through Education
        </h1>
        <span className="educational-workshops-text3">
          Educational workshops at #SaveTheGirls empower young girls by
          providing them with knowledge, skills, and resources to break
          barriers, fostering leadership, and building confidence.
        </span>
      </div>
      <div className="educational-workshops-features">
        <div className="educational-workshops-container2">
          <FeatureCard2
            title="Addressing Teen Pregnancy"
            image_src="/user-research-and-analysis.svg"
            description="These workshops tackle the pressing issue of teenage pregnancy, equipping girls with information about reproductive health, contraception, and the importance of responsible decision-making."
            rootClassName="rootClassName16"
          ></FeatureCard2>
          <FeatureCard2
            title="Gender Equality Education"
            image_src="/user-experience-ux-design.svg"
            description="Girls learn about gender equality, helping them challenge stereotypes, combat discrimination, and become advocates for a more equitable society."
            rootClassName="rootClassName17"
          ></FeatureCard2>
          <FeatureCard2
            title="Life Skills and Confidence Building"
            image_src="/user-interface-ui-design.svg"
            description="The workshops focus on developing life skills such as communication, problem-solving, and self-esteem, empowering girls to succeed in various aspects of their lives."
            rootClassName="rootClassName18"
          ></FeatureCard2>
          <FeatureCard2
            title="Holistic Development"
            image_src="/prototyping-and-testing.svg"
            description="Educational workshops provide a holistic approach, combining academic learning with personal growth, ultimately enabling girls to thrive as confident, educated leaders in their communities."
            rootClassName="rootClassName19"
          ></FeatureCard2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EducationalWorkshops
