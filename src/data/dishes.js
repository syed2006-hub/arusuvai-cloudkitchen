import dosaImg from '../assets/dish-dosa.jpg';
import sambarImg from '../assets/dish-sambar.jpg';
import coffeeImg from '../assets/dish-coffee.jpg';
import thaliImg from '../assets/hero-thali.jpg';

export const dishes = [
  { 
    id: 1, 
    name: "Idli & Sambar", 
    cat: "Breakfast", 
    veg: true, 
    price: 80, 
    desc: "Steamed rice cakes, hot sambar, coconut chutney.", 
    icon: "idli",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80"
  },
  { 
    id: 2, 
    name: "Masala Dosa", 
    cat: "Breakfast", 
    veg: true, 
    price: 90, 
    desc: "Crisp dosa filled with spiced potato masala.", 
    icon: "dosa", 
    image: dosaImg 
  },
  { 
    id: 3, 
    name: "Ven Pongal", 
    cat: "Breakfast", 
    veg: true, 
    price: 70, 
    desc: "Comforting rice & moong dal, ghee and pepper.", 
    icon: "bowl",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80"
  },
  { 
    id: 4, 
    name: "Sambar Rice Meal", 
    cat: "Lunch", 
    veg: true, 
    price: 150, 
    desc: "Full meal — sambar rice, poriyal, papad, pickle.", 
    icon: "plate", 
    image: thaliImg 
  },
  { 
    id: 5, 
    name: "Curd Rice Combo", 
    cat: "Lunch", 
    veg: true, 
    price: 120, 
    desc: "Cooling curd rice with tempering, served with pickle.", 
    icon: "plate",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=80"
  },
  { 
    id: 6, 
    name: "Chettinad Chicken Curry", 
    cat: "Curry", 
    veg: false, 
    price: 220, 
    desc: "Fiery, aromatic Chettinad-style chicken curry.", 
    icon: "curry",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  { 
    id: 7, 
    name: "Kara Kuzhambu", 
    cat: "Curry", 
    veg: true, 
    price: 110, 
    desc: "Tangy tamarind gravy with vegetables, deeply spiced.", 
    icon: "curry", 
    image: sambarImg 
  },
  { 
    id: 8, 
    name: "Mutton Curry", 
    cat: "Curry", 
    veg: false, 
    price: 280, 
    desc: "Slow-cooked mutton in a rich home-style masala.", 
    icon: "curry",
    image: "https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=600&auto=format&fit=crop&q=80"
  },
  { 
    id: 9, 
    name: "Beans Poriyal", 
    cat: "Side Dish", 
    veg: true, 
    price: 60, 
    desc: "Stir-fried beans with coconut and mustard tempering.", 
    icon: "leaf",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80"
  },
  { 
    id: 10, 
    name: "Medu Vada (2 pcs)", 
    cat: "Side Dish", 
    veg: true, 
    price: 50, 
    desc: "Crisp lentil doughnuts, served with chutney.", 
    icon: "vada",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80"
  },
  { 
    id: 11, 
    name: "Filter Coffee", 
    cat: "Beverage", 
    veg: true, 
    price: 40, 
    desc: "Classic South Indian filter coffee, strong & frothy.", 
    icon: "cup", 
    image: coffeeImg 
  },
  { 
    id: 12, 
    name: "Spiced Buttermilk", 
    cat: "Beverage", 
    veg: true, 
    price: 30, 
    desc: "Chilled buttermilk with curry leaf and ginger.", 
    icon: "cup",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80"
  },
  { 
    id: 13, 
    name: "Semiya Payasam", 
    cat: "Dessert", 
    veg: true, 
    price: 70, 
    desc: "Vermicelli kheer with cashew, raisin and cardamom.", 
    icon: "bowl",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80"
  }
];
