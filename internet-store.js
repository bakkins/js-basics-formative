const inventory = [
    [
        "TV",
        "electronics",
        300
    ],
    [
        "iPhone",
        "electronics",
        123
    ],
    [
        "Jordans",
        "clothes",
        666
    ]
]

for (let i = 0; i <= inventory.length - 1; i++){
    if (inventory[i][1] == "electronics"){
        console.log(inventory[i][0]);
    }
}

let inventoryCapital = 0; 
for (let i = 0; i <= inventory.length - 1; i++){
    inventoryCapital += inventory[i][2];
}
console.log(inventoryCapital)