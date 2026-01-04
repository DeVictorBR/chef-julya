"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  ShoppingBasket, 
  Users, 
  Settings, 
  LogOut, 
  UtensilsCrossed 
} from "lucide-react"

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Produtos", href: "/admin/produtos", icon: UtensilsCrossed },
  { name: "Pedidos", href: "/admin/pedidos", icon: ShoppingBasket },
  { name: "Clientes", href: "/admin/clientes", icon: Users },
  { name: "Configurações", href: "/admin/configuracoes", icon: Settings },
]

export function Sidebar() {
    const pathName = usePathname();

    return (
        <aside className="w-64 bg-white h-screen flex flex-col border-r border-pink-100 sticky top-0">
      <div className="p-6 border-b border-pink-50 flex items-center gap-3">
        <div className="bg-pink-500 p-2 rounded-lg text-white">
          <UtensilsCrossed size={24} />
        </div>
        <span className="text-xl font-bold text-gray-800 font-dancing">Chef Julya</span>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathName === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                ? "bg-pink-500 text-white shadow-md shadow-pink-200" 
                : "text-gray-500 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-pink-50">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all">
          <LogOut size={20} />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </aside>
    )
}