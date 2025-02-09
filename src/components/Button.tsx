import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'text';
    iconAfter?: React.ReactNode;
}

export const Button = ({ variant, iconAfter, className, children, ...props }: ButtonProps) => {
    return (
        <button className={twMerge(
            "h-11 px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2",
            variant === 'primary' && "bg-red-orange-500 text-white",
            variant === 'secondary' && "",
            variant === 'text' && "h-auto px-0 border-transparent",
            className
        )}
            {...props}
        >
            <span>
                {children}
            </span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    );
};
