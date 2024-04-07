#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer"

let todos: string [] = [];
let condition = true;
console.log(chalk.magentaBright(`\n\t WELCOME TO TODO LIST \n\t`));


while(condition)
{
    let answer = await inquirer.prompt(
        [
        {
            name: 'select',
            type: 'list',
            message: chalk.yellow ('Select an option:'),
            choices: ['Add', 'Update', 'View todo list', 'Delete', 'Exit'],
        },
    ]
);
if(answer.select === 'Add'){
    let addTodo = await inquirer.prompt({
        name: 'todo',
        type: 'input',
        message: chalk.green('Add items in your list:'),
        validate: function (input){
            if(input.trim() == ""){
                return chalk.redBright.bold(`Invalid input! Task not added.`);
            }
            return true;
        }
    });
    if(addTodo.todo.trim() !== ""){
    todos.push(addTodo.todo);
    todos.forEach(todo => console.log(todo)
     )
    }
}
if(answer.select === 'Update'){
    let updateTodo = await inquirer.prompt({
        name: 'todo',
        type: 'list',
        message: chalk.green('Select an item which do you want to update:'),
        choices: todos.map(item => item)
    })
    let addTodo = await inquirer.prompt({
        name: 'todo',
        type: 'input',
        message: chalk.green('Add items in your list:'),
    });
    let newTodo = todos.filter(val =>val !== updateTodo.todo);
    todos = [...newTodo,addTodo.todo];
    todos.forEach(todo => console.log(todo)
    )
}
if(answer.select === 'View todo list'){
    console.log(chalk.magenta.bold(`\n\t *** TO-DO LIST *** \t`));
    todos.forEach(todo => console.log(todo)
    )
}
 if(answer.select === 'Delete'){
    let deleteTodo = await inquirer.prompt({
        name: 'todo',
        type: 'list',
        message: chalk.green('Select an item to delete:'),
        choices: todos.map(item => item)
    });
    let newTodo = todos.filter(val =>val !== deleteTodo.todo);
    todos = [...newTodo];
    todos.forEach(todo => console.log(todo)
    )
}
if(answer.select === 'Exit'){
    console.log(chalk.red.bold(`\t Exiting Program...\t`));
    condition = false;
    
}
}

