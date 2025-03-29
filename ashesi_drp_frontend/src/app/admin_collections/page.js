import "../globals.css";
import AdminCollections from "@/components/AdminCollections";
import { BASE_URL } from "@/utils/constants";


export default async function UsersTable() {

  const data = await fetch(`${BASE_URL}/get_all_collections`);
  const initialCollections = await data.json();
  console.log(initialCollections);
  return (
    <>
      <AdminCollections initialCollections={initialCollections}/>
    </>
  );
}

