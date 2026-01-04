export interface ProductResponseDTO {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
}

export interface ProductRequestDTO {
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface PaginatedResponse<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    last: boolean;
    first: boolean;
}