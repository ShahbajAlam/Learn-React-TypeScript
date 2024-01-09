import { type ReactNode, createContext, useReducer, useContext } from "react";

type ContextProps = {
    count: number;
    increase: () => void;
    decrease: () => void;
};

type DispatchProps = {
    type: "increase" | "decrease";
    payload: number;
};

const CounterContext = createContext<ContextProps | null>(null);

type InitialStateProps = {
    count: number;
};

const initialState: InitialStateProps = {
    count: 0,
};

type ActionProps = {
    type: string;
    payload: number;
};

const reducer = (
    state: InitialStateProps,
    action: ActionProps
): InitialStateProps => {
    switch (action.type) {
        case "increase":
            return { ...state, count: state.count + action.payload };

        case "decrease":
            return { ...state, count: state.count - action.payload };

        default:
            return state;
    }
};

type CounterProviderProps = {
    children: ReactNode;
};

const CounterProvider = ({ children }: CounterProviderProps) => {
    const [{ count }, dispatch] = useReducer(reducer, initialState);

    const increase = () => {
        const dispatchObject: DispatchProps = {
            type: "increase",
            payload: 1,
        };
        dispatch(dispatchObject);
    };

    const decrease = () => {
        const dispatchObject: DispatchProps = {
            type: "decrease",
            payload: 1,
        };
        dispatch(dispatchObject);
    };

    return (
        <CounterContext.Provider value={{ count, increase, decrease }}>
            {children}
        </CounterContext.Provider>
    );
};

const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error(
            "You are trying to access the context values outside its provider..."
        );
    }
    return context;
};

export { CounterProvider, useCounter };
