import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ServicesCard from '../components/services-card'
import GalleryCard3 from '../components/gallery-card3'
import BlogPostCard21 from '../components/blog-post-card21'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  React.useEffect(() => document.getElementById('home-container').scrollIntoView(), [])
  return (
    <div className="home-container" id="home-container">
      <Helmet>
        <title>Save The Girls</title>
        <meta property="og:title" content="Save The Girls" />
      </Helmet>
      <main className="home-main">
        <Header></Header>
        <div className="home-hero section-container">
          <div className="home-container01"></div>
          <div className="home-container02">
            <div className="home-container03">
              <div className="home-container04">
                <div className="home-container05">
                  <div className="home-container06">
                    <div className="home-container07">
                      <div className="home-container08">
                        <div className="home-max-width max-content-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-heading-container">
            <h1 className="home-text">Save The Girls</h1>
            <span className="home-text01">
              <span>Empowering young girls to be leaders</span>
              <br></br>
            </span>
            <a
              href="tel:+27630352797"
              className="home-primary button-primary button-lg button"
            >
              Get in touch with us
            </a>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <div className="home-text-container">
                <span className="home-text04">our services</span>
                <h2 className="home-text05 Heading2">
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative initiatives</span>
                </h2>
              </div>
            </div>
            <div className="home-cards-container display-flex">
              <Link to="/educational-workshops" className="home-navlink">
                <ServicesCard
                  text="Educational Workshops"
                  text1="Educational workshops provided by #SaveTheGirls empower young girls, fostering leadership, confidence, and skills crucial for their success while addressing issues like teenage pregnancy and gender-based violence."
                  image_src="/skill-branding.svg"
                  rootClassName="services-card-root-class-name"
                  className="home-component01"
                ></ServicesCard>
              </Link>
              <Link to="/community-projects" className="home-navlink1">
                <ServicesCard
                  text="Community Projects"
                  text1="#SaveTheGirls' community development projects create positive change by engaging young girls in initiatives that address social issues, promote gender equality, and foster community growth and empowerment."
                  image_src="/strategy.svg"
                  rootClassName="services-card-root-class-name1"
                  className="home-component02"
                ></ServicesCard>
              </Link>
            </div>
            <div className="home-cards-container1">
              <Link to="/mentorship-sessions" className="home-navlink2">
                <ServicesCard
                  text=" Mentorship Sessions"
                  text1="Mentorship sessions at #SaveTheGirls provide invaluable one-on-one support, nurturing young girls' potential, confidence, and skills, paving the way for their success and leadership in society."
                  image_src="/skills-icon.svg"
                  rootClassName="services-card-root-class-name2"
                  className="home-component03"
                ></ServicesCard>
              </Link>
              <Link to="/team-activities" className="home-navlink3">
                <ServicesCard
                  text="Team Activities"
                  text1="Team building activities at #SaveTheGirls strengthen bonds among young girls, instilling leadership, boldness, and confidence, enhancing their abilities to tackle societal challenges and become active, empowered citizens."
                  image_src="/research.svg"
                  rootClassName="services-card-root-class-name3"
                  className="home-component04"
                ></ServicesCard>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-gallery">
          <h1 className="home-text09">Our Gallery</h1>
          <span className="home-text10">A peek to our memorable moments</span>
          <div className="home-container09">
            <GalleryCard3
              title="Mamelodi Gauteng"
              subtitle="Mamelodi City of Tshwane"
              image_src="/assets/gallery/1-1500h.jpg"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              title="Drugs &amp; Alcohol Abuse"
              subtitle="Let's continue raising awareness about"
              image_src="/assets/gallery/10-1500h.jpg"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              title="@YouthDay2018"
              subtitle="Fortune Mvuleni Mbopo"
              image_src="/assets/gallery/11-1500h.jpg"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              title="SA HEROES AWARDS"
              subtitle="Youth empowerment winner"
              image_src="/assets/gallery/742b3e04-77f5-4b6d-bf15-b64a1f58509d-1500w.jpeg"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              title="Youth Empowerment Winner"
              subtitle="Miss Mamelodi Sundowns"
              image_src="/assets/gallery/img_2834-1500w.jpeg"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              title="GIRL HERO 2020"
              subtitle="Fortune Mbopo Girl Hero 2020"
              image_src="/assets/gallery/img_6904-1500h.jpg"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              title="Empowerment of the girl child"
              subtitle="Happy International Day Of The Girl Child"
              image_src="/assets/gallery/img_6902-1500w.jpg"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              title="Inspire A Teen"
              subtitle="Youth Empowerment Winner"
              image_src="/assets/gallery/36e704e5-1514-44c7-b0f5-92b3d370fc2e-1500w.jpeg"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              title="Mental Health Month"
              subtitle="Mental health matters"
              image_src="/assets/gallery/6-1500h.jpg"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              title="Future Leaders"
              subtitle="The future is bright"
              image_src="/assets/gallery/7-1500h.jpg"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              title="Children are the future"
              subtitle="I believe the children are our future..."
              image_src="/assets/gallery/8-1500h.jpg"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              title="Founder Of The Initiative"
              subtitle="Bring A Girl Child To UJ Movement"
              image_src="/assets/gallery/img_6903-1500h.jpg"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-text-container1">
              <span className="home-text11">about us</span>
              <h2 className="home-text12 Heading2">
                Empowering girls with confidence, skills, and unstoppable
                potential.
              </h2>
              <span className="home-text13">
                Educate and empower young girls to be LEADERS , to have a VOICE
                , to be BOLD ,and to be CONFIDENT in their abilities
              </span>
              <div className="home-checklist">
                <div className="home-check-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text14">Prevent pregnancy</span>
                </div>
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text15">Empower</span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text16">Support</span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text17">End discrimination</span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text18">Ensure equality</span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/assets/gallery/11-1500h.jpg"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-blog">
          <div className="home-container10">
            <Link to="/founder" className="home-navlink4">
              <BlogPostCard21
                when="founder@fortunembopo.co.za"
                label="FOUNDER &amp; CEO"
                title="Fortune Mbopo"
                author="Save The Girls"
                image_alt="avatar"
                image_src="/assets/founder-1500w.jpg"
                description="Intelligent and a very presentable strategic brand specialist, strategic communications in marketing, founder &amp; ceo at inspire a teen, empower a girl to lead, miss prime SA 2019 and miss commonwealth finalist."
                profile_src="/assets/logo-square-transparent-1500h.png"
                rootClassName="rootClassName3"
                className="home-component17"
              ></BlogPostCard21>
            </Link>
          </div>
          <div className="home-container11"></div>
        </div>
        <div className="home-banner">
          <h1 className="home-text19">Donations Help Us Reach The Dream</h1>
          <span className="home-text20">
            Please donate to us by clicking on the link below, we appreciate
            your contribution to help us build the future woman who are leaders.
          </span>
          <a
            href="https://www.backabuddy.co.za/fortune-mbopo-5699723874412631830"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
          <div className="home-btn-group">
            <button className="home-button button" onCl>Donate</button>
          </div>
          </a>
        </div>
        <div className="home-pricing">
          <div className="home-card">
            <div className="home-container12">
              <span className="home-text21">registER</span>
              <span className="home-text22">R300</span>
              <span className="home-text23">JOINNING FEE</span>
            </div>
            <span className="home-text24">
              Join the movement by becoming one of us register today by
              contacting the admin so you can be part of the movement that will
              change your life for the better.
            </span>
            <a href="tel:+27630352797" className="home-link button">
              Contact Us
            </a>
          </div>
        </div>
        <Footer
          text="@ 2023 Save The Girls Pty Ltd, All Rights Reserved"
          image_src="/assets/logo-square-transparent-1500h.png"
        ></Footer>
      </main>
    </div>
  )
}

export default Home
