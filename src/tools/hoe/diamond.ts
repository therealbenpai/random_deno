import {Classes, Interfaces, Enums} from "#/objects.ts"

const ObjectData = {
	toolType: Enums.ToolType.Hoe,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Diamond,
}

const Object = new Classes.Tool({id: 100, name: 'Diamond Hoe'}, ObjectData)

export default Object
