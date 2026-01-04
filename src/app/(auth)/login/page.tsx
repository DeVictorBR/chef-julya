"use client"

import { LoginForm } from "@/src/components/modules/auth/LoginForm"
import { authService } from "@/src/services/authService"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginFormData } from "@/src/schemas/auth"
import Image from "next/image"
import Hat  from "@/public/assets/chef-hat.png"
import { jwtDecode } from "jwt-decode"

interface CustomJwtPayload {
  role?: string;
  sub?: string;
}

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    setServerError(null);
    try {
      const response = await authService.login(data);
      const token = response.token;
      const decoded = jwtDecode<CustomJwtPayload>(token);
      console.log("Role recebida do Backend: " + decoded)
      const userRole = decoded.role?.toUpperCase();
      if(userRole === "ADMIN") {
        router.push("/admin/dashboard");
      } else {
        router.push("/")
      }
    } catch (error: any) {
      setServerError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-pink-100">
        <div className="text-center mb-8 flex justify-center items-center">
          <Image src={Hat} alt="Chef hat" width={32} height={32} />
          <h1 className="text-3xl font-bold text-gray-800 font-dancing">Chef Julya</h1>
        </div>

        <LoginForm 
          onSubmit={handleLogin} 
          isLoading={isLoading} 
          serverError={serverError} 
        />
      </div>
    </div>
  )
}