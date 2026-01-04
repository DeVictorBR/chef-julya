interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    error?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => (
    <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            {...props}
            className={`w-full px-4 py-3 rounded-xl border ${
            error ? 'border-red-500' : 'border-gray-200'
            } focus:ring-2 focus:ring-brand-pink-strong outline-none transition-all`}
        />
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
)