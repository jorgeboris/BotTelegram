const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

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
}

module.exports = ExplorerController;