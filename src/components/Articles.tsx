import  { useState } from "react";

interface ArticlePoint {
  title: string;
  content: string;
}

const articlePoints: ArticlePoint[] = [
  {
    title: "Easier for People Using Screen Readers and Assistive Tools",
    content: `Search engines don’t just look at the words on your page—they also analyze how the content is organized behind the scenes.
When you use clear, meaningful tags (like <article> for blog posts or headings in the right order), search engines can better understand the structure of your content.
This can improve how your site appears in search results and make it easier for people to find.

Semantic HTML supports things that search engines care about—like clear structure, easy navigation, and helpful content—making your site more effective overall.`
  },
  {
    title: "Keeps Your Website Organized and Easier to Maintain",
    content: `Using meaningful tags keeps your website’s code clean and easy to understand.
This makes it simpler to update, fix, or redesign in the future—especially if multiple people are working on it.
A well-structured site is also more likely to work well on different devices, like phones and tablets.`
  },
  {
    title: "Helps Search Engines Understand Your Content",
    content: `Search engines don’t just look at the words on your page—they also analyze how the content is organized behind the scenes.
When you use clear, meaningful tags (like <article> for blog posts or headings in the right order), search engines can better understand the structure of your content.
This can improve how your site appears in search results and make it easier for people to find.

Semantic HTML supports things that search engines care about—like clear structure, easy navigation, and helpful content—making your site more effective overall.`
  }
];

export default function Articles() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleParagraph = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="articles" className="my-8">
      <article className="space-y-4">
        <header>
          <h2 className="text-2xl font-semibold">Understanding HTML Semantics</h2>
          <time dateTime="2025-08-14">Aug 14, 2025</time>
        </header>

        <p>
          Semantic HTML helps browsers,{" "}
          <abbr title="Search Engine Optimization">SEO</abbr> tools,
          and assistive technologies understand your content better.
        </p>

        <h3 className="text-xl font-medium">Why Using the Right HTML Tags Matters</h3>
        <p>
          Semantic HTML means using meaningful tags like{" "}
          <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and{" "}
          <code>&lt;footer&gt;</code> to make content easier to understand.
        </p>

        <ul className="list-disc ml-6 space-y-2">
          {articlePoints.map((point, index) => (
            <li key={index}>
              <h4
                className="font-medium cursor-pointer select-none hover:underline hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                onClick={() => toggleParagraph(index)}
              >
                <span
                  className={`transition-transform duration-200 ${
                    openIndex === index ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ►
                </span>
                {point.title}
              </h4>

              {openIndex === index && (
                <p className="mt-2 whitespace-pre-line">{point.content}</p>
              )}
            </li>
          ))}
        </ul>

        <footer>
          <p>
            Written by <address className="inline">Ankit Kumar</address>
          </p>
        </footer>
      </article>
    </section>
  );
}
