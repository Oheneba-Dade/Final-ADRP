import "../../globals.css";
import CollectionClientLoader from "@/components/CollectionClientLoader"; // We'll create this

export default function CollectionPage({ params }) {
    const collectionId = params.id;

    return (
        <div className="max-w-5xl mx-auto mt-20 px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            <CollectionClientLoader collectionId={collectionId} />
        </div>
    );
}
