import { fetchUserById } from "@/api/api";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function UserPage({ params }: { params:  Promise<{ id: string }>}) {
  const { id } = await params;
  const user = await fetchUserById(id);
  if (!user) {
    notFound();
  }
  return (
    <div className="flex flex-col  mt-12 mx-2">
      <button className="border bg-blue-200 rounded max-w-24 ml-7">
        <Link href="/">
          Home
        </Link>
      </button>
      <div className="max-w-2xl mx-auto p-6 bg-blue-100 shadow rounded mt-10">
        <h1 className="text-2xl font-bold mb-4">{user.name} ({user.username})</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" className="text-blue-600 underline">{user.website}</a></p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
        <p><strong>Company:</strong> {user.company.name} — {user.company.catchPhrase}</p>
      </div>
    </div>
  );
}
