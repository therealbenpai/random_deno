/**
 * @packageDocumentation
 * Blocks Collection File
 * 
 * This file exports all the blocks in the game.
 */
import { Classes } from "#/objects.ts";
import Gas from "./gas/collection.ts";
import Liquid from "./liquid/collection.ts";
import Solid from "./solid/collection.ts";

export default new Map()
    .set("Gas", Gas)
    .set("Liquid", Liquid)
    .set("Solid", Solid) as Map<'Gas' | 'Solid' | 'Liquid', Map<string, Classes.Block>>;
