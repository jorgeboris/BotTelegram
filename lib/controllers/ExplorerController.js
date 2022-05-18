process.env.NTBA_FIX_319 = 1;
const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config()

class ExplorerController {

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const getExplorer = ExplorerService.filterByMission(explorers, mission);
        return getExplorer;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const getUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return getUsernames;
    }
    
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const getAmount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return getAmount;
    }

    static getScoreInNumber(number){
        const getNumber = FizzbuzzService.applyValidationInNumber(number);
        return getNumber;
    }

    static BotFizzbuzz(){
        const token = process.env.TOKEN;

        const bot = new TelegramBot(token, {polling: true});

        bot.onText(/\/echo (.+)/, (msg, match) => {

            const chatId = msg.chat.id;
            const resp = match[1];

            bot.sendMessage(chatId, resp);
        });

        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);

            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getScoreInNumber(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número válido");
            }

        });
    }
}

module.exports = ExplorerController;