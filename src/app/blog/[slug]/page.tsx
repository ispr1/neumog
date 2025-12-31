import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPostDetails } from "@/content/blog-details";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BlogPostContent } from "@/components/blog/BlogPostContent";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPostDetails[slug];

  if (!post) {
    return (
      <article className="bg-[var(--sand-50)] py-24 text-[var(--ink-900)] min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Article Not Found</h1>
          <p className="mt-4 text-lg text-[var(--muted-600)]">
            The article you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Link href="/blog" className="text-[var(--accent-600)] hover:text-[var(--accent-700)] font-medium">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-[var(--sand-50)] min-h-screen pb-24">

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="absolute bottom-0 left-0 w-full p-6 pb-12 sm:p-12">
          <div className="mx-auto max-w-4xl">
            <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md border border-cyan-500/30 mb-6">
              {post.tag}
            </span>
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300">


              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 opacity-70" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 opacity-70" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content (Client Component for Theming) */}
      <BlogPostContent post={post} />
    </article>
  );
}
