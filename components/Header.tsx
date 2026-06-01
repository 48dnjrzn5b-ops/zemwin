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
  { title: "Проєкт із землеустрою", href: "/services/proekt-zemleustroyu" },
  {
    title: "Поділ та об’єднання земельних ділянок",
    href: "/services/podil-obiednannya",
  },
  {
    title: "Встановлення меж земельної ділянки",
    href: "/services/vstanovlennya-mezh",
  },
  { title: "Зміна цільового призначення", href: "/services/zmina-tsilovogo" },
  { title: "Топографічна зйомка", href: "/services/topografichna-zyomka" },
  { title: "Експертна оцінка", href: "/services/ekspertna-otsinka" },
  { title: "XML обмінний файл", href: "/services/xml-file" },
  { title: "Технічний паспорт", href: "/services/tehnichnyy-pasport" },
];

export default function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScroll);
      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-[#576969]
        transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-16 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="ZemWin"
            width={180}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-white">
          <Link href="/" className="hover:text-black transition">
            Головна
          </Link>
          <Link href="/#about" className="hover:text-black transition">
            Про нас
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center gap-1 hover:text-black transition"
            >
              Послуги
              <FaChevronDown className="text-[12px]" />
            </button>

            {openServices && (
              <ul className="absolute left-0 top-full w-[340px] rounded-2xl bg-white p-3 text-[#263b3b] shadow-2xl">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="block rounded-xl px-4 py-3 hover:bg-[#EEF3F1]"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/#contacts" className="hover:text-black transition">
            Контакти
          </Link>
          <Link href="/#reviews" className="hover:text-black transition">
            Відгуки
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {[FaTelegramPlane, FaViber, FaWhatsapp, FaEnvelope].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="
                w-10 h-10 rounded-full border border-[#40C057]
                flex items-center justify-center text-[#40C057]
                transition-all duration-300
                hover:-translate-y-1 hover:bg-[#69997D] hover:text-white hover:shadow-lg
                active:scale-95
              "
              >
                <Icon className="text-[18px]" />
              </a>
            )
          )}
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="lg:hidden text-white"
        >
          {openMenu ? <FiX size={30} /> : <HiOutlineMenuAlt3 size={32} />}
        </button>
      </div>

      {openMenu && (
        <div className="lg:hidden px-5 md:px-10 pb-6 text-white">
          <nav className="flex flex-col gap-5 text-[18px]">
            <Link href="/" onClick={() => setOpenMenu(false)}>
              Головна
            </Link>
            <Link href="/#about" onClick={() => setOpenMenu(false)}>
              Про нас
            </Link>

            <button
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center justify-between"
            >
              Послуги
              <FaChevronDown
                className={`transition-transform ${
                  openServices ? "rotate-180" : ""
                }`}
              />
            </button>

            {openServices && (
              <div className="flex flex-col gap-3 rounded-[16px] bg-white/10 p-4 text-[16px]">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setOpenMenu(false)}
                    className="text-white/90"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/#contacts" onClick={() => setOpenMenu(false)}>
              Контакти
            </Link>
            <Link href="/#reviews" onClick={() => setOpenMenu(false)}>
              Відгуки
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
