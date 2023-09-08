import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './community-projects.css'

const CommunityProjects = (props) => {
  React.useEffect(() => document.getElementById('community-projects-container').scrollIntoView(), [])
  return (
    <div className="community-projects-container" id="community-projects-container">
      <Helmet>
        <title>CommunityProjects - Save The Girls</title>
        <meta
          property="og:title"
          content="CommunityProjects - Save The Girls"
        />
      </Helmet>
      <Header></Header>
      <div className="community-projects-hero">
        <div className="community-projects-container1">
          <div className="community-projects-container2">
            <div className="community-projects-container3">
              <h1 className="community-projects-text">Community Projects</h1>
              <span className="community-projects-text1">
                <span>
                  #SaveTheGirls&apos; community development projects create
                  positive change by engaging young girls in initiatives that
                  address social issues, promote gender equality, and foster
                  community growth and empowerment.
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
      </div>
      <div className="community-projects-banner">
        <h1 className="community-projects-text5">
          Community Empowerment Initiatives
        </h1>
        <span className="community-projects-text6">
          #SaveTheGirls&apos; community projects actively engage young girls in
          initiatives aimed at uplifting and strengthening their communities,
          fostering a sense of belonging and empowerment.
        </span>
      </div>
      <div className="community-projects-features">
        <div className="community-projects-container4">
          <FeatureCard2
            title="Promoting Gender Equality"
            image_src="/register-icon.svg"
            description="These projects work to dismantle gender-based discrimination, promoting equal opportunities and challenging harmful stereotypes, creating a more inclusive society for girls and women."
            rootClassName="rootClassName4"
          ></FeatureCard2>
          <FeatureCard2
            title="Education and Awareness Campaigns"
            image_src="/development-and-testing-2.svg"
            description="Through community projects, girls are encouraged to lead educational campaigns on critical issues, ranging from health awareness to social justice, making a positive impact in their neighborhoods."
            rootClassName="rootClassName5"
          ></FeatureCard2>
          <FeatureCard2
            title="Skill-Building and Leadership"
            image_src="/development-and-testing-1.svg"
            description="Girls develop essential life skills and leadership abilities by participating in community projects, gaining hands-on experience and becoming change-makers within their localities."
            rootClassName="rootClassName6"
          ></FeatureCard2>
          <FeatureCard2
            title="Building Stronger Communities"
            image_src="/deployment-and-maintenance.svg"
            description="By involving girls in community projects, #SaveTheGirls aims to create stronger, more resilient communities where girls and women are empowered to thrive and lead positive transformations."
            rootClassName="rootClassName7"
          ></FeatureCard2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CommunityProjects
