let time= document.querySelectorAll(".timestamp");
time.forEach(element => {
    
    setInterval(() => {
        let d = new Date();
        element.innerHTML = `${d.getHours()} : ${d.getMinutes()}`;

    }, 1000);

});
