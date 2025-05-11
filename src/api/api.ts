import { IUser } from "@/models/User";

export async function fetchUserById(id: string): Promise<IUser | null> {
  const API_URL = process.env.NEXT_PUBLIC_URL;
  
  if (!API_URL) {
    console.error("API_URL is not defined");
    return null;
  }

  try {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });

    if (!res.ok) {
      return null;
    }

    const user: IUser = await res.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
