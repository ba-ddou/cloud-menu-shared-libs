export declare type MenuItem = {
    _id: string;
    name: string;
    price: number;
    description: string;
    ingredients: string;
    thumbnail: {
        uri: string;
    };
    section: string;
    business: string;
    status: MenuItemStatus;
    inStock: boolean;
};
export declare enum MenuItemStatus {
    active = "active",
    suspended = "suspended",
    deleted = "deleted"
}
