import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}> Introduction </p>
        <h2 className={`${styles.sectionHeadText}`}> Overview </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        I am a versatile full-stack developer with a strong command of Java,
        Javascript, and Typescript. In the realm of Java, I excel in core java.
        On the frontend, my expertise lies in React and Next.js, showcasing a
        deep understanding of these frameworks. Complementing this, I am
        well-acquainted with HTML, CSS, Tailwind, and Styled Components for
        crafting visually appealing and responsive user interfaces.
        <br /> <br />
        On the backend, I am proficient in Node.js, Express.js, WebRTC and Web
        sockets, leveraging these technologies to build robust server-side
        solutions. My database proficiency spans MySQL, MongoDB, and Prisma
        (ORM), ensuring efficient data management. <br /> <br />
        In the realm of DevOps, I bring a wealth of experience in Kubernetes and
        Docker for streamlined deployment and containerization. Proficient in
        creating robust and efficient CI/CD pipelines, I leverage my deep
        understanding of GitHub Actions, bash scripting, and YAML configurations
        to automate workflows and ensure seamless integration. As a GCP
        certified professional, I possess in-depth knowledge of Cloud Build,
        Google Kubernetes Engine (GKE), Identity and Access Management (IAM),
        Cloud Storage, Cloud Source Repository, Cloud SQL (MySQL and
        PostgreSQL), Cloud Data Fusion, and more. <br /> <br />
        When it comes to testing, I employ Jest and Selenium for end to end
        testing, Mockito and Jmockit for Java unit testing creating a
        comprehensive testing strategy that ensures the reliability of
        applications. <br /> <br />
        As a developer, I bring not only technical expertise but also strong
        soft skills. I am a quick learner, a problem solver, and an effective
        communicator. With a knack for clear and concise communication, I excel
        in leading teams, facilitating collaboration, and training individuals.
        My adaptability and commitment enable me to deliver high-quality
        solutions on time, making me a valuable asset in any professional
        setting.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
