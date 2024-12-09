let tablinks=document.querySelectorAll(".tab-links");
let tabcontents=document.querySelectorAll(".tab-content");



tablinks.forEach(tablink => {
    tablink.addEventListener("click",()=>{
        tablinks.forEach(link=>link.classList.remove("active-links"));
        tabcontents.forEach(tab=>(tab.classList.remove("active-tab")));
        tablink.classList.add("active-links");
        let tabId=tablink.textContent.toLowerCase();
        let activeContent=document.getElementById(tabId);
        if(activeContent){
            activeContent.classList.add("active-tab");
        }
        
    })
  });