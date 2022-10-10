import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/JonTran8998">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/jontran8998/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/jontran8998">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
