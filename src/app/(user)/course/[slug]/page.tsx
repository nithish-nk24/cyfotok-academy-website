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

export async function generateMetadata({ params }: CourseDetailPageProp): Promise<Metadata> {
  const courses = await coursesData; // Ensure coursesData is awaited first
  const course = courses.find((course) => course.id === params.slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: course.title,
  };
}

const CourseDetailPage = async ({ params }: CourseDetailPageProp) => {
  const courses = await coursesData; // Ensure coursesData is awaited
  const filteredCourse = courses.filter((course) => course.id === params.slug);

  if (filteredCourse.length === 0) {
    return <div className="mt-28 px-3 text-center text-xl">Course not found</div>;
  }

  return (
    <main className="mt-28 px-3">
      <PagePath category={filteredCourse[0].category} param={filteredCourse[0].title} />
      <Suspense fallback={<Loading />}>
        <CourseDetails courses={filteredCourse} />
      </Suspense>
    </main>
  );
};

export default CourseDetailPage;
