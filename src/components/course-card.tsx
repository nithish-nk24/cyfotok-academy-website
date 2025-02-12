import ShineBorder from "@/components/ui/shine-border";
import { CalendarDays, School } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  duration: string | number;
  classes: number | string;
  selling?: string;
};

const CourseCard = ({
  imgUrl,
  title,
  duration,
  classes,
  id,
  selling,
}: CourseCardProps) => {
  return (
    <Link href={`/course/${id}`}>
      <ShineBorder
        className="p-0 hover:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderWidth={2}
      >
        <div className="flex flex-col h-[350px] w-[300px] rounded-lg scale-90 hover:scale-95 hover:bg-white/50  duration transition cursor-pointer">
          <Image
            src={imgUrl}
            alt={""}
            width={200}
            height={200}
            className="w-full object-cover border rounded-lg "
          />
          <div className="p-3 flex flex-col gap-3">
            <h2 className="text-xl font-semibold h-[80px] max-md:text-lg">
              {title.slice(0, 66).concat("...")}
            </h2>
            <ul className="flex items-center gap-2">
              <li className="flex items-center  text-black/50">
                <CalendarDays className="w-5 h-5 " />
                <span className="ml-1 -mb-1 text-sm">{duration}</span>
              </li>
              <li className="flex items-center  text-black/50">
                <School className="w-5 h-5 " />
                <span className="ml-1 -mb-1 text-sm">{`${classes} Classes`}</span>
              </li>
              <li><span className={`px-3 py-1 rounded-lg bg-black text-white text-xs ${selling === 'Popular'&&'bg-gradient-to-t from-pink-500 to-rose-500'}`}>{selling}</span></li>
            </ul>
          </div>
        </div>
      </ShineBorder>
    </Link>
  );
};

export default CourseCard;
