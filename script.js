const startBtn = document.querySelector("#start-btn");

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = "pt-br";
recognition.interimResults = false;
recognition.maxAlternatives = 3;

startBtn.addEventListener("click", () => {
    recognition.start();
});

recognition.onresult = (e) => {
    console.log(e.results[e.results.length - 1][0].transcript);
};
