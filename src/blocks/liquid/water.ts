import {Classes, Interfaces, Enums} from "#/objects.ts"

const BlockData: Interfaces.BlockInit = {
	sprite: '',
	flags: [Enums.BlockFlags.NoBlast],
	type: Enums.BlockType.Liquid,
}

const Water = new Classes.Block({ id: 2, name: 'Water' }, BlockData)

export default Water
