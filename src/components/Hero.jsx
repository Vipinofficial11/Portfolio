import { motion } from "framer-motion";
import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {" "}
            Hi, I'm <span className="text-[#915eff]"> Vipin </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a SWE, <br />
            Passionate about building <br />a better tomorrow <br />
            through technology <br />
            and innovation.
          </p>
        </div>
      </div>

      <div className="relative w-[45vw] h-[30vh] overflow-hidden rounded-full skew-y-6 bg-gradient-to-r from-[#5d34b7] to-[#eef2f1] shadow-md shadow-white py-1 sm:w-[20vw] sm:h-[20vh] md:w-[50vw] md:h-[40vh] lg:w-[20vw] lg:h-[42vh] xl:w-[20vw] xl:h-[42vh] mt-[200px]">
        <img
          src="src/assets/IMG_0704.jpeg"
          alt="profile.png"
          className="h-full w-full object-cover transform skew-y-[-6deg] rounded-full"
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center
            items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
