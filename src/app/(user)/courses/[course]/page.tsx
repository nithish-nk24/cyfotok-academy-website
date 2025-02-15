import PagePath from "@/components/page-path";
import { capatilize } from "@/app/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import CourseHero from "@/app/sections/Courses/CourseHero";
import CourseList from "@/app/sections/Courses/CourseList";
import { notFound } from "next/navigation";

type Props = {
  params: {
    course: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { course } = await params;
  return {
    title: course === "all" ? "All Courses" : `${course} Courses`,
  };
}
const page = async({ params }: Props) => {
  const course = (await params).course;

  if(!course) return notFound()
  // console.log(course);

  return (
    <main className="max-w-screen-2xl mt-28 mx-6">
      <PagePath param={capatilize(course)} route="Courses" />
      <CourseHero />
      <Suspense fallback={<Loading />}>
        <CourseList />
      </Suspense>
    </main>
  );
};

export default page;
