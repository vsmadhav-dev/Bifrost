# Bifrost 

A small Markdown-to-HTML converter built with vanilla JavaScript. Type Markdown in the input box and see the generated HTML code and the rendered result update live as you type.

## Features

- Live conversion on every keystroke
- Shows the raw HTML output and a rendered preview
- Supports headings, bold, italic, links, images and blockquotes
- No dependencies and no build step

## Supported Syntax

| Markdown | HTML output |
| --- | --- |
| `# Heading` | `<h1>Heading</h1>` |
| `## Heading` | `<h2>Heading</h2>` |
| `### Heading` | `<h3>Heading</h3>` |
| `**bold**` | `<strong>bold</strong>` |
| `*italic*` | `<em>italic</em>` |
| `[text](url)` | `<a href="url">text</a>` |
| `![alt](url)` | `<img alt="alt" src="url">` |
| `> quote` | `<blockquote>quote</blockquote>` |

## How It Works

`convertMarkdown()` reads the value of the input box and passes it through a chain of `String.replace()` calls. Each call uses a regular expression with capture groups, and the replacement string puts the captured text back inside HTML tags:

```javascript
.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
```

- Heading and blockquote rules use `^` with the `m` flag, so they match at the start of every line.
- Inline rules (bold, italic, links, images) can match anywhere in a line.
- `$1` and `$2` insert the text captured by the first and second `( )` groups.
- Order matters: bold runs before italic, and images run before links.

The result is written to the page in two ways:

- `innerText` on `#html-output` shows the HTML tags as plain text.
- `innerHTML` on `#preview` renders the HTML.

## Required HTML Elements

The script looks up these elements by id, so they must exist in the page:

| Id | Purpose |
| --- | --- |
| `#markdown-input` | Textarea where the Markdown is typed |
| `#html-output` | Shows the generated HTML as text |
| `#preview` | Shows the rendered result |

## Usage

1. Download or clone this repository.
2. Open `index.html` in any modern browser.
3. Type Markdown into the input box.

### Example

Input:

```
# Title
**bold** and *italic*
[Google](https://google.com)
> a quote
```

Output:

```html
<h1>Title</h1>
<strong>bold</strong> and <em>italic</em>
<a href="https://google.com">Google</a>
<blockquote>a quote</blockquote>
```

## Known Limitations

- No paragraphs, lists, code blocks, tables or horizontal rules yet
- The output is set with `innerHTML` without sanitizing, so it is meant for your own local input only
- Because it is regex-based, unusual edge cases (such as `*` inside a URL) can produce unexpected results

## Possible Improvements

- Paragraph and list support using line-by-line parsing
- Inline code and fenced code blocks
- HTML sanitizing before rendering
- A button to copy the generated HTML

## Author

Madhav Aanand - [GitHub](https://github.com/vsmadhav-dev) · [Portfolio](https://madhavaanand.dev)
