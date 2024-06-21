import Link from "next/link";

function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/" className="title container">
                MKS
                <p className="subtitle">
                  Sistemas
                </p>
            </Link>
        </nav>
    )
}

export default Navbar 