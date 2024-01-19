import React from "react";

import { styles } from "../styles";

import { ComputersCanvas, StarsCanvas } from "./canvas";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import RESUME from "../assets/Bekzat_Shamurzaev_Resume.pdf";
import Tilt from "react-tilt";
import { BsDownload } from "react-icons/bs";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import DownloadIcon from "@mui/icons-material/Download";
import { tesla } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span className="text-[#915eff]">Bekzat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I am Frontend Engineer with over 3 years of experience creating
            responsive,
            <br className="sm:block hidden" />
            scalable, engaging user interfaces.
          </p>
          <br />
          <div className="mt-20 flex flex-wrap gap-10 justify-center ">
            {/* <img src={tesla} /> */}
            {/* <Tilt className="xs:w-[250px] w-full ">
              <motion.div
                variants={fadeIn("right", "spring", 0 * 0.5, 0.75)}
                className="w-full flex flex-row green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[20px] flex justify-evenly items-center "
                >
                  <Button>
                    <a
                      href="#contact"
                      className="bg-[#915eff] text-white text-center p-3 flex rounded-lg w-32"
                    >
                      &nbsp; &nbsp; &nbsp; Let's Talk
                    </a>
                  </Button>
                </div>
              </motion.div>
            </Tilt>

            <Tilt className="xs:w-[250px] w-full ">
              <motion.div
                variants={fadeIn("right", "spring", 0 * 0.5, 0.75)}
                className="w-full flex flex-row green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[20px] flex justify-evenly items-center"
                >
                  <Button>
                    <a
                      href="#projects"
                      className="bg-[#915eff] text-white p-3 text-center flex rounded-lg w-32"
                    >
                      &nbsp; &nbsp; Projects &nbsp;
                    </a>
                  </Button>
                </div>
              </motion.div>
            </Tilt>

            <Tilt className="xs:w-[250px] w-full ">
              <motion.div
                variants={fadeIn("right", "spring", 0 * 0.5, 0.75)}
                className="w-full flex flex-row green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[20px] flex justify-evenly items-center"
                >
                  <Button style={{ width: "auto" }}>
                    <a
                      href={RESUME}
                      download
                      className="bg-[#915eff] text-white text-center p-3 flex rounded-lg w-33"
                    >
                      &nbsp; &nbsp; Resume &nbsp; <DownloadIcon /> &nbsp;
                    </a>
                  </Button>
                </div>
              </motion.div>
            </Tilt> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
