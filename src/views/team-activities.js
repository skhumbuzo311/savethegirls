import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './team-activities.css'

const TeamActivities = (props) => {
  React.useEffect(() => document.getElementById('team-activities-container').scrollIntoView(), [])
  return (
    <div className="team-activities-container" id="team-activities-container">
      <Helmet>
        <title>TeamActivities - Save The Girls</title>
        <meta property="og:title" content="TeamActivities - Save The Girls" />
      </Helmet>
      <Header></Header>
      <div className="team-activities-container1">
        <div className="team-activities-banner">
          <div className="team-activities-container2">
            <h1 className="team-activities-text">Team Building Activities</h1>
            <span className="team-activities-text1">
              <span>
                Team building activities at #SaveTheGirls strengthen bonds among
                young girls, instilling leadership, boldness, and confidence,
                enhancing their abilities to tackle societal challenges and
                become active, empowered citizens.
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
      </div>
      <div className="team-activities-banner1">
        <h1 className="team-activities-text5">Fostering Camaraderie</h1>
        <span className="team-activities-text6">
          Team building activities at #SaveTheGirls nurture bonds among young
          girls, creating a supportive network that encourages friendship,
          trust, and cooperation, essential for personal and collective growth.
        </span>
      </div>
      <div className="team-activities-features">
        <div className="team-activities-container3">
          <FeatureCard2
            title="Leadership Development"
            image_src="/requirements-gathering.svg"
            description="These activities instill leadership qualities by encouraging girls to take on roles within the team, fostering confidence, decision-making skills, and a sense of responsibility."
            rootClassName="rootClassName12"
          ></FeatureCard2>
          <FeatureCard2
            title="Confidence Boosting Challenges"
            image_src="/architecture-and-design.svg"
            description="Through fun and challenging tasks, girls build self-esteem, resilience, and problem-solving abilities, enabling them to face life's obstacles with determination and courage."
            rootClassName="rootClassName13"
          ></FeatureCard2>
          <FeatureCard2
            title="Promoting Inclusivity"
            image_src="/development-and-testing.svg"
            description="Team building activities promote inclusivity and diversity, teaching girls the value of different perspectives, backgrounds, and talents, fostering a sense of unity and respect."
            rootClassName="rootClassName14"
          ></FeatureCard2>
          <FeatureCard2
            title="Empowerment Through Collaboration"
            image_src="/deployment-and-maintenance.svg"
            description="Girls learn the power of collaboration and collective effort, helping them realize that by working together, they can achieve their goals and make a positive impact in their communities."
            rootClassName="rootClassName15"
          ></FeatureCard2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default TeamActivities
