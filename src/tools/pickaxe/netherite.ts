import {Classes, Interfaces, Enums} from "#/objects.ts"

const ObjectData = {
	toolType: Enums.ToolType.Pickaxe,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Netherite,
}

const Object = new Classes.Tool({id: 100, name: 'Netherite Pickaxe'}, ObjectData)

export default Object
