import DataImage from "./data";
import { listTools, listProyek, listPengalaman } from "./data";
import TextType from "./components/TextType/TextType";
function App() {
  return (
    <>
      <section id="beranda">
        <div className="hero container mx-auto px-10 grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div>
            <div className="animate__animated animate__slideInLeft animate__delay-1s">
              <div className="flex items-center gap-3 mb-6 bg-emerald-700 w-fit p-4 rounded-2xl">
                <img
                  src={DataImage.HeroImage}
                  alt="Hero Image"
                  className="w-10 rounded-md"
                  loading="lazy"
                />
                <q>
                  Hello{" "}
                  <span className="font-bold text-emerald-400">World!</span>{" "}
                  Welcome to my{" "}
                  <span className="font-bold text-emerald-400">Portfolio</span>
                  .😜
                </q>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold mb-6 whitespace-nowrap overflow-hidden">
                <TextType
                  text={["Muhammad Aldri Saputra", "Muhammad Aldri Saputra"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </h1>

              <p className="text-base/loose mb-6 opacity-70">
                Halo, saya Aldri mahasiswa Program Studi Informatika di Institut
                Teknologi Kalimantan. Saya memiliki ketertarikan khusus di
                bidang Front-End Development
              </p>
              <div className="flex items-center sm:gap-4 gap-2">
                <a
                  href="https://drive.google.com/file/d/1XpSOb3Eaj1rn-nsmkBnj_m_wesp0dzui/view"
                  className="bg-emerald-700 p-4 rounded-2xl hover:bg-emerald-600"
                >
                  Lihat CV <i className="ri-download-line ri-lg"></i>
                </a>
                <a
                  href="#proyek"
                  className="bg-emerald-700 p-4 rounded-2xl hover:bg-emerald-600"
                >
                  Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[500px] md:ml-auto rounded-4xl animate__animated animate__slideInRight animate__delay-1s"
            loading="lazy"
          />
        </div>
      </section>
      {/* ------------Tentang----------- */}

      <div className="tentang container mx-auto px-10 mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-emerald-900 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-base/loose mb-10">
            Halo! Saya Muhammad Aldri Saputra, mahasiswa Program Studi
            Informatika di Institut Teknologi Kalimantan. Saya memiliki semangat
            tinggi dalam belajar dan berkarya di bidang teknologi, terutama
            dalam pengembangan antarmuka pengguna (front-end). Fokus utama saya
            adalah membangun tampilan web yang menarik, responsif, dan
            interaktif menggunakan React.js dan Tailwind CSS sebagai teknologi
            utama. Sebelum menempuh pendidikan di perguruan tinggi, saya belajar
            di SMKN 1 Balikpapan, jurusan Teknik Komputer dan Jaringan (TKJ),
            yang menjadi dasar kuat bagi ketertarikan saya terhadap dunia IT dan
            pengembangan web. Saya telah mengerjakan beberapa proyek pribadi,
            seperti website portofolio ini, sebagai wadah eksplorasi kemampuan
            saya. Di luar akademik, saya aktif dalam organisasi dan berbagai
            kepanitiaan kampus, yang membantu saya mengasah soft skill dan
            kemampuan bekerja dalam tim.
          </p>
          <div className="flex items-center justify-between"></div>
        </div>
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Berikut ini beberapa tools yang pernah saya pakai
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-emerald-700 hover:border-emerald-500 rounded-md group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-emerald-800 p-1 group-hover:bg-emerald-800"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------Tentang----------- */}

      {/* -------------Proyek--------- */}
      <div
        className="proyek container mx-auto px-10 mt-32 py-10"
        id="proyek"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut ini beberapa proyek yang telah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-emerald-900 border border-emerald-700 hover:border-emerald-500 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy " />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-emerald-500 bg-emerald-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-emerald-700 p-3 rounded-lg block border border-emerald-600 hover:bg-emerald-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* -------------Proyek--------- */}

      {/* -------------Pengalaman--------- */}
      <div
        className="pengalaman container mx-auto px-4 sm:px-6 lg:px-12 mt-32 py-10"
        id="pengalaman"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-2">
          Pengalaman
        </h1>
        <p
          className="text-sm sm:text-base text-center opacity-50 max-w-2xl mx-auto"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Beberapa pengalaman organisasi dan kepanitiaan saya di kampus
        </p>

        <div className="pengalaman-box mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listPengalaman.map((exp) => (
            <div
              key={exp.id}
              className="bg-emerald-900 border border-emerald-700 hover:border-emerald-500 rounded-md overflow-hidden flex flex-col"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-delay={exp.dad}
            >
              {/* Gambar */}
              <img
                src={exp.gambarKegiatan}
                alt={exp.judul}
                className="w-full h-100 sm:h-100 md:h-100 lg:h-100 object-cover"
                loading="lazy"
              />

              {/* Konten */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-3 flex flex-wrap items-center gap-2">
                  {exp.judul}
                  {exp.linkAchievement && (
                    <a
                      href={exp.linkAchievement}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-emerald-700 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-1 text-xs sm:text-sm"
                    >
                      <i className="ri-award-line text-sm"></i>
                      Lihat Sertifikat
                    </a>
                  )}
                </h3>

                <p className="opacity-90 text-sm sm:text-base">
                  {exp.subjudul}
                </p>
                <ul className="list-disc list-inside opacity-70 mb-4 text-sm sm:text-base">
                  {exp.desk.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------Pengalaman--------- */}
      <div className="kontak mt-32 sm:p-10 p-0 px-10" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/11231050@student.itk.ac.id"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-700 p-3 rounded-lg w-full cursor-pointer border border-teal-600 hover:bg-teal-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* -------------kontak----------- */}
    </>
  );
}

export default App;
