class ExplorerService {
    
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){

        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
}

module.exports = ExplorerService;