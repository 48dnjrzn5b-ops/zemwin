import Image from "next/image";
import Link from "next/link";
import {
  FaTelegramPlane,
  FaViber,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const addresses = [
  {
    text: "м. Вінниця вул. Київська, 4 офіс 323",
    link: "https://maps.app.goo.gl/m5T9DzvZASDJAAFh9",
  },
  {
    text: "м. Погребище вул Б.Хмельницького, 73",
    link: "https://maps.app.goo.gl/BdD7PitEptArLiuw7",
  },
  {
    text: "м. Калинівка вул. Незалежності, 49 (центр. Автовокзал)",
    link: "https://maps.app.goo.gl/WD6WFJnWMhKzhDA86",
  },
];

const phones = [
  {
    name: "Загоруйко Ю. О - директор (м. Вінниця)",
    text: "+38 (097) 297 09 16",
    link: "tel:+380972970916",
  },
  {
    name: "Смілянець С. В. - спеціаліст (м. Погребище)",
    text: "+38 (067) 111 22 33",
    link: "tel:+380671112233",
  },
  {
    name: "Сива Л. А. - представник (м. Калинівка)",
    text: "+38 (093) 555 44 22",
    link: "tel:+380935554422",
  },
];

export default function Contact() {
  return (
    <section className="py-10 md:py-14 bg-[#E2DFDF] scroll-mt-24" id="contacts">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-6">
        <div className="mb-8 md:mb-10 text-center rounded-[20px]">
          <h2 className="text-[30px] md:text-[36px] lg:text-[40px] font-regular text-black">
            Контакти
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#848484] font-light">
            Звʼяжіться з нами зручним для вас способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="h-[320px] md:h-[420px] lg:h-auto lg:min-h-[720px] overflow-hidden rounded-[20px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.107581139857!2d28.484099999999998!3d49.2364495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b69246dd68f%3A0x14e8c0460c43f90e!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0JLQuNC90L3QuNGG0LAsINCS0LjQvdC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMjEwMDA!5e0!3m2!1sru!2sua!4v1779725121099!5m2!1sru!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>

          <div className="rounded-[20px] bg-[#E1DEDC] p-6 md:p-10 lg:p-12 lg:min-h-[720px] flex flex-col justify-between">
            <div className="flex flex-col gap-7">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="ZemWin"
                  width={240}
                  height={70}
                  priority
                  className="w-[180px] md:w-[220px] lg:w-[240px] h-auto"
                />
              </Link>

              <div>
                <h3 className="text-[28px] md:text-[34px] lg:text-[40px] font-regular text-black">
                  Адреса
                </h3>

                <div className="flex flex-col gap-3 mt-3">
                  {addresses.map((address, index) => (
                    <a
                      key={index}
                      href={address.link}
                      target="_blank"
                      className="
                        text-[16px]
                        md:text-[18px]
                        lg:text-[20px]
                        text-[#848484]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:text-black
                      "
                    >
                      {address.text}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[28px] md:text-[34px] lg:text-[40px] font-regular text-[#69997D]">
                  Телефон
                </h3>

                <div className="flex flex-col gap-4 mt-4">
                  {phones.map((phone, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
                    >
                      <a
                        href={phone.link}
                        className="
                          text-[16px]
                          md:text-[18px]
                          text-[#848484]
                          whitespace-nowrap
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:text-black
                        "
                      >
                        {phone.text}
                      </a>

                      <p className="text-[15px] md:text-[18px] font-regular text-[#848484]">
                        {phone.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[28px] md:text-[34px] lg:text-[40px] font-regular text-black">
                  G-mail
                </h3>

                <a
                  href="mailto:zemwin@gmail.com"
                  className="
                    mt-3
                    block
                    font-regular
                    text-[16px]
                    md:text-[18px]
                    text-[#848484]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-black
                  "
                >
                  zemwin@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-8">
              {[
                { icon: FaTelegramPlane, href: "https://t.me/USERNAME" },
                { icon: FaViber, href: "viber://chat?number=%2B380972970916" },
                { icon: FaWhatsapp, href: "https://wa.me/380972970916" },
                { icon: FaEnvelope, href: "mailto:zemwin@gmail.com" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    className="
                      w-10
                      h-10
                      rounded-full
                      border
                      border-[#40C057]
                      flex
                      items-center
                      justify-center
                      text-[#40C057]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      hover:bg-[#69997D]
                      hover:text-white
                      active:scale-95
                    "
                  >
                    <Icon className="text-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
