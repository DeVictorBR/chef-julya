"use client"

import { X, AlertTriangle, Loader2 } from "lucide-react";

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    itemName: string;
    loading?: boolean;
}

export function DeleteModal({ isOpen, onClose, onConfirm, itemName, loading }: DeleteModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-red-50">

                <button 
                    onClick={onClose} 
                    className="absolute right-6 top-6 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-8 pt-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6 animate-pulse">
                        <AlertTriangle size={40} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Excluir Doce?</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                        Você tem certeza que deseja remover <span className="font-bold text-red-500">"{itemName}"</span>? 
                        Essa ação não poderá ser desfeita.
                    </p>

                    <div className="flex w-full gap-3">
                        <button 
                            onClick={onClose}
                            className="flex-1 px-4 py-4 rounded-2xl cursor-pointer font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 transition-all active:scale-95"
                        >
                            Cancelar
                        </button>
                        <button 
                            onClick={onConfirm}
                            disabled={loading}
                            className="flex-1 px-4 py-4 rounded-2xl font-bold text-white bg-red-500 hover:bg-red-600 cursor-pointer shadow-lg shadow-red-100 transition-all active:scale-95 flex items-center justify-center disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : "Sim, Excluir"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}