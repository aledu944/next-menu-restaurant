import { NavMenu } from "@/modules/shared";

export default function({children}: { children: React.ReactNode }) {
    return (
        <>
            <NavMenu/>
            <main className="container">
                { children }
            </main>
        </>
    );
}