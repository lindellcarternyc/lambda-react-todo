import React from 'react'
import styled from 'styled-components'

import Todo from './Todo'

export const AnimatedTodoWrapper = styled(Todo)`
    &.item-enter {
        transform: translateX(-100%);
    }

    &.item-enter-active {
        transform: translateX(0);
        transition: all 0.5s ease-in;
    }

    &.item-exit {
        transform: translateX(0);
    }

    &.item-exit-active {
        transform: translateX(100%);
        transition: all 0.5s ease-in;
    }
`

export default function AnimatedTodo(props) {
    const { todo, toggleCompleted } = props
    return (
        <AnimatedTodoWrapper todo={todo} toggleCompleted={toggleCompleted} className={`item`} />
    )
}