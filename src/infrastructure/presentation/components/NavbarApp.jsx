import { Link } from "react-router-dom";
export default function NavbarApp() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        </>
    );
}
