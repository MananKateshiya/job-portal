"use client";

import { Bookmark } from 'lucide-react';
import React, { useState } from 'react'

function BookMarkButton({ id }: { id: string }) {

    const [bookMark, isBookMark] = useState<boolean>(false);

    const handleBookMarkToggle = (id: string) => {
        isBookMark((prev) => !prev)
    }
    return (
        <div className=' rounded-full p-2 active:bg-blue-300 duration-300'>
            <Bookmark size={26} onClick={() => handleBookMarkToggle(id)} className={`${bookMark ? "fill-blue-400 text-transparent" : "fill-none"}`} />
        </div>
    )
}

export default BookMarkButton