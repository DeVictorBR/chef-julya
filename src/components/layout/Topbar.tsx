"use client"

import { Search, Bell, User } from "lucide-react"
import Image from "next/image"
import Hat from "@/public/assets/chef-hat.png"

export function TopBar() {
  return (
    <header className="h-20 bg-white border-b border-pink-50 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Buscar produtos, pedidos..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-100 rounded-2xl leading-5 bg-slate-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-pink-300 focus:border-pink-300 sm:text-sm transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-pink-500 transition-colors">
          <Bell size={22} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-pink-500 ring-2 ring-white"></span>
        </button>

        <div className="h-8 w-px bg-gray-100 mx-2"></div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold text-gray-800">Chef Julya</p>
            <p className="text-[10px] text-pink-500 font-semibold uppercase tracking-wider">Administradora</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-pink-100 p-1 flex items-center justify-center bg-pink-50">
            <Image src={Hat} alt="Admin" width={24} height={24} className="opacity-80" />
          </div>
        </div>
      </div>
    </header>
  )
}