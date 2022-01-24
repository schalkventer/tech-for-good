import React from 'react'
import Heading from './../components/Heading';
import Button from './../components/Button';
import DaysRemaining from './../components/DaysRemaining';


export default function Index() {
  return (
    <div>
      <Heading level={2}>🌍 What is Tech for Good?</Heading>
      <p>
        <em>Tech for Good</em> is a 200+ member strong community of South African tech professionals interested in using their skills after-hours for social good.
      </p>

      <Heading level={2}>👪 Can I join?</Heading>
      <p>Yes! We are an open community, this means that we believe everyone has something of value to add - irrespective of skill, commitment level or background.</p>

      <Heading level={2}>🚀 Let's get started!</Heading>
      <Button link="/join">Join our discussion channel on Slack</Button>
    </div>
  )
};
