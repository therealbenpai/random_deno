/**
 * @packageDocumentation
 * Entities Collection File
 * 
 * This file exports all the entities in the game.
*/
import { Classes } from "#/objects.ts";
import NPC from "./npc.ts";
import Player from "./player.ts";
import Passive from "./passive/collection.ts";
import Neutral from "./neutral/collection.ts";
import Hostile from "./hostile/collection.ts";


export default new Map()
    .set('npc', NPC)
    .set('player', Player)
    .set('passive', Passive)
    .set('neutral', Neutral)
    .set('hostile', Hostile) as Map<"npc" | "player", Classes.Entity> & Map<'passive' | 'neutral' | 'hostile', Map<string, Classes.Entity>>;
