import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'solid-toast';




interface Book {
    id: number;
    bookName: string;
    numberofpages: number;
    description: string;
}


function BookList() {
    
    
    const [id, setId] = useState(0);
    const [bookName, setName] = useState("");
    const [numberofpages, setPages] = useState(0);
    const [description, setDescription] = useState("");
    const [books, setBooks] = useState<Book[]>([]);


    useEffect(() => {
        (async () => await LoadBooks())();
    }, []);

    async function LoadBooks() {
        try {
            const result = await axios.get("http://localhost:5123/api/Books/GetBooks");
            setBooks(result.data);
            toast.success("Successfully loaded books");
        } catch (err) {
            toast.error("Error loading books");
        }
    }

    async function AddBook() {
        try {
            await axios.post("http://localhost:5123/api/Books/AddBook", {
                bookName,
                numberofpages,
                description
            });
            toast.success("You have successfully added a book");
            clearForm();
            LoadBooks();
        } catch (err) {
            toast.error("Error adding book");
        }
    }

    async function EditBook(book) {
        setId(book.id);
        setName(book.bookName);
        setPages(book.numberofpages);
        setDescription(book.description);
    }

    async function UpdateBook() {
        try {
            await axios.put(`http://localhost:5123/api/Books/EditBook/${id}`, {
                id,
                bookName,
                numberofpages,
                description
            });
            toast.success("Successfully updated book");
            clearForm();
            LoadBooks();
        } catch (err) {
            toast.error("Error updating book");
        }
    }

    async function DeleteBook(id) {
        try {
            await axios.delete(`http://localhost:5123/api/Books/DeleteBook/${id}`);
            toast.success("Successfully deleted a book");
            LoadBooks();
        } catch (err) {
            toast.error("Error deleting book");
        }
    }

    function clearForm() {
        setId(0);
        setName("");
        setPages(0);
        setDescription("");
    }

    return (
        <div>
            <h1>Book List</h1>
            
            <div>
                <h2>{id === 0 ? "Add New Book" : "Edit Book"}</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    id === 0 ? AddBook() : UpdateBook();
                }}>
                    <div>
                        <label>Book Name</label>
                        <input
                            type="text"
                            value={bookName}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Number of Pages</label>
                        <input
                            type="number"
                            value={numberofpages}
                            onChange={(e) => setPages(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">{id === 0 ? "Create" : "Update"}</button>
                </form>
            </div>
            
            <div>
                <h2>Books</h2>
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            <div>
                                <strong>{book.bookName}</strong>
                                <p>{book.description}</p>
                                <p>Pages: {book.numberofpages}</p>
                                <button onClick={() => EditBook(book)}>Edit</button>
                                <button onClick={() => DeleteBook(book.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BookList;
