import {Classes, Interfaces, Enums} from "#/objects.ts"

const entityData: Interfaces.EntityInit = {
	hp: 20,
	str: Classes.Formatters.arrayToStats([ [ 0, 1 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]),
	def: Classes.Formatters.arrayToStats([ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]),
	type: Enums.EntityType.Player,
}

const Entity = new Classes.Entity({ id: 2, name: 'Player' }, entityData)

export default Entity
