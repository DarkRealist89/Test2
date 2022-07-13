import { Button } from "@mui/material";
import React, { FC, memo, useState } from "react";
import PostItem from "./PostItem";
import useStyles from "./styles";

const ClassCounter: FC = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description" },
        { id: 2, title: "JavaScript 2", body: "Description" },
        { id: 3, title: "JavaScript 3", body: "Description" },
    ]);
    return (
        <div className="App">
            <h1 style={{ textAlign: "center" }}>Список постов</h1>
            {posts.map((post) => (
                <PostItem post={post} key={post.id} />
            ))}
        </div>
    );
};

export default memo(ClassCounter);
