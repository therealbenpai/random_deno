/**
 * @packageDocumentation
 * Effects Collection File
 * 
 * This file exports all the effects in the game.
 */
import InvisibilityIn from './invisibility.ts';
import NightVisionIn from './nightVision.ts';
import WaterBreathingIn from './waterBreathing.ts';
import { Classes } from "#/objects.ts";

export default new Map()
    .set("invisibility", InvisibilityIn)
    .set("nightVision", NightVisionIn)
    .set("waterBreathing", WaterBreathingIn) as Map<string, Classes.Effect>;
