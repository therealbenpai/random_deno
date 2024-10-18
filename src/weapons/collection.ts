/**
 * @packageDocumentation
 * Weapons Collection File
 * 
 * This file exports all the weapons in the game.
 */
import { Classes } from "#/objects.ts"
import Bows from "./bows/collection.ts";
import Explosives from "./explosives/collection.ts";
import Guns from "./guns/collection.ts";
import Swords from "./swords/collection.ts";

export default new Map()
    .set("Bows", Bows)
    .set("Explosives", Explosives)
    .set("Guns", Guns)
    .set("Swords", Swords) as Map<"Bows" | "Explosives" | "Guns" | "Swords", Map<string, Classes.Weapon>>;