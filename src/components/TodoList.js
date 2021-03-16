import React from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import AnimatedTodo  from './AnimatedTodo'

const TodoListWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    overflow-x: hidden;
`

export default function TodoList(props) {
    const { todos, toggleCompleted } = props
    return (
        <TodoListWrapper>
            <TransitionGroup>
                {todos.map(todo => (
                    <CSSTransition
                        classNames="item"
                        timeout={500}
                        key={todo.id}
                    >
                        <AnimatedTodo
                            todo={todo} 
                            toggleCompleted={toggleCompleted}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </TodoListWrapper>
    )
}