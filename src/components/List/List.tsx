import React, { FC, memo, useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@mui/material";
import useStyles from "./styles";
import State from "./state";
import { observer, useLocalObservable } from "mobx-react";
import { RoleDTO } from "src/dto/role.dto";
import { values } from "mobx";
import { Label } from "@mui/icons-material";
interface IRow {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}
const rowsDefault = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const List: FC = () => {
    const [rows, setRows] = useState<IRow[]>(rowsDefault);
    const [selected, setSelected] = useState<number>(0);
    const changeHandler = (value: number) => {
        if (!isNaN(value)) setSelected(value);
    };

    const arr = [10, 20, 30, "th"];
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo">Увеличить</InputLabel>
                <Select
                    value={selected}
                    label="Увеличить"
                    onChange={(event) => changeHandler(Number(event.target.value))}
                >
                    {arr.map((el, id) => (
                        <MenuItem key={id} value={el}>
                            {el}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                onClick={() => {
                    setRows(
                        rows.map((item) => {
                            return { ...item, carbs: item.carbs * selected };
                        }),
                    );
                    console.log(rows);
                }}
            >
                Увеличить
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default memo(List);
