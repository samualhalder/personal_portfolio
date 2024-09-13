import {
  Button,
  FooterCopyright,
  FooterDivider,
  Label,
  Spinner,
  TextInput,
  Textarea,
  Toast,
} from "flowbite-react";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs, { sendForm } from "@emailjs/browser";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const bgcolor = import.meta.env.VITE_BGCOLOR;
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setFailure(false);
    setSuccess(false);
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setSuccess(true);
          setSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFailure(true);
          setSending(false);
        }
      );
  };
  return (
    <div
      id="contact"
      style={{ backgroundColor: bgcolor }}
      className={` h-screen p-5 m-6 mt-8 flex flex-col -z-10 justify-center rounded-md text-white`}
    >
      <h1 className="text-5xl font-lobster text-white self-center">
        {" "}
        Contact me
      </h1>
      <div className="flex flex-col gap-4">
        {success && (
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Mail send successfully.
            </div>
            <Toast.Toggle />
          </Toast>
        )}
        {failure && (
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Oops something went wrong.
            </div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>

      <form
        ref={form}
        className="flex w-full md:w-[40%] mx-auto flex-col gap-4"
        onSubmit={(e) => sendEmail(e)}
      >
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email2"
              value="Your email"
              className="text-gray-400"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            name="from_email"
            placeholder="name@gmail.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" className="text-gray-400" />
          </div>
          <TextInput
            id="name"
            type="text"
            name="from_name"
            required
            shadow
            placeholder="John Dow"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="message"
              value="message"
              className="text-gray-400"
            />
          </div>
          <Textarea
            id="comment"
            name="message"
            placeholder="Leave a message..."
            required
            rows={5}
          />
        </div>

        {sending === false && (
          <Button type="submit">
            @{" "}
            <span className="font-bold mx-1 select-text">
              samual.halder2020@gmail.com
            </span>
          </Button>
        )}
        {sending === true && (
          <Button>
            <Spinner />
          </Button>
        )}
      </form>

      <div className="flex justify-center gap-7 md:gap-20 m-10 text-3xl">
        <Link to={"https://github.com/samualhalder"}>
          <FiGithub className="hover:scale-150 duration-300" />
        </Link>
        <Link to={"https://leetcode.com/u/samualhalder/"}>
          <SiLeetcode className="hover:scale-150 duration-300" />
        </Link>
        <Link to={"https://www.linkedin.com/in/samual-halder-464b8820a/"}>
          <FaLinkedin className="hover:scale-150 duration-300" />
        </Link>
        <Link to={"https://www.instagram.com/samualhalder/"}>
          <FaInstagram className="hover:scale-150 duration-300" />
        </Link>
        <Link to={"https://x.com/samualhalder"}>
          <FaXTwitter className="hover:scale-150 duration-300" />
        </Link>
      </div>
      <FooterDivider />
      <FooterCopyright
        href=""
        by="Samual Halder"
        year={2024}
        className="self-center"
      />
    </div>
  );
}

export default Contact;
