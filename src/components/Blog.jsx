import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { posts } from '../posts';
import { SectionWrapper } from '../hoc';

const BlogCard = ({ slug, title, date, excerpt }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-[#1d1836] p-6 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-xl transition-shadow">
      <p className="text-gray-400 text-[14px]">{formattedDate}</p>
      <h3 className="text-white font-bold text-[22px] mt-2">{title}</h3>
      <p className="mt-3 text-gray-400 text-[15px] leading-relaxed">{excerpt}</p>
      <Link
        to={`/blog/${slug}`}
        className="mt-4 inline-block px-6 py-2 bg-[#915eff] rounded-lg text-white text-[14px] hover:bg-[#7544dd] transition-colors"
      >
        Read More
      </Link>
    </div>
  );
};

const Blog = () => {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Thoughts</p>
        <h2 className={styles.sectionHeadText}>Blog</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Writing about software engineering, XR development, and things I'm learning along the way.
      </p>

      <div className="mt-16 flex flex-wrap gap-7">
        {sortedPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, 'blog');
