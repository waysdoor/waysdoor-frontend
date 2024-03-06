"use client"
import React, { useState } from 'react';
import { Collapse } from '@mui/material';

function Chatbar() {
    const [showChat, setShowChat] = useState(false);

    const toggleChatBar = () => {
        setShowChat(prevState => !prevState);
    }

    return (
        <div onClick={toggleChatBar} className='w-[20%] fixed bottom-0 right-0  bg-black text-white cursor-pointer p-4'>
            Chatbar
            <Collapse in={showChat} timeout='auto' unmountOnExit>
                <div className='flex flex-col'>
                    <div>a</div>
                    <div>b</div>
                    <div>c</div>
                    <div>d</div>
                    <div>e</div>
                    <div>f</div>
                </div>
            </Collapse>
        </div>
    );
}

export default Chatbar;
