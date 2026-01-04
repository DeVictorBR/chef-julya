"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginFormData } from "@/src/schemas/auth"
import { Input } from "../../ui/input"
import { useState } from "react"

interface LoginFormProps {
    onSubmit: (data: LoginFormData) => Promise<void>;
    isLoading: boolean;
    serverError: string | null;
}

export function LoginForm({ onSubmit, isLoading, serverError }: LoginFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                error={errors.email?.message}
                {...register("email")}
            />

            <Input
                label="Senha"
                type="password"
                placeholder="••••••••"
                error={errors.password?.message}
                {...register("password")}
            />

            {serverError && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center border border-red-100 italic">
                {serverError}
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-pink-strong text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
            >
                {isLoading ? "Autenticando..." : "Entrar"}
            </button>
        </form>
    );
}