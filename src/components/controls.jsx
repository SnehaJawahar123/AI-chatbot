import styles from './controls.module.css'
import { useState } from 'react'

export default function controls(props){

    const [content, setContent] = useState('')

    const handleContentChange = (event) =>{
        setContent(event.target.value)
        console.log(event.target.value)
    }

    const handleSendMessage = () => {
        props.sendMessage(content.trim());
        console.log("handlesend", content)
        setContent('');
    }

    const handleEnterClick = (event) => {
        if(event.key !== "Enter" && event.key !== 'Shift'){
            event.preventDefault(); //whatever may be the default action coded with enter by libraray will not happen
            handleSendMessage();
        }
    }

    return(
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <textarea className={styles.TextArea} placeholder="Message AI chatbot" onKeyDown={handleEnterClick} onChange={handleContentChange}/>
            </div>
            <button className={styles.Button} onClick={handleSendMessage}><SendIcon/></button>
        </div>
    )
}

function SendIcon(){
    return(
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z"/></svg>
    )
}