import React, { useState } from 'react'
import Gallary from './component/gallary/Gallary'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Progress from './component/progress/Progress'
import Modal from './component/modal/Modal'

export default function App() {
  const [file,setFile] = useState(null)
  const [selectimage,setSelectedimage] = useState(null)
  return (
    <>
       <Nav />
        <Header handleFile={setFile} />
        {file && <Progress file={file} handleFile={setFile}/>}
        <Gallary setSelectedHandler={setSelectedimage}/>
        {selectimage && <Modal selectedHandler={selectimage}
         setSelectedHandler={setSelectedimage}/>}
    </>
  )
}

/*

export default class App extends Component {
  constructor(){
        super()
    this.state = {
          file:null
    }
}

handleFile = (file)=>{
    this.setState({file:file})
}

  render() {
    const {file}  = this.state
   
    return (
      <>
        <Nav />
        <Header handleFile={this.handleFile} />
        {file && <Progress file={this.state.file} handleFile={this.handleFile}sss/>}
        <Gallary />
        <Modal />
      </>
    )
  }
}

*/