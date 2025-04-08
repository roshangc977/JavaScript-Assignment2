class Smoothie {        //Smoothie class for the orders
    constructor(size, ingredients, base, extras) {
        this.size = size;
        this.ingredients = ingredients;
        this.base = base;
        this.extras = extras;
        this.price = this.calculatePrice();
    }
    
    calculatePrice() {      //Function to calculate smoothie price according to selected options
        let basePrice = this.size === "Small" ? 5 : this.size === "Medium" ? 7 : 9;
        return basePrice + (this.ingredients.length * 1.5) + (this.extras.length * 1);
    }
    
    getDescription() {      //Function to generate a summary description of the order
        return `<h2>Your Smoothie</h2>
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
                <p><strong>Base:</strong> ${this.base}</p>
                <p><strong>Extras:</strong> ${this.extras.join(", ") || "None"}</p>
                <p><strong>Total Price:</strong> $${this.price.toFixed(2)}</p>`;
    }
}

function orderSmoothie() {      //Function to create the order
    let size = document.getElementById("size").value;
    let ingredients = Array.from(document.getElementById("ingredients").selectedOptions).map(opt => opt.value);
    let base = document.getElementById("base").value;
    let extras = Array.from(document.getElementById("extras").selectedOptions).map(opt => opt.value);
    
    let smoothie = new Smoothie(size, ingredients, base, extras);       //New smoothie object
    document.getElementById("orderSummary").innerHTML = smoothie.getDescription();      //Displaying order summary
}
