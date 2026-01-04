import api from "./api";
import { PaginatedResponse, ProductResponseDTO, ProductRequestDTO } from "../types/product";

export const productService = {
    async listAll(page = 0, size = 10): Promise<PaginatedResponse<ProductResponseDTO>> {
        const response = await api.get<PaginatedResponse<ProductResponseDTO>>(`/products`, {
            params: { page, size }
        });
        return response.data;
    },
    async listActives(page = 0, size = 10): Promise<PaginatedResponse<ProductResponseDTO>> {
        const response = await api.get<PaginatedResponse<ProductResponseDTO>>(`products/active`, {
            params: { page, size }
        });
        return response.data;
    },
    async create(data: ProductRequestDTO, file: File): Promise<ProductResponseDTO> {
        const formData = new FormData();
        const jsonBlob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        formData.append("data", jsonBlob);
        formData.append("file", file);

        const response = await api.post<ProductResponseDTO>(`/products`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        return response.data;
    },
    async delete(id: string): Promise<void> {
        await api.delete(`/products/${id}`);
    }
}