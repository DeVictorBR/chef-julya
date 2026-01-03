import api from "./api";
import { LoginDTO, RegisterDTO, LoginResponseDTO } from "@/types/auth";

export const authService = {
    async login(data: LoginDTO): Promise<LoginResponseDTO> {
        const response = await api.post<LoginResponseDTO>(
            "/auth/login", data
        );
        return response.data;
    },

    async register(data: RegisterDTO): Promise<void> {
        await api.post("/auth/register", data);
    }
}