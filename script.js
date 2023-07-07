let urls = {
  "0104045323": 'https://drive.google.com/uc?export=download&id=1dY6xa1d4j1Q7lSh-CROQoqdZanHGfh1a',
  // add more keys and values as needed
  // "inputValue2": 'https://example.com/url2',
  // "inputValue3": 'https://example.com/url3',
  // etc.
};

document.getElementById("redirectBtn").addEventListener("click", function(event){
  event.preventDefault()
  let inputText = document.getElementById("inputField").value;
  
  // Check if the input field is empty
  if (!inputText) {
    alert("Please complete the field with your id.");
    return;
  }

  let url = urls[inputText];
  
  if (url) {
    window.location.href = url;
  } 
  
});
