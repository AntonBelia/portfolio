import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

function SocialIcon({ link, icon, label }) {
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link} data-testid={label}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
