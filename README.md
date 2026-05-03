# 🛒 PriceOye Frontend Clone

A dynamic and responsive **e-commerce frontend clone** inspired by PriceOye.
This project demonstrates real-world UI design along with JavaScript-based interactivity like timers, stock handling, and user actions.

---

## 🚀 Features

* 🧭 Fully structured navigation bar (logo, search, auth buttons)
* 🔍 Search input UI with microphone icon
* 🛍️ Product listing with multiple sections
* 💰 Price display with discounts and comparisons
* ⏱️ **Live countdown timer** for each product
* 📦 **Dynamic stock system** (random stock generation)
* 🛒 Buy button with real-time updates:

  * Changes to "Sold" or "Out of Stock"
  * Disables after purchase
* 📱 Responsive product grid (media queries)
* 🎨 Clean UI with hover effects and shadows

---

## 🧠 Key Concepts Used

* DOM Manipulation
* Event Handling (`addEventListener`)
* Timers (`setInterval`)
* Dynamic UI updates
* Random data generation (`Math.random`)

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling & responsiveness
* **JavaScript (ES6)** – Logic & interactivity

---

## 📂 Project Structure

```bash id="j7m3rf"
├── index.html
├── style.css
├── core.js
├── assets/
│   ├── images
│   ├── icons
│   └── products
├── footerImages/
```

---

## ▶️ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Open the folder:

   ```bash
   cd your-repo-name
   ```

3. Run:

   * Open `index.html` in browser

---

## ⚙️ How It Works

* Each product:

  * Gets a **random stock value**
  * Gets a **random countdown timer**
* Timer updates every second
* When timer ends:

  * Product becomes **Expired**
* When user clicks **Buy Now**:

  * Stock decreases
  * Button disables
  * UI updates instantly

---

## 📸 Preview

> A dynamic e-commerce UI with live timers, product cards, and interactive buttons.

---

## 💡 What I Learned

* Handling multiple elements dynamically
* Writing reusable JavaScript logic
* Creating real-time UI updates
* Building interactive user experiences

---

## 🔧 Future Improvements

* Add cart system 🛒
* Connect with real API 🌐
* Add filtering & search functionality 🔍
* Improve mobile navigation (hamburger menu)
* Store data using Local Storage

---

## ⚠️ Disclaimer

This project is for **educational purposes only**.
It is not affiliated with PriceOye. No real transactions occur.

---

## 👨‍💻 Author

**Hafiz Muhammad Abdullah**
Frontend Developer in Progress 🚀

---
