/**
 * @packageDocumentation
 * Tools Collection File
 * 
 * This file exports all the tools in the game.
 */
import { Classes } from "#/objects.ts";
import Axes from "./axe/collection.ts";
import Hoes from "./hoe/collection.ts";
import Pickaxes from "./pickaxe/collection.ts";
import Shovels from "./shovel/collection.ts";

export default new Map()
    .set("Axes", Axes)
    .set("Hoes", Hoes)
    .set("Pickaxes", Pickaxes)
    .set("Shovels", Shovels) as Map<"Axes" | "Hoes" | "Shovels" | "Pickaxes", Map<string, Classes.Tool>>;
