# Markdown Previewer

The page shows random quotes from the Hitch Hikers Guide to the Galaxy series by Douglas Adams.
The page was made as a project as part of the Free Code Camp course on Front End Libraries.  It uses React and obtains the quote information from another webpage using a fetch request:

## Markdown Previewer Tests

### Content

1. I can see a <textarea> element with corresponding id="editor"
2. I can see an element with corresponding id="preview"
3. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea
4. When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (Hint: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked)
5. When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
6. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element
7. OPTIONAL BONUS (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as <br> (line break) elements (HINT: read the Marked.js docs for this one!).
