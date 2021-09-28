import React from "react";
import Image from "next/image";
import AgencyLogo from "@public/images/italian-agency-logo.png";
import IloLogo from "@public/images/ilo-logo.png";
import UnicefLogo from "@public/images/unicef-logo.png";
import Logo from "@public/images/logo.png";

const Partners = () => {
  return (
    <section className="partners-section">
      <span className="partners-section-title">
        An International Labour Organization initiative with the help of the
        following partners
      </span>
      <div className="partners-section-logos">
        <div>
          <Image src={Logo} width={303} height={117} placeholder="blur" />
        </div>
        <div>
          <Image src={UnicefLogo} width={289} height={178} placeholder="blur" />
        </div>
        <div>
          <Image src={AgencyLogo} width={229} height={189} placeholder="blur" />
        </div>
        <div>
          <Image src={IloLogo} width={326} height={117} placeholder="blur" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
