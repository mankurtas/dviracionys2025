function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-neutral-800 to-neutral-900 text-white px-4 py-10">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Sveiki — <br className="block md:hidden" />
        ar Jūs pasiruošę dar vienam?
      </h1>
      <p className="text-lg md:text-xl text-neutral-300 max-w-xl mb-6">
        Čia prasideda Jūsų kasmetinis žygis.
      </p>
      <img
        src="/dviracionys2025/public/ready.jpeg"
        alt="readyUYU"
        className="rounded-2xl shadow-lg w-full max-w-2xl object-cover"
      />
    </section>
  );
}

export default Hero;
