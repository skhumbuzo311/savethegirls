import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import CommunityProjects from './views/community-projects'
import TeamActivities from './views/team-activities'
import Founder from './views/founder'
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'
import MentorshipSessions from './views/mentorship-sessions'
import EducationalWorkshops from './views/educational-workshops'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={CommunityProjects} exact path="/community-projects" />
        <Route component={TeamActivities} exact path="/team-activities" />
        <Route component={Founder} exact path="/founder" />
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Signup} exact path="/signup" />
        <Route
          component={MentorshipSessions}
          exact
          path="/mentorship-sessions"
        />
        <Route
          component={EducationalWorkshops}
          exact
          path="/educational-workshops"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
