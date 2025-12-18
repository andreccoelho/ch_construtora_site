import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: rgb(14, 14, 14);
  width: 100%;
  min-height: 20.625rem; /* ~330px */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  box-sizing: border-box;
  gap: 4rem; /* espaçamento entre linhas */

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    gap: 3rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const LegalText = styled.p`
  margin: 0;
  color: #f5f5f5;
  text-align: center;
   
  font-size: 0.875rem; /* ~14px */
  font-style: normal;
   font-weight: 300;
  line-height: 1.4;
`;
