import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import './index.css'
import './custom-globals.css'; 
import Logo from './../components/Logo';
import Page from './../components/Page';
import Fineprint from './../components/Fineprint';


const isExample = (location) => {
  return /^\/patterns\/examples/i.test(location.pathname)
}

const isRoot = (location) => {
  return /^\/$/i.test(location.pathname)
}

const meta = (
  <Helmet
    title="Tech for Good"
    meta={[
      { name: 'description', content: 'Tech for Good is a 200+ member strong community of South African tech professionals interested in using their skills after-hours for social good.' },
    ]}
  />
);


export default function Layout({ location, children, data }) {
  if (isExample(location)) {
    return (
      <div>
        {meta}
        {children()}
      </div>
    )
  }


  const footer = (
    <div className="text-center">
    
      <hr />
      <Fineprint>
        Tech for Good is an initiative by <a href="https://openup.org.za/" target="_blank">OpenUp</a>
      </Fineprint>
      <Fineprint>
        All material licensed under <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0</a>
      </Fineprint>
      <Fineprint>
        <a target="_blank" href="https://github.com/schalkventer/tech-for-good">Contribute to Tech for Good on Github</a>
      </Fineprint>
    </div>
  )


  return (
    <Page header={<Logo breakpoint={600} />} {...{ footer }}>
      {meta}
      {isRoot(location) ? null : <Fineprint><Link to="/">← Return to Homepage</Link></Fineprint>}
      {children()}
    </Page>
  )
}

