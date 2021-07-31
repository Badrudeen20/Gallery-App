import React, { useEffect } from 'react'
import Storage from '../../hooks/Storage'
import './Progress.scss' 
export default function Progress(props) {

    const {progress,url} = Storage(props.file)
    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
     }
    useEffect(()=>{
     if(url){
        props.handleFile(null)
     }
    },[url,props.handleFile])
    return (
        <>
            <div className="download">
                <h3>Uploading</h3>
                <ul>
                    <li>
                        <div className="icon"><i class="fi-rr-document"></i></div>
                        <div className="upload_container">
                           <div className="flex">
                                <div className="file">
                                  <small>{props.file.name}</small>
                                  <small>/{bytesToSize(props.file.size)}</small>
                                </div>

                                <div className="del">
                                    <small><i class="fi-rr-cross-small"></i></small>
                                </div>
                            </div>


                            <div className="uploading">
                                <div className="progress" style={{width:progress+"%"}}></div>
                            </div>


                            <div className="flex">
                                <div className="persentage">
                                  <small>{progress}%</small>
                                  <small>done</small>
                                </div>

                                <div className="size">
                                    <small>120KB/sec</small>
                                </div>
                            </div>
                            
                        </div>
                    </li>

                    
                </ul>
            </div>
        </>
    )
}
