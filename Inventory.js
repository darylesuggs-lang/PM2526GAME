export var inventory = {
    /*armour: {
        helmet: null,
        chestplate: null, 
        legging: null,
        boots: null
    },*/
    potion_ingredients: [],
    upgrades: [],
    potions: [],
    add_item(item_list, item){
        console.log(`Added the ${item.name} to list`)
        item_list.push(item)
    },
    use_item(item){
        //display dialogue
        item.use_func
    },
    have_item(item_list, item_name){
    const names = item_list.map((item)=> item.name)
    return names.includes(item_name)
    },
    update_inventory(){

    }
}





