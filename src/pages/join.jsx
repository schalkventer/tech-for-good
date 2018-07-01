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
      <p className="pt-4">
        We have a <strong>#tech-for-good</strong> channel that is shared across the following two workspaces:
      </p>
      <ul className="pt-4">
        <li><em>ZA Tech</em>: A community-driven workspace for South African tech professionals</li>
        <li><em>Code for Africa</em>: A workspace for civic-tech practitioners in Africa</li>
      </ul>
      <div className="h-32">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330390/scrollll.gif" className="border border-grey border-style rounded mt-4 block" />
      </div>

      <Heading level={2}>How do I join #tech-for-good?</Heading>
      <ol>
        <li>
          <p>Join one of the above workspaces </p>
          <Fineprint>You can choose either, all #tech-for-good messages are synchronised between both.</Fineprint>
          <ul className="list-reset pt-4">
            <li className="p-2">
              <Button link="https://zatech-slack-inviter.herokuapp.com">Join ZA Tech</Button>
            </li>
            <li className="p-2">
            <Button link="https://docs.google.com/forms/d/e/1FAIpQLScBPmaH71EuV3HTw-4KSB6x-Xs-6Euf3baSfsMt1wi8n9adkA/viewform">Join Code for Africa</Button>
            </li>
          </ul>
        </li>
        <li className="pt-4">Once you've signed into one of the above workspaces, click on the <strong>Channels</strong> title in the sidebar. Continue by searching and selecting #tech-for-good from the list.</li>
        <li className="pt-6">Click <strong>Join Channel</strong> at the bottom of the page.</li>
      </ol>
    </div>
  )
};