// Sandboxels Mod: Zirconium Expansion
// Save this as zirconium_mod.js in your mods folder

elements.zirconium = {
    color: "#b0b7b8",
    tool: "pixel",
    behavior: behaviors.POWDER,
    category: "solids",
    density: 6520,
    tempHigh: 1855,
    stateHigh: "molten_zirconium",
    hardness: 0.6,
};

elements.zrn = {
    name: "zirconium nitride",
    color: "#cba135",
    behavior: behaviors.POWDER,
    category: "solids",
    density: 7090,
    tempHigh: 2980,
    stateHigh: "molten_zrn",
    hardness: 0.9,
};

elements.zro2 = {
    name: "zirconia",
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "solids",
    density: 5680,
    tempHigh: 2715,
    stateHigh: "molten_zro2",
};

elements.zrc = {
    name: "zirconium carbide",
    color: "#4a4a4a",
    behavior: behaviors.POWDER,
    category: "solids",
    density: 6730,
    tempHigh: 3532,
    stateHigh: "molten_zrc",
    hardness: 0.95,
};

// Reactions
runAfterLoad(function() {
    // Zirconium + Water (High Temp Reaction) -> Zirconia + Hydrogen
    // Often occurs in nuclear contexts above 800C
    elements.zirconium.reactions = {
        "water": { elem1: "zro2", elem2: "hydrogen", tempMin: 800 },
        "steam": { elem1: "zro2", elem2: "hydrogen", tempMin: 600 },
    };

    // Formation of Zirconia via Oxygen
    elements.zirconium.reactions["oxygen"] = { elem1: "zro2", tempMin: 400 };

    // Zirconium Nitride + Oxygen -> Zirconia + Nitrogen
    elements.zrn.reactions = {
        "oxygen": { elem1: "zro2", elem2: "nitrogen", tempMin: 1100 },
    };
});
