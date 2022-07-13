import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { Button, Input, Paper, Typography } from "@mui/material";
import logo from "./logo.png";
import FComponent from "../FComoponent/FComponent";
import Counter from "./Counter";
import ClassCounter from "./ClassCounter";
// import "./styles/Styles.css";
import useStyles from "./styles";

const Wdb: FC = () => {
    const [value, setValue] = useState<string>("");
    const classes = useStyles();
    return (
        <>
            <div className={classes.App}></div>
            <Counter />
            <div>
                <Input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
                <Typography variant="h3" component="h3">
                    {value}
                </Typography>
            </div>
            <ClassCounter />
        </>
    );
};

export default memo(Wdb);
