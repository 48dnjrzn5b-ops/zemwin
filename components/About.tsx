import Button from "./TupButton";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      className="bg-[#E2DFDF] pt-[40px] pb-[60px] scroll-mt-24"
      id="about"
    >
      <h2 className="px-6 text-[28px] md:text-[34px] lg:text-4xl text-[#000000] text-center font-medium leading-[1.2]">
        Експерти у сфері землевпорядкування та геодезії
      </h2>

      <h3 className="px-6 text-[16px] md:text-lg text-[#626262] text-center font-medium pt-[15px]">
        Повний цикл послуг від вимірювань до оформлення документів.
      </h3>

      <div className="lg:hidden px-6 md:px-10 pt-[35px]">
        <Image
          src="/about_photo.png"
          alt="Землевпорядні роботи"
          width={900}
          height={600}
          className="w-full h-auto rounded-[20px] object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 pt-[35px] lg:pt-[50px] px-6 md:px-10 lg:px-0">
        <div className="w-full lg:w-[700px]">
          <p className="text-[16px] md:text-[18px] lg:text-[22px] text-[#626262] font-light leading-[1.6] lg:leading-normal">
            Ми виконуємо землевпорядні роботи по Вінницькій області.
            <br className="hidden lg:block" />
            Маємо 3 офіси в Вінниці, Калинівці та Погребищі. Також ми
            <br className="hidden lg:block" />
            працюємо з високоточними приборами GPS, тому ми
            <br className="hidden lg:block" />
            гарантуємо якісне і чітке виконання своєї роботи.
            <br className="hidden lg:block" /> У нас працюють сертифікований
            землевпорядник та
            <br className="hidden lg:block" />
            дипломовані спеціалісти, які якісно виконують свою роботу.
            <br className="hidden lg:block" />
            Ми є виконавцями робіт із землеустрою відповідно до статті
            <br className="hidden lg:block" />
            26 Закону України Про землеустрій та внесені до Державного
            <br className="hidden lg:block" />
            реєстру сертифікованих інженерів-землевпорядників.
            <br className="hidden lg:block" />
            Маємо досвід роботи наших спеціалістів в сфері землеустрою
            <br className="hidden lg:block" />
            більше 15 років.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 mt-10">
            <Link
              href="/#contacts"
              className="
                inline-flex
                items-center
                justify-center
                w-full
                sm:w-auto
                h-[56px]
                px-8
                rounded-[20px]
                bg-[#40C057]
                text-white
                text-[18px]
                lg:text-xl
                font-light
                transition-all
                duration-300
                hover:bg-[#69997D]
                active:scale-95
              "
            >
              Наші Контакти
            </Link>

            <Button
              text="Дізнатись більше..."
              className="
                flex
                items-center
                justify-center
                gap-4
                w-full
                sm:w-auto
                h-[56px]
                px-8
                rounded-[20px]
                border
                border-[#22C55E]
                text-[#69997D]
                text-[18px]
                lg:text-xl
                font-light
                transition-all
                duration-300
                hover:bg-[#69997D]
                hover:text-white
                hover:border-[#69997D]
                active:scale-95
              "
            />
          </div>
        </div>

        <div className="hidden lg:flex shrink-0">
          <Image
            src="/about_photo.png"
            alt="Землевпорядні роботи"
            width={500}
            height={500}
            className="
    w-[500px]
    h-[500px]
    object-cover
    rounded-[20px]
  "
          />
        </div>
      </div>
    </section>
  );
}
