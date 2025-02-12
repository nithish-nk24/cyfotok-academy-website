import PagePath from "@/components/page-path";
import ResourcesHero from "@/app/sections/ResourcesHero";
import ResourcesList from "@/app/sections/ResourcesList";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { resources, resourcesCategory } from "../../../../../public/assets/resources";

type CourseDetailPageProp = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params,
}: CourseDetailPageProp): Promise<Metadata> {
  //getting params and filtering data
  return {
    //after filtering data setting title
    title:
      params.slug == "all"
        ? "All Resources - Cyfotok Academy"
        : "Cyfotok Academy Resources",
  };
}

const ResourcesPage = async () => {
  return (
    <main className="mt-28 px-3">
      <Suspense fallback={<Loading />}>
        <PagePath param={"All Resources"} route="Resources" />
        <ResourcesHero />
        <ResourcesList
          resources={resources}
          resourcesCategory={resourcesCategory}
        />
      </Suspense>
    </main>
  );
};

export default ResourcesPage;
