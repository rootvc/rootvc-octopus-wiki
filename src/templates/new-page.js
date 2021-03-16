export default `# New Page

Taken from [The Markdown Guide](https://www.markdownguide.org)

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

Scroll down to the bottom and hit "Edit this page" to see hte Markdown that produced this template side-by-side.

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

\`code\`

### Horizontal Rule

---

### Link

[title](https://root.vc)

### Image

![alt text](https://miro.medium.com/max/528/1*yeR8jcn1bzctX2Ry4V8y6g.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Graph

[diagram]
digraph {
A->B
B->C
C->A
}
[/diagram]

## Tooltips

<span data-tooltip="I'm a tooltip text!">Basic tooltip</span>
<span data-tooltip="I'm a tooltip text!" class="tooltip"><code>.tooltip</code> tooltip</span>
<span data-tooltip="I'm a tooltip text!" class="tooltip-top"><code>.tooltip-top</code> tooltip</span>
<span data-tooltip="I'm a tooltip text!" class="tooltip-right"><code>.tooltip-right</code> tooltip</span>
<span data-tooltip="I'm a tooltip text!" class="tooltip-bottom"><code>.tooltip-bottom</code> tooltip</span>
<span data-tooltip="I'm a tooltip text!" class="tooltip-left"><code>.tooltip-left</code> tooltip</span>
<span data-tooltip="I'm a very long tooltip text!" class="tooltip-200"><code>.tooltip-200</code> tooltip</span>
<span data-tooltip="I'm a very, very long tooltip text!" class="tooltip-300"><code>.tooltip-300</code> tooltip</span>
<span data-tooltip="it.is.very.very.veeeeeery.long@email.address" class="tooltip-auto"><code>.tooltip-auto</code> tooltip</span>
<span data-tooltip="I'm a tooltip text!" class="tooltip-200 tooltip-right"><code>.tooltip-right.tooltip-200</code> tooltip</span>
`;
