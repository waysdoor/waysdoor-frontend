import Chatbar from "@/components/chatbar/Chatbar";
import Navbar from "@/components/navbar/Navbar";


export const metadata = {
    title: "Home Page",
    description: "This is home page",
};

export default function DashBoardLayout({ children }) {
    return (
        <>   
        <Navbar/>
        <div className="relative bg-cyan-100 ">
        {children}
        <Chatbar/>
        </div>
        </>
   
    );
}
