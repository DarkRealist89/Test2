import { FC, memo, useEffect } from "react";
import { Paper } from "@mui/material";
import { PATH_ROLE_ADD } from "src/routes/routes.consts";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import useStyles from "./styles";
import State from "./state";
import { observer, useLocalObservable } from "mobx-react";
import { RoleDTO } from "src/dto/role.dto";

export const RoleDTOFields: {
    readonly [P in keyof Pick<RoleDTO, "id" | "name">]: P;
} = {
    id: "id",
    name: "name",
};

const Roles: FC = observer(() => {
    const classes = useStyles();

    const state = useLocalObservable(() => new State());

    useEffect(() => {
        state.fetchItems();
    }, [state]);

    return (
        <>
            <div className={classes.topBar}>
                <Button variant="contained" color="primary" component={Link} to={PATH_ROLE_ADD}>
                    Добавить
                </Button>
            </div>

            <Paper>
                {state.apiItems.response?.items?.map((e) => {
                    return <div key={e.id}>{e.name}</div>;
                })}
            </Paper>
        </>
    );
});

export default memo(Roles);
