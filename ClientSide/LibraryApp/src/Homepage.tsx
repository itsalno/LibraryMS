

function Homepage() {
    return (
        <div className="flex flex-col itemsq-center justify-center min-h-screen bg-gray-900 text-white text-center px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Welcome to <span className="text-blue-400">Libraryx</span>!
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Dive into a world of knowledge with Libraryx. Whether you're a book lover, an avid reader, or just exploring, we've got something for you.
                    Our platform offers a vast collection of books and detailed information about your favorite authors.
                </p>
                <p className="text-md md:text-lg mb-8">
                    With Libraryx, you can browse through an extensive library of genres, find recommendations tailored to your taste, and stay updated with the latest releases.
                    Join our community and start your literary adventure today!
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href="/books"
                        className="btn btn-primary"
                    >
                        Explore Books
                    </a>
                    <a
                        href="/authors"
                        className="btn btn-secondary"
                    >
                        Meet the Authors
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
