import {Classes, Interfaces, Enums} from "#/objects.ts"

const ObjectData = {
	toolType: Enums.ToolType.Axe,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Steel,
}

const Object = new Classes.Tool({id: 100, name: 'Steel Axe'}, ObjectData)

export default Object
