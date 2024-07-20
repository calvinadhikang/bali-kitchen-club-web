import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="bg-white rounded-xl p-5 shadow max-w-lg w-full h-56 border-gray-200 border">
        {children}
      </div>
    </div>
  );
}
