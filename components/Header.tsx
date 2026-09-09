"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaTelegramPlane,
  FaViber,
  FaWhatsapp,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";

const services = [
  {
    title: "Присвоєння кадастрового номера",
    href: "/services/kadastrovyy-nomer",
  },
  {
    title: "Проєкт із землеустрою",
    href: "/services/proekt-zemleustroyu",
  },
  {
    title: "Поділ та об’єднання земельних ділянок",
    href: "/services/podil-obiednannya",
  },
  {
    title: "Встановлення меж земельної ділянки",
    href: "/services/vstanovlennya-mezh",
  },
  {
    title: "Зміна цільового призначення",
    href: "/services/zmina-tsilovogo",
  },
  {
    title: "Топографічна зйомка",
    href: "/services/topografichna-zyomka",
  },
  {
    title: "Експертна оцінка",
    href: "/services/ekspertna-otsinka",
  },
  {
    title: "XML обмінний файл",
    href: "/services/xml-file",
  },
  {
    title: "Технічний паспорт",
    href: "/services/tehnichnyy-pasport",
  },
];

const socialLinks = [
  {
    icon: FaTelegramPlane,
    href: "https://t.me/Yurchik_910",
    label: "Telegram",
  },
  {
    icon: FaViber,
    href: "viber://chat?number=%2B380972960916",
    label: "Viber",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/380972960916",
    label: "WhatsApp",
  },
  {
    icon: FaEnvelope,
    href: "mailto:zemwin@gmail.com",
    label: "Email",
  },
];

export default function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  // Ховаємо Header при прокручуванні вниз
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setShowHeader(true);
      } else if (currentScroll > lastScroll) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Закриваємо мобільне меню
  const closeMobileMenu = () => {
    setOpenMenu(false);
    setOpenServices(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-[#576969]
        transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* ================= DESKTOP / TOP ================= */}
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-16 py-4">
        {/* LOGO */}
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/logo.svg"
            alt="ZemWin"
            width={180}
            height={50}
            priority
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-6 text-white">
          <Link
            href="/"
            className="hover:text-black transition-colors duration-200"
          >
            Головна
          </Link>

          <Link
            href="/#about"
            className="hover:text-black transition-colors duration-200"
          >
            Про нас
          </Link>

          {/* ПОСЛУГИ */}
          <div
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button
              type="button"
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center gap-1 hover:text-black transition-colors duration-200"
            >
              Послуги
              <FaChevronDown
                className={`
                  text-[12px]
                  transition-transform duration-200
                  ${openServices ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* DROPDOWN */}
            {openServices && (
              <ul className="absolute left-0 top-full mt-2 w-[340px] rounded-2xl bg-white p-3 text-[#263b3b] shadow-2xl">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="
                        block
                        rounded-xl
                        px-4 py-3
                        hover:bg-[#EEF3F1]
                        transition-colors
                      "
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/#contacts"
            className="hover:text-black transition-colors duration-200"
          >
            Контакти
          </Link>

          <Link
            href="/#reviews"
            className="hover:text-black transition-colors duration-200"
          >
            Відгуки
          </Link>
        </nav>

        {/* ================= DESKTOP SOCIAL ICONS ================= */}
        <div className="hidden lg:flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="
                w-10 h-10
                rounded-full
                border border-[#40C057]
                flex items-center justify-center
                text-[#40C057]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#69997D]
                hover:text-white
                hover:shadow-lg
                active:scale-95
              "
            >
              <Icon className="text-[18px]" />
            </a>
          ))}
        </div>

        {/* ================= MOBILE BURGER ================= */}
        <button
          type="button"
          onClick={() => {
            setOpenMenu(!openMenu);
            setOpenServices(false);
          }}
          aria-label={openMenu ? "Закрити меню" : "Відкрити меню"}
          className="
            lg:hidden
            text-white
            flex items-center justify-center
          "
        >
          {openMenu ? <FiX size={30} /> : <HiOutlineMenuAlt3 size={32} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {openMenu && (
        <div className="lg:hidden px-5 md:px-10 pb-6 text-white">
          <nav className="flex flex-col gap-5 text-[18px]">
            {/* ГОЛОВНА */}
            <Link href="/" onClick={closeMobileMenu}>
              Головна
            </Link>

            {/* ПРО НАС */}
            <Link href="/#about" onClick={closeMobileMenu}>
              Про нас
            </Link>

            {/* ПОСЛУГИ */}
            <button
              type="button"
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center justify-between w-full text-left"
            >
              <span>Послуги</span>

              <FaChevronDown
                className={`
                  transition-transform duration-200
                  ${openServices ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* МОБІЛЬНИЙ СПИСОК ПОСЛУГ */}
            {openServices && (
              <div
                className="
                  flex flex-col
                  gap-3
                  rounded-[16px]
                  bg-white/10
                  p-4
                  text-[16px]
                "
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMobileMenu}
                    className="
                      text-white/90
                      hover:text-white
                      transition-colors
                    "
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            {/* КОНТАКТИ */}
            <Link href="/#contacts" onClick={closeMobileMenu}>
              Контакти
            </Link>

            {/* ВІДГУКИ */}
            <Link href="/#reviews" onClick={closeMobileMenu}>
              Відгуки
            </Link>

            {/* ================= MOBILE SOCIAL ICONS ================= */}
            <div
              className="
                flex items-center
                gap-4
                pt-5
                mt-1
                border-t border-white/20
              "
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="
                    w-10 h-10
                    rounded-full
                    border border-[#40C057]
                    flex items-center justify-center
                    text-[#40C057]
                    transition-all duration-300
                    hover:bg-[#69997D]
                    hover:text-white
                    hover:-translate-y-1
                    active:scale-95
                  "
                >
                  <Icon className="text-[18px]" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
