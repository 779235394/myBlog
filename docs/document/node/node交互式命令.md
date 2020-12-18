---
title: node交互式
date: 2020-12-18
categories:
 - Node
tags:
 - Node
image: /vuetimg2.jpeg
---

## 介绍
类似vue cli创建项目的时候的效果，主要是自己之前一只比较好奇，今天发现直接用npm库就能解决，觉得不是那么高大上了，不过还是记录一下

## 完整demo

其实这个结合自动生成代码可以组成一个非常不错的自动化的工程，懒得去弄这一套了，就弄一部分记录一部分了，直接上代码
``` js
    /**
     * @Author: junlan.he
     * @date: 2020/12/18
     * @desc: 交互式node
     */

    const inquirer = require("inquirer");//交互式命令
    const chalk = require("chalk"); //添加颜色背景
    const figlet = require("figlet"); //字体转换
    const init = () => {
        console.log(
            chalk.blue(
                figlet.textSync("HEJUNLAN", {
                    // font: "Ghost",
                    horizontalLayout: "default",
                    verticalLayout: "default",
                    width: 80,
                    whitespaceBreak: true
                })
            )
        );
    };
    const askQuestions = () => {
        const questions = [
            {
                name: "fileName",
                type: "input",
                message: "请输入文件名!"
            },
            {
                type: "list",
                name: "extension",
                message: "请选择文件类型",
                choices: [".vue", ".js"],
                filter: function(val) {
                    return val.split(".")[1];
                }
            }
        ];
        return inquirer.prompt(questions);
    };
    const createFile = (filename, extension) => {
        const filePath = `${process.cwd()}/${filename}.${extension}`
        return filePath;
    };
    const success = filepath => {
        console.log(
            chalk.white(`Done! File created at ${filepath}`)
        );
    };
    const run = async () => {
        init();
        const answers = await askQuestions();
        const { fileName, extension } = answers;
        const filePath = createFile(fileName, extension);
        success(filePath);
    };
    run();
```


