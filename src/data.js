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

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];

import Pengalaman1 from "/assets/pengalaman/infinitevol4.jpeg";
import Pengalaman2 from "/assets/pengalaman/stafhmif.jpeg";
// import Pengalaman3 from "/assets/pengalaman/hutkm.jpg";
// import Pengalaman4 from "/assets/pengalaman/wp.jpg";
// import Pengalaman5 from "/assets/pengalaman/stafmagang.jpg";
// import Pengalaman6 from "/assets/pengalaman/infinitevol3.jpeg";

export const listPengalaman = [
  {
    id: 1,
    gambarKegiatan: Pengalaman1,
    judul: "Infinite.vol4",
    subjudul: "Koor Divisi Lomba",
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
    judul: "STAFF HMIF",
    desk: [
      "Tanggung jawab saya mencakup:",
      "Membagi dan mengoordinasikan tugas kepada staf.",
      "Mengawasi progres kerja tim dan memberikan arahan sesuai kebutuhan Lomba.",
      "Mengawasi pelaksanaan lomba dan evaluasi pasca kegiatan",
    ],
    dad: "300",
  },
];
