import Link from "next/link";

export default function PostLayout({ children }: { children: any }) {
    return (
        <div className="max-w-xl mx-0 my-auto p-6">
            <div className="bg-green-600 h-3 w-3 p-2">test</div>
            {children}
        </div>
    );
}
