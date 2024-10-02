export default function BlogPost({ params }) {
    return (
        <main>
            <h2>Post title</h2>
            <p>{params.slug}</p>
        </main>
    );
}