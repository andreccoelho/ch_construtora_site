import styled from "styled-components";

export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: all 0.3s ease;
  cursor: pointer;
  background: transparent;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;
