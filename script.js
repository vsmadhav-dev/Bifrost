let markdownInput = document.querySelector('#markdown-input');
let htmlOutput = document.querySelector('#html-output');
let htmlPreview = document.querySelector('#preview');

function convertMarkdown() {
    let text = markdownInput.value
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/\*\*(.+?)\*\*(?!\*)/g, '<strong>$1</strong>')
        .replace(/__(.+?)__(?!_)/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/_(.+?)_/g, '<em>$1</em>')
        .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
        .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>');

    htmlOutput.textContent = text;
    htmlPreview.innerHTML = text;
    return text;
}

markdownInput.addEventListener('input', convertMarkdown);