import Link from "next/link";

export default function Home() {
  return (
    <main className="container items-center flex justify-center flex-col">
      <h2>Home</h2>
      <p><Link href="/about">About us</Link></p>
      <p><Link href="/blog">Blog</Link></p>
    </main>
  );
}
