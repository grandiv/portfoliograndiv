import ContactForm from "../../components/ContactForm";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// react helmet
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Helmet>
        <title>Grandiv | Contact</title>
        <link
          id="favicon"
          rel="icon"
          type="image/x-icon"
          href="/icon.png"
          data-react-helmet="true"
        />
      </Helmet>
      <div
        className="container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full"
      >
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Connect with <span className="text-accent">Grandiv.</span>
          </motion.h2>
          {/* form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
