import api from "./api";
import { LoginDTO, RegisterDTO, LoginResponseDTO } from "@/src/types/auth";

export const authService = {
    async login(data: LoginDTO): Promise<LoginResponseDTO> {
        try {   
            const response = await api.post<LoginResponseDTO>(
            "/auth/login", data
            );
            if(response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        } catch(error: any) {
            const message = error.response?.data?.message || "Erro ao realizar o login";
            throw new Error(message);
        }
    },

    async register(data: RegisterDTO): Promise<void> {
        await api.post("/auth/register", data);
    }
}