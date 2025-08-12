import DataImage from "./data";
import { listTools, listProyek } from "./data";
function App() {
  return (
    <>
      <section id="beranda">
        <div className="hero container mx-auto px-10 grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div>
            <div className="animate__animated animate__slideInLeft animate__delay-1s">
              <div className="flex items-center gap-3 mb-6 bg-teal-700 w-fit p-4 rounded-2xl">
                <img
                  src={DataImage.HeroImage}
                  alt="Hero Image"
                  className="w-10 rounded-md"
                  loading="lazy"
                />
                <q>Tela Tela campur bakso, Telasooo.😜</q>
              </div>
              <h1 className="text-3xl/tight font-bold mb-6">
                Hi sundala, Saya Muhammad Aldri Saputra
              </h1>
              <p className="text-base/loose mb-6 opacity-70">
                Halo, saya Aldri mahasiswa Program Studi Informatika di Institut
                Teknologi Kalimantan. Saya memiliki ketertarikan khusus di
                bidang Front-End Development
              </p>
              <div className="flex items-center sm:gap-4 gap-2">
                <a
                  href="https://drive.google.com/file/d/1XpSOb3Eaj1rn-nsmkBnj_m_wesp0dzui/view"
                  className="bg-teal-700 p-4 rounded-2xl hover:bg-teal-600"
                >
                  Download CV <i className="ri-download-line ri-lg"></i>
                </a>
                <a
                  href="#"
                  className="bg-teal-700 p-4 rounded-2xl hover:bg-teal-600"
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
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-teal-900 rounded-lg"
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
                className="flex items-center gap-2 p-3 border border border-teal-700 hover:border-teal-500 rounded-md group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-gray-800"
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
              className="p-4 bg-teal-900 border border-teal-700 hover:border-teal-500 rounded-md"
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
                      className="py-1 px-3 border border-teal-500 bg-teal-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-teal-700 p-3 rounded-lg block border border-teal-600 hover:bg-teal-600"
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

      {/* -------------kontak----------- */}
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
