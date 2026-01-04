"use client"

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ProductFormData, productSchema } from "@/src/schemas/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Upload, Loader2, AlertCircle } from "lucide-react";
import { productService } from "@/src/services/productService";
import { NumericFormat } from "react-number-format";
import { toast } from "react-toastify";

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export function ProductModal({ isOpen, onClose, onSuccess }: ProductModalProps) {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);  

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm<ProductFormData>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            stock: 0,
            file: undefined
        }
    });

    const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const onSubmit = async (data: ProductFormData) => {
        try {
            setLoading(true);
            const productFile = data.file[0];
            const { file, ...productData } = data;
            await productService.create(productData, productFile);
            reset();
            setPreview(null);
            onSuccess();
            onClose();
            toast.success("Doce cadastrado com sucesso! 🍰");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao cadastrar produto.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden relative border border-pink-50">
                <button onClick={onClose} type="button" className="absolute right-6 top-6 text-gray-400 hover:text-pink-500 transition-colors cursor-pointer z-10">
                    <X size={24} />
                </button>

                <form onSubmit={handleSubmit(onSubmit)} className="p-8">
                    <header className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 font-dancing">Novo Doce</h2>
                        <p className="text-gray-500 text-sm">Preencha os dados para atualizar o cardápio.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Foto do Produto</label>
                            <label className={`group relative w-full h-[275px] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${errors.file ? 'border-red-400 bg-red-50' : 'border-pink-100 hover:bg-pink-50'}`}>
                                {preview ? (
                                    <img src={preview} className="w-full h-full object-cover" alt="Preview" />
                                ) : (
                                    <div className="text-center p-4">
                                        <Upload className="text-pink-400 mx-auto mb-2" size={32} />
                                        <span className="text-xs font-medium text-gray-400">Tamanho máx: 5MB</span>
                                    </div>
                                )}
                                <input type="file" className="hidden" accept="image/*" {...register("file", { onChange: handlePreview })} />
                            </label>
                            {errors.file && <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.file.message as string}</p>}
                        </div>

                        <div className="md:col-span-3 space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nome do Doce</label>
                                <input 
                                    {...register("name")}
                                    placeholder="Ex: Bolo de Pistache" 
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 outline-none mt-1 ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:ring-pink-200'}`}
                                />
                                {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Descrição</label>
                                <textarea 
                                    {...register("description")}
                                    placeholder="Ingredientes e detalhes..." 
                                    rows={3}
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 outline-none mt-1 resize-none ${errors.description ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:ring-pink-200'}`}
                                />
                                {errors.description && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.description.message}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Preço (R$)</label>
                                    <Controller
                                      name="price"
                                      control={control}
                                      render={({ field: { onChange, value } }) => (
                                        <NumericFormat
                                          value={value === 0 ? "" : value}
                                          allowNegative={false}
                                          decimalScale={2}
                                          thousandSeparator="."
                                          decimalSeparator=","
                                          prefix="R$ "
                                          fixedDecimalScale
                                          placeholder="R$ 0,00"
                                          onValueChange={(values) => onChange(values.floatValue || 0)}
                                          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 outline-none mt-1 ${errors.price ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:ring-pink-200'}`}
                                        />
                                      )}
                                    />
                                    {errors.price && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.price.message}</p>}
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Estoque</label>
                                    <Controller
                                      name="stock"
                                      control={control}
                                      render={({ field: { onChange, value } }) => (
                                        <NumericFormat
                                          value={value === 0 ? "" : value}
                                          allowNegative={false}
                                          decimalScale={0}
                                          placeholder="0"
                                          onValueChange={(values) => onChange(values.floatValue || 0)}
                                          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 outline-none mt-1 ${errors.stock ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:ring-pink-200'}`}
                                        />
                                      )}
                                    />
                                    {errors.stock && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.stock.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button 
                            disabled={loading}
                            type="submit"
                            className="w-full bg-pink-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-pink-100 hover:bg-pink-600 active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer gap-2 disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : "Salvar no Cardápio"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}