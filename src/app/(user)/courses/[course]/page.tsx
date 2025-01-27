import PagePath from "@/components/page-path";
import { capatilize } from "@/app/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import CourseHero from "@/app/sections/Courses/CourseHero";
import CourseList from "@/app/sections/Courses/CourseList";

type Props = {
  params: {
    course: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = params.course;
  return {
    title: course === "all" ? "All Courses" : `${course} Courses`,
  };
}
const page = ({ params }: Props) => {
  const course = params.course;
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
