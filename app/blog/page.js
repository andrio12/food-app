import Link from 'next/link';

export default function Blog() {
    return (
        <main>
            <h2>The Blog</h2>
            <p><Link href="/blog/post-1">Post 1</Link></p>
            <p><Link href="/blog/something">Something</Link></p>
        </main>
    );
}