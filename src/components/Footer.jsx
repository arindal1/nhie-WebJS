import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://twitter.com/arindal_17" target="_blank" className="icon" id="icon1">
          <img src="/res/x.jpg" alt="Icon 1" />
        </a>
        <a href="https://github.com/arindal1" target="_blank" className="icon" id="icon2">
          <img src="/res/git.jpg" alt="Icon 2" />
        </a>
        <a href="https://www.linkedin.com/in/arindalchar" target="_blank" className="icon" id="icon3">
          <img src="/res/in.jpg" alt="Icon 3" />
        </a>
      </div>
      <p>&lt; NHIE by Arindal Char @ 2024 &gt;</p>
    </div>
  );
};

export default Footer;
