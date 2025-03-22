# Apple Intelligence Animated Gradient

An interactive web animation showcasing an animated gradient effect triggered by a button click. The gradient expands when clicked, and the button text updates dynamically.

## 🚀 Live Demo
Check out the live version: [Apple Intelligence Gradient](https://short-zed.github.io/Web3Task/)

## 📸 Preview
![Project Preview](https://github.com/Short-Zed/Web3Task/blob/main/preview%20image.png?raw=true) *(Replace with an actual screenshot)*

## 🔹 Features
- **Animated Gradient**: A visually appealing gradient expands on button click.
- **Dynamic Button Text**: Button text toggles between "Click Me" and "Bye!!".
- **Smooth Transitions**: CSS animations for a seamless user experience.
- **Responsive Design**: Works across various screen sizes.

## 📂 Folder Structure
```
📁 Apple-Intelligence-Gradient
│-- 📂 assets  (Contains images, icons, etc.)
│-- 📂 css  (Contains index.css)
│-- 📂 js  (Contains index.js)
│-- index.html  (Main HTML file)
│-- README.md  (Project Documentation)
```

## 🛠️ Technologies Used
- **HTML5**: Page structure
- **CSS3**: Styling & animations
- **JavaScript**: Dynamic interactions

## 📜 Code Overview
### 🖼 HTML Structure (index.html)
```html
<button class="run_btn control_btns">Click Me</button>
```
### 🎨 CSS Styling (index.css)
```css
.intelligence_gradient_container > span {
    background-image: linear-gradient(90deg, #89aaf8, #b770fc, #d24dc3, #e85560, #ee7b6b);
    background-size: 0% 0%;
    transition: all 1.2s ease-in-out;
}
```
### 🎬 JavaScript Functionality (index.js)
```js
run_btn.addEventListener("click", (event) => {
    if (trigger) {
        gradient_line.style.backgroundSize = "100% 20%";
        event.target.innerText = "Bye!!";
        trigger = false;
    } else {
        gradient_line.style.backgroundSize = "100% 0%";
        event.target.innerText = "Click Me";
        trigger = true;
    }
});
```

## 📌 Setup & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/Short-Zed/Web3Task.git
   ```
2. Open `index.html` in a browser.
3. Click the button to see the animation in action!

## 📜 License
This project is open-source and available under the **MIT License**.

## 📞 Contact
For suggestions or issues, feel free to reach out via [GitHub Issues](https://github.com/Short-Zed/Web3Task/issues).

