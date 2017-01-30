export const addItem = name => ( { type: 'ADD_ITEM', data: name } )
export const removeItem = id => ( { type: 'REMOVE_ITEM', data: id } )

export const winFight = (selfId, enemyId) => ( { type: 'WIN_FIGHT', data: { selfId, enemyId } } )
export const loseFight = (selfId, enemyId) => ( { type: 'LOSE_FIGHT', data: { selfId, enemyId } } )
export const drawFight = (selfId, enemyId) => ( { type: 'DRAW_FIGHT', data: { selfId, enemyId } } )
export const skipFight = (selfId, enemyId) => ( { type: 'SKIP_FIGHT', data: { selfId, enemyId } } )
