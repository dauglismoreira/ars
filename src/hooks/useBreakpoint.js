import { useState, useEffect } from 'react';

function useBreakpoint(breakpoint) {
    const [isBreakpoint, setIsBreakpoint] = useState(false);

    useEffect(() => {
        setIsBreakpoint(window.innerWidth >= breakpoint)

        const handleResize = () => {
            setIsBreakpoint(window.innerWidth >= breakpoint);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return {isBreakpoint};
}

export default useBreakpoint;