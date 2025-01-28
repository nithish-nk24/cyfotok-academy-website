// import PagePath from "@/components/page-path";
import Loading from "./loading";
// import BlogHero from "@/app/sections/Blog/BlogHero";
import { Metadata } from "next";
import { Suspense } from "react";
// import { blogs } from "../../../../../public/assets/blog";
import { client } from "@/sanity/lib/client";
import { BLOG_BY_ID_QUERY } from "@/sanity/lib/queries";
import PostPage from "@/app/sections/Blog/PostPage";

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  // console.log(slug);

  return {
    title: `Blog | ${slug} - Cyfotok Academy`,
  };
}
const BlogPage = async ({ params }: Props) => {
  const id = (await params).slug;
  // const blogData = blogs.filter((blog) => blog.id === params.slug)[0];
  const blog = await client.fetch(BLOG_BY_ID_QUERY, { id });
  // console.log(JSON.stringify(blog, null, 2));

  return (
    <main className="mt-28 mx-6 max-md:mx-3">
      {/* <PagePath param={blogData.title} route="Blogs" /> */}
      <Suspense fallback={<Loading />}>
        {/* <BlogHero blogData={blogData} /> */}
        <PostPage post={blog}  />
      </Suspense>
    </main>
  );
};

export default BlogPage;
