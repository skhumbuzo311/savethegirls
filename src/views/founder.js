import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard2 from '../components/feature-card2'
import BlogPostCard1 from '../components/blog-post-card1'
import Footer from '../components/footer'
import './founder.css'

const Founder = (props) => {
  React.useEffect(() => document.getElementById('founder-container').scrollIntoView(), [])
  return (
    <div className="founder-container" id="founder-container">
      <Helmet>
        <title>Founder - Save The Girls</title>
        <meta property="og:title" content="Founder - Save The Girls" />
      </Helmet>
      <Header></Header>
      <div className="founder-hero section-container">
        <div className="founder-container01"></div>
        <div className="founder-container02">
          <div className="founder-container03">
            <div className="founder-container04">
              <div className="founder-container05">
                <div className="founder-container06">
                  <div className="founder-container07">
                    <div className="founder-container08">
                      <div className="founder-max-width max-content-container"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="founder-heading-container">
          <h1 className="founder-text">Fortune Mbopo</h1>
          <span className="founder-text1">
            <span>Founder &amp; CEO</span>
            <br></br>
          </span>
          <a
            href="mailto:founder@fortunembopo.co.za?subject=Details About Organization"
            className="founder-primary button-primary button-lg button"
          >
            Get in touch with us
          </a>
        </div>
      </div>
      <div className="founder-banner">
        <h1 className="founder-text4">My Mission</h1>
        <span className="founder-text5">
          <span>
            As the founder of Save The Girls movement, I&apos;m deeply committed
            to empowering young girls. Our mission is to equip them with the
            confidence, skills, and knowledge they need to become leaders,
            advocates for gender equality, and unstoppable forces for positive
            change. We believe that every girl deserves access to education,
            safety, and the opportunity to fulfill her potential. Together, we
            can build a world where all girls are protected, empowered, and
            encouraged to lead.
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
      <div className="founder-features">
        <div className="founder-container09">
          <FeatureCard2
            title="Empowering Young Girls"
            image_src="/user-research-and-analysis.svg"
            description="Our core mission is to empower young girls by providing them with the tools, knowledge, and support they need to thrive and become leaders in their communities."
            rootClassName="rootClassName20"
          ></FeatureCard2>
          <FeatureCard2
            title="Advocating for Gender Equality"
            image_src="/user-experience-ux-design.svg"
            description="We are dedicated to advocating for gender equality and challenging societal norms that perpetuate discrimination, ensuring that girls have equal opportunities"
            rootClassName="rootClassName21"
          ></FeatureCard2>
          <FeatureCard2
            title="Fostering Positive Change"
            image_src="/user-interface-ui-design.svg"
            description="Our goal is to nurture girls into unstoppable forces for positive change, enabling them to tackle pressing issues and make a lasting impact."
            rootClassName="rootClassName22"
          ></FeatureCard2>
          <FeatureCard2
            title="Creating a Brighter Future"
            image_src="/prototyping-and-testing.svg"
            description="We envision a world where all girls are protected, educated, and encouraged to lead, working tirelessly to build a brighter, more inclusive future for them."
            rootClassName="rootClassName23"
          ></FeatureCard2>
        </div>
      </div>
      <div className="founder-blog">
        <div className="founder-container10">
          <a
            href="https://presidential.co.za/presidential-awards/"
            target="_blank"
            rel="noreferrer noopener"
            className="founder-link"
          >
            <BlogPostCard1
              label="Presidential"
              title="Presidential Award Winner"
              image_src="/assets/all-presidential-logos-1-31-1500w.png"
              description="Founded to acknowledge the efforts and characteristics of citizens who are demonstrating Presidential characteristics in their everyday lives. Public nominations are submitted and reviewed by our team. . Successful nominees are presented with a Presidential Award in an elected category."
              profile_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              rootClassName="rootClassName3"
              className="founder-component5"
            ></BlogPostCard1>
          </a>
        </div>
        <div className="founder-container11">
          <a
            href="https://africafashionweek.com/magazine/women-making-money-moves/amp/"
            target="_blank"
            rel="noreferrer noopener"
            className="founder-link1"
          >
            <BlogPostCard1
              label="Africa Fashion Week"
              title="10 Women Making African Money Moves"
              image_src="/assets/afw-africa-fashion-week-1500w.png"
              description="The women are making their mark on the globe but these women doing it all while being amazing, African females. On this list, there are women from all walks of life – LGBTQ+ advocates, CEOs, founders, social justice, and equal rights activists, just to name a few"
              rootClassName="rootClassName2"
              className="founder-component6"
            ></BlogPostCard1>
          </a>
        </div>
        <div className="founder-container12">
          <a
            href="https://www.news24.com/news24/youth-day-19-year-old-student-wants-to-change-the-fortunes-of-her-peers-20180616"
            target="_blank"
            rel="noreferrer noopener"
            className="founder-link2"
          >
            <BlogPostCard1
              label="News24"
              title="YOUTH DAY"
              image_src="/assets/download-1500w.png"
              description="Fortune Mvuleni Mbopo hopes to inspire teenagers and young adults to realise that they are never too young to reach for their dreams.  Mbopo, 19, was born and raised in Mooinooi, a platinum mining town in the North West long past its heyday. She told News24 that opportunities were few and far between for her and her peers."
              rootClassName="rootClassName1"
              className="founder-component7"
            ></BlogPostCard1>
          </a>
        </div>
      </div>
      <div className="founder-social-bar">
        <a
          href="https://www.tiktok.com/@fortumbopo"
          target="_blank"
          rel="noreferrer noopener"
          className="founder-link3"
        >
          <img
            alt="image"
            src="/assets/tiktok-svgrepo-com.svg"
            className="founder-image"
          />
        </a>
        <a
          href="https://www.instagram.com/fortunembopo/?hl=en"
          target="_blank"
          rel="noreferrer noopener"
          className="founder-link4"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="founder-icon">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/fortune.mbopo"
          target="_blank"
          rel="noreferrer noopener"
          className="founder-link5"
        >
          <svg viewBox="0 0 602.2582857142856 1024" className="founder-icon2">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </a>
        <a
          href="https://wa.me/27724308106"
          target="_blank"
          rel="noreferrer noopener"
          className="founder-link6"
        >
          <svg viewBox="0 0 1024 1024" className="founder-icon4">
            <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@fortunembopo7615"
          target="_blank"
          rel="noreferrer noopener"
          className="founder-link7"
        >
          <svg viewBox="0 0 1024 1024" className="founder-icon6">
            <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
          </svg>
        </a>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Founder
