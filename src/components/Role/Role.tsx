import React, { memo, FC, useEffect } from "react";
import State from "./state";
import useStyles from "./styles";
import { Paper, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react";
import { useNavigate, useParams } from "react-router";

const Role: FC = observer(() => {
    const classes = useStyles();

    const { id } = useParams<{ id: string }>();

    const history = useNavigate();

    const state = useLocalObservable(() => new State(history));

    useEffect(() => {
        if (id) {
            state.fetchItem(id);
        }
    }, [state, id]);

    const onInputNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (id)
            state.apiEdit.updateData({
                name: event.target.value,
            });
        else
            state.apiAdd.updateData({
                name: event.target.value,
            });
    };

    return (
        <>
            <Paper className={classes.container}>
                <form>
                    <TextField
                        value={(id ? state.apiEdit.data?.name : state.apiAdd.data?.name) || ""}
                        label={"role_name"}
                        fullWidth
                        required
                        // disabled={userState.apiLogin.loading}
                        onChange={(e) => {
                            onInputNameChange(e);
                        }}
                    />
                    <div className={classes.spacer} />
                </form>

                <div className={classes.spacer} />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        if (id) {
                            state.fetchEdit(id);
                        } else {
                            state.fetchAdd();
                        }
                    }}
                    // disabled={!userState.dataValid()}
                >
                    {id ? "save" : "add"}
                </Button>
            </Paper>
        </>
    );
});

export default memo(Role);
