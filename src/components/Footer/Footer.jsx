import {
  FooterWrapper,
  FooterContent,
  LogoWrapper,
  Separador,
  BottomSection,
  SocialIconsRow,
  SocialLink,
  LegalText,
} from "./Style";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <FooterContent>
        <LogoWrapper>
          <img src="/imagens/logo.svg" alt="CH Construtora logo" />
        </LogoWrapper>

        <Separador />

        <BottomSection>
          <SocialIconsRow>
            <SocialLink
              href="https://api.whatsapp.com/send?phone=21970380708"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.83339 20C5.83339 12.176 12.176 5.83333 20 5.83333C27.824 5.83333 34.1667 12.176 34.1667 20C34.1667 27.824 27.824 34.1667 20 34.1667C17.213 34.1667 14.6188 33.3637 12.43 31.9768C12.0226 31.7188 11.5235 31.6498 11.0614 31.7877L6.26284 33.2198L8.06957 28.9922C8.28312 28.4925 8.23967 27.9202 7.95314 27.4585C6.60952 25.2933 5.83339 22.7398 5.83339 20ZM20 2.5C10.3351 2.5 2.50006 10.335 2.50006 20C2.50006 23.0635 3.28862 25.9472 4.67444 28.4545L1.80081 35.1783C1.54677 35.7728 1.65937 36.4605 2.08972 36.9428C2.52007 37.4253 3.19056 37.6153 3.81001 37.4303L11.309 35.1925C13.8708 36.6608 16.8395 37.5 20 37.5C29.665 37.5 37.5 29.665 37.5 20C37.5 10.335 29.665 2.5 20 2.5ZM23.8209 23.6373L21.6305 25.1802C20.6047 24.5958 19.4705 23.7802 18.3329 22.6425C17.1502 21.4598 16.2734 20.2388 15.6269 19.1188L17.0189 17.9373C17.6162 17.4303 17.7797 16.5756 17.4117 15.8838L15.6381 12.5505C15.3993 12.1016 14.9686 11.7863 14.4686 11.6942C13.9686 11.6021 13.4539 11.7433 13.0708 12.0777L12.545 12.5366C11.2804 13.6402 10.5325 15.4538 11.1524 17.2902C11.795 19.1938 13.1664 22.19 15.9759 24.9995C18.9985 28.0222 22.0689 29.2125 23.8644 29.6748C25.311 30.0472 26.68 29.548 27.6447 28.762L28.6305 27.9587C29.0522 27.6152 29.2797 27.0873 29.24 26.5448C29.2002 26.0023 28.8982 25.5133 28.4309 25.2348L25.6337 23.5682C25.0687 23.2317 24.3587 23.2587 23.8209 23.6373Z"
                  fill="url(#paint0_linear_footer_whatsapp)"
                />
                <defs>
                  <linearGradient id="paint0_linear_footer_whatsapp" x1="19.5834" y1="2.5" x2="19.5834" y2="37.5001" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DECB8D" />
                    <stop offset="1" stopColor="#807551" />
                  </linearGradient>
                </defs>
              </svg>
            </SocialLink>

            <SocialLink
              href="mailto:https://construtorach.construtora@gmail.com"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M36.6666 8.20008V14.7602L20 21.3202L3.33331 14.7602V8.20008C3.33331 7.76512 3.50891 7.34797 3.82147 7.04041C4.13403 6.73285 4.55795 6.56006 4.99998 6.56006H35C35.442 6.56006 35.8659 6.73285 36.1785 7.04041C36.4911 7.34797 36.6666 7.76512 36.6666 8.20008ZM3.33331 18.2928V31.1604C3.33331 31.5953 3.50891 32.0125 3.82147 32.32C4.13403 32.6276 4.55795 32.8004 4.99998 32.8004H35C35.442 32.8004 35.8659 32.6276 36.1785 32.32C36.4911 32.0125 36.6666 31.5953 36.6666 31.1604V18.2928L20 24.8528L3.33331 18.2928Z"
                  fill="url(#paint0_linear_footer_email)"
                />
                <defs>
                  <linearGradient id="paint0_linear_footer_email" x1="20" y1="6.56006" x2="20" y2="32.8004" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DECB8D" />
                    <stop offset="1" stopColor="#807551" />
                  </linearGradient>
                </defs>
              </svg>
            </SocialLink>

            <SocialLink
              href="https://www.instagram.com/construtora_ch/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clipPath="url(#clip0_footer_instagram)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7393 0.245458C8.48354 0.392358 5.66163 1.18835 3.38299 3.45737C1.09639 5.73831 0.310283 8.57141 0.163017 11.7933C0.0714728 13.8043 -0.463828 28.9966 1.08843 32.9808C2.13521 35.6687 4.19688 37.7354 6.90935 38.7855C8.17504 39.2778 9.61988 39.6111 11.7393 39.7084C29.4609 40.5104 36.0302 40.0737 38.8003 32.9808C39.2919 31.7183 39.6302 30.2747 39.7237 28.1605C40.5337 10.3934 39.5924 6.54229 36.5038 3.45737C34.0541 1.01365 31.1724 -0.649842 11.7393 0.245458ZM11.9025 36.1351C9.96213 36.0477 8.9094 35.7245 8.2069 35.4525C6.43971 34.7656 5.11234 33.4437 4.42974 31.6869C3.24763 28.6595 3.6397 14.281 3.74517 11.9544C3.84865 9.67548 4.31034 7.59268 5.91833 5.98472C7.9084 3.99956 10.4796 3.02665 27.9863 3.81675C30.2709 3.91997 32.3585 4.38072 33.9705 5.98472C35.9605 7.96986 36.9476 10.5608 36.1436 28.0003C36.056 29.9359 35.7317 30.9861 35.459 31.6869C33.658 36.3023 29.5146 36.9431 11.9025 36.1351ZM28.1793 9.37925C28.1793 10.6934 29.248 11.7621 30.5674 11.7621C31.8869 11.7621 32.9575 10.6934 32.9575 9.37925C32.9575 8.06509 31.8869 6.99741 30.5674 6.99741C29.248 6.99741 28.1793 8.06509 28.1793 9.37925ZM9.72533 19.9759C9.72533 25.6058 14.3005 30.1703 19.9444 30.1703C25.5882 30.1703 30.1634 25.6058 30.1634 19.9759C30.1634 14.346 25.5882 9.78452 19.9444 9.78452C14.3005 9.78452 9.72533 14.346 9.72533 19.9759ZM13.3115 19.9759C13.3115 16.3233 16.2807 13.3597 19.9444 13.3597C23.6081 13.3597 26.5773 16.3233 26.5773 19.9759C26.5773 23.6306 23.6081 26.5951 19.9444 26.5951C16.2807 26.5951 13.3115 23.6306 13.3115 19.9759Z"
                    fill="url(#paint0_linear_footer_instagram)"
                  />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_footer_instagram" x1="20" y1="0" x2="20" y2="40.0001" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DECB8D" />
                    <stop offset="1" stopColor="#807551" />
                  </linearGradient>
                  <clipPath id="clip0_footer_instagram">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </SocialLink>

            <SocialLink
              href="https://maps.app.goo.gl/F19BVkVcb3Ui9cfV8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localização"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 14.4385C24 16.6485 22.21 18.4385 20 18.4385C17.79 18.4385 16 16.6485 16 14.4385C16 12.2285 17.79 10.4385 20 10.4385C22.21 10.4385 24 12.2285 24 14.4385ZM20 34C20 34 10 20 10 14C10 8.486 14.486 4 20 4C25.514 4 30 8.486 30 14C30 20 20 34 20 34ZM20 0C12.268 0 6 6.268 6 14C6 21.732 20 40 20 40C20 40 34 21.732 34 14C34 6.268 27.732 0 20 0Z"
                  fill="url(#paint0_linear_footer_location)"
                />
                <defs>
                  <linearGradient id="paint0_linear_footer_location" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DECB8D" />
                    <stop offset="1" stopColor="#807551" />
                  </linearGradient>
                </defs>
              </svg>
            </SocialLink>
          </SocialIconsRow>

          <LegalText>
            Copyright © 2025 CH CONSTRUTORA LTDA | CNPJ 29.686.496/0001-80 | Todos os direitos reservados
          </LegalText>
        </BottomSection>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
