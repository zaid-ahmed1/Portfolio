import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const ResearchCard = ({ title, description, index, paperUrl, comingSoon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      className="bg-tertiary p-6 rounded-2xl flex-1 min-w-[280px] max-w-[380px] card-border card-border-hover flex flex-col"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-2 h-2 rounded-full ${comingSoon ? "bg-secondary" : "bg-accent"}`} />
        <span className={`text-[13px] font-medium uppercase tracking-wider ${comingSoon ? "text-secondary" : "text-accent"}`}>
          {comingSoon ? "Coming Soon" : "Paper"}
        </span>
      </div>
      <h3 className="text-white font-bold text-[22px] leading-[28px]">{title}</h3>
      <p className="mt-3 text-secondary text-[15px] leading-[24px] flex-1">{description}</p>
      {comingSoon ? (
        <span className="mt-5 inline-block px-6 py-2 rounded-lg text-secondary/50 text-[14px] font-medium border border-secondary/20 cursor-not-allowed w-fit">
          Read Paper
        </span>
      ) : paperUrl ? (
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block px-6 py-2 rounded-lg text-accent text-[14px] font-medium border border-accent hover:bg-accent/10 transition-colors duration-200 w-fit"
        >
          Read Paper
        </a>
      ) : null}
    </motion.div>
  );
};

const Research = () => {
  const articles = [
    {
      title: "Exploring Experiential Differences Between Virtual and Physical Memory-Linked Objects in Extended Reality",
      description: "A study of how physical, virtual, and gallery interfaces shape the way we relive and share memories — and the tradeoffs that reveal what we truly value in connection.",
      // paperUrl: "https://doi.org/10.1145/3772363.3798977"
      comingSoon: true,
    },
    {
      title: "TangibleMoments: Embedding XR Memories onto Physical Objects",
      description: "Reimagining how humans share and relive memories and use them to connect with others.",
      paperUrl: "https://ieeexplore.ieee.org/document/10973029/"
    },
    {
      title: "Quantifying Childhood Trauma: Causal Machine Learning Approaches to Mental Health Outcomes",
      description: "Using causal machine learning (CML), to quantify how adverse childhood experiences (ACEs) impact mental health",
      paperUrl: "https://underline.io/lecture/110031-quantifying-childhood-trauma-causal-machine-learning-approaches-to-mental-health-outcomes"
    }
  ];

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Academic Work</p>
        <h2 className={styles.sectionHeadText}>Research.</h2>
      </div>

      <div className="mt-16 flex flex-wrap gap-5">
        {articles.map((article, index) => (
          <ResearchCard
            key={`article-${index}`}
            index={index}
            {...article}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "research");