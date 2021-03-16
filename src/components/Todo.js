import React from 'react'

import styled from 'styled-components'

export const TodoWrapper = styled.div`
    border: 1px solid white;
    background-color: ${props => props.theme.lightText};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        text-decoration: ${props => props.completed ? 'line-through' : ''};
    }

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`

export default function Todo(props) {
    const { todo, toggleCompleted, className } = props
    return (
        <TodoWrapper onDoubleClick={_ => toggleCompleted(todo.id)} completed={todo.completed} className={className}>
            <p>{todo.task}</p>
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={_ => toggleCompleted(todo.id)}
            />
        </TodoWrapper>
    )
}