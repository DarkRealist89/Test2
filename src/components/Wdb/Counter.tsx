import { Button } from "@mui/material";
import React, { FC, memo, useState } from "react";

const Counter: FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const constanta = () => {
        setCount(5);
    };
    return (
        <>
            <h1>{count}</h1>
            <Button variant="outlined" onClick={increment}>
                + Increment
            </Button>{" "}
            <Button variant="outlined" onClick={decrement}>
                -Decrement
            </Button>{" "}
            <Button variant="outlined" onClick={constanta}>
                Constanta
            </Button>{" "}
        </>
    );
};

export default memo(Counter);
