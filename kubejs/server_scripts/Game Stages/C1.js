onEvent('recipes',event => {
    //切刀苹果简单切片
    event.shapeless('2x kubejs:apple_slices',['minecraft:apple','#forge:tools/knives'])
    .damageIngredient('#forge:tools/knives')
    .keepIngredient('#forge:tools/knives')
    //脏毛球变泥土
    event.shaped('2x minecraft:dirt', [
        'SSS',
        'S S',
        'SSS'
    ], {
        S: 'kubejs:common_mineral_fluff',
    })
    //脏毛球和铁毛球变石头
    event.shaped('2x minecraft:cobblestone', [
         'SSS',
         'SAS',
         'SSS'
    ], {
        S: 'kubejs:common_mineral_fluff',
        A: 'kubejs:iron_mineral_fluff'
    })
    //泥土变腐肉
    event.shapeless('2x minecraft:rotten_flesh','minecraft:dirt')
})