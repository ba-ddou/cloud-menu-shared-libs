import { MenuSection } from './MenuSection'

export interface Business {
    _id: string
    name: string
    _type: "restaurant" | "coffeeShop" | "restaurantCoffeeShop" | "hotel"
    description?: string
    banner: {
        uri: string
    }
    thumbnail: {
        uri: string
    }
    logo?: {
        uri: string
    }
    email?: string
    phone?: string
    city: string
    address: string
    location?: {
        latitude: number
        longitude: number
    }
    sections: {
        id: string
        name: string
    }[]
    menu: [MenuSection]
}

export interface BusinessDocument extends Omit<Business, 'menu'> {
    username: string
    passwordHash: string

}
