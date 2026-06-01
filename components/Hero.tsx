import Button from "./TupButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        h-screen
        bg-[url('/hero.jpg')]
        bg-cover
        bg-center
        flex
        items-center
      "
    >
      <div className="px-6 md:px-12 lg:px-32 text-white">
        <h1
          className="    text-[34px]
    md:text-[42px]
    lg:text-5xl
    font-bold
    leading-tight"
        >
          Землевпорядні та геодезичні <br /> роботи
        </h1>

        <p
          className="    mt-6
    text-[16px]
    md:text-[18px]
    lg:text-xl
    text-[#E5E5E5]
    max-w-[650px]"
        >
          Сертифікований землевпорядник у Вінниці – кадастрові послуги,
          <br /> технічна документація, межі земельних ділянок, всі види
          геодезичних робіт
        </p>

        <div
          className="    flex
    flex-col
    md:flex-row
    gap-4
    md:gap-10
    mt-10
    md:mt-20"
        >
          <Link
            href="/#services"
            className="
  inline-flex
  items-center
  justify-center

  w-full
  md:w-auto

  h-[56px]
  md:h-[60px]

  px-10
  rounded-[20px]
  bg-[#40C057]

  text-white
  text-[18px]
  md:text-xl

  font-light
  leading-none

  transition-all
  duration-300

  hover:bg-[#69997D]
  active:scale-95
"
          >
            Наші послуги
          </Link>

          <Button
            text="Зателефонувати нам"
            icon
            className="
    flex   items-center
  justify-center
  gap-4

  w-full
  md:w-auto

  h-[56px]
  md:h-[60px]

  px-10
  rounded-[20px]

  border
  border-[#22C55E]

  text-white
  text-[18px]
  md:text-xl

  font-light
  leading-none

  transition-all
  duration-300

  hover:bg-[#69997D]
  hover:border-[#69997D]

  active:scale-95
  "
          />
        </div>
      </div>
    </section>
  );
}
