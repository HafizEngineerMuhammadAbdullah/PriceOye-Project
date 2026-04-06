// =============PRODUCTS===============
//pick all the Product boxes defined in HTML
const products = document.querySelectorAll(".box");

products.forEach(product => {

    const btn = product.querySelector(".buy-btn");
    const timer = product.querySelector(".timer");

    const stockText = document.createElement("p");
    let stock = Math.floor(Math.random() * 5) + 1;

    stockText.textContent = `Only ${stock} left!`;
    stockText.style.textAlign = "center";

    product.appendChild(stockText);

    // generate a random time(in seconds) using Math.random() function
    let time = Math.floor(Math.random() * 300) + 60;

    const interval = setInterval(() => {

        //if time becomes invalid(finished)
        if (time <= 0) {
            clearInterval(interval);
            timer.textContent = "Expired";
            btn.textContent = "Expired";
            btn.disabled = true;
            stockText.textContent = "Sale Ended";
            return;
        }

        let min = String(Math.floor(time / 60)).padStart(2, "0");
        let sec = String(time % 60).padStart(2, "0");

        //set & update the timer paragraph content
        timer.textContent = `Sale ends in ${min}:${sec}`;

        time--;//decrease the time(in second) by 1
    }, 1000);//call the above function(execute a specific block of code) repeatedly after a delay of 1 second.



    btn.addEventListener("click", () => {

        // stop timer
        clearInterval(interval);
        if (stock > 0) {
            // reduce stock
            stock--;
        }

        if (stock <= 0) {
            btn.textContent = "Out of Stock";
        } else {
            btn.textContent = "Sold";
        }

        btn.style.backgroundColor = "gray";
        btn.disabled = true;

        // update UI
        timer.textContent = "Purchased";
        stockText.textContent = `Only ${stock} left!`;
    });

});
console.log("hello");
setTimeout(()=>{
    console.log("i will run");
    
});
console.log("world");


