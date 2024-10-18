import {Classes, Interfaces, Enums} from "#/objects.ts"

const BlockData: Interfaces.BlockInit = {
	sprite: '',
	flags: [],
	type: Enums.BlockType.Gas,
}

const Air = new Classes.Block({ id: 2, name: 'Air' }, BlockData)

export default Air
