document.addEventListener("DOMContentLoaded", function() {    
    document.querySelectorAll(".highlight").forEach((codeBlock) => {        
        const button = document.createElement("button");        
        button.className = "copy-button";        
        button.textContent = "点击复制";         

        codeBlock.style.position = "relative";        
        codeBlock.appendChild(button);        

        button.addEventListener("click", function() {            
            const code = codeBlock.querySelector("code").innerText;            
            navigator.clipboard.writeText(code).then(() => {                
                button.textContent = "复制成功！";                  
                button.classList.add("copied");                

                setTimeout(() => {                    
                    button.textContent = "点击复制";                      
                    button.classList.remove("copied");                
                }, 1500);            
            }).catch((err) => {                
                console.error("复制失败:", err);            
            });        
        });    
    });
});
