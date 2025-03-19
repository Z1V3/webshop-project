'use client';

import { DesktopHeader } from './DesktopHeader';
import { PhoneHeader } from './PhoneHeader';

export const Header = () => {

    return (
        <div className="">
            <PhoneHeader className='md:hidden'/>
            <DesktopHeader className='hidden md:flex'/>
        </div>
    );
};