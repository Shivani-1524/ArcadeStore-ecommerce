import { wishlistReducer, initWishlistState } from '../../Reducers/WishlistReducer'

test("testing wishlist reducer", () => {
    const addToWishlist = {
        type: "UPDATE_WISHLIST",
        payload: [{
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
            currentprice: 2000,
            discount: 20,
            originalprice: 2500,
            rating: 4.6,
            isFav: false,
            altTxt: 'apex legends hoodie',
            shortdesc: "All black hoodie with the signature soseic logo. Perfect for game night.",
            seller: "keshviLLD pvt",
            subtitle: "Genshin from MiHoYo",
            description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
            specs: " 24'' x 36'' inches",
            reviewsnum: 23,
        }]
    }

    let state = wishlistReducer(initWishlistState, addToWishlist);

    expect(state).toEqual({
        wishlistItems: [
            {
                title: "Soesic Black Hoodie",
                game: "showApex",
                categoryName: "showClothing",
                inStock: true,
                currentprice: 2000,
                discount: 20,
                originalprice: 2500,
                rating: 4.6,
                isFav: false,
                altTxt: 'apex legends hoodie',
                shortdesc: "All black hoodie with the signature soseic logo. Perfect for game night.",
                seller: "keshviLLD pvt",
                subtitle: "Genshin from MiHoYo",
                description: "This is an aesthetic poster that has a waxy shine coating on top to give you that added lusture and brightness. It makes your wall seem so full of personality and makes your room a fun lot more fun to chill in. your gaming room deserves to be filled with beautiful moments from one of your favourite games",
                specs: " 24'' x 36'' inches",
                reviewsnum: 23,
            }
        ]
    })
})