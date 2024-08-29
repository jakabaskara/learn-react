/* eslint-disable react/prop-types */

import clsx from 'clsx';

export default function Button(props) {
    const { children, text, className } = props;
    return (
        <button {...props} className={clsx(
            'bg-blue-600',
            className,
            '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2  text-white px-4 py-2 rounded'
        )}>
            {children || text}
        </button>
    );
}