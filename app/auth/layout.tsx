import { ReactNode } from "react";

export default function Layout({
    children
} : {
    children: ReactNode
}){
    return (
        <div className="bg-slate-500 flex items-center justify-center w-screen h-screen">
            <div className="bg-white rounded p-4 shadow max-w-lg w-full">
                {children}
            </div>
        </div>
    );
}