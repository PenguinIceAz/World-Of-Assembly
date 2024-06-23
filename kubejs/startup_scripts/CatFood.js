onEvent('item.registry',event=>{ 
        event.create('apple_slices') //苹果片
            .food(food=>{
                food.hunger(2);
                food.saturation(0.5);
                })
            .texture('kubejs:item/apple_slices_b')
            .displayName('切片的苹果') 
            .tooltip('切成了细片,适合猫猫的小零食')
            .maxStackSize(16)
            .fastToEat()
})