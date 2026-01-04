import { Sidebar } from "./Sidebar";
import { TopBar } from "./Topbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <main className="flex-1 flex flex-col p-8 overflow-y-auto">
                    <div className="w-full max-w-screen-2xl">
                        {children}
                    </div>
                </main> 
            </div>
        </div>
    )
}