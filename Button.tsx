import { type ReactNode, type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: "button";
    children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
    el: "anchor";
    children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

const Button = (props: ButtonProps | AnchorProps) => {
    if (props.el === "button") {
        const { el, children, ...otherProps } = props;
        return (
            <button className="button" {...otherProps}>
                {props.children}
            </button>
        );
    }
    const { el, children, ...otherProps } = props;
    return (
        <a className="button" {...otherProps}>
            {props.children}
        </a>
    );
};

export default Button;
