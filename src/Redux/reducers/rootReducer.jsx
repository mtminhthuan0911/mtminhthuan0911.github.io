import React, { Component } from 'react'
import { combineReducers } from 'redux'
import TodolistReducer from './TodolistReducer'
export const rootReducer = combineReducers ({
    // ToDoListReducer
    TodolistReducer
})
