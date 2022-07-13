import { Button } from "@mui/material";
import React, { FC, memo } from "react";
import PostList from "./PostList";
import useStyles from "./styles";

type Props = {
    post: {
        id: number;
        title: string;
        body: string;
    };
};
const PostItem: FC<Props> = (props) => {
    const classes = useStyles();
    return (
        <>
            <div className="App">
                <div className="Post">
                    <div className="post_content">
                        <strong>
                            {props.post.id} .{props.post.title}{" "}
                        </strong>
                        <div>{props.post.body} </div>
                    </div>
                </div>
                <div className="post_btns">
                    <Button>Удалить</Button>
                </div>
                <PostList />
            </div>
        </>
    );
};
export default memo(PostItem);
