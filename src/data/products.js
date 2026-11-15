export const CATEGORIES = [
  { id: 'all', name: 'Barcha mahsulotlar', icon: 'Sparkles' },
  { id: 'phones', name: 'Telefonlar va Gadjetlar', icon: 'Smartphone' },
  { id: 'computers', name: 'Kompyuterlar va Noutbuklar', icon: 'Laptop' },
  { id: 'clothing', name: 'Kiyimlar va Techwear', icon: 'Shirt' },
  { id: 'shoes', name: 'Oyoq kiyimlar va Krossovkalar', icon: 'Footprints' },
  { id: 'audio', name: 'Naushniklar va Audio', icon: 'Headphones' },
  { id: 'accessories', name: 'Aksessuarlar va Soatlar', icon: 'Watch' }
];

export const BANNERS = [
  {
    id: 1,
    title: "BLACK EDITION EXCLUSIVE",
    subtitle: "Yangi iPhone 16 Pro Max Black Titanium",
    badge: "KATTA CHEGIRMA -25%",
    desc: "12 oyga foizsiz muddatli to'lov! Boshlang'ich to'lovsiz, 1 kunda yetkazib beramiz.",
    buttonText: "Xarid qilish",
    category: "phones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80",
    bgColor: "from-blue-950 via-slate-900 to-black"
  },
  {
    id: 2,
    title: "CYBERPUNK & TECHWEAR 2026",
    subtitle: "Mavsumning eng zamonaviy qora kiyimlari",
    badge: "YANGI KOLLEKSIYA",
    desc: "Suv o'tkazmaydigan material, premium qulaylik va bepul kiyib ko'rish imkoniyati.",
    buttonText: "Kolleksiyani ko'rish",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    bgColor: "from-indigo-950 via-slate-900 to-black"
  },
  {
    id: 3,
    title: "ULTRA GAMING & PRO WORKSTATIONS",
    subtitle: "MacBook Pro M3 Max va Asus ROG noutbuklari",
    badge: "MAXSUS TAKLIF",
    desc: "Kuchli videokartalar, 4K ekranlar va 2 yillik rasmiy kafolat bilan.",
    buttonText: "Tanlash",
    category: "computers",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    bgColor: "from-sky-950 via-gray-900 to-black"
  },
  {
    id: 4,
    title: "LEGENDARY SNEAKER DROPS",
    subtitle: "Air Jordan, Yeezy & Triple Black Series",
    badge: "100% ORIGINAL",
    desc: "Cheklangan sonli seriyalar. Har bir juftlik asl va tekshirilgan.",
    buttonText: "Buyurtma berish",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
    bgColor: "from-blue-900 via-neutral-950 to-black"
  }
];

export const PRODUCTS = [
  // TELEFONLAR
  {
    id: 1,
    name: "Apple iPhone 16 Pro Max 256GB Black Titanium",
    category: "phones",
    categoryName: "Telefonlar",
    price: 16499000,
    oldPrice: 19500000,
    discount: 15,
    installmentPrice: 1680000,
    rating: 4.9,
    reviewsCount: 384,
    isHit: true,
    isNew: true,
    stock: 14,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black Titanium", "Natural Titanium", "Dark Blue"],
    specs: {
      "Xotira": "256 GB",
      "Ekran": "6.9\" Super Retina XDR OLED, 120Hz",
      "Protsessor": "Apple A18 Pro (3nm)",
      "Asosiy kamera": "48 MP + 48 MP + 12 MP (5x zoom)",
      "Batareya": "4685 mAh, Tezkor quvvatlash",
      "Kafolat": "1 yil rasmiy Apple kafolati"
    },
    description: "Eng so'nggi titan korpusli iPhone 16 Pro Max. Kamera boshqaruvining yangi tugmachasi, A18 Pro chipi va batareyaning aql bovar qilmas ishlash muddati."
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra 12GB/512GB Titanium Black",
    category: "phones",
    categoryName: "Telefonlar",
    price: 14999000,
    oldPrice: 17800000,
    discount: 16,
    installmentPrice: 1520000,
    rating: 4.8,
    reviewsCount: 247,
    isHit: true,
    isNew: false,
    stock: 9,
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Titanium Black", "Titanium Violet", "Titanium Gray"],
    specs: {
      "Xotira": "12 GB / 512 GB",
      "Ekran": "6.8\" Dynamic AMOLED 2X, 120Hz, 2600 nit",
      "Protsessor": "Snapdragon 8 Gen 3 for Galaxy",
      "Asosiy kamera": "200 MP + 50 MP + 12 MP + 10 MP",
      "S-Pen": "Mavjud (korpus ichida)",
      "Kafolat": "1 yil rasmiy Samsung kafolati"
    },
    description: "Galaxy AI imkoniyatlari bilan boyitilgan eng kuchli Android flagmani. 200MP kamerasi va yorqin quyosh ostida aks etmaydigan ekran."
  },
  {
    id: 3,
    name: "Xiaomi 14 Ultra 16GB/512GB Leica Edition Black",
    category: "phones",
    categoryName: "Telefonlar",
    price: 12400000,
    oldPrice: 14900000,
    discount: 17,
    installmentPrice: 1260000,
    rating: 4.7,
    reviewsCount: 119,
    isHit: false,
    isNew: true,
    stock: 6,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Obsidian Black", "Pure White"],
    specs: {
      "Xotira": "16 GB / 512 GB",
      "Kamera": "Leica Summilux 4x 50 MP optikasi",
      "Ekran": "6.73\" LTPO AMOLED, WQHD+",
      "Quvvatlash": "90W simli, 80W simsiz",
      "Kafolat": "1 yil to'liq kafolat"
    },
    description: "Mobil fotografiyaning cho'qqisi. 1 dyuymli Sony sensor va afsonaviy Leica optik linzalari."
  },
  {
    id: 4,
    name: "Google Pixel 9 Pro 16GB/256GB Obsidian Black",
    category: "phones",
    categoryName: "Telefonlar",
    price: 11800000,
    oldPrice: 13500000,
    discount: 13,
    installmentPrice: 1200000,
    rating: 4.9,
    reviewsCount: 88,
    isHit: false,
    isNew: true,
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Obsidian Black", "Porcelain"],
    specs: {
      "Xotira": "16 GB / 256 GB",
      "Protsessor": "Google Tensor G4 + Titan M2",
      "Sun'iy intellekt": "Gemini Nano o'rnatilgan",
      "Yangilanishlar": "7 yil rasmiy Android yangilanishi",
      "Kafolat": "1 yil rasmiy kafolat"
    },
    description: "Eng toza Android tajribasi va chuqur integratsiyalashgan sun'iy intellekt xususiyatlari."
  },

  // KOMPYUTERLAR VA NOUTBUKLAR
  {
    id: 5,
    name: "Apple MacBook Pro 16\" M3 Max 36GB / 1TB SSD Space Black",
    category: "computers",
    categoryName: "Kompyuterlar",
    price: 38900000,
    oldPrice: 44000000,
    discount: 12,
    installmentPrice: 3950000,
    rating: 5.0,
    reviewsCount: 164,
    isHit: true,
    isNew: true,
    stock: 5,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Space Black", "Silver"],
    specs: {
      "Chip": "Apple M3 Max (14 yadro CPU, 30 yadro GPU)",
      "RAM": "36 GB Unified Memory",
      "SSD": "1 TB NVMe supertezkor",
      "Ekran": "16.2\" Liquid Retina XDR, 120Hz ProMotion",
      "Batareya": "22 soatgacha avtonom ishlash",
      "Kafolat": "1 yil Apple rasmiy xalqaro kafolati"
    },
    description: "Dasturchilar, dizaynerlar va 3D mutaxassislari uchun yaratilgan eng kuchli portativ noutbuk. Anodlangan qora rang barmoq izlarini qoldirmaydi."
  },
  {
    id: 6,
    name: "ASUS ROG Zephyrus G16 OLED Core Ultra 9 / RTX 4080 / 32GB",
    category: "computers",
    categoryName: "Kompyuterlar",
    price: 31500000,
    oldPrice: 36000000,
    discount: 13,
    installmentPrice: 3200000,
    rating: 4.9,
    reviewsCount: 92,
    isHit: true,
    isNew: true,
    stock: 7,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Eclipse Gray", "Platinum White"],
    specs: {
      "Protsessor": "Intel Core Ultra 9 185H",
      "Videokarta": "NVIDIA GeForce RTX 4080 12GB GDDR6",
      "RAM": "32 GB LPDDR5X 7467 MHz",
      "SSD": "2 TB PCIe 4.0 SSD",
      "Ekran": "16\" ROG Nebula OLED 2.5K 240Hz",
      "Og'irligi": "Atigi 1.85 kg ultra ingichka metall korpus"
    },
    description: "Ultra yupqa, ammo haqiqiy o'yin va og'ir hisoblash quroli. 240Hz OLED ekrani hayratlanarli tiniqlik beradi."
  },
  {
    id: 7,
    name: "Lenovo Legion Pro 7i Core i9-14900HX / RTX 4090 / 64GB / 2TB",
    category: "computers",
    categoryName: "Kompyuterlar",
    price: 36800000,
    oldPrice: 42000000,
    discount: 12,
    installmentPrice: 3740000,
    rating: 4.8,
    reviewsCount: 76,
    isHit: false,
    isNew: false,
    stock: 4,
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Onyx Grey"],
    specs: {
      "Protsessor": "Intel Core i9-14900HX (24 yadro)",
      "Videokarta": "NVIDIA GeForce RTX 4090 16GB (175W TGP)",
      "RAM": "64 GB DDR5 5600 MHz",
      "Sovutish": "Legion Coldfront 5.0 bug' kamerasi",
      "Ekran": "16\" WQXGA 240Hz 500 nit"
    },
    description: "Murosasiz kuch. Har qanday zamonaviy o'yin va render jarayonlarini maksimal ko'rsatkichlarda yengadi."
  },
  {
    id: 8,
    name: "Dell XPS 15 OLED Core i7 / 32GB / 1TB / RTX 4060 Business Pro",
    category: "computers",
    categoryName: "Kompyuterlar",
    price: 24500000,
    oldPrice: 28000000,
    discount: 12,
    installmentPrice: 2490000,
    rating: 4.7,
    reviewsCount: 53,
    isHit: false,
    isNew: false,
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Platinum Silver / Carbon Black"],
    specs: {
      "Ekran": "15.6\" 3.5K OLED Sensorli ekran",
      "Korpus": "Uglerod tolasi va frezalangan alyuminiy",
      "RAM": "32 GB DDR5",
      "SSD": "1 TB M.2 PCIe"
    },
    description: "Biznes egalari va talabchan mutaxassislar uchun ixcham, mustahkam va nihoyatda chiroyli noutbuk."
  },

  // KIYIMLAR VA TECHWEAR
  {
    id: 9,
    name: "BLACK Cyberpunk Waterproof Tactical Trench Coat",
    category: "clothing",
    categoryName: "Kiyimlar",
    price: 1850000,
    oldPrice: 2800000,
    discount: 34,
    installmentPrice: 190000,
    rating: 4.9,
    reviewsCount: 215,
    isHit: true,
    isNew: true,
    stock: 22,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Deep Black", "Midnight Blue"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    specs: {
      "Material": "Gore-Tex membrana va 100% suv o'tkazmaydigan neylon",
      "Mavsum": "Bahor / Kuz / Qish",
      "Xususiyati": "Magnitli cho'ntaklar, sozlanuvchi tasma va shamol himoyasi",
      "Ishlab chiqaruvchi": "BLACK Studio Korea"
    },
    description: "Premium techwear uslubidagi uzun qora plash. Qattiq shamol va kuchli yomg'irda mutlaq quruq saqlaydi."
  },
  {
    id: 10,
    name: "Heavyweight 450GSM Oversized Streetwear Hoodie Black",
    category: "clothing",
    categoryName: "Kiyimlar",
    price: 650000,
    oldPrice: 950000,
    discount: 31,
    installmentPrice: 67000,
    rating: 4.9,
    reviewsCount: 512,
    isHit: true,
    isNew: false,
    stock: 45,
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Onyx Black", "Charcoal Gray", "Dark Navy"],
    sizes: ["S", "M", "L", "XL"],
    specs: {
      "Mato": "100% Organik og'ir paxta (450 GSM)",
      "Bichimi": "Drop shoulder qulay oversize",
      "Kapushon": "Ikki qavatli mustahkam shakl saqlovchi",
      "Parvarish": "30 darajada mashinada yuvish mumkin"
    },
    description: "Yuvilganda shaklini va qora rangini yo'qotmaydigan, ichi mayin flisli eng mashhur qora xudi."
  },
  {
    id: 11,
    name: "Tactical Multi-Pocket Cargo Pants Deep Navy / Black",
    category: "clothing",
    categoryName: "Kiyimlar",
    price: 790000,
    oldPrice: 1150000,
    discount: 31,
    installmentPrice: 82000,
    rating: 4.8,
    reviewsCount: 178,
    isHit: false,
    isNew: true,
    stock: 18,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Matte Black", "Deep Navy"],
    sizes: ["M", "L", "XL", "2XL"],
    specs: {
      "Tarkibi": "97% Paxta, 3% Spandeks (elastik qulaylik)",
      "Cho'ntaklar": "6 ta funksional fermuarli va tugmali cho'ntaklar",
      "Pastki qismi": "Sozlanuvchi manjetli rezinka"
    },
    description: "Kundalik shahar hayoti va faol harakat uchun mo'ljallangan yengil va mustahkam kargo shimlari."
  },
  {
    id: 12,
    name: "Minimalist Black Bomber Jacket with Silver Accents",
    category: "clothing",
    categoryName: "Kiyimlar",
    price: 1350000,
    oldPrice: 1900000,
    discount: 29,
    installmentPrice: 140000,
    rating: 4.8,
    reviewsCount: 89,
    isHit: false,
    isNew: false,
    stock: 12,
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Jet Black"],
    sizes: ["M", "L", "XL"],
    specs: {
      "Astar": "Ipakdek silliq viskoza astar",
      "Fermuar": "Yaponiyaning YKK metall fermuarlari",
      "Mavsum": "Bahor va kuz"
    },
    description: "Klassik aviator bichimi zamonaviy qora dizaynda. Har qanday jinsi va krossovkalar bilan ajoyib mos tushadi."
  },

  // OYOQ KIYIMLAR VA KROSSOVKALAR
  {
    id: 13,
    name: "Nike Air Jordan 1 Retro High OG Shadow Black/Grey",
    category: "shoes",
    categoryName: "Oyoq kiyimlar",
    price: 2450000,
    oldPrice: 3200000,
    discount: 23,
    installmentPrice: 250000,
    rating: 5.0,
    reviewsCount: 420,
    isHit: true,
    isNew: true,
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Shadow Black / Grey", "Triple Black"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    specs: {
      "Tepa qismi": "100% Tabiiy silliq charm (Full-grain leather)",
      "Taglik": "Air-Sole yostiqchali rezina taglik",
      "Kafolat": "Aslligi sertifikatlangan, 6 oy kafolat"
    },
    description: "Barcha zamonlarning eng afsonaviy krossovkasi. Yuqori sifatli qalin tabiiy charm va oyoqni qulay tutuvchi taglik."
  },
  {
    id: 14,
    name: "Adidas Yeezy Boost 350 V2 Onyx All-Black Edition",
    category: "shoes",
    categoryName: "Oyoq kiyimlar",
    price: 3100000,
    oldPrice: 4000000,
    discount: 22,
    installmentPrice: 320000,
    rating: 4.9,
    reviewsCount: 310,
    isHit: true,
    isNew: false,
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Onyx Black"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    specs: {
      "Texnologiya": "To'liq Boost amortizatsiyasi",
      "Tepa qismi": "Nafas oluvchi Primeknit to'qimasi",
      "Qulaylik": "Paypoqdek oyoqni o'rab turadi"
    },
    description: "Kun bo'yi charchoqsiz yurishni ta'minlaydigan yumshoq Boost tagligi va nafas oluvchi Primeknit korpusi."
  },
  {
    id: 15,
    name: "New Balance 9060 Triple Black Chunky Futuristic",
    category: "shoes",
    categoryName: "Oyoq kiyimlar",
    price: 1950000,
    oldPrice: 2600000,
    discount: 25,
    installmentPrice: 200000,
    rating: 4.8,
    reviewsCount: 167,
    isHit: false,
    isNew: true,
    stock: 11,
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Triple Black"],
    sizes: ["40", "41", "42", "43", "44"],
    specs: {
      "Amortizatsiya": "ABZORB va SBS qo'shaloq taglik",
      "Material": "Tabiiy zamsh va to'rli nafas oluvchi mato",
      "Uslub": "Y2K futuristik dizayn"
    },
    description: "2026-yilning eng trenddagi ko'rinishi. Qalin va o'zgacha profilli taglik har qanday obrazga kuchli urg'u beradi."
  },
  {
    id: 16,
    name: "Prada Style Chunky Sole Chelsea Leather Boots Black",
    category: "shoes",
    categoryName: "Oyoq kiyimlar",
    price: 1750000,
    oldPrice: 2400000,
    discount: 27,
    installmentPrice: 180000,
    rating: 4.7,
    reviewsCount: 94,
    isHit: false,
    isNew: false,
    stock: 10,
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Glossy Black", "Matte Black"],
    sizes: ["39", "40", "41", "42", "43"],
    specs: {
      "Material": "Yuqori sifatli 100% buzoq terisi",
      "Taglik": "Sirg'anmaydigan chuqur protektorli rezina",
      "Fasl": "Kuz / Qish / Erta bahor"
    },
    description: "Klassik chelsi etiklarining zamonaviy qalin taglikdagi talqini. Suv va sovuqdan ishonchli himoya."
  },

  // NAUSHNIKLAR VA AUDIO
  {
    id: 17,
    name: "Apple AirPods Max Space Gray Active Noise Cancelling",
    category: "audio",
    categoryName: "Audio",
    price: 7200000,
    oldPrice: 8500000,
    discount: 15,
    installmentPrice: 740000,
    rating: 4.9,
    reviewsCount: 318,
    isHit: true,
    isNew: false,
    stock: 12,
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Space Gray", "Midnight", "Silver"],
    specs: {
      "Shovqinni bostirish": "Pro darajadagi ANC va Shaffoflik rejimi",
      "Ovoz": "Spatial Audio fazoviy ovoz kuzatuvi bilan",
      "Ishlash vaqti": "20 soatgacha bir quvvatlanishda",
      "Ulagich": "USB-C yangilangan versiyasi"
    },
    description: "Anodlangan alyuminiy chashkalar, to'rli qulay boshbog' va teatrdek fazoviy ovoz tajribasi."
  },
  {
    id: 18,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Black",
    category: "audio",
    categoryName: "Audio",
    price: 4300000,
    oldPrice: 5100000,
    discount: 15,
    installmentPrice: 440000,
    rating: 4.8,
    reviewsCount: 245,
    isHit: true,
    isNew: false,
    stock: 16,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "Midnight Blue"],
    specs: {
      "Protsessor": "HD Shovqin bostiruvchi QN1 + V1 integratsiyalashgan chip",
      "Batareya": "30 soat davomli ishlash (3 daqiqada 3 soatlik tez quvvat)",
      "Kodeklar": "LDAC Hi-Res Audio simsiz qo'llab-quvvatlash"
    },
    description: "Dunyoning eng yaxshi shovqin bostiruvchi naushniklaridan biri. Parvozda, metroda va shovqinli ofisda mutlaq sukunat beradi."
  },

  // AKSESSUARLAR VA SOATLAR
  {
    id: 19,
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm Titanium with Ocean Band",
    category: "accessories",
    categoryName: "Aksessuarlar",
    price: 10400000,
    oldPrice: 12200000,
    discount: 14,
    installmentPrice: 1060000,
    rating: 4.9,
    reviewsCount: 189,
    isHit: true,
    isNew: true,
    stock: 9,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Titanium Black", "Natural Titanium"],
    specs: {
      "Ekran": "3000 nit quyoshda tiniq ko'rinuvchi sapfir oyna",
      "Himoya": "100m suv o'tkazmaydi, harbiy standart MIL-STD 810H",
      "Batareya": "72 soatgacha energiya tejash rejimida",
      "Qo'shimcha": "Ikki marta urish (Double Tap) imo-ishora nazorati"
    },
    description: "Ekstremal sport turlari, sho'ng'ish va sarguzashtlar uchun mo'ljallangan eng baquvvat aqlli soat."
  },
  {
    id: 20,
    name: "Keychron Q1 Pro Wireless Custom Mechanical Keyboard Carbon",
    category: "accessories",
    categoryName: "Aksessuarlar",
    price: 2400000,
    oldPrice: 2900000,
    discount: 17,
    installmentPrice: 245000,
    rating: 4.9,
    reviewsCount: 103,
    isHit: false,
    isNew: true,
    stock: 14,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Carbon Black"],
    specs: {
      "Korpus": "To'liq CNC ishlov berilgan alyuminiy og'ir korpus",
      "Switchlar": "Gateron Jupiter Brown (taktil mayin tovush)",
      "Ulanish": "Bluetooth 5.1 yoki Type-C simli",
      "Moslik": "Mac va Windows to'liq qo'llab-quvvatlaydi"
    },
    description: "Premium og'ir metall mexanik klaviatura. Har bir tugmani bosish o'zgacha yoqimli akustik zavq bag'ishlaydi."
  }
];

export const CITIES = [
  "Toshkent shahri",
  "Samarqand",
  "Buxoro",
  "Andijon",
  "Farg'ona",
  "Namangan",
  "Qarshi",
  "Navoiy",
  "Urganch",
  "Nukus",
  "Jizzax",
  "Termiz"
];
