import { Button, Input } from "@mui/material";
import React, { FC, memo } from "react";
import PostItem from "./PostItem";

const PostList: FC = () => {
    return (
        <>
            <form>
                <Input type="text" placeholder="Название поста" />
                <Input type="text" placeholder="Описание поста" />
                <Button></Button>
            </form>
        </>
    );
};

export default memo(PostList);
