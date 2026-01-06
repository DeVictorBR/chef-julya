"use client"

import { Plus, Search, Edit, Trash2, Loader2, PackageOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { productService } from "@/src/services/productService";
import { ProductModal } from "@/src/components/modules/admin/ProductModal";
import { DeleteModal } from "@/src/components/modules/admin/DeleteModal";
import { ProductResponseDTO } from "@/src/types/product";
import { toast } from "react-toastify";

export default function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products,setProducts] = useState<ProductResponseDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState<{id: string, name: string} | null>(null);
    const [productToEdit, setProductToEdit] = useState<ProductResponseDTO | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {
        loadProducts();
    }, [page]);

    const loadProducts = async () => {
        try {
            setIsLoading(true);
            const data = await productService.listAll(page, 10);
            setProducts(data.content);
        } catch(error) {
            console.log("Erro ao carregar os produtos", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditClick = (product: ProductResponseDTO) => {
        setProductToEdit(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setProductToEdit(null);
    };

    const handleOpenDeleteModal = (id: string, name: string) => {
      setProductToDelete({ id, name });
      setIsDeleteModalOpen(true);
    }

    const handleConfirmDelete = async () => {
      if(!productToDelete) return;

      try {
        setIsDeleting(true);
        await productService.delete(productToDelete.id);
        toast.success("Doce removido com sucesso!");
        loadProducts();
      } catch (error) {
        toast.error("Erro ao excluir produto")
      } finally {
        setIsDeleting(false);
        setIsDeleteModalOpen(false);
        setProductToDelete(null);
      }
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Cardápio</h1>
                    <p className="text-gray-500 text-sm">Gerencie os itens da Chef Julya</p>
                </div>
                <button className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2.5 rounded-2xl font-semibold shadow-sm hover:bg-pink-600 transition-all cursor-pointer"
                onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={18} /> Novo Produto
                </button>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-pink-500">
                        <Loader2 className="animate-spin mb-2" size={32} />
                        <p className="text-gray-500 text-sm">Carregando do forno...</p>
                    </div>
                ) : products.length > 0 ? (
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Nome</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Preço</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Estoque</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((product) => (
                            <tr key={product.id} className="hover:bg-pink-50/30 transition-colors group">
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-4">

                                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-pink-50 border border-pink-100 flex-shrink-0">
                                    {product.imageUrl ? (
                                      <img 
                                        src={product.imageUrl} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center text-[10px] text-pink-300 font-bold text-center p-1 uppercase">
                                        Sem foto
                                      </div>
                                    )}
                                  </div>
                                  
                                  <div>
                                    <p className="font-semibold text-gray-800 text-sm">{product.name}</p>
                                    <p className="text-xs text-gray-400 line-clamp-1">{product.description}</p>
                                  </div>
                                </div>
                              </td>
                              
                              <td className="px-6 py-4 text-gray-600 font-medium text-sm">
                                R$ {product.price.toFixed(2)}
                              </td>
                              
                              <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                  {product.stock} em estoque
                                </span>
                              </td>

                              <td className="px-6 py-4 text-right space-x-2">
                                <button 
                                className="p-2 text-blue-500 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                                onClick={() => handleEditClick(product)}
                                >
                                  <Edit size={18}/>
                                </button>
                                <button 
                                  onClick={() => handleOpenDeleteModal(product.id, product.name)}
                                  className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                                  title="Excluir produto"
                                >
                                  <Trash2 size={18}/>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                    </table>
                    ) : (
                        <div className="py-20 flex flex-col items-center text-gray-400">
                            <PackageOpen size={48} className="mb-4 opacity-20" />
                            <p>Nenhum produto encontrado no cardápio.</p>
                        </div>
                    )}
            </div>
            <ProductModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                onSuccess={loadProducts}
            />
            <DeleteModal 
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              onConfirm={handleConfirmDelete}
              itemName={productToDelete?.name || ""}
              loading={isDeleting}
            />

            <ProductModal 
              isOpen={isModalOpen} 
              onClose={handleCloseModal} 
              onSuccess={loadProducts}
              product={productToEdit} 
            />
        </div>
    )
}