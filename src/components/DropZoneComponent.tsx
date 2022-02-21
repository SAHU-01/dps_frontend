import { Dispatch,FunctionComponent,useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

const DropZoneComponent:FunctionComponent<{setFile:Dispatch<any>}> = ({setFile}) => {
        const onDrop=useCallback((acceptedFiles)=>{ 
            console.log(acceptedFiles);
            setFile(acceptedFiles[0]);
        },[]);
    
    const {getRootProps,getInputProps,isDragAccept,isDragReject}=useDropzone({
        onDrop,
        multiple:false,
        accept:"image/*,.pdf"
    });
  return (
    <div className="p-4 w-full">

         <div {...getRootProps()} className="w-full h-80 rounded-md cursor-pointer focus:outline-none">
             <input {...getInputProps()}/>
             <div className={
                 "flex flex-col items-center justify-center border-2 border-dashed border-blue-light rounded-xl h-full space-y-2 "
                  + (isDragReject === true ?"border-red-500":"")
                  + (isDragAccept === true?"border-green-500":"")
                  }>
                 <img src="/images/folder.png" alt="folder" className="h-16 w-16"/>
                 {
                     (isDragReject)?(<p>Sorry we only support .png,.jpeg and .pdf files now</p>)
                     :(
                         <>
                            <p>Drag & Drop files here</p>
                            <p className="mt-2 text-base text-gray-300">Only .png,.jpeg and .pdf are allowed for now </p>
                        </>
                     )}
                     </div>
         </div>
    </div>
    );
};

export default DropZoneComponent                            