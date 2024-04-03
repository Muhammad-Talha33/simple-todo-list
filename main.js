#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.rgb(255, 136, 0)("What would you like to add in your todos?"),
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.magenta("Would you like to add more in your todos?"),
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    console.log(todos);
    condition = addTask.addMore;
}
