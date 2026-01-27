import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { styles } from '../styles';
import { getPostBySlug } from '../posts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // Redirect to home if post not found
  if (!post) {
    return <Navigate to="/" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-primary min-h-screen">
      <div className={`${styles.paddingX} max-w-4xl mx-auto pt-28 pb-16`}>
        {/* Back button */}
        <Link
          to="/#blog"
          className="text-secondary hover:text-white transition-colors flex items-center gap-2 mb-8"
        >
          <span>&larr;</span> Back to Blog
        </Link>

        {/* Post header */}
        <header className="mb-10">
          <p className="text-gray-400 text-[14px] mb-2">{formattedDate}</p>
          <h1 className="text-white font-black text-[36px] sm:text-[48px] leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Post content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              // Custom styling for markdown elements
              h1: ({ children }) => (
                <h1 className="text-white font-bold text-[32px] mt-10 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-white font-bold text-[26px] mt-8 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-white font-bold text-[20px] mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 text-[17px] leading-[30px] mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="text-gray-300 text-[17px] leading-[30px] mb-4 list-disc list-inside space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="text-gray-300 text-[17px] leading-[30px] mb-4 list-decimal list-inside space-y-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
              code: ({ inline, children }) => (
                inline ? (
                  <code className="bg-[#1d1836] text-[#915eff] px-2 py-1 rounded text-[15px]">{children}</code>
                ) : (
                  <code className="text-gray-300">{children}</code>
                )
              ),
              pre: ({ children }) => (
                <pre className="bg-[#1d1836] p-4 rounded-xl overflow-x-auto mb-6 text-[14px]">{children}</pre>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-[#915eff] hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#915eff] pl-4 italic text-gray-400 my-4">{children}</blockquote>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
