import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/navbar"

export const metadata = {
    title: "Upstream - A simple and open logging platform",
    description: "A simple logging platform built for developers.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`flex min-h-screen flex-col bg-background dark ${GeistSans.className}`}>
                <main className="flex-1">
                    <ThemeProvider attribute="class" defaultTheme="dark">
                        <TooltipProvider>
                            {children}
                            <Navbar />
                            <Toaster position="top-center" />
                        </TooltipProvider>
                    </ThemeProvider>
                </main>
            </body>
        </html>
    )
}
