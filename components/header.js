import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="items-center bg-white p-2">
            <Link href="/">
                <Image src="next.svg" alt="Logo" width={100} height={100} />
                <h1 className="text-black">Welcome to this course!</h1>
            </Link>
        </header>
    );
}