document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".highlight").forEach((codeBlock) => {
        const button = document.createElement("button");
        button.className = "copy-button";
        button.innerText = "复制";

        
        codeBlock.style.position = "relative";
        codeBlock.appendChild(button);

        button.addEventListener("click", function() {
            const code = codeBlock.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "已复制!";
                setTimeout(() => button.innerText = "复制", 1500);
            }).catch((err) => {
                console.error("复制失败:", err);
            });
        });
    });
}
                                                    );
