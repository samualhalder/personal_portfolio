import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import React from "react";

function About() {
  return (
    <div className="bg-gray-900  m-6 mt-8 flex gap-20 justify-center">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2021</Timeline.Time>
            <Timeline.Title color="white" className="text-white">
              B.Tech in Coumpuer Science & Engineering
            </Timeline.Title>
            <Timeline.Body>
              Hello currently i am 3rd year B.Tech Student majoring in Coumpuer
              Science & Engineering form Govt. College of Engineering & Textile
              Technology,Serampore
            </Timeline.Body>
            <a href="https://www.gcetts.ac.in/" target="_blank">
              <Button color="gray">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </a>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2022</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default About;
