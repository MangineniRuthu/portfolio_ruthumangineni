let tablinks=document.querySelectorAll(".tab-links");
let tabcontents=document.querySelectorAll(".tab-content");
let sidemenu=document.getElementById("sidemenu");


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

  function openmenu(){
    sidemenu.style.right="0";
  }

  function closemenu(){
    sidemenu.style.right="-200px"
  }


  const scriptURL = 'https://script.google.com/macros/s/AKfycbw7jeUDN7JerjAKIT8isAD3GyrEGZ4FNdVU_OKRFQPfZI3oUH24vL6mWQ79u4WuU5Uzuw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully"
        setTimeout(()=>{
          msg.innerHTML=""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
