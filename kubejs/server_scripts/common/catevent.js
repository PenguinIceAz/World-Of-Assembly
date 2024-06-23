onEvent('item.entity_interact', event => {
    if (event.target.type === 'minecraft:cat') {
        // 苹果片与猫猫交互获取毛球
        if (event.player.offHandItem.id === 'kubejs:apple_slices') {
            if (Math.random() > 0.1 && event.item.count > 0) { // 90%概率给脏毛球
                event.item.count--; // 原料数量-1
                event.player.give('2x kubejs:common_mineral_fluff'); // 给一个脏毛球
                event.player.tell("你从猫猫身上搓下来了一团毛球");
            } else if (event.item.count > 0) { // 剩下10%概率给铁毛球
                event.item.count--; // 原料数量-1
                event.player.give('kubejs:iron_mineral_fluff'); // 给一个铁毛球
                event.player.tell("猫猫收下了你的贡品,满足地吐出了一个毛球");
            }
        }

        // 猫猫啃木棍事件
        if (event.player.offHandItem.id === 'minecraft:stick') {
            if (event.item.count > 0) { // 确保玩家手中有木棍
                event.item.count--; // 原料数量-1
                event.player.give('kubejs:Cat_Tool_Stick'); // 将木棒转换为工具棒
                event.player.tell("猫猫啃了啃木棍");
            if (Math.random() > 0.5 && event.item.count > 0) { // 50%概率给多给脏毛球
                event.player.give('2x kubejs:common_mineral_fluff'); // 给一个脏毛球
                event.player.tell("猫猫掉出了一团毛球");}
                return; // 结束事件,防止触发频率过高
            }
        }
    }
})
