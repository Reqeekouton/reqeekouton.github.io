document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".highlight").forEach((codeBlock) => {
        // 检查代码块中是否已经有复制按钮
        if (!codeBlock.querySelector(".copy-button")) {
            const button = document.createElement("button");
            button.className = "copy-button";
            button.textContent = "点击复制";

            // 设置按钮位置
            codeBlock.style.position = "relative";
            codeBlock.appendChild(button);

            button.addEventListener("click", function() {
                const code = codeBlock.querySelector("code").innerText;
                navigator.clipboard.writeText(code).then(() => {
                    button.textContent = "复制成功！";
                    button.classList.add("copied");

                    // 恢复按钮文本
                    setTimeout(() => {
                        button.textContent = "点击复制";
                        button.classList.remove("copied");
                    }, 1500);
                }).catch((err) => {
                    console.error("复制失败:", err);
                });
            });
        }
    });
});
