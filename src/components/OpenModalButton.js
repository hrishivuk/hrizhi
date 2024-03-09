import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const OpenModalButton = styled(motion.button)`
font-size: 60px;
  padding: 20px;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;

  /* Add additional styles here */
  &:hover {
    opacity: 0.8; /* Example hover effect */
  }
`;
const AnimatedOpenButton = ({ children, handleClick,className,color }) => {
  return (
    <OpenModalButton
      onClick={handleClick}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.7 }}
      className={className}
    >
      {children}
    </OpenModalButton>
  );
};

export default AnimatedOpenButton;
