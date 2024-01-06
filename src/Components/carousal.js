import { useState} from "react";
import "../css/carousal.css"

export default function Carousal(props){
    console.log("list:",props.imageList);
    const [showImage,setShowImages]=useState(props.image);
    //console.log("Images",showImage.data);

    
    function handlePrevious(image){
        console.log(image)
    /*    props.imageList.map((allImages,index)=>{
            if(allImages.imageId===image.imageId){
                setShowImages(allImages[index-1]);
                console.log("previous running");
            }
        })*/
        for(let i in props.imageList){
            if(props.imageList.length===1){
                setShowImages(image);
            }else if(props.imageList[i].imageId===image.imageId && i!==0){
                console.log("id:",i,props.imageList[i])
                setShowImages(props.imageList[i-1]);
            }else{
                setShowImages(props.imageList[0])
            }
        }
    }
    
    function handleNext(image){
    /*    props.imageList.map((allImages,index)=>{
            if(allImages.imageId===image.imageId){
                console.log(showImage);
                setShowImages(allImages[index+1]);
                console.log(showImage)
            }
        })*/
     //   console.log("image:",image);
       // console.log("all images:",props.imageList);
        for(let i in props.imageList){
          //  console.log(i);
            if(props.imageList.length===1){
                setShowImages(image);
            }else if(props.imageList[i].imageId===image.imageId && props.imageList.length!==0){
                console.log(i)
                console.log(props.imageList[i].imageId)
                console.log(image.imageId);
                setShowImages(props.imageList[i+1]);
                console.log("show image:",showImage)
        }else{
            setShowImages(props.imageList[0]);
        }
    
    }
    }


    return(
      
        <>
        <div id="carousal">
            <img src="https://cdn-icons-png.flaticon.com/128/1286/1286997.png"  className="caro-btn" onClick={()=>handlePrevious(showImage)} />
            <img src={showImage.data.url} alt={showImage.data.title} width="500" height="500" id="caro-img"></img>
            <img src="https://cdn-icons-png.flaticon.com/128/1286/1286942.png"  className="caro-btn"  onClick={()=>handleNext(showImage)} />
           
        </div>
        </>
    )
}
            