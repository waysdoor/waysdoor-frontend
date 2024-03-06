import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Auth Page",
    description: "This is auth page",
};

export default function AuthLayout({ children }) {
    return (
        <>          
        {children}        
        </>
    );
}





