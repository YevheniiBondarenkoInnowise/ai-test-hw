// API Testing Script for https://fakestoreapi.com/products
// Suitable for Postman (Tests tab) or ReqBin JavaScript

// Check HTTP status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Parse response and check product fields
env = typeof pm !== 'undefined' ? pm : {};
let products = pm.response.json();
let defects = [];

products.forEach(product => {
    let issues = [];
    if (!product.title || product.title.trim() === "") {
        issues.push("Missing or empty title");
    }
    if (typeof product.price !== "number" || product.price < 0) {
        issues.push("Negative or invalid price");
    }
    if (!product.rating || typeof product.rating.rate !== "number" || product.rating.rate > 5) {
        issues.push("Missing or invalid rating.rate");
    }
    if (issues.length > 0) {
        defects.push({
            id: product.id,
            title: product.title,
            issues: issues
        });
    }
});

if (defects.length > 0) {
    console.log("Defective products:", defects);
    pm.test("No defective products", function () {
        pm.expect(defects.length).to.equal(0);
    });
} else {
    console.log("All products passed validation.");
} 