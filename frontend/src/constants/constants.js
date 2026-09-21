export const ACCESS_TOKEN_KEY = "accessToken";

export const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/aboutus' },
  { label: 'Blog', to: '/team' },
  { label: 'Contact', to: '/contact' },
  { label: 'Pages', to: '/team' },
];

export const footerData = [
  {
    title: "Company Info",
    links: [
      { label: "About Us", href: "#" },
      { label: "Carrier", href: "#" },
      { label: "We are hiring", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "About Us", href: "#" },
      { label: "Carrier", href: "#" },
      { label: "We are hiring", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Business Marketing", href: "#" },
      { label: "User Analytic", href: "#" },
      { label: "Live Chat", href: "#" },
      { label: "Unlimited Support", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "IOS & Android", href: "#" },
      { label: "Watch a Demo", href: "#" },
      { label: "Customers", href: "#" },
      { label: "API", href: "#" },
    ],
  },
];

export const carouselImages = [
  { id: 1, url: "https://images.pexels.com/photos/29089597/pexels-photo-29089597/free-photo-of-stunning-autumn-beach-sunset-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 2, url: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg" },
  { id: 3, url: "https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 4, url: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 5, url: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
]



export const editorsPick = [
  {
    id: 1, url: "https://images.unsplash.com/photo-1578681994506-b8f463449011?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Men", href: "/shop/e"
  },
  {
    id: 2, url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Women", href: "/shop/k"
  },
  {
    id: 3, url: new URL('../assets/EditorsPickImgs/AccessoriesEP.jpg', import.meta.url).href,
    title: "Accessories", href: "/shop/e"
  },
  {
    id: 4, url: new URL('../assets/EditorsPickImgs/KidsEP.jpg', import.meta.url).href,
    title: "Kids", href: "/shop/e"
  },
]

export const products = [
  {
    id: 1,
    name: "Oversize Tişört",
    description: "Pamuklu Günlük Giyim",
    oldPrice: 24.99,
    price: 14.99,
    imageUrls: [
      "/ProductImgs/001.jpg"
    ]
  },
  {
    id: 2,
    name: "Slim Fit Kot Pantolon",
    description: "Yüksek Bel Denim",
    oldPrice: 49.90,
    price: 32.50,
    imageUrls: [
      "/ProductImgs/002.jpg"
    ]
  },
  {
    id: 3,
    name: "Kapüşonlu Sweatshirt",
    description: "Şardonlu Kışlık Model",
    oldPrice: 59.99,
    price: 39.99,
    imageUrls: [
      "/ProductImgs/003.jpg"
    ]
  },
  {
    id: 4,
    name: "Keten Gömlek",
    description: "Yazlık Erkek Koleksiyonu",
    oldPrice: 44.50,
    price: 27.90,
    imageUrls: [
      "/ProductImgs/004.jpg"
    ]
  },
  {
    id: 5,
    name: "Triko Kazak",
    description: "Balıkçı Yaka Yün Karışım",
    oldPrice: 54.99,
    price: 34.99,
    imageUrls: [
      "/ProductImgs/005.jpg"
    ]
  },
  {
    id: 6,
    name: "Deri Ceket",
    description: "Biker Suni Deri",
    oldPrice: 129.90,
    price: 89.90,
    imageUrls: [
      "/ProductImgs/006.jpg"
    ]
  },
  {
    id: 7,
    name: "Çiçekli Elbise",
    description: "Yazlık Kadın Midi Boy",
    oldPrice: 69.99,
    price: 42.99,
    imageUrls: [
      "/ProductImgs/007.jpg"
    ]
  },
  {
    id: 8,
    name: "Jogger Eşofman Altı",
    description: "Lastik Paça Spor Giyim",
    oldPrice: 39.90,
    price: 22.90,
    imageUrls: [
      "/ProductImgs/008.jpg"
    ]
  },
];

export const productsExtended = [
  {
    id: 1,
    name: "Oversize Tişört",
    description: "Pamuklu Günlük Giyim",
    oldPrice: 24.99,
    price: 14.99,
    imageUrls: [
      "/ProductImgs/001.jpg"
    ]
  },
  {
    id: 2,
    name: "Slim Fit Kot Pantolon",
    description: "Yüksek Bel Denim",
    oldPrice: 49.90,
    price: 32.50,
    imageUrls: [
      "/ProductImgs/002.jpg"
    ]
  },
  {
    id: 3,
    name: "Kapüşonlu Sweatshirt",
    description: "Şardonlu Kışlık Model",
    oldPrice: 59.99,
    price: 39.99,
    imageUrls: [
      "/ProductImgs/003.jpg"
    ]
  },
  {
    id: 4,
    name: "Keten Gömlek",
    description: "Yazlık Erkek Koleksiyonu",
    oldPrice: 44.50,
    price: 27.90,
    imageUrls: [
      "/ProductImgs/004.jpg"
    ]
  },
  {
    id: 5,
    name: "Triko Kazak",
    description: "Balıkçı Yaka Yün Karışım",
    oldPrice: 54.99,
    price: 34.99,
    imageUrls: [
      "/ProductImgs/005.jpg"
    ]
  },
  {
    id: 6,
    name: "Deri Ceket",
    description: "Biker Suni Deri",
    oldPrice: 129.90,
    price: 89.90,
    imageUrls: [
      "/ProductImgs/006.jpg"
    ]
  },
  {
    id: 7,
    name: "Çiçekli Elbise",
    description: "Yazlık Kadın Midi Boy",
    oldPrice: 69.99,
    price: 42.99,
    imageUrls: [
      "/ProductImgs/007.jpg"
    ]
  },
  {
    id: 8,
    name: "Jogger Eşofman Altı",
    description: "Lastik Paça Spor Giyim",
    oldPrice: 39.90,
    price: 22.90,
    imageUrls: [
      "/ProductImgs/008.jpg"
    ]
  },
  {
    id: 9,
    name: "Blazer Ceket",
    description: "Ofis Şık Kadın Giyim",
    oldPrice: 99.90,
    price: 64.90,
    imageUrls: [
      "https://picsum.photos/seed/prod9a/500/600",
      "https://picsum.photos/seed/prod9b/500/600"
    ]
  },
  {
    id: 10,
    name: "Kargo Şort",
    description: "Çok Cepli Yazlık",
    oldPrice: 34.99,
    price: 19.99,
    imageUrls: [
      "https://picsum.photos/seed/prod10a/500/600",
      "https://picsum.photos/seed/prod10b/500/600"
    ]
  },
  {
    id: 11,
    name: "Polo Yaka Tişört",
    description: "Düğmeli Klasik Kesim",
    oldPrice: 29.90,
    price: 18.50,
    imageUrls: [
      "https://picsum.photos/seed/prod11a/500/600",
      "https://picsum.photos/seed/prod11b/500/600"
    ]
  },
  {
    id: 12,
    name: "Kışlık Mont",
    description: "Şişme Su Geçirmez Parka",
    oldPrice: 179.90,
    price: 119.90,
    imageUrls: [
      "https://picsum.photos/seed/prod12a/500/600",
      "https://picsum.photos/seed/prod12b/500/600"
    ]
  },
];

