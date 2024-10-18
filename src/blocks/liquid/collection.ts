/**
 * @packageDocumentation
 * Blocks Collection File
 * 
 * This file exports all the blocks in the game.
 */
import { Classes } from "#/objects.ts";
import Water from "./water.ts";

export default new Map()
	.set("water", Water) as Map<string, Classes.Block>;
