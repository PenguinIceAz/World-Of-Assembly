onEvent('item.registry',event=>{
event.create('common_mineral_fluff').maxStackSize(64)
        .texture('kubejs:item/common_mineral_fluff_b')
        .displayName('脏乱的毛球')
        .tooltip('搓猫时沾下来的毛,有熟悉的味道')
event.create('iron_mineral_fluff').maxStackSize(64)
        .texture('kubejs:item/iron_mineral_fluff')
        .displayName('铁毛球')
        .tooltip('里面有什么奇怪的东西')
event.create('cooper_mineral_fluff').maxStackSize(64)
        .texture('kubejs:item/copper_mineral_fluff')
        .displayName('铜毛球')
        .tooltip('为什么连这些也会在里面?!')
event.create('gold_mineral_fluff').maxStackSize(64)
        .texture('kubejs:item/gold_mineral_fluff')
        .displayName('金毛球')
        .tooltip('仔细从猫猫表面梳下来的毛发,里面偶尔有§e稀§a有§9矿§c物')
event.create('Kit_T').maxStackSize(1)
        .texture('kubejs:item/KitT_16x')
        .displayName('§9呆猫')
        .tooltip('§9牢大!你怎么也在这里喵!')
        .glow(true)
event.create('Cat_Tool_Stick').maxStackSize(64)
        .texture('kubejs:item/cat_tool_stick')
        .displayName('猫猫磨牙棒')
        .tooltip('猫猫啃咬过的棍子,沾有黏黏的口水和毛发')
})