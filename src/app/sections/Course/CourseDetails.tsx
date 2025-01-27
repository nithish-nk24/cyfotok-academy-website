import Image from "next/image";
import { CalendarDays, LetterText, School, Trophy } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { CourseData } from "@/lib/types";
import FacilitiesCard from "@/components/facilitiesCard";
import CourseDescription from "../CourseDescription";
import { whatsapp, facilitiesData } from "../../../../public/assets/assets";

type CoursesProps = {
  courses: CourseData[];
};
const CourseDetails = ({ courses }: CoursesProps) => {
  const courseData = courses[0];
  return (
    <section className="my-10">
      <ShineBorder
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        className="p-0"
        borderWidth={2}
      >
        <div className="bg-gradient-to-r from-pink-500 to-rose-500  rounded-xl flex justify-center items-center p-6 gap-4 max-lg:flex-col">
          <div className="w-1/2 relative h-full max-lg:w-full">
            <Image
              src={courseData.imageSrc}
              alt={courseData.title}
              width={1080}
              height={1080}
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center gap-6 max-xl:gap-3 text-white h-full max-lg:w-full">
            <h2 className="text-4xl font-bold max-xl:text-2xl">
              {courseData.title}
            </h2>
            <p className="font-semibold text-base max-xl:text-sm">
              {courseData.metaDesc}
            </p>
            <ul className="flex items-center justify-between">
              <li className="font-semibold flex gap-2 text-sm">
                <CalendarDays className="w-5 h-5 " />
                <span>{`Course Duration: ${courseData.duration}`}</span>
              </li>
              <li className="font-semibold flex gap-2 text-sm">
                <School className="w-5 h-5 " />
                <span>{`Course Duration: ${courseData.class} Classes`}</span>
              </li>
              {courseData.state && (
                <li className="max-sm:hidden">
                  <span
                    className={`${
                      courseData.state == "Popular"
                        ? "bg-orange-700"
                        : "bg-green-700"
                    } px-2 py-1 rounded-lg max-xl:text-sm`}
                  >
                    {courseData.state}
                  </span>
                </li>
              )}
            </ul>
            <p className="font-semibold text-lg max-xl:text-sm flex items-center gap-2">
              <Trophy className="w-5 h-5 " />
              {`No.of Placements: ${courseData.placed}`}
            </p>
            <p className="font-semibold text-lg max-xl:text-sm flex items-center gap-2">
              <LetterText className="w-5 h-5" />
              Languages Covered: {courseData.language}
            </p>

            <div className="flex gap-2">
              <Button className="px-5 py-2 text-xl font-semibold bg-black text-blacktext-white max-sm:text-base">
                Book Demo
              </Button>
              <Link href={"https://wa.me/+919167121201"} target="_blank">
                <Button className="px-5 py-2 text-xl font-semibold bg-green-700 text-white hover:bg-green-800 flex items-center max-sm:text-base">
                  <Image
                    src={whatsapp}
                    alt="whatsapp"
                    width={20}
                    height={20}
                    className="w-8 h-8 max-sm:w-5 max-sm:h-5"
                  />
                  Chat With WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ShineBorder>
      <CourseDescription
        desc={courseData.desc}
        require={courseData.requirement}
        faq={courseData.faq}
        lessonItems={courseData.lessonItems}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-md:px-3">
        {facilitiesData.map((item, index) => (
          <FacilitiesCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CourseDetails;
