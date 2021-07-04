import React from 'react';
import TodoMain from "../LandingPage/TodoMain";
import TodoList from "../LandingPage/TodoList";
import TodoInsert from "../LandingPage/TodoInsert";
import TodoControl from "../LandingPage/TodoControl";

const NextLandingPage = () => {
    return (
        <TodoMain>
            <TodoInsert/>
            
            <TodoControl/>
        </TodoMain>
    );
};

export default NextLandingPage;