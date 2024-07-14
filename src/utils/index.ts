import { IProducts } from "./interface";

export const updateLocalStorage = (data: IProducts[]) => {
  localStorage.removeItem("allProducts");
  localStorage.setItem("allProducts", JSON.stringify(data));
};

export const getLocalStorageData = () => {
  return localStorage.getItem("allProducts");
};

export const getSingleProductById = (allProducts: IProducts[], id: number) => {
  return allProducts.find((val) => val.id === id);
};

export const hardCodedQuantity: IProducts[] = [
  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    price: 9.99,
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    quantity: 5,
  },
  {
    id: 2,
    name: "Eyeshadow Palette with Mirror",
    price: 19.99,
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    quantity: 44,
  },
  {
    id: 3,
    name: "Powder Canister",
    price: 14.99,
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    quantity: 59,
  },
  {
    id: 4,
    name: "Red Lipstick",
    price: 12.99,
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    quantity: 68,
  },
  {
    id: 5,
    name: "Red Nail Polish",
    price: 8.99,
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    quantity: 71,
  },
  {
    id: 6,
    name: "Calvin Klein CK One",
    price: 49.99,
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    quantity: 17,
  },
  {
    id: 7,
    name: "Chanel Coco Noir Eau De",
    price: 129.99,
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    quantity: 41,
  },
  {
    id: 8,
    name: "Dior J'adore",
    price: 89.99,
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    quantity: 91,
  },
  {
    id: 9,
    name: "Dolce Shine Eau de",
    price: 69.99,
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    quantity: 3,
  },
  {
    id: 10,
    name: "Gucci Bloom Eau de",
    price: 79.99,
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    quantity: 93,
  },
  {
    id: 11,
    name: "Annibale Colombo Bed",
    price: 1899.99,
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    quantity: 47,
  },
  {
    id: 12,
    name: "Annibale Colombo Sofa",
    price: 2499.99,
    description:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    quantity: 16,
  },
  {
    id: 13,
    name: "Bedside Table African Cherry",
    price: 299.99,
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    quantity: 16,
  },
  {
    id: 14,
    name: "Knoll Saarinen Executive Conference Chair",
    price: 499.99,
    description:
      "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    quantity: 47,
  },
  {
    id: 15,
    name: "Wooden Bathroom Sink With Mirror",
    price: 799.99,
    description:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    quantity: 95,
  },
];
