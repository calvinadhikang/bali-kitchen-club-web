'use client'

import QRCode from "qrcode.react";
import { useState } from "react";

export default function Page() {

    const [text, setText] = useState("")

    return (
        <>
            <h1>Welcome, to Bali Kitchen Club</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border" />
            <div className="w-screen flex items-center justify-center">
                {text && <QRCode value={text} />}
            </div>
        </>
    );
}
