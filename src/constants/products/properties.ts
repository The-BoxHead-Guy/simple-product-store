type Product = {
  company: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
};

const product: Product = {
  company: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.0,
  originalPrice: 250.0,
  discount: 50,
};

export default product;
