import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { Si99Designs, SiLeetcode } from "react-icons/si";
import React from "react";

function About() {
  return (
    <div className="bg-gray-900 p-5 m-6 mt-8 flex gap-20 justify-center rounded-md">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2021</Timeline.Time>
            <Timeline.Title color="white" className="text-white">
              B.Tech in Coumpuer Science & Engineering
            </Timeline.Title>
            <Timeline.Body>
              currently i am a 3rd year B.Tech Student majoring in Coumpuer
              Science & Engineering form Govt. College of Engineering & Textile
              Technology,Serampore
            </Timeline.Body>
            <a href="https://www.gcetts.ac.in/" target="_blank">
              <Button color="gray" className="bg-[#1A8CD8] border-0 text-white">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title className="text-white">
              Started Learning Web Devlopment
            </Timeline.Title>
            <Timeline.Body>
              Started with HTML,CSS and JavaScript form online resources. Then I
              moved to React.Js and after that Back End Technologys like Node.js
              and Express.Js
            </Timeline.Body>
            <a href="https://github.com/samualhalder" target="_blank">
              <Button color="gray" className="bg-[#1A8CD8] border-0 text-white">
                Github profile
                <FaGithub className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>May 2022</Timeline.Time>
            <Timeline.Title className="text-white">
              Started Probelm solving on LeetCode
            </Timeline.Title>
            <Timeline.Body>
              I solve around 500+ coding chalenges on platforms like
              leetCode,Coding ninja etc. I am also top 42% of LeetCode user
            </Timeline.Body>
            <a href="https://leetcode.com/u/samualhalder/" target="_blank">
              <Button color="gray" className="bg-[#1A8CD8] border-0 text-white">
                Leetcode Profile
                <SiLeetcode className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default About;
