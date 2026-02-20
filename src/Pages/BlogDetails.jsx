import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

export default function BlogDetails() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const blogs = [
    {
      slug: "how-to-rank-your-blog-on-google-first-page",
      title: "HOW TO RANK YOUR BLOG ON GOOGLE FIRST PAGE",
      date: "January 28, 2026",
      category: "Blogs Category",
      author: "Purvi Vyas",
      content: (
        <>
          <p>
            Getting your blog on Google’s first page may sound difficult, but it is <strong>100% possible</strong> if you follow the right steps.
            You don’t need to be a technical expert — just focus on good content and smart SEO practices.
          </p>

          <h2>1. CHOOSE THE RIGHT KEYWORD</h2>
          <p>Before writing any blog, ask yourself:</p>
          <p className="italic">
            What will people search on Google to find this topic?
          </p>

          <ul>
            <li>Use tools like Google search suggestions</li>
            <li>Choose long keywords instead of short ones</li>
            <li>Use keyword in title and first paragraph</li>
          </ul>

          <h2>2. WRITE HELPFUL AND ORIGINAL CONTENT</h2>
          <p>Google loves content that actually helps people.</p>

          <ul>
            <li>Easy language</li>
            <li>Clear steps</li>
            <li>Examples</li>
            <li>No copy-paste</li>
          </ul>

          <h2>3. USE PROPER HEADINGS (H1, H2, H3)</h2>
          <p>Headings improve SEO and readability.</p>

          <h2>4. IMPROVE WEBSITE SPEED</h2>
          <ul>
            <li>Compress images</li>
            <li>Use good hosting</li>
            <li>Enable caching</li>
          </ul>

          <h2>5. MAKE YOUR WEBSITE MOBILE FRIENDLY</h2>
          <p>Google follows mobile-first indexing.</p>

          <h2>6. BUILD BACKLINKS</h2>
          <ul>
            <li>Share on social media</li>
            <li>Write guest posts</li>
            <li>Ask bloggers to link</li>
          </ul>

          <h2>FINAL THOUGHTS</h2>
          <p>
            If you focus on <strong>helping your readers first</strong>, Google will reward you with better rankings.
          </p>
        </>
      ),
    },
    {
      slug: "the-importance-of-mobile-optimization",
      title: "HOW TO RANK YOUR BLOG ON GOOGLE FIRST PAGE",
      date: "January 28, 2026",
      category: "Blogs Category",
      author: "Purvi Vyas",
      content: (
        <>
          <p>
            Getting your blog on Google’s first page may sound difficult, but it is <strong>100% possible</strong> if you follow the right steps.
            You don’t need to be a technical expert — just focus on good content and smart SEO practices.
          </p>

          <h2>1. CHOOSE THE RIGHT KEYWORD</h2>
          <p>Before writing any blog, ask yourself:</p>
          <p className="italic">
            What will people search on Google to find this topic?
          </p>

          <ul>
            <li>Use tools like Google search suggestions</li>
            <li>Choose long keywords instead of short ones</li>
            <li>Use keyword in title and first paragraph</li>
          </ul>

          <h2>2. WRITE HELPFUL AND ORIGINAL CONTENT</h2>
          <p>Google loves content that actually helps people.</p>

          <ul>
            <li>Easy language</li>
            <li>Clear steps</li>
            <li>Examples</li>
            <li>No copy-paste</li>
          </ul>

          <h2>3. USE PROPER HEADINGS (H1, H2, H3)</h2>
          <p>Headings improve SEO and readability.</p>

          <h2>4. IMPROVE WEBSITE SPEED</h2>
          <ul>
            <li>Compress images</li>
            <li>Use good hosting</li>
            <li>Enable caching</li>
          </ul>

          <h2>5. MAKE YOUR WEBSITE MOBILE FRIENDLY</h2>
          <p>Google follows mobile-first indexing.</p>

          <h2>6. BUILD BACKLINKS</h2>
          <ul>
            <li>Share on social media</li>
            <li>Write guest posts</li>
            <li>Ask bloggers to link</li>
          </ul>

          <h2>FINAL THOUGHTS</h2>
          <p>
            If you focus on <strong>helping your readers first</strong>, Google will reward you with better rankings.
          </p>
        </>
      ),
    },
    {
      slug: "5-essential-digital-marketing-strategies-for-small-businesses",
      title: "HOW TO RANK YOUR BLOG ON GOOGLE FIRST PAGE",
      date: "January 28, 2026",
      category: "Blogs Category",
      author: "Purvi Vyas",
      content: (
        <>
          <p>
            Getting your blog on Google’s first page may sound difficult, but it is <strong>100% possible</strong> if you follow the right steps.
            You don’t need to be a technical expert — just focus on good content and smart SEO practices.
          </p>

          <h2>1. CHOOSE THE RIGHT KEYWORD</h2>
          <p>Before writing any blog, ask yourself:</p>
          <p className="italic">
            What will people search on Google to find this topic?
          </p>

          <ul>
            <li>Use tools like Google search suggestions</li>
            <li>Choose long keywords instead of short ones</li>
            <li>Use keyword in title and first paragraph</li>
          </ul>

          <h2>2. WRITE HELPFUL AND ORIGINAL CONTENT</h2>
          <p>Google loves content that actually helps people.</p>

          <ul>
            <li>Easy language</li>
            <li>Clear steps</li>
            <li>Examples</li>
            <li>No copy-paste</li>
          </ul>

          <h2>3. USE PROPER HEADINGS (H1, H2, H3)</h2>
          <p>Headings improve SEO and readability.</p>

          <h2>4. IMPROVE WEBSITE SPEED</h2>
          <ul>
            <li>Compress images</li>
            <li>Use good hosting</li>
            <li>Enable caching</li>
          </ul>

          <h2>5. MAKE YOUR WEBSITE MOBILE FRIENDLY</h2>
          <p>Google follows mobile-first indexing.</p>

          <h2>6. BUILD BACKLINKS</h2>
          <ul>
            <li>Share on social media</li>
            <li>Write guest posts</li>
            <li>Ask bloggers to link</li>
          </ul>

          <h2>FINAL THOUGHTS</h2>
          <p>
            If you focus on <strong>helping your readers first</strong>, Google will reward you with better rankings.
          </p>
        </>
      ),
    },
    {
      slug: "the-power-of-influencer-marketing",
      title: "HOW TO RANK YOUR BLOG ON GOOGLE FIRST PAGE",
      date: "January 28, 2026",
      category: "Blogs Category",
      author: "Purvi Vyas",
      content: (
        <>
          <p>
            Getting your blog on Google’s first page may sound difficult, but it is <strong>100% possible</strong> if you follow the right steps.
            You don’t need to be a technical expert — just focus on good content and smart SEO practices.
          </p>

          <h2>1. CHOOSE THE RIGHT KEYWORD</h2>
          <p>Before writing any blog, ask yourself:</p>
          <p className="italic">
            What will people search on Google to find this topic?
          </p>

          <ul>
            <li>Use tools like Google search suggestions</li>
            <li>Choose long keywords instead of short ones</li>
            <li>Use keyword in title and first paragraph</li>
          </ul>

          <h2>2. WRITE HELPFUL AND ORIGINAL CONTENT</h2>
          <p>Google loves content that actually helps people.</p>

          <ul>
            <li>Easy language</li>
            <li>Clear steps</li>
            <li>Examples</li>
            <li>No copy-paste</li>
          </ul>

          <h2>3. USE PROPER HEADINGS (H1, H2, H3)</h2>
          <p>Headings improve SEO and readability.</p>

          <h2>4. IMPROVE WEBSITE SPEED</h2>
          <ul>
            <li>Compress images</li>
            <li>Use good hosting</li>
            <li>Enable caching</li>
          </ul>

          <h2>5. MAKE YOUR WEBSITE MOBILE FRIENDLY</h2>
          <p>Google follows mobile-first indexing.</p>

          <h2>6. BUILD BACKLINKS</h2>
          <ul>
            <li>Share on social media</li>
            <li>Write guest posts</li>
            <li>Ask bloggers to link</li>
          </ul>

          <h2>FINAL THOUGHTS</h2>
          <p>
            If you focus on <strong>helping your readers first</strong>, Google will reward you with better rankings.
          </p>
        </>
      ),
    }
  ];

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Blog Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6 text-gray-900 dark:text-white">
          {blog.title}
        </h1>

        {/* Meta */}
        <p className="italic text-gray-600 dark:text-gray-400 mb-10">
          Posted on {blog.date} | in {blog.category} | by {blog.author}
        </p>

        {/* Content */}
        <div className="space-y-6 text-lg leading-8 text-gray-800 dark:text-gray-300
                        [&>h2]:text-2xl
                        [&>h2]:font-bold
                        [&>h2]:uppercase
                        [&>h2]:tracking-wide
                        [&>h2]:mt-10
                        [&>ul]:list-disc
                        [&>ul]:pl-6
                        [&>ul]:space-y-2">

          {blog.content}

        </div>

        {/* Back Button */}
        <div className="mt-16">
          <Link
            to="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Copyright Text*/}
        <div className="mt-20 pt-6 border-t border-gray-300 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          &copy; King Technology. All Rights Reserved.
        </div>

      </div>
    </section>
  );
}