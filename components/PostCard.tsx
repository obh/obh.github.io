import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-6">
      <Link href={`/posts/${post.slug}`} className="group block">
        <h2 className="text-xl font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {post.frontmatter.title}
        </h2>
        <div className="mt-1 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
          <time dateTime={post.frontmatter.date}>{date}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 line-clamp-2">
          {post.frontmatter.description}
        </p>
      </Link>
      <div className="mt-2 flex gap-2">
        {post.frontmatter.categories.map((cat) => (
          <span
            key={cat}
            className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
          >
            {cat}
          </span>
        ))}
      </div>
    </article>
  );
}
