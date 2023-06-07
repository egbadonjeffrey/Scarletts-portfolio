import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const TransitionEffect = () => {
  return (
    <>
      <DivOne
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></DivOne>
      <DivTwo
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      ></DivTwo>
      <DivThree
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      ></DivThree>
    </>
  );
};

export default TransitionEffect;

const DivOne = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  background: ${({ theme }) => theme.darkShade};
`;

const DivTwo = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background: ${({ theme }) => theme.background};
`;

const DivThree = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: ${({ theme }) => theme.lightShade};
`;
