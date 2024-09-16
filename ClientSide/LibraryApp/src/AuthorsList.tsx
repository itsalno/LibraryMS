import {useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'solid-toast';

function AuthorsList(){

    const [id, setId] = useState(0);
    const [authorname, setName] = useState("");
    const [numberofbooks, setBooks] = useState(0);
    const [country,setCountry]=useState("")
    const [picture, setPicture] = useState("");
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        (async () => await LoadAuthors())();
    }, []);

    async function LoadAuthors() {

        const result = await axios.get("https://localhost:5123/api/Authors/GetAuthors");
        setAuthors(result.data);
        toast.success("Successfully loaded authors");
        console.log(result.data);
    }

    async function AddAuthor() {
        try {
            await axios.post("https://localhost:5123/api/Authors/AddAuthor", {

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
    async function EditAuthor(author) {
        setName(author.authorname);
        setBooks(author.numberofbooks);
        setCountry(author.country)


        setId(author.id);
    }

    async function DeleteAuthor(id) {

        await axios.delete("https://localhost:5123/api/Authors/DeleteAuthor/" + id);

        setId(0);
        setName("");
        setBooks(0);
        setCountry("")
        LoadAuthors();
        toast.success("Successefully deleted an Author");
    }
    return(
        <>Authors List</>
    )
}

export default AuthorsList