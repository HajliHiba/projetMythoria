const CARDS = [
    { id: "lantern-squire", name: "Lantern Squire", type: "hero", rarity: "common", attack: 2, health: 3, description: "He keeps a small light alive." },
    { id: "shell-crawler", name: "Shell Crawler", type: "monster", rarity: "common", attack: 2, health: 1, description: "It hides in old cracked shells." },
    { id: "moss-sprite", name: "Moss Sprite", type: "minion", rarity: "common", attack: 1, health: 2, description: "A tiny spirit of the damp stones." },
    { id: "dim-light", name: "Dim Light", type: "spell", rarity: "common", effect: "Heal 3 life points.", description: "A weak glow that mends wounds." },

    { id: "lone-wanderer", name: "Lone Wanderer", type: "hero", rarity: "rare", attack: 4, health: 5, description: "He walks the ruins alone." },
    { id: "husk-brute", name: "Husk Brute", type: "monster", rarity: "rare", attack: 5, health: 4, description: "An empty shell that only knows how to hit." },
    { id: "glow-fly", name: "Glow Fly", type: "minion", rarity: "rare", attack: 3, health: 3, description: "Its light draws the lost." },
    { id: "soul-spark", name: "Soul Spark", type: "spell", rarity: "rare", effect: "Deal 3 damage.", description: "A bright sting of pure soul." },

    { id: "pale-knight", name: "Pale Knight", type: "hero", rarity: "epic", attack: 5, health: 6, description: "Cold armor, colder will." },
    { id: "troupe-master", name: "Troupe Master", type: "monster", rarity: "epic", attack: 6, health: 6, description: "He rules the stage and the dark." },
    { id: "plague-bloom", name: "Plague Bloom", type: "spell", rarity: "epic", effect: "Deal 2 damage to all enemies.", description: "A flower that spreads sickness." },

    { id: "seren", name: "Seren", type: "hero", rarity: "legendary", attack: 7, health: 8, description: "She carries the last flame in the dark." },
    { id: "vorgrim", name: "Vorgrim", type: "monster", rarity: "legendary", attack: 9, health: 7, description: "Lord of a thousand shells." },
    { id: "nyx", name: "Nyx", type: "minion", rarity: "legendary", attack: 5, health: 5, description: "A silent moth that makes people forgotten." },
    { id: "black-tide", name: "Black Tide", type: "spell", rarity: "legendary", effect: "Deal 4 damage to every enemy.", description: "It rises from the old wells and never goes back down." }
];
const TYPE_NAMES = {
    hero: "Light servant (hero)",
    monster: "Dark servant (monster)",
    minion: "Minion",
    spell: "Spell"
};
const COLORS = {
    common: "border-gray-400",
    rare: "border-blue-400",
    epic: "border-purple-400",
    legendary: "border-yellow-400"
};
function getInfo(card) {
    if (card.type === "spell") {
        return card.effect;
    }
    return "ATK " + card.attack + " / HP " + card.health;
}