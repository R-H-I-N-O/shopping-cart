interface Product {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  price: number;
}

const productList: Product[] = [
  {
    id: 1,
    imgUrl: "/product-1.png",
    name: "SAMSUNG Galaxy Book4",
    description:
      "SAMSUNG Galaxy Book4 Metal Intel Core i5 13th Gen 1335U - (16 GB/512 GB SSD/Windows 11 Home) NP750XGJ-KG2IN / NP750XGJ-LG2IN Thin and Light Laptop",
    price: 57990.0,
  },
  {
    id: 2,
    imgUrl: "/product-2.png",
    name: "Lenovo IdeaPad Slim 3",
    description:
      "Lenovo IdeaPad Slim 3 Intel Core i5 13th Gen 13420H - (16 GB/512 GB SSD/Windows 11 Home) 15IRH8 Thin and Light Laptop  (15.6 Inch, Arctic Grey, 1.62 Kg,",
    price: 57090.0,
  },
  {
    id: 3,
    imgUrl: "/product-3.png",
    name: "Acer Aspire",
    description:
      "Acer Aspire Intel Core i5 12th Gen 12450H - (12 GB/512 GB SSD/Windows 11 Home) AL15-52H Thin and Light Laptop  (15.6 inch, Pure Silver, 1.70 kg)",
    price: 44990.0,
  },
  {
    id: 4,
    imgUrl: "/product-4.png",
    name: "MSI Cyborg 15",
    description:
      "MSI Cyborg 15 Intel Core i5 12th Gen 12450H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/144 Hz) Cyborg 15 A12UCX-264IN ",
    price: 56990.0,
  },
  {
    id: 5,
    imgUrl: "/product-5.png",
    name: "DELL 15",
    description:
      "DELL 15 Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) 3520 Thin and Light Laptop  (15.6 Inch, Titan Grey, 1.69 Kg, With MS Office)",
    price: 45990.0,
  },
  {
    id: 6,
    imgUrl: "/product-6.png",
    name: "ASUS TUF Gaming F15",
    description:
      "ASUS TUF Gaming F15 Intel Core i5 12th Gen 12500H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) FX507ZC4-HN116W Gaming ",
    price: 67590.0,
  },
];

export default productList;