import PagePath from "@/components/page-path";
import BlogsHero from "@/app/sections/Blogs/BlogsHero";
import BlogsList from "@/app/sections/Blogs/BlogsList";
import { Metadata } from "next";
import { Suspense } from "react";
import { blogs } from "../../../../../public/assets/blog";
import Loading from "./loading";

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  return {
    title:
      slug === "all"
        ? "All Blogs - Cyfotok Academy"
        : `All Blogs - Cyfotok Academy`,
  };
}
const BlogsPage = async () => {
  const blogsData = blogs.sort((a, b) => a.date.localeCompare(b.date));
  // console.log(blogs);
  return (
    <main className="mt-28 mx-6 max-md:mx-3">
      <PagePath param={"All Blogs"} route="Blogs" />
      <BlogsHero />

      <Suspense fallback={<Loading />}>
        <BlogsList blogsData={blogsData} />
      </Suspense>
    </main>
  );
};

export default BlogsPage;
