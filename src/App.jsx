import { useState } from 'react'
import styles from './App.module.css'
import chatBotLogo from './assets/chat-bot.png'
import Chat from './components/chat'
import Controls from './components/controls'
function App() {

  const [messages, setMessages] = useState('')

  const handleContentSend=(content)=>{
    setMessages(prevState=>{
      return [...prevState, {role: 'user', content: content}]
    })
  }

  return (
   <div className={styles.App}>
    <header className={styles.Header}>
      <img className={styles.Logo} src={chatBotLogo} />
      <h2 className={styles.Title}>AI Chatbot</h2>
    </header>
    <div className={styles.ChatContainer}>
      <Chat messages={messages} />
    </div>
    <Controls sendMessage={handleContentSend} />
  </div>
  )
}

const MESSAGES =[
  {
    role: 'assistant',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex voluptates earum odit similique, qui enim quo dicta. Praesentium, tempore? Excepturi repellat doloremque atque vitae adipisci voluptates itaque assumenda. Reiciendis?"
  },
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex voluptates earum odit similique, qui enim quo dicta. Praesentium, tempore? Excepturi repellat doloremque atque vitae adipisci voluptates itaque assumenda. Reiciendis?"
  },
  {
    role: 'assistant',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex voluptates earum odit similique, qui enim quo dicta. Praesentium, tempore? Excepturi repellat doloremque atque vitae adipisci voluptates itaque assumenda. Reiciendis?"
  },
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex voluptates earum odit similique, qui enim quo dicta. Praesentium, tempore? Excepturi repellat doloremque atque vitae adipisci voluptates itaque assumenda. Reiciendis?"
  },
  {
    role: 'assistant',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex voluptates earum odit similique, qui enim quo dicta. Praesentium, tempore? Excepturi repellat doloremque atque vitae adipisci voluptates itaque assumenda. Reiciendis?"
  },
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex voluptates earum odit similique, qui enim quo dicta. Praesentium, tempore? Excepturi repellat doloremque atque vitae adipisci voluptates itaque assumenda. Reiciendis?"
  },
  {
    role: 'assistant',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex voluptates earum odit similique, qui enim quo dicta. Praesentium, tempore? Excepturi repellat doloremque atque vitae adipisci voluptates itaque assumenda. Reiciendis?"
  },
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex voluptates earum odit similique, qui enim quo dicta. Praesentium, tempore? Excepturi repellat doloremque atque vitae adipisci voluptates itaque assumenda. Reiciendis?"
  }
]

export default App
