import { Link } from "react-router-dom";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      slug: "how-to-rank-your-blog-on-google-first-page",
      title: "HOW TO RANK YOUR BLOG ON GOOGLE FIRST PAGE",
      date: "January 28, 2026",
      category: "Blogs Category",
      author: "Purvi Vyas",
      description:
        "Getting your blog on Google’s first page may sound difficult, but it is 100% possible if you follow the right steps...",
    },
    {
      id: 2,
      slug: "the-importance-of-mobile-optimization",
      title: "THE IMPORTANCE OF MOBILE OPTIMIZATION",
      date: "July 8, 2024",
      category: "Blogs Category",
      author: "Purvi Vyas",
      description:
        "Remember the first time you went to a show and saw your favorite band...",
    },
    {
      id: 3,
      slug: "5-essential-digital-marketing-strategies-for-small-businesses",
      title:
        "5 ESSENTIAL DIGITAL MARKETING STRATEGIES FOR SMALL BUSINESSES",
      date: "July 3, 2024",
      category: "Blogs Category",
      author: "Purvi Vyas",
      description:
        "Digital marketing can be a highly effective tool for small businesses to reach their target audience...",
    },
    {
      id: 4,
      slug: "the-power-of-influencer-marketing",
      title: "THE POWER OF INFLUENCER MARKETING",
      date: "June 4, 2024",
      category: "Blogs Category",
      author: "Purvi Vyas",
      description:
        "Influencer marketing has become a powerful and effective strategy for brands to reach and engage their target audience...",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20">
      <div className="w-full px-12 lg:px-24">

        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-center mb-16 text-black dark:text-white">
          Blog Page
        </h1>

        {/* Blog List */}
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-20">
            <h2 className="text-4xl font-bold tracking-[4px] uppercase mb-4 text-black dark:text-white">
              {blog.title}
            </h2>

            <p className="italic mb-4 text-gray-700 dark:text-gray-400">
              Posted on {blog.date} | in {blog.category} | by {blog.author}
            </p>

            <p className="leading-relaxed mb-8 text-gray-800 dark:text-gray-300">
              {blog.description}
            </p>

            <Link
              to={`/blog/${blog.slug}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md inline-block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}