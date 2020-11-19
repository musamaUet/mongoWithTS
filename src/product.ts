export interface Product {
    id: number | null;
    productName: string;
    productCode: string;
    productDescription?: string;
    productRating?: number;
}

export const products: Product[] = [
    {
        id: 1,
        productName: 'Netgear Cable Modem',
        productCode: 'CM700',
        productDescription: 'Netgear Cable Modem compatible with all cables',
        productRating: 4.0
    },
    {
        id: 2,
        productName: 'Linksys Cable Modem',
        productCode: 'LK700',
        productDescription: 'Linksys Cable Modem compatible with all cables',
        productRating: 4.1
    },
    {
        id: 3,
        productName: 'TP Link Cable Modem',
        productCode: 'TPL700',
        productDescription: 'TP Link Cable Modem compatible with all cables',
        productRating: 4.2
    },
    {
        id: 4,
        productName: 'Netgear Cable Modem',
        productCode: 'CM700',
        productDescription: 'Netgear Cable Modem compatible with all cables',
        productRating: 4.0
    },
    {
        id: 5,
        productName: 'Linksys Cable Modem',
        productCode: 'LK700',
        productDescription: 'Linksys Cable Modem compatible with all cables',
        productRating: 4.1
    },
    {
        id: 6,
        productName: 'TP Link Cable Modem',
        productCode: 'TPL700',
        productDescription: 'TP Link Cable Modem compatible with all cables',
        productRating: 4.2
    }, {
        id: 7,
        productName: 'Netgear Cable Modem',
        productCode: 'CM700',
        productDescription: 'Netgear Cable Modem compatible with all cables',
        productRating: 4.0
    },
    {
        id: 8,
        productName: 'Linksys Cable Modem',
        productCode: 'LK700',
        productDescription: 'Linksys Cable Modem compatible with all cables',
        productRating: 4.1
    },
    {
        id: 9,
        productName: 'TP Link Cable Modem',
        productCode: 'TPL700',
        productDescription: 'TP Link Cable Modem compatible with all cables',
        productRating: 4.2
    },
]