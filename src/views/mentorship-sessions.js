import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './mentorship-sessions.css'

const MentorshipSessions = (props) => {
  React.useEffect(() => document.getElementById('mentorship-sessions-container').scrollIntoView(), [])
  return (
    <div className="mentorship-sessions-container" id="mentorship-sessions-container">
      <Helmet>
        <title>MentorshipSessions - Save The Girls</title>
        <meta
          property="og:title"
          content="MentorshipSessions - Save The Girls"
        />
      </Helmet>
      <Header></Header>
      <div className="mentorship-sessions-banner">
        <div className="mentorship-sessions-container1">
          <h1 className="mentorship-sessions-text">Mentorship Sessions</h1>
          <span className="mentorship-sessions-text1">
            <span>
              Mentorship sessions at #SaveTheGirls provide invaluable one-on-one
              support, nurturing young girls&apos; potential, confidence, and
              skills, paving the way for their success and leadership in
              society.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <div className="mentorship-sessions-banner1">
        <h1 className="mentorship-sessions-text5">Personalized Guidance</h1>
        <span className="mentorship-sessions-text6">
          Mentorship sessions offer individualized guidance, allowing mentors to
          understand each girl&apos;s unique challenges and aspirations,
          providing tailored support to nurture their growth and leadership.
        </span>
      </div>
      <div className="mentorship-sessions-features">
        <div className="mentorship-sessions-container2">
          <FeatureCard2
            title="Building Confidence"
            image_src="/user-research-and-analysis.svg"
            description="Through mentorship, girls gain the confidence to overcome obstacles, express their voices, and develop bold, resilient characters that empower them to tackle life's challenges head-on."
            rootClassName="rootClassName8"
          ></FeatureCard2>
          <FeatureCard2
            title="Skill Development"
            image_src="/user-experience-ux-design.svg"
            description="These sessions focus on imparting essential life and leadership skills, ensuring that girls are equipped with the tools they need to excel academically and in their communities."
            rootClassName="rootClassName9"
          ></FeatureCard2>
          <FeatureCard2
            title="Emotional Support"
            image_src="/user-interface-ui-design.svg"
            description="Mentors create safe spaces for girls to share their experiences and concerns, offering emotional support and guidance to help them navigate personal and societal issues"
            rootClassName="rootClassName10"
          ></FeatureCard2>
          <FeatureCard2
            title="Long-term Impact"
            image_src="/prototyping-and-testing.svg"
            description="The mentorship program aims to create lasting change by instilling values of equality, respect, and empowerment, ensuring girls continue to thrive as active, confident citizens."
            rootClassName="rootClassName11"
          ></FeatureCard2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MentorshipSessions
