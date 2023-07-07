document.getElementById("redirectBtn").addEventListener("click", function(event){
    event.preventDefault()
    let inputText = document.getElementById("inputField").value;
    let url = "https://www.example.com/" + inputText;
    window.location.href = url;
});