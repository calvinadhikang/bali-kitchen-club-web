'use client'

import Link from "next/link"
import { useState } from "react"

export default function Page(){
    const [username, setUsername] = useState('')
    
    return(
        <>
            <h1 className="text-xl font-bold text-center">Login</h1>
            <p>Username</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border p-2 mb-2" />
            <button className="bg-cyan-400 p-2 rounded hover:bg-opacity-60" onClick={() => alert(username) }>Login</button>
            <div className="mt-5 text-sm text-center">
                <span>Dont have an account, </span>
                <Link className="underline text-blue-600" href={"register"}>register</Link>
            </div>
        </>
    )
}