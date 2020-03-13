const captcha = document.querySelector("#captcha");
let captchaKey = (Math.random() * 100000).toFixed(0);
captcha.textContent = captchaKey;
captcha.setAttribute
html2canvas(document.querySelector("#captcha")).then(canvas => {
    // canvas.width = 717
    const ctx = canvas.getContext('2d');
    ctx.beginPath();       // Start a new path
    ctx.moveTo(30, 50);    // Move the pen to (30, 50)
    ctx.lineTo(150, 100);  // Draw a line to (150, 100)
    ctx.stroke();          // Render the path
    captcha.textContent = "";
    captcha.appendChild(canvas);
    // canvas.setAttribute("style", "width: 350px; height: 56px;")

});