import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { parseISO, format } from "date-fns";
import CategoryLabel from "@/components/blog/category";
import markdown from "markdown-it";

const md = markdown();
export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.image;
  const AuthorimageProps = post?.author?.image;
  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <div className="mx-auto max-w-screen-md ">
        <div className="flex justify-center">
          <CategoryLabel categories={post.category} />
        </div>

        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          {post.title}
        </h1>

        <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              {AuthorimageProps && (
                <Link href={"#"}>
                  <Image
                    src={AuthorimageProps}
                    alt={post?.author?.name}
                    className="rounded-full object-cover"
                    fill
                    sizes="40px"
                  />
                </Link>
              )}
            </div>
            <div>
              <p className="text-gray-800 dark:text-gray-400">
                <Link href={`#`}>{post.author.name}</Link>
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <time
                  className="text-gray-500 dark:text-gray-400"
                  dateTime={post?.publishedAt || post._createdAt}
                >
                  {format(
                    parseISO(post?.publishedAt || post._createdAt),
                    "MMMM dd, yyyy"
                  )}
                </time>
                <span>· {post.estReadingTime || "5"} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="section_container">
        <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg my-10">
          {imageProps && (
            <Image
              src={imageProps}
              alt={post.mainImage?.alt || "Thumbnail"}
              loading="eager"
              fill
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>

        {parsedContent ? (
          <article
            className="prose max-w-4xl font-work-sans break-all"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        ) : (
          <p>No Details Provided</p>
        )}
      </section> */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Image Section */}
        <div className="relative mx-auto aspect-video max-w-screen-lg overflow-hidden rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700 transition-transform duration-500 hover:scale-105">
          {imageProps && (
            <Image
              src={imageProps}
              alt={post.image?.alt || "Thumbnail"}
              loading="eager"
              fill
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>

        {/* Content Section */}
        <div className="bg-white dark:bg-gray-900 p-10 mt-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 leading-relaxed max-sm:px-2 max-sm:py-4">
          {parsedContent ? (
            <article
              className="prose lg:prose-xl dark:prose-invert prose-a:text-blue-600 text-lg font-light max-sm:text-xs max-sm:p-1 max-sm:leading-snug max-sm:tracking-tight"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
              No Details Provided
            </p>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/blogs/all"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            Back to Posts
          </Link>
        </div>
      </section>
    </>
  );
}
