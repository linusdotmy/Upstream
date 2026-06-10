export type EventProps = {
    title: string;
    icon: string;
    time: string;
    content?: string;
    category?: string;
    fields?: {
        name: string;
        value: string;
    }[];
    events?: {
        icon: string;
        time: string;
        content: string;
    }[];
    data?: unknown;
    actions?: {
        title: string;
        type: "default" | "secondary" | "ghost";
        url: string;
    }[];
}