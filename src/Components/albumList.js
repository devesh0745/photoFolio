import {useState,useEffect} from "react";
import Albumform from "./albumForm";
import ImageList from "./imageList";
import "../css/albumList.css"


//Importing firestore methods and DB.
import {db} from "../fireBaseInit";
import {onSnapshot,collection} from "firebase/firestore";

export default function Albumlist(props){
    const [albumList,setAlbumList]=useState([]);
    const [showImages,setShowImages]=useState(false);
    const [getId,setGetId]=useState(0);
       
    
    //Get all the albums while mounting.
    useEffect(()=>{
        //Fetching docs from database using onSnapShot();
        onSnapshot(collection(db,"allAlbums"),(snapShot)=>{
            const albums=snapShot.docs.map((doc,key)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setAlbumList(albums);
        })
        props.toast.success("Albums Fetched Successfully.")
    },[]);
    function handleShowImage(index){
        setGetId(index);
        setShowImages(!showImages);
    }
    

    return(
        <>
        <div id="back-btn">
        {showImages?<img src="https://cdn-icons-png.flaticon.com/128/10238/10238019.png" id="back-to-album"  onClick={()=>handleShowImage(getId)} />:null} 
        </div>
        {showImages?<ImageList albumId={getId} toast={props.toast} />:<Albumform toast={props.toast} handleShowImage={handleShowImage} albumList={albumList}/>}  
        
        </>
    )
}
