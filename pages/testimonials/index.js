// components
import TestimonialSlider from "../../components/TestimonialSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// react helmet
import { Helmet } from "react-helmet";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Helmet>
        <title>Grandiv | Testimonials</title>
        <link
          id="favicon"
          rel="icon"
          type="image/x-icon"
          href="/icon.png"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0 max-sm:text-[7.75vw]"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
