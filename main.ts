/**
 * @packageDocumentation
 * Index (Main) File
 * 
 * This is the main file for the game engine.
 * 
 * It exports the main game object, which is a singleton object that holds all the data for the game.
 */
import Main from '#/objects.ts';
import { Objects } from '#/collection.ts';

export default {
    Game: new Main.Class.Game({
        seed: Math.random(),
    }),
    Objects,
    ...Main
}
