import React, { FC, memo, useEffect, useState } from "react";
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Input,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { PATH_ROLE_ADD } from "src/routes/routes.consts";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import useStyles from "./styles";
import State from "./state";
import { observer, useLocalObservable } from "mobx-react";
import { RoleDTO } from "src/dto/role.dto";

const FComponent: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [arr, setArr] = useState<string[]>([]);
    const [selected, setSelected] = useState<string>("");

    const removeHandler = () => {
        if (selected) {
            const arr1 = [...arr];
            arr1.splice(arr1.indexOf(selected), 1);
            setArr(arr1);
            setSelected("");
        }
    };

    const selectHandler = (event: SelectChangeEvent<string>) => {
        setSelected(event.target.value);
    };
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setArr([...arr, title]);
            console.log(title);
            setTitle("");
        }
    };

    return (
        <>
            <FormLabel>Введите название!</FormLabel>
            <div className="input-field mt2">
                <Input
                    onChange={changeHandler}
                    value={title}
                    type="text"
                    id="title"
                    placeholder="Введите название"
                    onKeyPress={keyPressHandler}
                />
            </div>
            <Select value={selected} label="age" className="select mt2" onChange={selectHandler}>
                {arr.map((el, id) => (
                    <MenuItem key={id} value={el}>
                        {el}
                    </MenuItem>
                ))}
            </Select>
            <Button
                className=" button mt2"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => {
                    removeHandler();
                }}
            ></Button>
            <div>{title}</div>
            <div>{selected}</div>
            <div>
                {arr.map((el, id) => (
                    <Input type="checkbox" key={id} value={el} />
                ))}
            </div>
        </>
    );
};

export default memo(FComponent);
