'use client'

export default function Button() {
  return (
    <div>
      <button 
                className="bg-green-500 rounded-md px-4 py-2"
                onClick={()=>console.log("I have clicked here")}
                >Click here</button>
    </div>
  )
}
