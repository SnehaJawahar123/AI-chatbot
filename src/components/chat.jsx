import styles from './chat.module.css'

export default function Chat({messages}){
    const WELCOME_MESSAGE = {
        role: "assistant",
        content: "Welcome to the AI Chatbot! How can I assist you today?"
      }

    return <div className={styles.Chat}>
        {[WELCOME_MESSAGE, ...messages].map((message, index)=>{
            return (
                <div key={index} className={styles.Message} data-role={message.role}>
                    <p>{message.content}</p>
                </div>
            )
        })}
    </div>
}