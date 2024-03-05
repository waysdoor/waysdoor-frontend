import theme from "@/theme/theme";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
            
        <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider> 
        </AppRouterCacheProvider>     
        </body>
        </html>
    );
}
