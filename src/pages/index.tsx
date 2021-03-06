import DropZoneComponent from "@components/DropZoneComponent";
import EmailForm from"@components/EmailForm";
import RenderFile from "@components/RenderFile";
import DownloadFile from "@components/DownloadFile";
import {useState} from "react";
import axios from "axios";

export default function Home() {
  const [file,setFile]=useState(null);
  const [id,setId]=useState(null);
  const [downloadPageLink,setDownloadPageLink]=useState(null);
  const [uploadState,setUploadState]=useState<"Uploading"|"Upload Failed"|"Uploaded"|"Upload">("Upload")


  const handleUpload=async()=>{
    if(uploadState ==="Uploading") return;
    setUploadState("Uploading");
    const formData=new FormData();
    formData.append("myFile",file)
    try{
       const {data}=await axios({
        method:"post",
        data:formData,
        url:"api/files/upload",
        headers:{
          "Content-Type":"multipart/form-data",
        },
      });
      console.log(data);
      setDownloadPageLink(data.downloadPageLink);
      setId(data.id);
    }catch(error){
      console.log(error.type);
      setUploadState("Upload Failed");
    }

  };

const resetComponent=()=>{
  setFile(null);
  setDownloadPageLink(null);
  setUploadState("Upload");
};

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">Got a Berectigunshien?Upload It!</h1>
      <div className="w-96 flex flex-col items-center bg-gray-900 text-white  shadow-xl rounded-xl justify-center">
         {!downloadPageLink && <DropZoneComponent setFile={setFile} />}
        {
          file &&
        
        <RenderFile 
        file={{
          format:file.type.split("/")[1],
          name:file.name,
          sizeInBytes:file.size,
        }}
        />
      }
        
        {/*upload button*/}
        {!downloadPageLink && file && (
        <button className="w-44 bg-white text-black focus:outline-none rounded-md my-5" onClick={(handleUpload)}>{uploadState}</button>
        )}
      {
        downloadPageLink && (
          <div className="p-2 text-center">
        <DownloadFile downloadPageLink={downloadPageLink}/>
        <EmailForm id={id} />
        <button className="w-44 bg-white text-black focus:outline-none rounded-md my-5" onClick={resetComponent}>Upload New Files</button>
        </div>
        )}

      
      </div>
    </div>
  );
}
