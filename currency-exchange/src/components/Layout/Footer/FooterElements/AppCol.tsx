import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function AppCol(): JSX.Element {
  return (
    <div className="social-icons space-x-4 ml-[38px]">
      <a
        href="https://www.facebook.com"
        className="text-black hover:text-hover text-2xl"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://www.instagram.com"
        className="text-black hover:text-hover text-2xl"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.twitter.com"
        className="text-black hover:text-hover text-2xl"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.youtube.com"
        className="text-black hover:text-hover text-2xl"
        aria-label="YouTube"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
}

export default AppCol;
