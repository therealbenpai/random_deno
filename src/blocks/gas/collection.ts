/**
 * @packageDocumentation
 * Blocks Collection File
 * 
 * This file exports all the blocks in the game.
 */
import { Classes } from "#/objects.ts";
import Air from "./air.ts";

export default new Map()
	.set("air", Air) as Map<string, Classes.Block>;
