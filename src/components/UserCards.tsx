'use client'
import { useEffect, useState } from "react";
import { IUser, User } from "../models/User";
import Link from "next/link";

export default function UsersCards() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [query, setQuery] = useState<string>("");
  
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_URL;
    if(!url){
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const users = data.map((u: IUser) => new User(u));
        setUsers(users);
        setFiltered(users);
      });
  }, []);

  useEffect(() => {
    setFiltered(users.filter((u) => u.matches(query)));
  }, [query, users]);

  return (
    <div>
      <div className="mb-4 p-4 bg-yellow-200 rounded shadow text-gray-800">
        If you want to see all info — click on a user card.
      </div>
      <div className="min-h-screen p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <input
          type="text"
          placeholder="Search by ..."
          className="p-2 mb-4 w-full rounded border"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {filtered.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div className="p-4 bg-gray-300 rounded shadow transition duration-300 transform hover:scale-105 hover:bg-blue-300 cursor-pointer">
                <h2 className="font-bold">{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
