import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { SITE_DESCRIPTION } from "@/lib/constants";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {SITE_DESCRIPTION}
        </p>
      </section>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
