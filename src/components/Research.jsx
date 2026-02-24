import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ResearchCard = ({ title, description, index, paperUrl }) => {
  return (
    <div className="bg-[#1d1836] p-5 rounded-2xl sm:w-[360px] w-full shadow-lg">
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-gray-400 text-[16px]">{description}</p>
        {paperUrl && (
          <a 
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-[#915eff] rounded-lg text-white text-[14px] hover:bg-[#7544dd] transition-colors"
          >
            Read Paper
          </a>
        )}
      </div>
    </div>
  );
};

const Research = () => {
  const articles = [
    {
      title: "Quantifying Childhood Trauma: Causal Machine Learning Approaches to Mental Health Outcomes",
      description: "Using causal machine learning (CML), to quantify how adverse childhood experiences (ACEs) impact mental health",
      paperUrl: "https://underline.io/lecture/110031-quantifying-childhood-trauma-causal-machine-learning-approaches-to-mental-health-outcomes" // Example URL - replace with actual URL
    },
    {
      title: "TangibleMoments: Embedding XR Memories onto Physical Objects",
      description: "Reimagining how humans share and relive memories and use them to connect with others.",
      paperUrl: "https://ieeexplore.ieee.org/document/10973029/"
    },
  ];

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Academic Work</p>
        <h2 className={styles.sectionHeadText}>Research</h2>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
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