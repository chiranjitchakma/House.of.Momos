var WA = '919448271508';

// ── MENU DATA ──
var MENU = {
  momos: [
    {n:'Veg Momo Steamed (6 pcs)',p:50,e:'🥟',d:'Delicate steamed dumplings with spiced veggie filling'},
    {n:'Paneer Momo Steamed (6 pcs)',p:60,e:'🥟',d:'Soft steamed momos with rich paneer filling'},
    {n:'Veg Momo Fried (6 pcs)',p:70,e:'🥟',d:'Golden crispy fried momos with veggie filling'},
    {n:'Paneer Momo Fried (6 pcs)',p:80,e:'🥟',d:'Crispy fried momos packed with spiced paneer'},
    {n:'Chicken Momo Steamed (6 pcs)',p:70,e:'🥟',d:'Juicy chicken stuffed steamed dumplings',best:true},
    {n:'Chicken Momo Fried (6 pcs)',p:85,e:'🥟',d:'Crispy fried chicken momos with dipping sauce',best:true}
  ],
  soups: [
    {n:'Veg Clear Soup',p:60,e:'🍵',d:'Light, clean vegetable broth'},
    {n:'Veg Sweet Corn Soup',p:60,e:'🍵',d:'Creamy sweet corn with vegetables'},
    {n:'Veg Manchow Soup',p:60,e:'🍜',d:'Spiced broth with crunchy fried noodles',best:true},
    {n:'Veg Hot & Sour Soup',p:60,e:'🌶️',d:'Classic tangy and spicy vegetable soup'},
    {n:'Veg Wonton Soup',p:60,e:'🥟',d:'Delicate wontons in clear vegetable broth'},
    {n:'Veg Noodle Soup',p:50,e:'🍜',d:'Soft noodles in savory vegetable broth'},
    {n:'Veg Tomato Soup',p:60,e:'🍅',d:'Rich tomato base with aromatic spices'},
    {n:'Veg Tomyum Soup',p:60,e:'🍋',d:'Thai-inspired lemongrass & lime soup'},
    {n:'Veg Talumien Soup',p:60,e:'🍜',d:'Thick noodle soup with seasonal vegetables'},
    {n:'Chicken Clear Soup',p:70,e:'🍵',d:'Nourishing clear chicken broth'},
    {n:'Chicken Sweet Corn Soup',p:70,e:'🌽',d:'Creamy sweet corn soup with shredded chicken'},
    {n:'Chicken Manchow Soup',p:70,e:'🍜',d:'Spiced chicken soup with crispy noodles on top',best:true},
    {n:'Chicken Hot & Sour Soup',p:70,e:'🌶️',d:'Bold and tangy hot & sour with chicken'},
    {n:'Chicken Wonton Soup',p:70,e:'🥟',d:'Chicken-filled wontons in rich broth'},
    {n:'Chicken Noodle Soup',p:70,e:'🍜',d:'Hearty chicken and noodle in savory broth'},
    {n:'Tomato Egg Drop Soup',p:60,e:'🥚',d:'Silky egg ribbons in tomato broth'},
    {n:'Chicken Mushroom Soup',p:70,e:'🍄',d:'Umami-rich mushroom and chicken soup'},
    {n:'Chicken Tomyum Soup',p:70,e:'🍋',d:'Thai-style spicy chicken lemongrass soup',best:true},
    {n:'Chicken Talumien Soup',p:70,e:'🍜',d:'Thick chicken noodle soup'}
  ],
  starters: [
    {n:'Crispy Veg Fried / Pepper Salt',p:80,e:'🥦',d:'Light crispy veg fritters with pepper seasoning'},
    {n:'Fried Wontons',p:70,e:'🥟',d:'Golden crispy wontons with sweet chilli dip'},
    {n:'Ball Manchurian / Ball Chilly',p:70,e:'🔴',d:'Classic Manchurian balls in spicy sauce',best:true},
    {n:'Gobi Manchurian / Gobi Chilly',p:70,e:'🥦',d:'Crispy cauliflower in tangy Manchurian sauce',best:true},
    {n:'Paneer Manchurian / Paneer Chilly',p:80,e:'🧀',d:'Cottage cheese in spicy Manchurian sauce'},
    {n:'Baby Corn Manchurian / Babycorn Chilly',p:80,e:'🌽',d:'Tender baby corn in wok-tossed sauce'},
    {n:'Mushroom Manchurian / Mushroom Chilly',p:80,e:'🍄',d:'Juicy mushrooms in bold Manchurian sauce'},
    {n:'Crispy Chilly Potato / Honey Chilly Potato',p:70,e:'🥔',d:'Crispy potato tossed in sweet chilli glaze'},
    {n:'Spring Roll / Dragon Roll',p:80,e:'🌯',d:'Crispy golden rolls with vegetable filling'},
    {n:'Finger Chips',p:50,e:'🍟',d:'Golden salted french fries'},
    {n:'Crispy Corn Pepper Salt',p:80,e:'🌽',d:'Crunchy corn kernels with pepper & salt'},
    {n:'Egg Chilly / Manchurian',p:90,e:'🥚',d:'Spiced egg in chilly Manchurian sauce'},
    {n:'Chilly Chicken Dry / Garlic / Pepper Salt',p:140,e:'🍗',d:'Crispy chicken tossed in bold spices',best:true},
    {n:'Chicken Manchurian Dry',p:140,e:'🍗',d:'Classic dry Manchurian with fried chicken',best:true},
    {n:'Chicken Lollipop',p:140,e:'🍗',d:'Tender chicken lollipops with spicy coating'},
    {n:'Sesame Honey Chicken',p:140,e:'🍯',d:'Crispy chicken glazed with honey sesame sauce'},
    {n:'Kungpao Chicken',p:140,e:'🌶️',d:'Classic Sichuan spiced stir-fried chicken'},
    {n:'Chicken Fried Wonton',p:140,e:'🥟',d:'Crispy chicken-filled golden wontons'},
    {n:'Chicken Spring Roll / Dragon Roll',p:140,e:'🌯',d:'Crispy rolls stuffed with spiced chicken'}
  ],
  noodles: [
    {n:'Veg Noodles',p:80,e:'🍜',d:'Classic stir-fried vegetable noodles'},
    {n:'Chilly Garlic Noodles',p:90,e:'🌶️',d:'Bold garlic chilly tossed noodles',best:true},
    {n:'Paneer Noodle',p:90,e:'🧀',d:'Soft paneer chunks with wok noodles'},
    {n:'Veg Schezwan Noodle',p:90,e:'🌶️',d:'Spicy Schezwan sauce stir-fried noodles',best:true},
    {n:'Flat Noodle (Malaysian)',p:100,e:'🍜',d:'Thick flat noodles in Malaysian style sauce'},
    {n:'Pan Fried Noodles',p:130,e:'🍜',d:'Crispy pan-fried noodles with vegetables'},
    {n:'Chicken Noodles',p:90,e:'🍜',d:'Tender chicken with wok-tossed noodles'},
    {n:'Chicken Schezwan Noodle',p:90,e:'🌶️',d:'Fiery Schezwan chicken noodles',best:true},
    {n:'Chicken Shanghai Noodle',p:80,e:'🍜',d:'Shanghai-style chicken noodles'},
    {n:'Egg Noodle',p:150,e:'🥚',d:'Wok-tossed egg noodles premium style'},
    {n:'Chicken Pan Fried Noodle',p:110,e:'🍜',d:'Crispy pan-fried noodles with chicken'},
    {n:'Chicken Flat Noodle',p:110,e:'🍜',d:'Malaysian flat noodles with chicken'}
  ],
  rice: [
    {n:'Veg Fried Rice',p:80,e:'🍚',d:'Wok-tossed fried rice with fresh vegetables'},
    {n:'Veg Schezwan Fried Rice',p:80,e:'🌶️',d:'Spicy Schezwan sauce fried rice',best:true},
    {n:'Paneer Fried Rice',p:90,e:'🧀',d:'Fried rice with soft paneer cubes'},
    {n:'Steam Rice With Vegetable',p:100,e:'🍚',d:'Steamed rice with stir-fried vegetables'},
    {n:'Mushroom Fried Rice',p:80,e:'🍄',d:'Umami-rich mushroom fried rice'},
    {n:'Egg Fried Rice',p:80,e:'🥚',d:'Classic egg fried rice'},
    {n:'Chicken Fried Rice',p:90,e:'🍚',d:'Wok-fried rice with tender chicken'},
    {n:'Chicken Schezwan Fried Rice',p:90,e:'🌶️',d:'Bold Schezwan spiced chicken fried rice',best:true},
    {n:'Triple Schezwan Fried Rice With Curry',p:150,e:'🌶️',d:'Premium triple protein Schezwan rice & curry',best:true},
    {n:'Chicken Steam Rice',p:140,e:'🍚',d:'Steamed rice served with chicken gravy'}
  ],
  chopsuey: [
    {n:'American Veg Chopsuey',p:100,e:'🥘',d:'Crispy noodles topped with American-style veg sauce',best:true},
    {n:'Chinese Veg Chopsuey',p:100,e:'🥘',d:'Traditional Chinese-style vegetable chopsuey'},
    {n:'Veg Dragon Chopsuey',p:100,e:'🐉',d:'Spicy dragon sauce over crispy noodle nest'}
  ]
};
