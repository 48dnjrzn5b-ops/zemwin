import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <section id="contacts" className="bg-[#2B2B2B] scroll-mt-24">
      <div className="w-full max-w-[700px] mx-auto px-6 md:px-8 lg:px-0 pt-12 lg:pt-15 pb-12 lg:pb-15">
        <nav className="flex justify-center text-[#767676]">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[16px]">
            <li>
              <Link href="/" className="transition hover:text-white">
                Головна
              </Link>
            </li>

            <li>
              <Link href="/#about" className="transition hover:text-white">
                Про нас
              </Link>
            </li>

            <li>
              <Link href="/#services" className="transition hover:text-white">
                Послуги
              </Link>
            </li>

            <li>
              <Link href="/#contacts" className="transition hover:text-white">
                Контакти
              </Link>
            </li>

            <li>
              <Link href="/#reviews" className="transition hover:text-white">
                Відгуки
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-center text-[#767676] text-[15px] md:text-[16px] leading-[25px] pb-5 tracking-[0.02em] pt-5">
          Залиште свій номер, і ми вам передзвонимо або зателефонуйте за
          вказаними номерами у вкладці Контакти
        </p>

        <div className="flex justify-center w-full">
          <div className="w-full">
            <ContactForm />
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#848484] mt-10"></div>

        <p className="text-center md:text-right text-[#767676] pt-8 md:pt-10 text-[14px] md:text-[16px]">
          © ФОП Загоруйко Ю.О. 2025р
        </p>
      </div>
    </section>
  );
}
