"use client";

import { useState } from "react";
import Link from "next/link";

const posts = [
  {
    title: "Come iniziare con Next.js",
    slug: "come-iniziare-nextjs",
  },
  {
    title: "10 consigli per sviluppatori web",
    slug: "10-consigli-dev",
  },
  {
    title: "Il futuro del web development",
    slug: "futuro-web-dev",
  },
  {
    title: "React vs Vue",
    slug: "react-vs-vue",
  },
  {
    title: "Tailwind CSS guida base",
    slug: "tailwind-css-guida",
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 space-y-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold">Blog</h1>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Cerca articoli..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* LISTA POST */}
      <ul className="space-y-3">
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}