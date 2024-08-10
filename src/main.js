


window.onload = function(){
     // Check if the URL contains "/test"
    if (window.location.pathname.includes('/feed')) {
        LoadPage(2);
    }else{
        LoadPage(1);
    }
}

function LoadPage(pindex){
    document.getElementById("page-home").style.display = "none";
    document.getElementById("home-extended").style.display = "none";
    document.getElementById("page-feed").style.display = "none";
    

    if(pindex == 1){
        document.getElementById("page-home").style.display = "flex";
        document.getElementById("home-extended").style.display = "grid";
        
    }else if(pindex == 2){
        document.getElementById("page-feed").style.display = "flex";
    }

}

console.log("wowowo");


document.getElementById("takeMeToTheFeed").addEventListener("click", function(){
    window.location.href ="http://localhost:5500/feed";
    

       
})
document.getElementById('promt-upload').addEventListener("change", function(){
    previewImage();
})
function previewImage() {
    console.log("oshit")
    const inputElement = document.getElementById('promt-upload');
    const imageElement = document.getElementById('promt-preview-image'); // Replace 'output' with your <img> element's ID

    const file = inputElement.files[0];
   
    if (file) {
        console.log("oshit")
        const imageUrl = URL.createObjectURL(file);
        imageElement.style = "background-image: url('"+imageUrl+"');";
    }
}
document.getElementById("stop-promt").addEventListener("click", function(){
    document.getElementById("feed-create-post-promt").style.display = "none";
})
document.getElementById("feed-create-post").addEventListener("click", function(){
    document.getElementById("feed-create-post-promt").style.display = "flex";
})
function CreatePost(){
    
}