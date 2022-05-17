const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Verificar explorers.json", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(ExplorerService.filterByMission(explorers, "node").length).toBeGreaterThanOrEqual(0);
    });

    test("Requerimiento 2: Calcular todos los explorers en una mision", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);
    });

    test("Requerimiento 3: Obetener nombre de usuario en mision node", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerUsername = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorerUsername).toContain("ajolonauta5");
    });
});
