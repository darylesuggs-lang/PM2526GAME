import { inventory } from "./inventory.js";
import { stats } from "./stats_manager.js";  
//import shop list here
import items from "../resources/jsons/items/shop_items.json" with { type: "json"}
console.log(stats)

//object for managing shop interactions
const shop = {
    potions_for_sale: items.potions,
    upgrades_for_sale: items.upgrades,
    potion_ingredients_for_sale: items.potion_ingredients,
    updateMoney() {
        document.getElementById("moneyText").innerHTML = "$" + stats.money._value
    },
    randomShopList() {
        let item_in_stock = []
        item_in_stock.push(this.potion_ingredients_for_sale[0])
        return item_in_stock
    },
    display_items() {
        document.getElementById("itemImg1").src = item_in_stock[0].sprite
        console.log("????")
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
    shop.buy_items(shop.potion_ingredients_for_sale, inventory.potion_ingredients, "Eye Ball")
}

shop.updateMoney()

let item_in_stock = shop.randomShopList()

shop.display_items(item_in_stock);