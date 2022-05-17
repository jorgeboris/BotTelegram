const Reader = require("./../../lib/utils/Reader");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Rquerimiento 1: Buscar explorers con getExplorersByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(ExplorerController.getExplorersByMission(explorers, "node").length).toBeGreaterThanOrEqual(0);
    });

    test("Requerimiento 2: Obtener usernames de explorers con getExplorersUsernameByMission", () => {
        const explorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUsernames).toContain("ajolonauta14");
    });

    test("Requerimiento 3: Obtener cantidad de explorers con getExplorersAmountByMission", () => {
        const explorersAmount = ExplorerController.getExplorersAmountByMission("node");
        expect(explorersAmount).toBe(10);
    });

    test("Requerimiento 4: Obtener Fizbuzz con getScoreInNumber", () => {
        const numberScore = ExplorerController.getScoreInNumber(1);
        expect(numberScore).toBe(1);
    });
});
