import {Classes, Interfaces, Enums} from "#/objects.ts"

const ObjectData = {
	toolType: Enums.ToolType.Pickaxe,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Wood,
}

const Object = new Classes.Tool({id: 100, name: 'Wooden Pickaxe'}, ObjectData)

export default Object
