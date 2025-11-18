const wait = ms => new Promise(res => setTimeout(res, ms));

document.getElementById('start').addEventListener("click", async () => {
    const output = document.getElementById('output');
    output.innerHTML = "Debut";

    await wait(2000)
    
    output.innerHTML += "<br>Fin";
});