#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer"

let todos = [];
let condition = true;

while(condition)
{
    let addTask = await inquirer.prompt(
    [
        {
            name: 'todo',
            type: 'input',
            message: chalk.cyanBright ('What you want to add in your todos?')
        },
 
        {
            name: 'addMore',
            type: 'confirm',
            message: chalk.cyanBright('Do you want to add more?'),
            default:'true'
        }
    ]
);

todos.push(addTask.todo);
condition = addTask.addMore;
console.log(todos);

}

