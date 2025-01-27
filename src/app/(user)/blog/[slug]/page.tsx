import PagePath from "@/components/page-path";
import Loading from "./loading";
import BlogHero from "@/app/sections/Blog/BlogHero";
import { Metadata } from "next";
import { Suspense } from "react";
import { blogs } from "../../../../../public/assets/blog";

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
  const blogData = blogs.filter((blog) => blog.id === params.slug)[0];
  return (
    <main className="mt-28 mx-6 max-md:mx-3">
      <PagePath param={blogData.title} route="Blogs" />
      <Suspense fallback={<Loading />}>
        <BlogHero blogData={blogData} />
      </Suspense>
    </main>
  );
};

export default BlogPage;
