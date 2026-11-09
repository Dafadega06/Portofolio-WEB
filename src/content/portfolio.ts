// Single source of truth for portfolio content. Edit placeholders here.
export const profile = {
  name: "Dafa Dega Wijaya",
  email: "dafadega2025@gmail.com",
  location: "Surabaya, Indonesia",
  github: "", // TODO: isi URL GitHub
  linkedin: "", // TODO: isi URL LinkedIn
  cvUrl: "", // TODO: isi URL file CV (mis. /cv.pdf)
};

export type SkillGroup = { id: string; title: string; icon: string; items: string[] };
export const skills: SkillGroup[] = [
  { id: "lang", title: "Programming Languages", icon: "Code2", items: ["Python", "JavaScript", "TypeScript", "Dart", "C", "C++", "C#"] },
  { id: "fe", title: "Frontend Development", icon: "Layout", items: ["React.js", "HTML5", "CSS3", "Vite", "Tailwind CSS"] },
  { id: "be", title: "Backend Development", icon: "Server", items: ["Node.js", "Express.js", "RESTful APIs"] },
  { id: "db", title: "Database & ORM", icon: "Database", items: ["PostgreSQL", "MySQL", "Supabase", "Prisma ORM", "IndexedDB"] },
  { id: "ai", title: "AI & Machine Learning", icon: "Brain", items: ["PyTorch", "OpenCV", "U-Net", "Semantic Segmentation"] },
  { id: "sys", title: "Systems & Networking", icon: "Network", items: ["Linux", "Docker", "Wireshark", "Nginx", "GNS3", "Bash"] },
  { id: "se", title: "Software Engineering", icon: "Boxes", items: ["Object-Oriented Programming", "Unit Testing", "Data Modeling", "Algorithm Design"] },
  { id: "tools", title: "Developer Tools", icon: "Wrench", items: ["Git", "GitHub", "Vercel", "Visual Studio Code", "VMware"] },
  { id: "core", title: "Core Competencies", icon: "Users", items: ["Leadership & Team Coordination", "Stakeholder Communication", "Public Speaking & Presentation", "Cross-functional Collaboration", "Event & Project Coordination", "Problem Solving & Adaptability"] },
];

export type Category = "Full-Stack" | "Frontend" | "Backend" | "AI/ML" | "Software Development";
export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  categories: Category[];
  featured?: boolean;
  features?: string[];
  contribution?: string; // TODO: isi kontribusi pribadi
  image?: string; // URL screenshot (diisi dari file .asset.json)
  github?: string; // TODO
  demo?: string; // TODO
};

export const projects: Project[] = [
  { id: "rice", featured: true, title: "Rice Milling Factory Management System", description: "Sistem manajemen operasional penggilingan padi yang mencakup pembelian gabah, proses produksi, inventory, penjualan, dan analisis data bisnis.", tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "OpenRouter"], categories: ["Full-Stack", "Frontend", "Backend"], features: ["Pembelian gabah", "Proses produksi", "Inventory", "Penjualan", "Analisis data bisnis"] },
  { id: "warung", featured: true, title: "Warung Madura Stock Management System", description: "Aplikasi full-stack untuk pengelolaan inventory, transaksi penjualan, pergerakan stok, dan analisis data operasional retail.", tech: ["React", "TypeScript", "Express.js", "Prisma ORM", "PostgreSQL"], categories: ["Full-Stack", "Backend"], features: ["Pengelolaan inventory", "Transaksi penjualan", "Pergerakan stok", "Analisis operasional"] },
  { id: "satellite", featured: true, title: "Satellite Image Segmentation", description: "Proyek machine learning menggunakan arsitektur U-Net untuk melakukan semantic segmentation pada citra satelit kawasan hutan.", tech: ["Python", "PyTorch", "U-Net", "Google Colab"], categories: ["AI/ML"], features: ["Arsitektur U-Net", "Semantic segmentation", "Citra satelit kawasan hutan"] },
  { id: "todo", title: "Todo App Progressive Web Application", description: "Aplikasi Todo PWA dengan personal dan shared workspace, penyimpanan lokal, kemampuan offline, dan sinkronisasi otomatis ketika koneksi kembali tersedia.", tech: ["JavaScript", "IndexedDB", "Service Workers", "PWA"], categories: ["Frontend", "Software Development"], features: ["Personal & shared workspace", "Offline-first", "Sinkronisasi otomatis"] },
  { id: "silaju", title: "SILAJU", description: "Sistem deteksi lubang jalan berbasis AI yang memprioritaskan lokasi perbaikan berdasarkan kepadatan lalu lintas.", tech: [], categories: ["AI/ML"], features: ["Deteksi lubang jalan", "Prioritas berdasarkan kepadatan lalu lintas"] },
  { id: "laundry", title: "Laundry Management Application", description: "Sistem manajemen laundry berbasis web dengan autentikasi admin dan kasir, pengelolaan pesanan, data pelanggan, dan pembaruan status laundry.", tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"], categories: ["Full-Stack", "Backend"], features: ["Autentikasi admin & kasir", "Pengelolaan pesanan", "Data pelanggan", "Status laundry"] },
  { id: "kawan", title: "Kawan-Inap & RedSeller", description: "Pengembangan aplikasi web interaktif untuk kebutuhan penjualan hotel dan commercial landing pages.", tech: ["React.js", "HTML", "CSS", "Vercel"], categories: ["Frontend"] },
  { id: "parking", title: "E-Ticket Parking", description: "Perancangan ERD dan SQL query untuk sistem parkir dengan fokus pada riwayat transaksi dan pelaporan.", tech: ["ERD", "SQL"], categories: ["Backend"] },
  { id: "pokedex", title: "Pokédex Application", description: "Aplikasi berbasis data untuk menampilkan informasi Pokémon.", tech: [], categories: ["Frontend"] },
  { id: "bioskop", title: "Bioskop Mini", description: "Aplikasi C# dan .NET yang menerapkan konsep OOP, polymorphism, pengelolaan studio, kursi, jadwal, dan pemesanan tiket.", tech: ["C#", ".NET", "OOP"], categories: ["Software Development"], features: ["Polymorphism", "Studio & kursi", "Jadwal", "Pemesanan tiket"] },
  { id: "shadow", title: "Shadow Grid", description: "Game stealth berbasis grid dengan algoritma A* untuk NPC pathfinding, enemy detection, dan Line of Sight menggunakan algoritma Bresenham.", tech: ["A* Pathfinding", "Bresenham"], categories: ["Software Development"], features: ["NPC pathfinding A*", "Enemy detection", "Line of Sight (Bresenham)"] },
];

export const experiences = [
  { org: "Avalon AI Group — PT Automasi Visi Analitika Optima", period: "2025 – Sekarang", role: "Member — Software Engineering" },
  { org: "Bhakti Electics House of Service", period: "2026 – Sekarang", role: "Terlibat dalam pengembangan community website dan kegiatan yang berkaitan dengan solar panels." },
  { org: "Schematics ITS", period: "2026 – Sekarang", role: "Division External Relation, Sub-Division Publication" },
  { org: "FORDA ITS (IMAJAYA)", period: "2025 – 2026", role: "Division Event, Departemen Internal" },
  { org: "INI LHO ITS 2026", period: "2025 – 2026", role: "Sub-Division External, Division Public Relation · PIC & Stakeholder Contact Person · Mentor & PIC Visit di Johor Bahru" },
  { org: "INI LHO ITS 2027", period: "2026", role: "Sub-Division External, Division Public Relation · Expert Staff" },
  { org: "DevSprints Accelerator", period: "2026", role: "AI Feature Developer" },
  { org: "Web Development UCS — UKM Cyber Security ITS", period: "2026", role: "Backend Development" },
  { org: "Informatics Engineering Graduation Committee", period: "2026", role: "Sub-Division External, Division Liaison Officer" },
  { org: "School Ambassador", period: "2021 – 2023", role: "MC school anniversary, mentoring, socialization, dan welcoming external guests" },
  { org: "Organization & Leadership", period: "2019 – 2024", role: "OSIS, Pramuka, dan Classmeet Leader" },
  { org: "Basketball", period: "2020 – 2023", role: "Liga PERBASI, DBL, dan SMA Awards" },
];

export const trainings = [
  { name: "Advanced Bootcamp", by: "Schematics" },
  { name: "SynchroMove", by: "Schematics Web Training" },
  { name: "Basic Bootcamp", by: "ICHIRO" },
  { name: "AI for Work Career Readiness with Google AI Product", by: "HACKTIV8" },
  { name: "NALARA Academy National AI & Deep Learning Acceleration Bootcamp", by: "Universitas Brawijaya · Intermediate Level" },
  { name: "MAGE 12 ITS", by: "Workshop Multimedia dengan proyek AI-based website" },
  { name: "DevSprints Accelerator", by: "Program akselerasi teknologi selama enam minggu" },
];

export const education = [
  { school: "Institut Teknologi Sepuluh Nopember (ITS)", field: "Informatics Engineering", period: "2025 – 2029" },
  { school: "SMAN 2 Lumajang", field: "Mathematics and Natural Sciences", period: "2021 – 2024" },
];
