import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function ConsultationPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F4F1EE] min-h-screen pt-28 md:pt-32 pb-16 md:pb-24">
        <section className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <p className="text-[#69997D] mb-4 text-[16px] md:text-[18px]">
            Консультація
          </p>

          <h1 className="text-[34px] md:text-[44px] lg:text-[52px] font-medium leading-[1.1] text-black">
            Замовити консультацію
          </h1>

          <p className="mt-6 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-black/70">
            Залиште свій номер телефону, і ми звʼяжемося з вами для уточнення
            деталей щодо земельної ділянки, документів або потрібної послуги.
          </p>

          <div className="mt-10 md:mt-12 flex justify-center">
            <div className="w-full max-w-[520px]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
