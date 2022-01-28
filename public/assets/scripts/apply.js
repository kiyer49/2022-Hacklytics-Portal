function initiateRedirect() {
    let redirectCountdown = document.getElementById("redirectCountdown");
    let countdownStart = 4;

    let redirected = false;
    let x = setInterval(() => {
        if(countdownStart >= 0) {
            redirectCountdown.innerText = countdownStart;
            countdownStart--;
        } else if(!redirected) {
            redirected = true;

            //redirect to application
            //const url = new URL("https://form.typeform.com/to/J7doCIw1");
            //window.history.pushState({}, '', url);
            location.href = "https://form.typeform.com/to/J7doCIw1";
        } else {
            //error
        }
    }, 1000);
}