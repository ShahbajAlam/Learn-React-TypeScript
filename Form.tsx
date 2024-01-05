import { ComponentPropsWithoutRef, FormEvent, ReactNode } from "react";

type FormProps = {
    children: ReactNode;
    onSave: (data: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

const Form = (props: FormProps) => {
    const { children, onSave, ...otherProps } = props;

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const enteredData = new FormData(e.currentTarget);
        onSave(Object.fromEntries(enteredData));
    };

    return (
        <form onSubmit={handleSubmit} {...otherProps}>
            {children}
        </form>
    );
};

export default Form;
