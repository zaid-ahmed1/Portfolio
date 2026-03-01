import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send('service_uzqin5o', 'template_eohitoh',
        {
          from_name: form.name,
          to_name: "Zaid Ahmed",
          from_email: form.email,
          to_email: "contact@zaid-ahmed.me",
          message: form.message,
        },
        'fEuWPrix4kOaw9ONe'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. I will get back to you soon!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Sorry, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex justify-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="max-w-2xl w-full bg-black-100 p-8 rounded-2xl card-border"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=""
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border border-subtle font-medium focus:border-accent transition-colors duration-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=""
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border border-subtle font-medium focus:border-accent transition-colors duration-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=""
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border border-subtle font-medium focus:border-accent transition-colors duration-200 resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-accent py-3 px-8 rounded-lg outline-none w-fit text-white font-bold hover:bg-[#7a4de0] transition-colors duration-200"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <p className="mt-6 text-secondary text-[14px]">
          Or reach me at{" "}
          <a href="mailto:contact@zaid-ahmed.me" className="text-accent hover:underline">
            contact@zaid-ahmed.me
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");