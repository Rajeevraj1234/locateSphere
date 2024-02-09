import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-full pt-20  xl:h-[840px] xl:w-[1905px] bg-[#221f15]">
      <div>
        <h1 className="text-center text-[9rem] font-semibold text-[#e0ad86] tracking-widest mb-20 font-heading">
          ABOUT
        </h1>
        <div className="flex justify-center items-center w-full">
          <motion.p
            initial={{ y: 50 ,  opacity:0}}
            whileInView={{ y: 0 , opacity:1 }}
            transition={{ type: "spring" , duration:2 , delay:0.5 }}
            viewport={{ once: true}}
            className="w-[600px] text-center text-white"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            voluptatibus, architecto, sed quaerat impedit ratione fuga, quasi
            illum sapiente adipisci quo. Sed cumque enim reiciendis dolore,
            dolorum tenetur quisquam ullam officiis adipisci, dolores
            necessitatibus deleniti voluptate minima earum porro itaque non
            beatae id odio repudiandae pariatur? Incidunt dolore ipsum
            voluptatum sequi veniam culpa accusamus necessitatibus porro minus
            cumque voluptate temporibus quam id, consectetur obcaecati minima
            voluptates impedit placeat maiores velit quasi voluptas officiis!
            Quidem eos, porro obcaecati tempora quos eveniet!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
