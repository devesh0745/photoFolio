import {useState,useRef} from "react";
import { db } from "../fireBaseInit";
import {collection,addDoc} from "firebase/firestore";
import "../css/imageForm.css"

export default function ImageForm(props){

    const [nameImage,setImageName]=useState("");
    const [urlImage,setImageUrl]=useState("");
    const titleRef=useRef(null);
    const urlRef=useRef(null);

     //Add Image to the database in submit.
     async function handleSubmit(e){
        e.preventDefault();
        //Adding document to the database.
        await addDoc(collection(db,"allImages"),{
            title:nameImage,
            url:urlImage,
            albumId:props.albumId
        });
        console.log("Image created");
        setImageName(" ");
        setImageUrl(" ");
        titleRef.current.focus();
        props.toast.success("Image Added Successfully.")
    }
   
    function handleImageName(){
        setImageName(titleRef.current.value);

    }
    function handleImageUrl(){
        setImageUrl(urlRef.current.value)
    }
    function handleClear(){
        setImageName(" ");
        setImageUrl(" ");
    }

    return(
        <>
        <div id="image-form">
            <h1 id="heading">Add New Image</h1>
            <form onSubmit={handleSubmit} id="form">
                <input 
                className="field"
                onChange={handleImageName} 
                placeholder="Enter Title" 
                ref={titleRef} 
                value={nameImage}
                required={true}
                />
                <input 
                className="field"
                onChange={handleImageUrl}
                placeholder="Enter URL"
                ref={urlRef}
                value={urlImage}
                required={true}
                />
            <button type="submit" id="image-create-btn">Create</button>
            </form>
            <button onClick={handleClear} id="image-clear-btn">Clear</button>
        </div>
            <div id="all-images">
                {console.log(props.imageList.length)}
                {props.imageList.length>0 ?props.imageList.map((image,index)=>(
                    
                    <div key={index} id="image">
                        
                        <img id="image-view" src={image.data.url} alt={image.title} width="200" height="200" onClick={()=>props.handleCarousal(image)}></img>
                        <h3 id="image-name">{image.data.title}</h3>
                        <button id="delete-btn" onClick={()=>props.handleImageDelete(image.imageId)}>Delete</button>
                        <button id="update-btn" onClick={()=>props.handleImageUpdate(image.imageId,nameImage,urlImage)}>Update</button>
                    </div>
                ))
                  :<h1 id="empty-heading">Album is Empty</h1>  }
            </div>
        </>
    )


}