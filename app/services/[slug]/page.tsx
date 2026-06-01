import { services } from "../../../data/services";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Послугу не знайдено",
    };
  }

  return {
    title: `${service.title} | ZemWin`,
    description: service.description,
    keywords: [
      service.title,
      "землевпорядні послуги",
      "кадастрові роботи",
      "геодезія",
      "Вінниця",
    ],
    openGraph: {
      title: `${service.title} | ZemWin`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-[#F4F1EE]">
        <section className="pt-28 md:pt-32 lg:pt-36 pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#69997D] mb-5 md:mb-6">Послуга</p>

              <h1 className="text-[34px] md:text-[46px] lg:text-[56px] font-medium leading-[1.1] text-black">
                {service.title}
              </h1>

              <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-black/70">
                {service.description}
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-10">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center w-full md:w-auto bg-[#69997D] text-white px-8 py-4 rounded-[12px] transition-all duration-300 hover:bg-[#5B876D] active:scale-95"
                >
                  Замовити консультацію
                </Link>

                <a
                  href="tel:+380972970916"
                  className="inline-flex items-center justify-center w-full md:w-auto border border-[#69997D] text-[#69997D] px-8 py-4 rounded-[12px] transition-all duration-300 hover:bg-[#69997D] hover:text-white active:scale-95"
                >
                  Подзвонити
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[230px] md:h-[360px] lg:h-[460px] rounded-[20px] lg:rounded-[24px] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="hidden lg:block absolute left-0 top-0 h-full w-[130px] bg-gradient-to-r from-[#F4F1EE] to-transparent" />
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black">
                Що це за послуга?
              </h2>

              <p className="mt-5 md:mt-6 text-[16px] md:text-[18px] leading-[1.7] text-black">
                {service.about}
              </p>
            </div>

            <div>
              <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black">
                Коли потрібна послуга?
              </h2>

              <ul className="mt-5 md:mt-6 flex flex-col gap-4">
                {service.whenNeeded.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px] md:text-[18px] text-black"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-6">
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black">
              Що входить у роботу?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8 lg:mt-10">
              {service.workSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[20px] bg-white p-6 md:p-8 min-h-[190px] lg:min-h-[220px]"
                >
                  <span className="text-black text-[20px] md:text-[22px] font-medium">
                    {step.number}
                  </span>

                  <h3 className="mt-5 md:mt-6 text-[18px] md:text-[20px] font-medium text-[#69997D]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[15px] md:text-[16px] leading-[1.5] text-black">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black">
                Необхідні документи
              </h2>

              <ul className="mt-5 md:mt-6 flex flex-col gap-4">
                {service.documents.map((doc, index) => (
                  <li
                    key={index}
                    className="text-[16px] md:text-[18px] text-black"
                  >
                    ✓ {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black">
                Як ми працюємо?
              </h2>

              <div className="mt-6 md:mt-8 flex flex-col gap-6">
                {service.process.map((step) => (
                  <div key={step.number} className="flex gap-4 md:gap-5">
                    <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full border border-[#69997D] flex items-center justify-center text-black">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-[18px] md:text-[20px] font-medium text-[#69997D]">
                        {step.title}
                      </h3>

                      <p className="text-[15px] md:text-[16px] text-black">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
