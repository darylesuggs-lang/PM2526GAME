import { inventory } from "./Inventory.js";
// not exported yet import { stats } from "./Stats.js"  
//import shop list here
import items from "../resources/items/shop_items.json" with { type: "json"}


//object for managing shop interactions
const shop = {
    potions_for_sale: items.potions,
    upgrades_for_sale: items.upgrades,
    potion_ingredients_for_sale: items.potion_ingredients,
    display_items() {
        document.getElementById("itemImg1").src = "../resources/sprites/eyeball.png"
        console.log(document)
        },
    buy_items(from_item_list, to_item_list, selected_item) {
        for (let i = 0; i < from_item_list.length; i++) {

            if (from_item_list[i].name == selected_item) {

                if (from_item_list[i].amount_in_stock > 0 /* && amount of cash*/) {
                    from_item_list[i].amount_in_stock -= 1;

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

shop.display_items()