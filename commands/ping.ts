import { ICommand } from "wokcommands";

export default {
category: 'test',
description: 'De ponger',


callback: ({ message }) => {
    message.reply("pong")
}
} as ICommand