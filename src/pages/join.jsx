import React from 'react'
import Heading from './../components/Heading';
import Button from './../components/Button';
import Fineprint from './../components/Fineprint';


export default function Index() {
  return (
    <div>
      <Heading level={2}>What is Slack?</Heading>
      <p>
        <a href="https://slack.com/" target="_blank">Slack</a> is a real-time web-based chat program that connects communities. You can either use it in your browsers or download the desktop/mobile app.
      </p>
      
      <div className="h-32">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330390/scrollll.gif" className="border border-grey border-style rounded mt-4 block" />
      </div>

      <Heading level={2}>How do I join #tech-for-good?</Heading>
      <ol>
        <li>
          <p>Join the ZATech Slack workspace</p>
          <Button link="https://zatech.co.za/">Join ZA Tech</Button>
        </li>
        <li className="pt-4">Once you've signed into ZATech, click on the <strong>Channels</strong> title in the sidebar. Continue by searching and selecting #tech-for-good from the list.</li>
        <li className="pt-6">Click <strong>Join Channel</strong> at the bottom of the page.</li>
      </ol>
    </div>
  )
};
