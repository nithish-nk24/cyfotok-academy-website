
import Testimonials from "@/app/sections/Home/Testimonials";
import TrainingFacilities from "@/app/sections/Home/TrainingFacilities";
import SkillCourse from "@/app/sections/Skills/SkillCourse";
import SkillHeroSection from "@/app/sections/Skills/SkillHeroSection";
import TeamWorkBG from "@/app/sections/Skills/TeamWorkBG";
import { Metadata } from "next";
import  { Suspense } from "react";
import Loading from "./loading";
import { sleep } from "@/app/lib/utils";
import { coursesData } from "../../../../../public/assets/courses";
import { skills } from "../../../../../public/assets/skill/skills";


type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  return {
    title: `Skills | ${slug} - Cyfotok Academy`,
  };
}
const SkillsPage = async ({ params }: Props) => {
  const slug = params.slug;
  const data = coursesData.filter((course) => course.subpage == slug);
  //   console.log(data);
  const HeroData = skills.filter((skill) => skill.subpage == slug);
  // console.log(HeroData);
  await sleep(1000);

  return (
    <main className="mt-28 mx-3">
      <Suspense fallback={<Loading />}>
        <SkillHeroSection data={HeroData} />
        <SkillCourse data={data} />
        <TeamWorkBG />
        <TrainingFacilities />
        <Testimonials />
      </Suspense>
    </main>
  );
};

export default SkillsPage;
