import { RotatingEvents } from "@/components/rotating-events"
import { Navbar } from "@/components/navbar"
import { ShakingCards } from "@/components/shaking-cards"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <section className="relative flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center sm:pt-32 sm:pb-20">
                <div className="mx-auto w-full max-w-2xl space-y-6 px-2 sm:px-0">
                    <h1 className="text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl">
                        Simple and open logging for your next project.
                    </h1>

                    <p className="mx-auto max-w-lg text-sm text-muted-foreground sm:text-base">
                        Upstream is a simple logging platform for developers. View your events in a beautifully designed dashboard with powerful searching capabilities.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button size="lg" className="w-full sm:w-auto gap-2 text-sm font-semibold">
                            <Link target="_blank" href="https://up.linus.my/register">Create a free account</Link>
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="w-full sm:w-auto gap-2 text-sm font-semibold"
                        >
                            <Link href="/docs">View the docs</Link>
                        </Button>
                    </div>
                </div>

                <div className="mx-auto mt-8 w-full sm:mt-12">
                    <RotatingEvents />
                </div>
            </section>

            <section className="-mt-20 flex flex-col items-center px-4 py-16 text-center sm:py-24">
                <div className="mx-auto max-w-2xl space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Houston we have a problem..
                    </h2>
                    <p className="mx-auto max-w-lg text-base text-muted-foreground">
                        Every day, hundreds of developers are sending notifications on messaging platforms for their most critical events.
                    </p>
                </div>

                <ShakingCards
                    className="mt-5"
                    cards={[
                        {
                            src: "/houston/gmail.png",
                            alt: "Gmail notification overload",
                            label: "Email",
                        },
                        {
                            src: "/houston/discord.png",
                            alt: "Discord notification overload",
                            label: "Discord",
                        },
                        {
                            src: "/houston/whatsapp.png",
                            alt: "WhatsApp notification overload",
                            label: "WhatsApp",
                        },
                    ]}
                />

                <p className="mx-auto max-w-lg text-base text-muted-foreground mt-5">
                    In other words - a clunky workflow that doesn&apos;t scale well.
                </p>



            </section>

            <section className="flex flex-col items-center px-4 py-16 text-center sm:py-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-12">
                    Say hello to{" "}
                    <span
                        className="bg-gradient-to-r bg-[length:300%_auto] bg-clip-text text-transparent animate-gradient"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, oklch(70% 0.15 257.77), oklch(55.18% 0.187 257.77), oklch(45% 0.22 257.77), oklch(55.18% 0.187 257.77), oklch(70% 0.15 257.77))",
                        }}
                    >
                        Upstream
                    </span>
                </h2>

            </section>
        </div>
    )
}