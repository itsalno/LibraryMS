import {useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'solid-toast';


interface Author {
    id: number;
    authorname: string;
    numberofbooks: number;
    country: string;
}

function AuthorsList(){

    const [id, setId] = useState(0);
    const [authorname, setName] = useState("");
    const [numberofbooks, setBooks] = useState(0);
    const [country,setCountry]=useState("")
    const [picture, setPicture] = useState("");
    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {
        (async () => await LoadAuthors())();
    }, []);

    async function LoadAuthors() {

        const result = await axios.get("http://localhost:5123/api/Authors/GetAuthors");
        setAuthors(result.data);
        toast.success("Successfully loaded authors");
        console.log(result.data);
    }

    async function AddAuthor() {
        try {
            await axios.post("http://localhost:5123/api/Authors/AddAuthor", {

                authorname: authorname,
                numberofbooks: numberofbooks,
                country:country


            });
            toast.success("You have successefully added an Author");
            setId(0);
            setName("");
            setBooks(0);
            setCountry("");


            LoadAuthors();
        } catch {
            toast.error("Couldnt create an Author")
        }
    }

    async function UpdateAuthor() {
        try {
            await axios.put(`http://localhost:5123/api/Authors/EditAuthor/${id}`, {
                id,
                authorname,
                numberofbooks,
                country
            });
            toast.success("Successfully updated book");
            clearForm();
            LoadAuthors();
        } catch (err) {
            toast.error("Error updating book");
        }
    }
    
    async function EditAuthor(author) {
        setName(author.authorname);
        setBooks(author.numberofbooks);
        setCountry(author.country)


        setId(author.id);
    }

    function clearForm() {
        setId(0);
        setName("");
        setBooks(0);
        setCountry("");
    }
    
    return (
        <div>
            <h1>Authors List</h1>

            <div>
                <h2>{id === 0 ? "Add New Author" : "Edit Author"}</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    id === 0 ? AddAuthor() : UpdateAuthor();
                }}>
                    <div>
                        <label>Authors Name</label>
                        <input
                            type="text"
                            value={authorname}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Number of Books written</label>
                        <input
                            type="number"
                            value={numberofbooks}
                            onChange={(e) => setBooks(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div>
                        <label>Country</label>
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">{id === 0 ? "Create" : "Update"}</button>
                </form>
            </div>

            <div>
                <h2>Authors</h2>
                <ul>
                    {authors.map((author) => (
                        <li key={author.id}>
                            <div>
                                <p>Name: {author.authorname}</p>
                                <p>Books written:{author.numberofbooks}</p>
                                <p>From:{author.country}</p>
                                <button onClick={() => EditAuthor(author)}>Edit</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AuthorsList