import PagePath from "@/components/page-path";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import CourseDetails from "@/app/sections/Course/CourseDetails";
import { coursesData } from "../../../../../public/assets/courses";

type CourseDetailPageProp = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params,
}: CourseDetailPageProp): Promise<Metadata> {
  //getting params and filtering data
  const title = coursesData.filter((course) => course.id === params.slug);
  return {
    //after filtering data setting title
    title: title[0].title,
  };
}
const CourseDetailPage = async ({ params }: CourseDetailPageProp) => {
  // console.log(params);
  const filteredCourse = coursesData.filter(
    (course) => course.id === params.slug
  );

  return (
    <main className="mt-28 px-3">
      <PagePath
        category={filteredCourse[0].category}
        param={filteredCourse[0].title}
      />
      <Suspense fallback={<Loading />}>
        <CourseDetails courses={filteredCourse} />
      </Suspense>
    </main>
  );
};

export default CourseDetailPage;
