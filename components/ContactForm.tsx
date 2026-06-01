"use client";

import { useState } from "react";

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const sendPhone = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    });

    const data = await response.json();
    console.log(data);

    setName("");
    setPhone("");
  };

  return (
    <form
      onSubmit={sendPhone}
      className="flex flex-col lg:flex-row gap-4 w-full"
    >
      <input
        type="text"
        placeholder="Ваше ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full lg:w-[220px] h-[56px] px-5 rounded-[15px]  bg-[#4D4D4D] outline-none focus:border-[#69997D]"
      />

      <input
        type="tel"
        placeholder="Ваш номер телефону"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full lg:w-[260px] h-[56px] px-5 rounded-[15px] bg-[#4D4D4D] outline-none focus:border-[#69997D]"
      />

      <button
        type="submit"
        className="w-full lg:w-auto h-[56px] px-8 rounded-[15px] bg-[#69997D] text-white font-light text-lg transition-all duration-300 hover:bg-[#5B876D] active:scale-95"
      >
        Надіслати
      </button>
    </form>
  );
}
