const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center px-10">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a
          className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-emerald-600 after:transition-all after:duration-400 hover:after:w-full"
          href="#beranda"
        >
          Beranda
        </a>
        <a
          className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-emerald-600 after:transition-all after:duration-400 hover:after:w-full"
          href="#tentang"
        >
          Tentang
        </a>
        <a
          className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-emerald-600 after:transition-all after:duration-400 hover:after:w-full"
          href="#proyek"
        >
          Proyek
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/aldrisptra">
          <i className="ri-github-fill ri-2x hover:text-emerald-700"></i>
        </a>
        <a href="https://instagram.com/aldrisptra">
          <i className="ri-instagram-fill ri-2x hover:text-emerald-700"></i>
        </a>
        <a href="https://linkedin.com/in/Muhammad Aldri Saputra">
          <i className="ri-linkedin-fill ri-2x hover:text-emerald-700"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
