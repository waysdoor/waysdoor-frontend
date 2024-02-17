import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


export const metadata = {
    title: "Home Page",
    description: "This is home page",
};

export default function DashBoardLayout({ children }) {
    return (
        <>   
        <Navbar/>
        {children}
        <Footer/>
        </>
   
    );
}
