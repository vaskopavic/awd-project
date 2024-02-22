import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  const menu: IMenu[] = [
    {
      id: uuidv4(),
      name: "The Godfather",
      description:
        "Pulled pork, gouda, lettuce, tomato, caramelized onions, and special sauce",
      category: "burgers",
      image: "menu/burger_1.jpg",
      price: 8.99,
    },
    {
      id: uuidv4(),
      name: "The Special",
      description: "Beef, ham, cheddar, onions, and cheese sauce",
      category: "burgers",
      image: "menu/burger_2.jpg",
      price: 7.99,
    },
    {
      id: uuidv4(),
      name: "The Baconator",
      description: "Beef, bacon, cheddar, tomato, onions, and hot sauce",
      category: "burgers",
      image: "menu/burger_3.jpg",
      price: 9.99,
    },
    {
      id: uuidv4(),
      name: "Quatro Formaggi",
      description:
        "Beef, gouda, cheddar, blue cheese, parmesan, and caramelized onions",
      category: "burgers",
      image: "menu/burger_4.jpg",
      price: 8.99,
    },
    {
      id: uuidv4(),
      name: "The Rooster",
      description: "Crispy chicken, lettuce, tomato, onions, and garlic sauce",
      category: "burgers",
      image: "menu/burger_5.jpg",
      price: 7.99,
    },
    {
      id: uuidv4(),
      name: "Holy Smoke",
      description: "Beef, gouda, tomato, caramelized onions, and hot sauce",
      category: "burgers",
      image: "menu/burger_6.jpg",
      price: 4.99,
    },
    {
      id: uuidv4(),
      name: "Chipotle Mission",
      description: "Beef, rice, beans, cheddar, lettuce, and chipotle sauce",
      category: "wraps",
      image: "menu/wrap_1.jpg",
      price: 6.99,
    },
    {
      id: uuidv4(),
      name: "Tex-Mex",
      description: "Beef, rice, avocado, cheddar, corn, and special sauce",
      category: "wraps",
      image: "menu/wrap_2.jpg",
      price: 4.99,
    },
    {
      id: uuidv4(),
      name: "Caribbean",
      description: "Beef, rice, beans, cheddar, corn, and special sauce",
      category: "wraps",
      image: "menu/wrap_3.jpg",
      price: 3.99,
    },
    {
      id: uuidv4(),
      name: "The Caesar",
      description: "Chicken, lettuce, parmesan, croutons, and caesar sauce",
      category: "wraps",
      image: "menu/wrap_4.jpg",
      price: 4.99,
    },
    {
      id: uuidv4(),
      name: "Beefy Hills",
      description: "Beef, rice, avocado, corn, and hot sauce",
      category: "wraps",
      image: "menu/wrap_5.jpg",
      price: 5.99,
    },
    {
      id: uuidv4(),
      name: "Porky Pine",
      description: "Pulled pork, rice, beans, cheddar, corn, and special sauce",
      category: "wraps",
      image: "menu/wrap_6.jpg",
      price: 6.99,
    },
    {
      id: uuidv4(),
      name: "Nuggy Dips",
      description:
        "Chicken nuggets, lettuce, tomato, onions, and special sauce",
      category: "sandwiches",
      image: "menu/sandwich_1.jpg",
      price: 6.99,
    },
    {
      id: uuidv4(),
      name: "Clubhouse XL",
      description:
        "Chicken, bell peppers, tomato, pickles, onions, and hot sauce",
      category: "sandwiches",
      image: "menu/sandwich_2.jpg",
      price: 6.99,
    },
    {
      id: uuidv4(),
      name: "Cheddar Melt",
      description: "Crispy chicken, cheddar, arugula, tomato, and garlic sauce",
      category: "sandwiches",
      image: "menu/sandwich_3.jpg",
      price: 4.99,
    },
  ];

  return NextResponse.json(menu, { status: 200 });
}
