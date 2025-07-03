import { Outlet } from "react-router-dom";
import GenresCard from "../../../components/GenresCard";


export default function CollectionPage() {

    return (
        <main>
            <section>
                <GenresCard />
            </section>
            <Outlet />
        </main>
    );
}