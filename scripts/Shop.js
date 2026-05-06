import { inventory } from "./Inventory.js";
//import shop list here
import items from "./items/shop_items.json" with { type: "json"}

//object for managing shop interactions
const shop = {
    potions_for_sale: items.potions,
    upgrades_for_sale: items.upgrades,
    potion_ingredients_for_sale: items.potion_ingredients,
    display_items() {
        //???
    },
    buy_items(from_item_list, to_item_list, selected_item) {
        //console.log(this.items_for_sale.length)
        for (let i = 0; i < from_item_list.length; i++) {
            /*console.log(i)
            console.log(selected_item)
            console.log(this.items_for_sale[i].name)
            console.log(this.items_for_sale[i].name == selected_item)*/
            if (from_item_list[i].name == selected_item) {
                if (from_item_list[i].amount_in_stock > 0 /* && amount of cash*/) {
                    from_item_list[i].amount_in_stock -= 1;
                    //remove moneys func here
                    //console.log("adding item??")
                    //console.log(this.items_for_sale[i])
                    inventory.add_item(to_item_list, { name: from_item_list[i].name, like_amount: from_item_list[i].like_amount, sprite: from_item_list[i].sprite})
                    break
                }
            }
        }
    },
    remove_item(item_index) {
        this.items_for_sale.unshift(item_index)
    }
}

//console.log(shop.items_for_sale)
for (let i = 0; i < 21; i++) {
    shop.buy_items(shop.potions_for_sale, inventory.potions, "Potion of Goop")
}

console.log(inventory.potions[0])

console.log(inventory.have_item(inventory.potions, "Potion of Goop"))