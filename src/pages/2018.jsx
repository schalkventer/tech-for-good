import React from 'react'
import Heading from './../components/Heading';
import DaysRemaining from './../components/DaysRemaining';


export default function Index() {
  return (
    <div>
      <Heading level={2} primary>
        <DaysRemaining deadline="14 July 2018" template={days => `${days} days remaining`} />
      </Heading>



      <Heading level={2}>Mandela Day Hackathon 2018</Heading>
      <ul>
        <li><strong>What</strong>: Tech focused Hackathon for Social Good</li>
        <li><strong>Where</strong>: Claremont, Cape Town</li>
        <li><strong>When</strong>: Saturday, 14th of July (10AM - 5PM)</li>
      </ul>

      <Heading level={2}>Details</Heading>
      <p className="pb-6">We will be hosting a free technology focused Hackathon in honour of Mandela Day on Saturday, the 14th of July (Mandela Day is actually on Tuesday, the 17th of July).</p>
      <p className="pb-6"><strong>We are hoping to building some tools with you in service of the public good. Think basic static hosted HTML websites, tinkering with hardware and/or creating open-source resources for other developers. All projects are welcome as long as they adhere to the following:</strong></p>
      <p className="pb-6">
        💻 You make use of some aspect of your tech skills.<br />
        ❤️ They are in service of the public good.<br />
        🌱 They are started (even if they are not finished) at the event itself.
      </p>
      <p className="pb-6">You are not expected to bring anything with you except yourself and your tools of the trade. Teams will be created at 10:30 AM, and the brainstorming and building will start at 11:00 AM.</p>
      <p className="pb-6">We will break for lunch at 13:00. OpenUp will supply free pizza, beer, cooldrinks and snacks throughout the day. However, there is a Pick 'n Pay and Woolworths across the road if you want to buy your own food/snacks.</p>
      <p className="pb-6">Work will stop at 16:00 and projects will be showcased up until latest 17:00.</p>
      <p className="pb-6">We hope to have 3 teams (with at least 4 people per team) at minimum.</p>
      <p className="pb-6">The following individuals (of all skill levels!) are highly encouraged to join:</p>
      <ul>
        <li>Programmers</li>
        <li>Tinkerers of Electronics</li>
        <li>Web Scraper Enthusiasts</li>
        <li>Visual Designers</li>
        <li>Journalists or Copywriters</li>
        <li>Data Analysts</li>
        <li>Activists</li>
      </ul>

      <Heading level={2}>Venue</Heading>
      <p className="pb-6">The Hackathon will be hosterd at <a href="http://codebridge.org.za/" target="_blank">CodeBridge</a> in Claremont, Cape Town.</p>

      <ul className="pb-6">
        <li>Address: Thicket Street, Claremont, ZA.</li>
        <li>Google Maps Link: <a href="https://goo.gl/maps/waAqLwiUbV52">-33.976559,18.466614</a></li>
      </ul>

      <p className="pb-6">We are literally inside the Campground Road bridge which goes over the railway line in Claremont. We are on the same side of the railway as Main Road, and our parking lot is on the opposite side of Campground Road to Pick n Pay. You can punch Codebridge into Google maps and it should find us. Also, look out for signs to the Park Inn hotel. We are diagonally across from there.</p>

      <p className="pb-6">You can get to the parking lot by following Hemlock Street which is just off Claremont Boulvard. The parking lot is a large gravel parking lot directly adjacent to the bridge.</p>

      <p className="pb-6">The entrance is at the back corner furthest from Main Road once you're inside the parking lot. Just look out for the Codebridge sign on the wall.</p>

      <Heading level={2}>RSVP</Heading>
      <p className="pb-6">You can reserve your spot in one of two ways:</p>
      <ul>
        <li>You can RSVP for the event on our <a href="https://www.meetup.com/OpenUp/events/252027303/" target="_blank">Meetup.com profile</a> if you have an account</li>
        <li>Alternatively, you send Schalk an email indicating that you (and/or friends) would like to attend <a href="mailto:schalk@openup.org.za">schalk@openup.org.za</a>.</li>
      </ul>
    </div>
  )
};
