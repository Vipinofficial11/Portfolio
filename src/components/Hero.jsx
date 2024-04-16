import { motion } from "framer-motion";
import { styles } from "../style";
import { profile } from "../assets";

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

      <div className="relative w-[45vw] h-[45vh] overflow-hidden rounded-full shadow-md  p-1 sm:w-[20vw] sm:h-[20vh] md:w-[50vw] md:h-[40vh] lg:w-[20vw] lg:h-[42vh] xl:w-[20vw] xl:h-[42vh] mt-[200px]">
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#E2CBFF_0%,#31363F_50%,#915eff_100%)]" />
        <img
          src={profile}
          alt="profile.png"
          className="h-[98%] w-[97%] object-cover absolute rounded-full p-1"
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
