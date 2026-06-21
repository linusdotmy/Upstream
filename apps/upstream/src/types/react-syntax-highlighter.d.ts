declare module "react-syntax-highlighter" {
    import * as React from "react"

    interface SyntaxHighlighterProps {
        language?: string
        style?: Record<string, React.CSSProperties>
        children: string
        className?: string
        PreTag?: keyof JSX.IntrinsicElements | React.ComponentType<Record<string, unknown>>
    }

    export const Prism: React.FC<SyntaxHighlighterProps>
    export const Light: React.FC<SyntaxHighlighterProps>
    export default Prism
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
    export const vscDarkPlus: Record<string, React.CSSProperties>
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism" {
    export const vscDarkPlus: Record<string, React.CSSProperties>
}
