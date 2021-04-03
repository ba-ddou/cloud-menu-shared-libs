

export interface Owner{
    _id: string
    name: string
    email: string
    phone: string
    businesses: string[]
    username: string

}


export interface OwnerDocument extends Owner {
    hashedPassword: string
}