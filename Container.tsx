import {
    type ReactNode,
    type ElementType,
    ComponentPropsWithoutRef,
} from "react";

// Here ComponentPropsWithoutRef doesn't know beforehand,
// which element will be passed inside the <>
// So, we are making it a generic type

type ContainerProps<T extends ElementType> = {
    useAs: T | "div";
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// Similar problem here, we don't know the input props yet,
// So, we are making the component a generic component

function Container<C extends ElementType>(props: ContainerProps<C>) {
    const { useAs: Component, children, ...otherProps } = props;
    return <Component {...otherProps}>{children}</Component>;
}

export default Container;
