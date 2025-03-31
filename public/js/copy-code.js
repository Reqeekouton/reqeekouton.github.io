document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".highlight").forEach((codeBlock) => {
        const button = document.createElement("button");
        button.className = "copy-button";
        button.innerHTML = `
            <svg viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" 
                    d="M0 1.75A.75.75 0 0 1 .75 1h7.5a.75.75 0 0 1 .75.75v1.5H8v-1H1.5v11H8v-1h1v1.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 0 13.25zM15 4.75A.75.75 0 0 0 14.25 4h-7.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75zM6.5 4.75A.75.75 0 0 1 7.25 4h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75z"></path>
            </svg>
        `;

        codeBlock.style.position = "relative";
        codeBlock.appendChild(button);

        button.addEventListener("click", function() {
            const code = codeBlock.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = `
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path fill-rule="evenodd" 
                            d="M13.78 3.22a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06L6 10.19l6.72-6.72a.75.75 0 0 1 1.06 0z"></path>
                    </svg>
                `;
                setTimeout(() => {
                    button.innerHTML = `
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                            <path fill-rule="evenodd" 
                                d="M0 1.75A.75.75 0 0 1 .75 1h7.5a.75.75 0 0 1 .75.75v1.5H8v-1H1.5v11H8v-1h1v1.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 0 13.25zM15 4.75A.75.75 0 0 0 14.25 4h-7.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75zM6.5 4.75A.75.75 0 0 1 7.25 4h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75z"></path>
                        </svg>
                    `;
                }, 1500);
            }).catch((err) => {
                console.error("复制失败:", err);
            });
        });
    });
});
