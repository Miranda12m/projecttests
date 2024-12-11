import { useEffect, useState } from "react";
import db from "../appwrite/databases";
import NoteForm from "../components/NoteForm";
import { Query } from "appwrite";
import Note from "../components/Note";
import ThemeOption from "../components/ThemeOption";

function Notes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        
        const response = await db.notes.list([Query.orderDesc("$createdAt")]);

        setNotes(response.documents); //array response
    };

    return (
        <>
            <div>
                <h1>Testing Appwrite Todo App</h1>
                <br />
                {/* Not working idk why */}
                {/* <div className="theme-options">
                    <ThemeOption theme="dark" />
                    <ThemeOption theme="light" />
                    <ThemeOption theme="purple" />
                </div> */}
                <NoteForm setNotes={setNotes}/>
                <div>
                    {notes.map((note) => (
                        <Note key={note.$id} setNotes={setNotes} noteData={note} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Notes;
