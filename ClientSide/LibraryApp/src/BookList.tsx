import axios from "axios";
import { useEffect, useState } from "react";


function BookList(){

        const [id, setId] = useState(0);
        const [bookName, setName] = useState("");
        const [numberofpages, setPages] = useState(0);
        const [description,setDescription]=useState("")
        const [books, setUsers] = useState([]);

        useEffect(() => {
            (async () => await LoadBooks())();
        }, []);

        async function LoadBooks() {

            const result = await axios.get("https://localhost:5123/api/Books/GetBooks");
            setUsers(result.data);
            console.log(result.data);
        }

        async function AddBook() {
            try {
                await axios.post("https://localhost:5123/api/Books/AddBook", {

                    bookName: bookName,
                    numberofpages: numberofpages,
                    description:description
                    

                });
                alert("Book registration sucesesfull");
                setId(0);
                setName("");
                setPages(0);
                setDescription("");


                LoadBooks();
            } catch (err) {
                alert(err);
            }
        }
        async function EditBook(books) {
            setName(books.bookName);
            setPages(books.numberofpages);
            setDescription(books.description)


            setId(books.id);
        }

        async function DeleteBook(id) {

            await axios.delete("https://localhost:5123/api/Books/DeleteBook/" + id);
            alert("Employee deleted Successfully");
            setId(0);
            setName("");
            setPages(0);
            setDescription("")
            LoadBooks();
        }
        
    return (
        <>
            BookList
        </>
    )
}
export default BookList