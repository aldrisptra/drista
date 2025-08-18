import HeroImage from "/assets/hero-img.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/canva.png";
import Tools7 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },

  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },

  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },

  {
    id: 5,
    gambar: Tools5,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },

  {
    id: 6,
    gambar: Tools6,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Portfolio",
    desk: "Website portofolio pribadi saya untuk menampilkan profil, keahlian, tools, dan beberapa proyek yang pernah saya kerjakan.",
    tools: ["HTML", "Javascript", "React.js"],
    dad: "200",
    linkProyek: "https://aldrisptra.github.io/Aldri-Portofolio/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Portfolio",
    desk: "Website portofolio pribadi saya untuk menampilkan profil, keahlian, tools, dan beberapa proyek yang pernah saya kerjakan.",
    tools: ["HTML", "Tailwind.css", "Javascript", "React.js"],
    dad: "200",
    linkProyek: "https://aldrisptra.github.io/drista/",
  },
];

import Pengalaman1 from "/assets/pengalaman/infinitevol4.jpeg";
import Pengalaman2 from "/assets/pengalaman/stafhmif.jpeg";
import Pengalaman3 from "/assets/pengalaman/hutkm.jpg";
import Pengalaman4 from "/assets/pengalaman/wp24.JPG";
import Pengalaman5 from "/assets/pengalaman/stafmagang.jpg";
import Pengalaman6 from "/assets/pengalaman/infinitevol3.jpg";

export const listPengalaman = [
  {
    id: 1,
    gambarKegiatan: Pengalaman1,
    judul: "Infinite.vol4 ITK",
    subjudul: "KOOR Divisi Lomba",
    desk: [
      "Membagi dan mengoordinasikan tugas kepada staf.",
      "Mengawasi progres kerja tim dan memberikan arahan sesuai kebutuhan Lomba.",
      "Mengawasi pelaksanaan lomba dan evaluasi pasca kegiatan",
    ],
    dad: "200",
    linkAchievement:
      "https://drive.google.com/file/d/1uzo-i8Y_xXQzUSDzAfz5n_02GD2EuQ8A/view?usp=drivesdk",
  },
  {
    id: 2,
    gambarKegiatan: Pengalaman2,
    judul: "Himpunan Mahasiswa Informatika ITK 2024/2025",
    subjudul: "STAFF Departemen Dalam Negri",
    desk: [
      "Bertanggung jawab dalam merancang dan melaksanakan program kerja yang mendukung tujuan departemen",
      "Menginisiasi dan mengembangkan ide kegiatan internal, seperti forum diskusi, internal bonding, dan kegiatan rekreatif.",
      "Membimbing dan mengarahkan staf magang dalam menjalankan tugasnya.",
    ],
    dad: "200",
    linkAchievement:
      "https://drive.google.com/file/d/1uzo-i8Y_xXQzUSDzAfz5n_02GD2EuQ8A/view?usp=drivesdk",
  },
  {
    id: 3,
    gambarKegiatan: Pengalaman3,
    judul: "HUT KM XI ITK",
    subjudul: "STAFF Dvisi Perkamjin",
    desk: [
      "Membantu pengadaan, pendistribusian, dan pengelolaan perlengkapan kegiatan.",
      "Mendukung kelancaran dan ketertiban acara dari sisi keamanan internal.",
      "Mengurus kebutuhan perizinan kegiatan, baik internal maupun eksternal.",
      "Menyiapkan kebutuhan teknis di lapangan sesuai arahan koordinator.",
    ],
    dad: "200",
    linkAchievement:
      "https://drive.google.com/file/d/1-X4wIY_rWij1Jt81kRDVRMdogyLI35ng/view?usp=drive_link",
  },
  {
    id: 4,
    gambarKegiatan: Pengalaman4,
    judul: "Welcome Party Informatika 2024 ITK",
    subjudul: "KOOR Divisi Acara",
    desk: [
      "      Membagi dan mengoordinasikan tugas kepada staf.",
      "Mengawasi progres kerja tim dan memberikan arahan sesuai kebutuhan.",
      "Sebagai penghubung utama antara kebutuhan teknis acara dengan divisi lain.",
    ],
    dad: "200",
    linkAchievement:
      "https://drive.google.com/file/d/1iei2AkV2SvDVxU2JrvrcZg1JAEoq4qsx/view?usp=drive_link",
  },
  {
    id: 5,
    gambarKegiatan: Pengalaman5,
    judul: "Himpunan Mahasiswa Informatika ITK 2023/2024",
    subjudul: "STAFF Magang Departemen Dalam Negri",
    desk: [
      "Menjadi panitia dalam program kerja Departemen Dalam Negri HMIF ITK.",
    ],
    dad: "200",
    linkAchievement:
      "https://drive.google.com/file/d/1UFsBH8ligFTYAjwXsiOU4Usq5naergFu/view?usp=sharing",
  },
  {
    id: 6,
    gambarKegiatan: Pengalaman6,
    judul: "Infinite Vol.3",
    subjudul: "STAFF Divisi Lomba",
    desk: [
      " Menyusun konsep teknis dan alur lomba.",
      "Berkoordinasi dengan peserta dan juri untuk kelancaran pelaksanaan lomba.",
      "Membantu dalam penjurian, dokumentasi, dan evaluasi akhir kegiatan.",
    ],
    dad: "200",
    linkAchievement:
      "https://drive.google.com/file/d/1UFsBH8ligFTYAjwXsiOU4Usq5naergFu/view?usp=sharing",
  },
];
