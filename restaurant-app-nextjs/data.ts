type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts = [
  {
    id: 1,
    title: "Jack Daniel's Old No. 7",
    desc: "A classic Tennessee whiskey with smooth, rich flavors of caramel, vanilla, and oak, perfect for sipping on its own or mixing into your favorite cocktails.",
    price: 39.9,
    img: "/temporary/p1.png",
    options: [
      {
        title: "750ml Bottle",
        additionalPrice: 0,
      },
      {
        title: "1L Bottle",
        additionalPrice: 10,
      },
      {
        title: "1.75L Bottle",
        additionalPrice: 20,
      },
    ],
  },
  {
    id: 2,
    title: "Glenlivet 12 Year Old Single Malt Scotch",
    desc: "A refined and elegant single malt Scotch whisky with notes of ripe pear, toasted oak, and creamy vanilla, aged for 12 years in oak barrels.",
    price: 54.9,
    img: "/temporary/p2.jpg",
    options: [
      {
        title: "750ml Bottle",
        additionalPrice: 0,
      },
      {
        title: "1L Bottle",
        additionalPrice: 15,
      },
      {
        title: "1.75L Bottle",
        additionalPrice: 25,
      },
    ],
  },
  {
    id: 3,
    title: "Patrón Silver Tequila",
    desc: "An ultra-premium silver tequila crafted from the finest Weber Blue Agave, with smooth and crisp flavors of citrus, agave, and black pepper, perfect for sipping or mixing in cocktails.",
    price: 49.9,
    img: "/temporary/p3.jpg",
    options: [
      {
        title: "750ml Bottle",
        additionalPrice: 0,
      },
      {
        title: "1L Bottle",
        additionalPrice: 12,
      },
      {
        title: "1.75L Bottle",
        additionalPrice: 22,
      },
    ],
  },
  {
    id: 4,
    title: "Hennessy V.S.O.P Privilège Cognac",
    desc: "An iconic and luxurious cognac with velvety smooth flavors of vanilla, cinnamon, and oak, aged for at least four years in French oak barrels.",
    price: 74.9,
    img: "/temporary/p4.png",
    options: [
      {
        title: "750ml Bottle",
        additionalPrice: 0,
      },
      {
        title: "1L Bottle",
        additionalPrice: 20,
      },
      {
        title: "1.75L Bottle",
        additionalPrice: 35,
      },
    ],
  },
  {
    id: 5,
    title: "Bombay Sapphire London Dry Gin",
    desc: "A classic London dry gin with crisp and vibrant flavors of juniper berries, citrus, and floral botanicals, perfect for crafting classic gin cocktails or enjoying on the rocks.",
    price: 29.9,
    img: "/temporary/p5.jpg",
    options: [
      {
        title: "750ml Bottle",
        additionalPrice: 0,
      },
      {
        title: "1L Bottle",
        additionalPrice: 10,
      },
      {
        title: "1.75L Bottle",
        additionalPrice: 20,
      },
    ],
  },
  {
    id: 6,
    title: "Baileys Irish Cream",
    desc: "A rich and creamy Irish whiskey liqueur with flavors of chocolate, vanilla, and Irish whiskey, perfect for adding a touch of indulgence to coffee, cocktails, or enjoying on its own.",
    price: 32.9,
    img: "/temporary/p6.jpg",
    options: [
      {
        title: "750ml Bottle",
        additionalPrice: 0,
      },
      {
        title: "1L Bottle",
        additionalPrice: 12,
      },
      {
        title: "1.75L Bottle",
        additionalPrice: 22,
      },
    ],
  },
  {
    id: 7,
    title: "Absolut Vodka",
    desc: "A premium Swedish vodka with smooth and mellow flavors of wheat, distilled multiple times for exceptional purity and clarity, perfect for mixing in cocktails or enjoying neat.",
    price: 29.9,
    img: "/temporary/p7.jpg",
    options: [
      {
        title: "750ml Bottle",
        additionalPrice: 0,
      },
      {
        title: "1L Bottle",
        additionalPrice: 10,
      },
      {
        title: "1.75L Bottle",
        additionalPrice: 20,
      },
    ],
  },
  {
    id: 8,
    title: "Jameson Irish Whiskey",
    desc: "A smooth and versatile Irish whiskey with notes of toasted wood, sherry, and nuts, perfect for sipping neat, on the rocks, or in classic whiskey cocktails.",
    price: 34.9,
    img: "/temporary/p8.jpg",
    options: [
      {
        title: "750ml Bottle",
        additionalPrice: 0,
      },
      {
        title: "1L Bottle",
        additionalPrice: 12,
      },
      {
        title: "1.75L Bottle",
        additionalPrice: 22,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.jpg",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.jpg",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Four Cheese Fantasyccc",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Four Cheese Fantasybbb",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Four Cheese Fantasyaaa",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
