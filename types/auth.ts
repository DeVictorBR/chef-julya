export interface LoginDTO {
    email: string,
    password: string
}

export interface RegisterDTO {
    email: string,
    password: string,
    name: string
}

export interface LoginResponseDTO {
    token: string
}