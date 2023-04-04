import React from 'react';
import './TeamMember.css';
import { ImFacebook2 } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export const TeamMember = () => {
  return (
    <div className="team-member">
      <div className="team-member-inner">
        <h3>
          U svom timu imamo doktore specijaliste, implantologe, specijaliste
          oralne hirurgije, specijaliste maksilofacijale hirurgije, ortodoncije,
          stomatološke protetike.
        </h3>

        <div className="team-member-card">
          <div
            className="team-member-img"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'assets/Semra-Sabaredzovic.jpeg'
              })`,
            }}
          ></div>
          <h4>Semra Šabaredžović</h4>
          <p>Asistent</p>
          <div className="team-member-social">
            <i>
              <ImFacebook2 className="team-member-social-icon" />
            </i>
            <i>
              <BsTwitter className="team-member-social-icon" />
            </i>
            <i>
              <BsLinkedin className="team-member-social-icon" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};
