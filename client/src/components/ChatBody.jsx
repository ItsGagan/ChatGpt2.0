import React from 'react'

const ChatBody = ({chat}) => {
const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto"

  return (
    <div className='flex flex-col gap-4'>
    {
      chat.map((message,i) => {
        return (
          <div key={i}
          className={`border-[#999999] break-words border-2 rounded-xl self-end py-3 px-3 max-w-[80%] 
          ${message.sender === "ai" && aiStyle}`}>
            <pre className='whitespace-pre-wrap'>
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}
    </div> 
  )
}

export default ChatBody;