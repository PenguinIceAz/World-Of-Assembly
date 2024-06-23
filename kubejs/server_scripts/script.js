// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
    // Change recipes here
});

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

// 订阅末影水晶爆炸事件
onEvent('entity.explosion.detonate', event => {
    // 检查爆炸的实体是否为末影水晶
    if (event.entity.type == 'minecraft:end_crystal') {
        // 获取爆炸实体的位置
        let pos = event.entity.blockPosition
        // 获取爆炸发生的维度
        let dimension = event.level.dimension
        // 检查玩家是否在末地维度
        if (dimension == 'minecraft:the_end') {
            // 在爆炸位置生成凋零
            event.server.runCommandSilent(`/summon minecraft:wither ${pos.x} ${pos.y} ${pos.z}`)
        }
    }
})