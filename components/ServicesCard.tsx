import Image from "next/image";
import Link from "next/link";
import Button from "./TupButton";

type ServiceCardProps = {
  img: string;
  title: string;
  text: string;
  slug: string;
};

export default function ServiceCard({
  img,
  title,
  text,
  slug,
}: ServiceCardProps) {
  return (
    <div
      className="
        flex
        flex-row
        min-h-[190px]
        md:min-h-[230px]
        lg:min-h-[280px]
        overflow-hidden
        rounded-[15px]
        border
        border-black/20
        bg-[#E2DFDF]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div
        className="
          relative
          w-[38%]
          shrink-0
          overflow-hidden
        "
      >
        <Image
          src={img}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-110
          "
        />
      </div>

      <div
        className="
          flex
          flex-col
          flex-1
          p-4
          md:p-6
          lg:p-8
        "
      >
        <h3
          className="
            text-[17px]
            md:text-[21px]
            lg:text-[24px]
            font-medium
            leading-[1.2]
            text-black
            whitespace-pre-line
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            md:mt-4
            text-[13px]
            md:text-[15px]
            lg:text-[16px]
            leading-[1.4]
            md:leading-[1.5]
            text-black/60
            line-clamp-3
          "
        >
          {text}
        </p>

        <div className="mt-auto pt-4 md:pt-6">
          <Link href={`/services/${slug}`}>
            <Button
              text="Дізнатись більше..."
              className="
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                px-4
                md:px-6
                lg:px-8
                py-2
                md:py-3
                rounded-[15px]
                border
                border-[#69997D]
                text-[#69997D]
                text-[14px]
                md:text-[17px]
                lg:text-xl
                font-light
                transition-all
                duration-300
                hover:bg-[#69997D]
                hover:text-white
                active:scale-95
              "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
