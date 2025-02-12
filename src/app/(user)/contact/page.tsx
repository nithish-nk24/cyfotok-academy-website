import PagePath from "@/components/page-path";
import ContactForm from "@/app/sections/Contact/ContactForm";
import ContactMap from "@/app/sections/Contact/ContactMap";
import { Metadata } from "next";


type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  return {
    title: "Contact - Cyfotok Academy",
  };
}
const ContactPage = () => {
  return (
    <main className="mt-28 px-3">
      <PagePath param={"Contact"} route=" " />
      <ContactMap />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
