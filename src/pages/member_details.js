import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import { graphql } from 'gatsby'

const Member = props => (
  <Layout>
    <div className="page">
      <div className="container">
        <div className="profile-container elevate">
          <div className="profile-details">
            <div className="avatar-container">
              <img
                src="https://www.fakepersongenerator.com/Face/male/male20161083981551056.jpg"
                alt="Profile Picture"
              />
              <div className="avatar-details">
                <h4>Glen M Sanders</h4>
                <p>Community Lead</p>
              </div>
            </div>
            <div>
              <div className="links">
                {/* TODO: remove this */}
                <div />
                <div />
                <div />
              </div>
            </div>

            <div className="random-info">random</div>
            <div className="quote">quote</div>
          </div>
          <div className="profile-content">
            <div className="skills">Skills</div>
            <div className="about">About</div>
            <div className="blogs">Blogs</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Member
