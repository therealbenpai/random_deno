import {Classes, Interfaces, Enums} from "#/objects.ts"

const ObjectData = {
	toolType: Enums.ToolType.Shovel,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Iron,
}

const Object = new Classes.Tool({id: 100, name: 'Iron Shovel'}, ObjectData)

export default Object
