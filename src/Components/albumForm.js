import {useState,useRef} from "react";
import { db } from "../fireBaseInit";
import {collection,addDoc} from "firebase/firestore";
import "../css/albumForm.css";


export default function Albumform(props){
    const [nameAlbum,setAlbumName]=useState("");
    const nameRef=useRef(null);

    function handleAlbumName(){
        setAlbumName(nameRef.current.value);
    }
    //Add album to the database in submit.
    async function handleSubmit(e){
        e.preventDefault();
        //Adding document to the database.
        await addDoc(collection(db,"allAlbums"),{
            albumName:nameAlbum,
            createdOn:new Date()
        });
        console.log("Album created",nameAlbum);
        setAlbumName(" ");
        props.toast.success("Albums Added Successfully.")
    }
    function handleClear(){
        setAlbumName(" ");
    }

    return(
        <>
        <div id="input-form">
            <h1 id="heading">Add New Album</h1>
            <form onSubmit={handleSubmit} id="album-form">
                <input 
                id="field"
                onChange={handleAlbumName} 
                placeholder="Enter Album Name" 
                ref={nameRef} 
                value={nameAlbum}
                required={true}
                />
            <button type="submit" id="album-create-btn" varient="primary">Create</button>
            </form>
            <button onClick={handleClear} id="album-clear-btn" >Clear</button>
            
        </div>
        <div id="all-albums">
        {props.albumList.map((albums,index)=>(
            
                    <div key={index} id="album">
                        <h3 id="album-heading">{albums.albumName}</h3>
                        <button id="addPhotos" onClick={() => props.handleShowImage(albums.id)}>Add Photos</button>
                        

                        </div>
            
         ))}
        </div>
        </>
    )
}
                       