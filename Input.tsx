import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, ...props }: InputProps, ref) => {
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} name={id} ref={ref} {...props} />
            </div>
        );
    }
);

export default Input;
