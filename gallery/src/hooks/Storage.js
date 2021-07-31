import React, {useState,useEffect} from 'react'
import {projectStroage,projectFirestore,timestamp} from '../firebase/Config'

export default function Storage(file) {
    const [progress,setProgress]  = useState(0)
    const [error,setError] = useState(null)
    const [url,setUrl] = useState(null)

    useEffect(() => {
      const stroageRef = projectStroage.ref(file.name)
      const collectionRef = projectFirestore.collection('images')
      stroageRef.put(file).on('state_changed',(snap)=>{
           let percentage = (snap.bytesTransferred/snap.totalBytes) * 100
           setProgress(percentage)

      },(err)=>{
          setError(err)
      },async ()=>{
           const url = await stroageRef.getDownloadURL()
           const createdAt = timestamp()
           collectionRef.add({url,createdAt})
           setUrl(url)
      })
    }, [file])
    return {progress,url,error}
}
