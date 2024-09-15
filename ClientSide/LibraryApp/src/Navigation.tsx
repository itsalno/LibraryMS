import { Link } from "react-router-dom";




export default function Navigation() {

    return (
        <div className="flex flex-col items-start justify-start py-4 bg-base-100 fixed top-0 left-0 z-10">
            <button className="btn btn-primary mb-2">
                <Link to="/books" className="text-white">Books</Link>
            </button>
            <button className="btn btn-primary mb-2">
                <Link to="/authors" className="text-white">Authors</Link>
            </button>
            <button className="btn btn-primary mb-2">
                <Link to="/" className="text-white">Home</Link>
            </button>
        </div>
    );
}