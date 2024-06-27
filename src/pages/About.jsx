import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";

function About() {
  const bgcolor = import.meta.env.VITE_BGCOLOR;
  return (
    <div
      id="about"
      style={{ backgroundColor: bgcolor }}
      className={`  p-5 m-6 mt-8 flex -z-10 justify-center rounded-md`}
    >
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2021</Timeline.Time>
            <Timeline.Title className="text-white">
              B.Tech in Coumpuer Science & Engineering
            </Timeline.Title>
            <Timeline.Body>
              I am currently a fourth-year B.Tech student majoring in Computer
              Science and Engineering at the Government College of Engineering
              and Textile Technology, Serampore.
            </Timeline.Body>
            <a
              href="https://www.linkedin.com/in/samual-halder-464b8820a/"
              target="_blank"
            >
              <Button color="gray" className="bg-[#1A8CD8] border-0 text-white">
                LinkedIn Profile
                <FaLinkedinIn className="ml-2 h-5 w-5" />
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
              I have solved over 600 coding challenges on platforms such as
              LeetCode and Coding Ninja. Additionally, I rank in the top 25% of
              LeetCode users
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
