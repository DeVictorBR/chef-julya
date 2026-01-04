import { Package, ShoppingBag, Users, DollarSign } from "lucide-react";
import { StatCard } from "@/src/components/modules/admin/StatCard";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Resumo Geral</h2>
        <p className="text-gray-500">Acompanhe os números da sua confeitaria em tempo real.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Produtos" value="12" icon={<Package />} color="bg-pink-500" />
        <StatCard title="Pedidos" value="0" icon={<ShoppingBag />} color="bg-blue-500" />
        <StatCard title="Clientes" value="24" icon={<Users />} color="bg-purple-500" />
        <StatCard title="Vendas" value="R$ 0,00" icon={<DollarSign />} color="bg-emerald-500" />
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Últimos Pedidos Concluídos</h3>
        <div className="text-center py-10 text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
          ...
        </div>
      </div>
    </div>
  );
}