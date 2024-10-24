import Link from 'next/link';
import React from 'react';
 
 const layout = ({children}) => {
    return (
        <div>
            <nav className='text-cyan-500'>
               <ul className='flex gap-4'>
                <li><Link href="/blog/mission">mission</Link></li>
                <li><Link href="/blog/vision">vision</Link></li>
               </ul>
            </nav>
            {children}
        </div>
    );
 };
 
 export default layout;