export interface ProductDtos {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: Installments[];
}

export interface Installments {
  quantity: number;
  value: number;
}
