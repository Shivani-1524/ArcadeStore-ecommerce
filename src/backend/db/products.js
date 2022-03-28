import { v4 as uuid } from "uuid";
import SoesicHoodie from "../../Assets/Categories/hoodie.png"
import ApexHoodie from "../../Assets/Products/apex-hoodie.png"
import GenshinRazerMouse from "../../Assets/Products/genshin-razermouse.jpg"
import JROValorantPoster from "../../Assets/Products/val-poster.png"
import CODGameDisc from "../../Assets/Products/cod-gamedisc.jfif"
// import  from "../../Assets/Categories/hoodie.png"
import ZhongliPoster from "../../Assets/Products/zhongli-poster.jfif"
import IttoPoster from "../../Assets/Products/itto-poster.jfif"
import KleeEarphones from "../../Assets/Products/klee-miearphone.jfif"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */


// REMOVE ISFAVS

export const products = [
  {
    _id: uuid(),
    title: "Zhongli Traveller Poster",
    game: "showGenshin",
    categoryName: "showCollectibles",
    inStock: true,
    currentprice: 800,
    discount: 40,
    originalprice: 950,
    rating: 4.2,
    imgSrc: ZhongliPoster,
    isFav: false,
    altTxt: 'zhongli poster',

    seller: "keshviLLD pvt",
    subtitle: "Genshin from MiHoYo",
    shortdesc: "Genshin Poster featuring Zhongli, traveller and Xiao.",
    description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
    specs: " 24'' x 36'' inches",
    reviewsnum: 23,
  },
  {
    _id: uuid(),
    title: "Soesic Black Hoodie",
    game: "showApex",
    categoryName: "showClothing",
    inStock: true,
    currentprice: 2000,
    discount: 20,
    originalprice: 2500,
    rating: 4.6,
    imgSrc: SoesicHoodie,
    isFav: false,
    altTxt: 'apex legends hoodie',

    shortdesc: "All black hoodie with the signature soseic logo. Perfect for game night.",
    seller: "keshviLLD pvt",
    subtitle: "Genshin from MiHoYo",
    description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
    specs: " 24'' x 36'' inches",
    reviewsnum: 23,
  },
  {
    _id: uuid(),
    title: "Klee Redmi Earphones",
    game: "showGenshin",
    categoryName: "showGadgets",
    inStock: false,
    currentprice: 8000,
    rating: 2.5,
    imgSrc: KleeEarphones,
    isFav: false,
    altTxt: 'klee redmi earphones',

    shortdesc: "wireless bluetooth earphones sound great. try combining that with klees cute backpack, sounds too good to be true",
    seller: "keshviLLD pvt",
    subtitle: "Genshin from MiHoYo",
    description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
    specs: " 24'' x 36'' inches",
    reviewsnum: 23,
  },
  {
    _id: uuid(),
    title: "Itto Poster",
    game: "showGenshin",
    categoryName: "showCollectibles",
    inStock: true,
    currentprice: 800,
    discount: 45,
    originalprice: 950,
    rating: 3,
    imgSrc: IttoPoster,
    isFav: false,
    altTxt: 'itto poster',

    shortdesc: "who cares if you pulled itto or not when you could still look at him all day long ;)",
    seller: "keshviLLD pvt",
    subtitle: "Genshin from MiHoYo",
    description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
    specs: " 24'' x 36'' inches",
    reviewsnum: 23,
  },
  {
    _id: uuid(),
    title: "Genshin Razer Mouse",
    game: "showGenshin",
    categoryName: "showGadgets",
    inStock: true,
    currentprice: 10500,
    rating: 3,
    imgSrc: GenshinRazerMouse,
    isFav: false,
    altTxt: 'genshin razer mouse',

    seller: "keshviLLD pvt",
    subtitle: "Genshin from MiHoYo",
    description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
    specs: " 24'' x 36'' inches",
    reviewsnum: 23,
  },
  {
    _id: uuid(),
    title: "Jett Raze Omen Poster",
    game: "showValorant",
    categoryName: "showCollectibles",
    inStock: true,
    currentprice: 900,
    discount: 45,
    originalprice: 1200,
    rating: 3,
    imgSrc: JROValorantPoster,
    isFav: false,
    altTxt: 'Jett Raze Omen Poster',

    seller: "keshviLLD pvt",
    subtitle: "Genshin from MiHoYo",
    description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
    specs: " 24'' x 36'' inches",
    reviewsnum: 23,
  },
  {
    _id: uuid(),
    title: "Call Of Duty Disc",
    game: "showCod",
    categoryName: "showGameCDs",
    inStock: true,
    currentprice: 2500,
    discount: 45,
    originalprice: 3050,
    rating: 3,
    imgSrc: CODGameDisc,
    isFav: false,
    altTxt: 'call of duty game disc',

    seller: "keshviLLD pvt",
    subtitle: "Genshin from MiHoYo",
    description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
    specs: " 24'' x 36'' inches",
    reviewsnum: 23,
  },
  {
    _id: uuid(),
    title: "Apex Legends Black Hoodie",
    game: "showApex",
    categoryName: "showClothing",
    inStock: true,
    currentprice: 2000,
    discount: 20,
    originalprice: 2500,
    rating: 4.6,
    imgSrc: ApexHoodie,
    isFav: false,
    altTxt: 'apex legends hoodie',

    seller: "keshviLLD pvt",
    subtitle: "Genshin from MiHoYo",
    description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
    specs: " 24'' x 36'' inches",
    reviewsnum: 23,
  },
];
