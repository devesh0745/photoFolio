import ImageForm from "./imageForm";
import Carousal from "./carousal";
import {useState,useEffect} from "react";
import { db } from "../fireBaseInit";
import {collection,onSnapshot,deleteDoc,doc,updateDoc} from "firebase/firestore";
import "../css/imageList.css"



export default function ImageList(props){
   
    const [imageList,setImageList] =useState([]);
    const [viewCarousal,setViewCarousal]=useState(false);
    const [image,setImage]=useState("");
    //Get all the Images while mounting.
    useEffect(()=>{
        //Fetching docs from database using onSnapShot();
        onSnapshot(collection(db,"allImages"),(snapShot)=>{
            let allImages=[];
            const images=snapShot.docs.map((doc,key)=>{
                return{
                    imageId:doc.id,
                    data:doc.data()
                }
            })
            images.map((image,key)=>{
                if(image.data.albumId===props.albumId){
                    allImages.push(image);
                }
             })
            setImageList(allImages);
          
        })
    },[]);
    async function handleImageDelete(index){
        await deleteDoc(doc(db,"allImages",index));
        console.log("Image Deleted",index);
        props.toast.success("Image Deleted Successfully.")
    }
    async function handleImageUpdate(index,imageName,imageUrl){
        const imageDpcRef = doc(db, "allImages", index);

        await updateDoc(imageDpcRef,{
            title:imageName,
            url:imageUrl
        })
        props.toast.success("Image Updated Successfully.")
    }
    function handleCarousal(image){
        setViewCarousal(!viewCarousal);
        setImage(image);
      //  console.log("All Images",image);
    }
    return(
        <>
        <div>
        {viewCarousal?<Carousal toast={props.toast} image={image} imageList={imageList} />: <ImageForm 
        toast={props.toast}
        albumId={props.albumId} 
        imageList={imageList}
        handleImageDelete={handleImageDelete}
        handleImageUpdate={handleImageUpdate}
        handleCarousal={handleCarousal}
        />}
        {viewCarousal?<button id="back-img-btn" onClick={()=>handleCarousal(image)}>Back to Gallery</button>:null}
        </div>
       
        </>
    )
}