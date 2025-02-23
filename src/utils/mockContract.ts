export const mockContract = {
    getTotalMethaneProduced: async () => {
        return Promise.resolve(1000000); // Simulated total methane
    },

    getRegionMethane: async (region: string) => {
        const mockData: Record<string, number> = {
            "North America": 250000,
            "Europe": 180000,
            "Asia": 320000,
            "South America": 210000,
            "Africa": 150000,
            "Australia": 90000,
        };
        return Promise.resolve(mockData[region] || 0);
    },

    claimFreeCow: async () => {
        return Promise.resolve({ success: true, message: "Cow claimed successfully!" });
    },

    buyAndMintCow: async () => {
        return Promise.resolve({ success: true, message: "Cow purchased and minted!" });
    },
};
