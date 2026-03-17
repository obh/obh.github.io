import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { SITE_TITLE } from "@/lib/constants";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        type: "article",
        siteName: SITE_TITLE,
      },
    };
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const date = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {post.frontmatter.title}
          </h1>
          <div className="mt-2 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <time dateTime={post.frontmatter.date}>{date}</time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-3 flex gap-2">
            {post.frontmatter.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {cat}
              </span>
            ))}
          </div>
        </header>
        <div className="prose max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
