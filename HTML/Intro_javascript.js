window.onload = () =>{
    document.addEventListener("keypress", function (event){
        if (event.key === "Enter"){
            const text = document.getElementById("First_truth").value;
            if (text === 'T' || text === 't'){
                document.getElementById("First_truth").style.color = "green";
            } else if (text === 'F' || text === 'f'){
                document.getElementById("First_truth").style.color = "red";
            }
            if (document.getElementById("Second_truth").checked){
                const second_truth = document.getElementsByClassName("second");
                second_truth[0].style.color = "green"
            } else if (document.getElementById("Second_truth").checked === false) {
                const second_truth = document.getElementsByClassName("second");
                second_truth[0].style.color = "red"
            }
            if (document.getElementById("Lie").checked){
                const lie = document.getElementsByClassName("third");
                lie[0].style.color = "red"
            } else if (document.getElementById("Lie").checked === false){
                const lie = document.getElementsByClassName("third");
                lie[0].style.color = "green"
            }
        }
    })
}

