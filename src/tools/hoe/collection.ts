/**
 * @packageDocumentation
 * Hoes Collection File
 * 
 * This file exports all the hoes in the game.
 */
import { Classes } from "#/objects.ts";
import Diamond from "./diamond.ts";
import Gold from "./gold.ts";
import Indestructium from "./indestructium.ts";
import Iron from "./iron.ts";
import Netherite from "./netherite.ts";
import Steel from "./steel.ts";
import Stone from "./stone.ts";
import Wood from "./wood.ts";

export default new Map()
	.set("diamond", Diamond)
	.set("gold", Gold)
	.set("indestructium", Indestructium)
	.set("iron", Iron)
	.set("netherite", Netherite)
	.set("steel", Steel)
	.set("stone", Stone)
	.set("wood", Wood) as Map<string, Classes.Tool>;
