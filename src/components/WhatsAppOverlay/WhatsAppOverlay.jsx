import React from "react";
import { WhatsAppButton } from "./Style";

const WhatsAppOverlay = () => {
  return (
    <WhatsAppButton
      href="https://api.whatsapp.com/send?phone=21970380708"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
    >
      <img
        src="/imagens/whatsapp-logo-2022.svg"
        alt="WhatsApp"
      />
    </WhatsAppButton>
  );
};

export default WhatsAppOverlay;
