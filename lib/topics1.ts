// lib/topics.ts

export const courseTopics = {
  html: [
    {
      "title": "The Evolution of HTML",
      "note": "👉 HTML (HyperText Markup Language) is the core language used to create web pages. \n\n 👉It has evolved significantly since its creation in the early 1990s, gaining features that made the web more interactive, accessible, and modern.\n\n\ \n\n\⫷⫸⫷⫸⫷⫸⫷⫸HTML Evolution Timeline:⫷⫸⫷⫸⫷⫸\n\nVersion    Year    Key Features\n--------   ----    -----------\nHTML 1.0   1993    Simple; only basic tags like headings, paragraphs, and links.\nHTML 2.0   1995    Standardized HTML; included forms and tables.\nHTML 3.2   1997    Introduced styles, scripts, and applets.\nHTML 4.01  1999    Supported CSS and better structure for layout.\nHTML5      2014    Supports audio, video, canvas, local storage, semantic tags, and mobile-friendly design.\n\nWhy the Evolution Was Important:\n- Older versions were limited to static content\n- Newer versions brought structure, multimedia, and interactivity\n- HTML5 made websites more responsive, powerful, and mobile-compatible\n\nSummary of Major Milestones:\n- HTML 1.0 – Birth of HTML with basic tags only\n- HTML 4.01 – Introduced separation of content and style (via CSS)\n- HTML5 – Supports media, canvas, semantic structure, and modern web standards\n\nKey Terms:\n- Semantic Tags: Tags like <article>, <section>, <header> that give meaning to content\n- Canvas: A tag for drawing graphics using JavaScript\n- Responsive Design: Layouts that adjust to screen size using CSS techniques",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Evolution</title>\n</head>\n<body>\n  <h1>HTML Through the Years</h1>\n  <p>From simple documents to rich applications</p>\n</body>\n</html>"
    },
    {
      "title": "Importance of HTML",
      "note": "HTML (HyperText Markup Language) is the backbone of the web. Every webpage you visit—from Google to social media platforms—is built on HTML. It defines the structure of content and tells the browser how to display text, images, links, and more.\n\nWhy HTML is Essential:\n- Structures Content: Without HTML, browsers wouldn't know how to organize or present web content\n- Universal Language: HTML is understood by all web browsers\n- Accessibility: Helps screen readers and other assistive technologies interpret content\n- SEO Friendly: Search engines use HTML structure to understand and rank pages\n\nKey Points:\n- HTML provides the basic structure of sites\n- All other web technologies (CSS, JavaScript) build upon HTML\n- Proper HTML structure is crucial for accessibility and SEO",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to HTML</h1>\n  <p>This is the foundation of the web.</p>\n</body>\n</html>"
    },
    {
      "title": "Writing HTML Editors",
      "note": "You can write HTML using any text editor, but using a specialized code editor makes development faster and easier. These editors offer features like syntax highlighting, auto-completion, and live preview.\n\nCommon HTML Editors:\n- Notepad: Basic text editor on Windows. Simple and lightweight\n- Visual Studio Code (VS Code): A free and powerful editor with extensions, IntelliSense, and live server preview\n- Sublime Text: A fast, minimalist editor with great performance and customization\n- Atom: Open-source and beginner-friendly, though no longer officially supported\n\nEditor Features to Look For:\n- Syntax highlighting\n- Auto-completion\n- Error detection\n- Live preview\n- Version control integration",
      "code": "<!-- Sample HTML in VS Code -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello from VS Code</h1>\n</body>\n</html>"
    },
    {
      "title": "HTML Document Structure",
      "note": "Every HTML document follows a specific structure to help browsers understand and render content correctly. The basic layout includes a document declaration, root element, metadata section, and the content body.\n\nEssential Tags:\n- <!DOCTYPE html> – Declares the document type (HTML5)\n- <html> – Root element of the page\n- <head> – Contains metadata like title, styles, and links\n- <body> – Holds the visible content (text, images, buttons, etc.)\n\nDocument Structure Rules:\n1. Start with DOCTYPE declaration\n2. Wrap entire document in <html> tags\n3. <head> section comes before <body>\n4. Only one <head> and one <body> per document",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Web Page</title>\n</head>\n<body>\n  <h1>Welcome to My Website</h1>\n  <p>This is a basic HTML structure.</p>\n</body>\n</html>"
    },
    {
      "title": "Understanding HTML Elements & Attributes",
      "note": "HTML elements are the building blocks of web pages. They define the structure and content of a page. Elements usually come in pairs: an opening tag and a closing tag.\n\nWhat is an HTML Element?\nAn element typically consists of:\n- An opening tag <tagname>\n- Content\n- A closing tag </tagname>\n\nWhat are Attributes?\nAttributes provide additional information about HTML elements. They are written in the opening tag and usually come in name/value pairs.\n\nCommon Attributes:\n- href – Specifies the URL for a link\n- src – Specifies the path of an image\n- alt – Provides alternative text for images\n- class and id – Used for styling and scripting",
      "code": "<a href=\"https://example.com\">Visit Example</a>\n<img src=\"image.jpg\" alt=\"Sample Image\">\n<p class=\"intro\">This is a paragraph with a class.</p>"
    },
    {
      "title": "Headings, Paragraphs & Line Breaks",
      "note": "HTML provides a set of tags to structure your text content clearly.\n\nHeadings (<h1> to <h6>):\nHeadings organize content into sections, with <h1> as the most important and <h6> as the least.\n\nParagraphs (<p>):\nUse <p> to group sentences into paragraphs.\n\nLine Breaks (<br>):\nThe <br> tag inserts a line break without starting a new paragraph.\n\nBest Practices:\n- Use headings in order (h1 then h2, etc.)\n- Don't skip heading levels\n- Use paragraphs for blocks of text\n- Use line breaks sparingly - prefer semantic structure",
      "code": "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<p>This is a paragraph of text.</p>\n<p>This is line one.<br>\nThis is line two after a break.</p>"
    },
    {
      "title": "Inline Style & Formatting Text",
      "note": "You can format parts of your text inline using HTML tags to emphasize or style specific sections without affecting entire blocks.\n\nCommon Formatting Tags:\n- <b> — Makes text bold\n- <i> — Makes text italic\n- <u> — Underlines the text\n- <mark> — Highlights text\n- <small> — Makes text smaller\n- <del> — Shows deleted (strikethrough) text\n\nInline Styles:\nYou can apply custom styles directly using the style attribute.\n\nBest Practices:\n- Prefer semantic tags (<strong>, <em>) over presentational tags (<b>, <i>)\n- Use CSS for complex styling\n- Keep inline styles minimal",
      "code": "<p>This is <b>bold</b> and this is <i>italic</i> text.</p>\n<p>Here is a <span style=\"color:blue;\">blue colored text</span>.</p>\n<p>This is <mark>highlighted</mark> and this is <del>deleted</del> text.</p>"
    },
    {
      "title": "Quoting Text, Comments",
      "note": "In HTML, you can include quotations and comments to clarify your content and your code.\n\nQuoting Text:\n- <blockquote>: Use for longer, block-level quotes. Browsers usually indent blockquotes\n- <q>: Use for short, inline quotations inside a paragraph\n\nAdding Comments:\nComments are notes in your HTML code that do not appear in the browser. They help explain the code for yourself or other developers.\n\nComment Syntax:\n<!-- This is a comment -->\n\nBest Practices:\n- Use comments to explain complex sections\n- Keep comments up-to-date\n- Don't over-comment obvious code\n- Use comments to mark sections",
      "code": "<blockquote>\n  This is a long quote that stands out as a separate block of text.\n</blockquote>\n\n<p>He said, <q>This is a short inline quote.</q></p>\n\n<!-- This is a comment that won't be visible -->"
    },
    {
      "title": "Adding Color and CSS",
      "note": "You can style your HTML content by adding colors and other design properties using CSS (Cascading Style Sheets). CSS can be applied inline, embedded in the page, or linked as an external stylesheet.\n\nAdding Color Inline:\nUse the style attribute directly on an HTML element to change its color.\n\nUsing CSS Classes:\nDefine colors in CSS classes and apply them to multiple elements.\n\nExternal Stylesheets:\nYou can also put all your CSS rules in a separate file (e.g., styles.css) and link it in your HTML.\n\nColor Value Types:\n- Named colors (red, blue)\n- HEX codes (#FF0000)\n- RGB values (rgb(255, 0, 0))\n- HSL values (hsl(0, 100%, 50%))",
      "code": "<p style=\"color: red;\">This text is red.</p>\n<h1 style=\"color: #007BFF;\">This heading is blue.</h1>\n\n<style>\n  .text-red { color: red; }\n  .text-green { color: green; }\n</style>\n\n<p class=\"text-red\">This text is red.</p>\n<p class=\"text-green\">This text is green.</p>"
    },
    {
      "title": "Favicon and Page Title",
      "note": "Every webpage should have a title that appears in the browser tab, and a favicon, the small icon displayed next to the page title.\n\nSetting the Page Title:\nUse the <title> tag inside the <head> section to set the page title.\n\nAdding a Favicon:\nThe favicon is usually a small image file like favicon.ico or PNG. Add it using the <link> tag in the <head>.\n\nFavicon Best Practices:\n- Size should be 16x16 or 32x32 pixels\n- Use .ico format for maximum compatibility\n- Place in root directory for automatic detection\n- Can use PNG for modern browsers\n\nSEO Considerations:\n- Keep title under 60 characters\n- Include important keywords\n- Make it descriptive and unique",
      "code": "<head>\n  <title>My Awesome Website</title>\n  <link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\">\n</head>"
    },
    {
      "title": "Tables, Lists (Ordered/Unordered)",
      "note": "HTML provides special tags to display data in tabular form and organize content using lists.\n\nTables:\nUse the <table> tag to display data in rows and columns.\n\nTable Elements:\n- <tr> – Table row\n- <th> – Table header cell\n- <td> – Table data cell\n\nLists:\nOrganize items using lists:\n- <ul> — Unordered list (bulleted)\n- <ol> — Ordered list (numbered)\n- <li> — List item\n\nList Best Practices:\n- Use unordered lists for items without sequence\n- Use ordered lists for steps or rankings\n- Nest lists for hierarchical data\n- Keep table usage for tabular data only",
      "code": "<table border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>30</td>\n  </tr>\n</table>\n\n<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n\n<ol>\n  <li>First Item</li>\n  <li>Second Item</li>\n</ol>"
    },
    {
      "title": "Class and ID Attributes",
      "note": "The class and id attributes are used to uniquely identify or group HTML elements. These attributes are essential for applying styles with CSS and manipulating elements with JavaScript.\n\nThe class Attribute:\n- Assigns one or more classes to an element\n- Multiple elements can share the same class\n- Used to apply styles to groups of elements\n\nThe id Attribute:\n- Assigns a unique identifier to an element\n- An id must be unique on the entire page\n- Useful for styling single elements or accessing them via JavaScript\n\nBest Practices:\n- Use meaningful names\n- Follow naming conventions (kebab-case)\n- Don't overuse IDs\n- Use classes for reusable styles",
      "code": "<div class=\"card highlight\">\n  This is a card with two classes.\n</div>\n\n<h1 id=\"main-title\">Welcome to My Site</h1>\n\n<script>\n  const title = document.getElementById('main-title');\n  title.style.color = 'blue';\n</script>"
    },
    {
      "title": "Using iframe",
      "note": "The <iframe> tag allows you to embed another HTML page within your current page. It is commonly used for embedding videos, maps, or other external content.\n\niframe Attributes:\n- src: URL of the page to embed\n- width: Width in pixels or percentage\n- height: Height in pixels or percentage\n- frameborder: Show/hide border (0 or 1)\n- allowfullscreen: Allow fullscreen mode\n\nSecurity Considerations:\n- Only embed content from trusted sources\n- Use sandbox attribute to restrict capabilities\n- Be aware of clickjacking risks\n- Consider performance impact\n\nCommon Uses:\n- Embedding YouTube videos\n- Google Maps integration\n- Third-party widgets\n- Documentation examples",
      "code": "<iframe \n  src=\"https://www.example.com\" \n  width=\"600\" \n  height=\"400\"\n  frameborder=\"0\"\n  allowfullscreen>\n</iframe>"
    },
    {
      "title": "JavaScript in HTML",
      "note": "Add interactivity to your web pages by including JavaScript using the <script> tag.\n\nWays to Include JavaScript:\n1. Inline scripts (directly in HTML)\n2. Internal scripts (in <script> tags)\n3. External scripts (linked .js files)\n\nScript Placement:\n- In <head> for early execution\n- Before </body> for better page load performance\n\nBest Practices:\n- Prefer external scripts\n- Use async/defer attributes when needed\n- Keep JavaScript separate from HTML\n- Follow progressive enhancement principles",
      "code": "<script>\n  alert('Hello, world!');\n</script>\n\n<!-- External script -->\n<script src=\"script.js\"></script>"
    },
    {
      "title": "Understanding File Paths",
      "note": "File paths tell the browser where to find resources like images, CSS files, or other pages.\n\nTypes of Paths:\n- Relative Path: Location relative to the current file\n  Example: images/photo.jpg\n- Absolute Path: Full URL starting with a protocol\n  Example: https://example.com/images/photo.jpg\n- Root-relative Path: Starts from website root\n  Example: /images/photo.jpg\n\nPath Navigation:\n- ./ Current directory\n- ../ Parent directory\n- / Root directory\n\nBest Practices:\n- Use relative paths for portability\n- Be consistent with path styles\n- Test paths after moving files\n- Consider URL structure for SEO",
      "code": "<!-- Relative path -->\n<img src=\"images/logo.png\" alt=\"Logo\">\n\n<!-- Absolute path -->\n<img src=\"https://example.com/images/logo.png\" alt=\"Logo\">\n\n<!-- Root-relative path -->\n<link href=\"/css/styles.css\" rel=\"stylesheet\">"
    },
    {
      "title": "Layout Techniques & Responsive Design",
      "note": "Use CSS techniques like Flexbox, Grid, and media queries to build layouts that adapt smoothly to different screen sizes and devices.\n\nKey Techniques:\n- Flexbox: One-dimensional layout for rows or columns\n- Grid: Two-dimensional layout system with rows and columns\n- Media Queries: Apply styles conditionally based on screen size or device\n\nResponsive Principles:\n- Mobile-first approach\n- Fluid grids\n- Flexible images\n- Media queries\n\nViewport Meta Tag:\nEssential for responsive design:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    .container {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n    }\n    @media (max-width: 600px) {\n      .container { grid-template-columns: 1fr; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <div>Column 1</div>\n    <div>Column 2</div>\n  </div>\n</body>\n</html>"
    },
    {
      "title": "Semantic HTML",
      "note": "Semantic HTML uses meaningful tags that describe the purpose of the content, improving accessibility and SEO.\n\nCommon Semantic Tags:\n- <header> - Defines introductory content or navigation\n- <nav> - Contains navigation links\n- <main> - Represents the main content\n- <article> - Self-contained composition\n- <section> - Thematic grouping of content\n- <footer> - Footer section with info about the page\n\nBenefits:\n- Better accessibility\n- Improved SEO\n- Easier code maintenance\n- Clearer document structure\n\nNon-semantic Elements:\n- <div> - Generic block container\n- <span> - Generic inline container\n\nWhen to Use:\n- Always prefer semantic elements when appropriate\n- Use div/span only when no semantic element fits",
      "code": "<header>\n  <h1>Website Title</h1>\n  <nav>\n    <a href=\"/\">Home</a>\n    <a href=\"/about\">About</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>Article Title</h2>\n    <p>Article content...</p>\n  </article>\n</main>\n\n<footer>\n  <p>Copyright 2023</p>\n</footer>"
    },
    {
      "title": "Writing Clean Code",
      "note": "Writing clean, well-structured HTML makes your code easier to read, maintain, and debug.\n\nTips for Clean Code:\n- Use proper indentation for nested elements\n- Add comments to explain sections\n- Use meaningful tag and attribute names\n- Avoid inline styles when possible; prefer CSS classes\n- Keep your code DRY (Don't Repeat Yourself)\n- Validate your HTML\n\nHTML Validation:\n- Check for missing closing tags\n- Ensure proper nesting\n- Verify attribute values\n- Use W3C validator\n\nOrganization Tips:\n- Logical section grouping\n- Consistent naming conventions\n- Separate structure (HTML), presentation (CSS), and behavior (JS)",
      "code": "<!-- Main navigation -->\n<nav class=\"primary-nav\">\n  <ul>\n    <li><a href=\"/\">Home</a></li>\n    <li><a href=\"/about\">About</a></li>\n  </ul>\n</nav>\n\n<!-- Main content section -->\n<main>\n  <article class=\"blog-post\">\n    <h1>Post Title</h1>\n    <p>Well-structured content...</p>\n  </article>\n</main>"
    },
    {
      "title": "HTML Entities, Symbols, Images",
      "note": "HTML entities are special codes used to display reserved characters like &, <, >, and copyright symbols.\n\nCommon Entities:\n- &amp; - &\n- &lt; - <\n- &gt; - >\n- &copy; - ©\n- &reg; - ®\n\nEmbedding Images:\nUse <img> tag with src and alt attributes\n\nImage Formats:\n- JPEG: For photographs\n- PNG: For transparency\n- GIF: For animations\n- SVG: For vector graphics\n\nBest Practices:\n- Always include alt text\n- Optimize image sizes\n- Use responsive images\n- Consider lazy loading",
      "code": "<p>Use &amp; for ampersand, &lt; for less than</p>\n<p>Copyright &copy; 2023</p>\n\n<img src=\"logo.png\" alt=\"Company Logo\" width=\"200\" height=\"100\">"
    },
    {
      "title": "Charset & URL Encoding",
      "note": "Set the character encoding to UTF-8 to support most characters worldwide using the meta tag.\n\nCharset Declaration:\n<meta charset=\"UTF-8\">\n\nURL Encoding:\nUsed to encode special characters in URLs, replacing spaces and reserved characters with codes like %20.\n\nCommon Encodings:\n- Space: %20\n- <: %3C\n- >: %3E\n- &: %26\n- =: %3D\n\nBest Practices:\n- Always include charset meta tag early in <head>\n- Encode URLs properly\n- Use encodeURIComponent() in JavaScript\n- Test with special characters",
      "code": "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Page with UTF-8</title>\n</head>\n<body>\n  <p>Supports special characters: ñ, ü, 汉字</p>\n</body>\n</html>"
    },
    {
      "title": "HTML Forms & Input Types",
      "note": "Forms collect user input and are built using the <form> tag with various input types.\n\nCommon Input Types:\n- text – Single line text input\n- password – Password input\n- email – Email input with validation\n- number – Numeric input\n- checkbox – Multiple choices\n- radio – Single choice\n- submit – Button to submit form\n\nForm Attributes:\n- action: Where to send form data\n- method: HTTP method (GET/POST)\n- name: Identifies form\n- autocomplete: Enable/disable autofill\n\nBest Practices:\n- Always include labels\n- Use proper input types\n- Add validation\n- Make forms accessible",
      "code": "<form action=\"/submit\" method=\"post\">\n  <label for=\"username\">Username:</label>\n  <input type=\"text\" id=\"username\" name=\"username\" required>\n  \n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" name=\"email\">\n  \n  <input type=\"submit\" value=\"Submit\">\n</form>"
    },
    {
      "title": "Form Attributes & Validation",
      "note": "Use HTML attributes to validate user input before submitting a form.\n\nCommon Validation Attributes:\n- required – Makes a field mandatory\n- minlength / maxlength – Set minimum/maximum length of input\n- pattern – Regular expression to enforce input format\n- type=\"email\" – Validates email format\n- type=\"number\" – Validates numeric input within a range\n\nAdditional Attributes:\n- placeholder: Hint text\n- readonly: Can't be modified\n- disabled: Can't be interacted with\n- autofocus: Automatically focused\n\nClient-side vs Server-side:\n- HTML validation is client-side only\n- Always validate on server too\n- Provide clear error messages",
      "code": "<form>\n  <label for=\"username\">Username (3+ letters):</label>\n  <input type=\"text\" id=\"username\" name=\"username\" \n         required minlength=\"3\" pattern=\"[A-Za-z]+\">\n  \n  <label for=\"age\">Age (1-120):</label>\n  <input type=\"number\" id=\"age\" name=\"age\" min=\"1\" max=\"120\">\n  \n  <input type=\"submit\" value=\"Submit\">\n</form>"
    },
    {
      "title": "Canvas and SVG Basics",
      "note": "Use the <canvas> element with JavaScript to draw graphics dynamically, or <svg> for scalable vector graphics defined in markup.\n\nCanvas:\n- Pixel-based drawing\n- Requires JavaScript\n- Good for games, data visualization\n\nSVG:\n- Vector-based\n- XML format\n- Good for icons, logos\n\nKey Differences:\n- Canvas is raster, SVG is vector\n- Canvas is scripted, SVG is declarative\n- Canvas better for complex animations\n- SVG better for resolution independence\n\nWhen to Use:\n- Canvas: Dynamic, pixel-based graphics\n- SVG: Resolution-independent graphics",
      "code": "<!-- Canvas example -->\n<canvas id=\"myCanvas\" width=\"200\" height=\"100\"></canvas>\n<script>\n  const canvas = document.getElementById('myCanvas');\n  const ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'green';\n  ctx.fillRect(10, 10, 150, 75);\n</script>\n\n<!-- SVG example -->\n<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"blue\" />\n</svg>"
    },
    {
      "title": "Embedding Audio, Video, Plugins",
      "note": "HTML5 introduced native support for audio and video with the <audio> and <video> tags, making plugins mostly obsolete.\n\nMedia Elements:\n- <audio>: For sound content\n- <video>: For video content\n\nCommon Attributes:\n- controls: Shows playback controls\n- autoplay: Starts automatically\n- loop: Loops the media\n- muted: Starts muted\n- preload: Hints how to load\n\nFormats:\n- Audio: MP3, WAV, OGG\n- Video: MP4, WebM, OGG\n\nBest Practices:\n- Include multiple sources\n- Provide fallback content\n- Consider accessibility\n- Optimize file sizes\n- Use poster images for video",
      "code": "<video width=\"320\" height=\"240\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  Your browser does not support the audio element.\n</audio>"
    }
  ],
  css: [
    
    {
      "title": "CSS Introduction",
      "note": "CSS (Cascading Style Sheets) is the language used to style and layout web pages. It controls colors, fonts, spacing, and positioning in a web design.",
      "code": "<style>\n  body { background-color: lightblue; }\n</style>"
    },
    {
      "title": "CSS Syntax",
      "note": "The basic structure of a CSS rule consists of a selector and a declaration block where properties and values are defined.",
      "code": "selector {\n  property: value;\n}"
    },
    {
      "title": "CSS Selectors",
      "note": "Selectors target HTML elements to apply styles. Common types include element, class, id, and attribute selectors.",
      "code": "p { color: green; }\n.myClass { font-size: 18px; }\n#myId { margin: 20px; }"
    },
    {
      "title": "CSS Comments",
      "note": "Comments are used to annotate CSS and are ignored by browsers. They help document code without affecting rendering.",
      "code": "/* This is a CSS comment */\nbody { background: white; }"
    },
    {
      "title": "CSS Colors",
      "note": "You can specify colors using named values, hex codes, RGB, RGBA, HSL, and HSLA formats.",
      "code": "h1 { color: #ff0000; }\np { color: rgb(0,128,0); }\ndiv { background-color: rgba(0,0,255,0.3); }"
    },
    {
      "title": "CSS Box Model",
      "note": "Every element behaves as a box constituted by content, padding, border, and margin. Understanding this is key for layout and spacing.",
      "code": ".box {\n  width: 200px;\n  padding: 10px;\n  border: 2px solid #000;\n  margin: 20px;\n}"
    },
    {
      "title": "CSS Text & Fonts",
      "note": "Use CSS to style text, including font-family, font-size, font-weight, line-height, and text alignment.",
      "code": "body { font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; }\nh1 { text-align: center; }"
    },
    {
      "title": "CSS Position & Z‑index",
      "note": "'position' defines how elements are placed (static, relative, absolute, fixed, or sticky). 'z‑index' controls the stacking order.",
      "code": ".relative { position: relative; top: 10px; }\n.absolute { position: absolute; left: 50px; }\n.overlay { position: relative; z-index: 10; }"
    },
    {
      "title": "CSS Display & Visibility",
      "note": "'display' controls box behavior (block, inline, none), while 'visibility' affects whether an element is visible yet retains layout space.",
      "code": ".hidden { display: none; }\ninvisible { visibility: hidden; }"
    },
    {
      "title": "CSS Flexbox Intro",
      "note": "Flexbox is a modern layout mode for arranging items along a row or column. It simplifies alignment and spacing between items.",
      "code": ".container { display: flex; justify-content: space-between; align-items: center; }\n.item { flex: 1; }"
    },
    {
      "title": "CSS Grid Intro",
      "note": "CSS Grid is a two-dimensional layout system that divides a container into rows and columns for precise placement of child elements.",
      "code": ".grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px; }"
    },
    {
      "title": "CSS Media Queries",
      "note": "Media queries allow conditional application of styles based on viewport properties like width, height, orientation, and device type.",
      "code": "@media (max-width: 600px) {\n  body { background: lightgray; }\n}"
    },
    {
      "title": "CSS Pseudo‑classes & Pseudo‑elements",
      "note": "Pseudo‑classes apply styles based on element states (e.g., hover), while pseudo‑elements style internal parts of elements (e.g., ::before).",
      "code": "a:hover { color: red; }\nli:first-child { font-weight: bold; }\np::first-line { font-variant: small-caps; }"
    },
    {
      "title": "CSS Transitions & Animations",
      "note": "Transitions allow smooth changes of property values. Animations define keyframes for complex animation sequences.",
      "code": ".button { transition: background 0.3s ease-in; }\n@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\n.box { animation: fadeIn 2s infinite alternate; }"
    },
    {
      "title": "CSS Variables (Custom Properties)",
      "note": "CSS variables (custom properties) help store reusable values which can be dynamically updated and scoped to elements.",
      "code": ":root { --main-color: #3498db; }\nh1 { color: var(--main-color); }"
    }
  ],

  javascript: [
    {
      "title": "Java Script Introduction",
      "note": "JavaScript is a versatile programming language used to make web pages interactive and dynamic.",
      "code": "console.log('Hello, JavaScript!');"
    },
    {
      "title": "Java Script Variables",
      "note": "Variables store data values. Use let, const, or var to declare variables.",
      "code": "let name = \"John\";\nconst age = 30;"
    },
    {
      "title": "Java Script Let",
      "note": "'let' declares block-scoped variables that can be updated but not re-declared within the same scope.",
      "code": "let count = 10;\ncount = 20;"
    },
    {
      "title": "Java Script Const",
      "note": "'const' declares block-scoped variables that cannot be reassigned after initialization.",
      "code": "const PI = 3.14;\n// PI = 3; // Error: Assignment to constant variable."
    },
    {
      "title": "Java Script Operators",
      "note": "Operators perform operations on variables and values, including arithmetic, assignment, comparison, and logical.",
      "code": "let sum = 5 + 10;\nlet isEqual = (5 === 5);"
    },
    {
      "title": "Java Script Functions",
      "note": "Functions are reusable blocks of code that perform a task or calculate a value.",
      "code": "function greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet('Alice'));"
    },
    {
      "title": "Java Script Objects",
      "note": "Objects store collections of key-value pairs and represent real-world entities.",
      "code": "const person = {\n  name: 'Bob',\n  age: 25\n};\nconsole.log(person.name);"
    },
    {
      "title": "Java Script Arrays",
      "note": "Arrays hold ordered lists of values and provide methods to manipulate these lists.",
      "code": "const fruits = ['apple', 'banana', 'cherry'];\nconsole.log(fruits[0]);"
    },
    {
      "title": "Java Script Strings",
      "note": "Strings are sequences of characters. JS provides many methods to manipulate strings.",
      "code": "let greeting = \"Hello\";\nconsole.log(greeting.toUpperCase());"
    },
    {
      "title": "Java Script String Templates",
      "note": "Template literals allow embedding expressions inside strings using backticks and ${}.",
      "code": "let name = \"Jane\";\nconsole.log(`Hello, ${name}!`);"
    },
    {
      "title": "Java Script Numbers",
      "note": "JavaScript uses floating point numbers for all numeric values, with special values like NaN and Infinity.",
      "code": "let num = 123.45;\nconsole.log(typeof num);"
    },
    {
      "title": "Java Script BigInt",
      "note": "BigInt allows working with integers larger than the Number type can safely represent.",
      "code": "const bigNumber = 9007199254740991n;\nconsole.log(bigNumber + 1n);"
    },
    {
      "title": "Java Script Dates",
      "note": "The Date object allows handling dates and times, including formatting and calculations.",
      "code": "const now = new Date();\nconsole.log(now.toLocaleString());"
    },
    {
      "title": "Java Script Math",
      "note": "The Math object provides constants and functions for mathematical operations.",
      "code": "console.log(Math.PI);\nconsole.log(Math.sqrt(16));"
    },
    {
      "title": "Java Script Random",
      "note": "Math.random() generates a pseudo-random number between 0 and 1.",
      "code": "const rand = Math.random();\nconsole.log(rand);"
    },
    {
      "title": "Java Script Booleans",
      "note": "Boolean values represent true or false, often used in conditional logic.",
      "code": "let isLoggedIn = true;\nconsole.log(isLoggedIn);"
    },
    {
      "title": "Java Script If Else",
      "note": "Conditional statements execute code blocks based on whether conditions are true or false.",
      "code": "if (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}"
    },
    {
      "title": "Java Script Switch",
      "note": "Switch statements select one of many code blocks to execute based on an expression's value.",
      "code": "switch(day) {\n  case 'Monday':\n    console.log('Start of week');\n    break;\n  default:\n    console.log('Another day');\n}"
    },
    {
      "title": "Java Script Loop For",
      "note": "For loops run a block of code a specified number of times.",
      "code": "for(let i = 0; i < 5; i++) {\n  console.log(i);\n}"
    },
    {
      "title": "Java Script Loop For In",
      "note": "For...in loops iterate over the enumerable properties of an object.",
      "code": "const obj = {a:1, b:2};\nfor(let key in obj) {\n  console.log(key, obj[key]);\n}"
    },
    {
      "title": "Java Script Loop For Of",
      "note": "For...of loops iterate over iterable objects like arrays.",
      "code": "const arr = [10, 20, 30];\nfor(let value of arr) {\n  console.log(value);\n}"
    },
    {
      "title": "Java Script Async/Await",
      "note": "Async/await syntax simplifies asynchronous code, making it look synchronous.",
      "code": "async function fetchData() {\n  const response = await fetch('https://api.example.com');\n  const data = await response.json();\n  console.log(data);\n}"
    },
    {
      "title": "Java Script Errors",
      "note": "JavaScript errors help identify issues. Try-catch blocks are used to handle errors gracefully.",
      "code": "try {\n  throw new Error('Oops!');\n} catch(e) {\n  console.log(e.message);\n}"
    },
    {
      "title": "Java Script Scope",
      "note": "Scope determines the accessibility of variables and functions in different parts of code.",
      "code": "function test() {\n  let localVar = 10;\n  console.log(localVar);\n}\n// console.log(localVar); // Error"
    },
    {
      "title": "Java Script Hoisting",
      "note": "Variable and function declarations are moved to the top of their scope during compilation.",
      "code": "console.log(a); // undefined\nvar a = 5;"
    },
    {
      "title": "Java Script Modules",
      "note": "Modules allow code to be split into reusable files with import/export capabilities.",
      "code": "// In module.js\nexport function greet() { return 'Hello'; }\n\n// In main.js\nimport { greet } from './module.js';\nconsole.log(greet());"
    },
    {
      "title": "Java Script Classes",
      "note": "Classes are templates for creating objects, supporting inheritance and encapsulation.",
      "code": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    console.log('Hello, ' + this.name);\n  }\n}"
    },
    {
      "title": "Java Script Sets",
      "note": "Sets store unique values of any type and provide methods for manipulation.",
      "code": "const mySet = new Set([1, 2, 3, 3]);\nconsole.log(mySet); // Set {1, 2, 3}"
    },
    {
      "title": "Java Script Maps",
      "note": "Maps store key-value pairs with keys of any type, maintaining insertion order.",
      "code": "const myMap = new Map();\nmyMap.set('key', 'value');\nconsole.log(myMap.get('key'));"
    },
    {
      "title": "Java Script RegExp",
      "note": "Regular expressions are patterns used to match character combinations in strings.",
      "code": "const regex = /hello/i;\nconsole.log(regex.test('Hello world'));"
    },
    {
      "title": "Java Script Typed Arrays",
      "note": "Typed Arrays provide an array-like view of binary data buffers for performance.",
      "code": "const buffer = new ArrayBuffer(16);\nconst int32View = new Int32Array(buffer);"
    },
    {
      "title": "Java Script Callbacks",
      "note": "Callbacks are functions passed as arguments to be executed later, often for asynchronous code.",
      "code": "function greet(name, callback) {\n  callback('Hello ' + name);\n}\ngreet('John', console.log);"
    },
    {
      "title": "Java Script Promises",
      "note": "Promises represent eventual completion or failure of asynchronous operations.",
      "code": "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Done!'), 1000);\n});\npromise.then(console.log);"
    },
    {
      "title": "Java Script Fetch API",
      "note": "Fetch API allows making network requests and handling responses asynchronously.",
      "code": "fetch('https://api.example.com')\n  .then(response => response.json())\n  .then(data => console.log(data));"
    },
    {
      "title": "Java Script JSON",
      "note": "JSON is a format to represent data objects as strings for easy exchange between server and client.",
      "code": "const obj = {name: 'John', age: 30};\nconst json = JSON.stringify(obj);\nconsole.log(json);"
    },
    {
      "title": "Java Script DOM Manipulation",
      "note": "JavaScript can access and modify HTML elements, attributes, and styles dynamically via the DOM.",
      "code": "document.getElementById('demo').innerText = 'Hello World!';"
    },
    {
      "title": "Java Script Event Listeners",
      "note": "Event listeners detect user interactions and run specified functions when events occur.",
      "code": "document.getElementById('btn').addEventListener('click', () => alert('Clicked!'));"
    },
    {
      "title": "Java Script Local Storage",
      "note": "Local Storage stores data persistently in the browser, surviving page reloads.",
      "code": "localStorage.setItem('name', 'Alice');\nconsole.log(localStorage.getItem('name'));"
    }
  ],

  react: [
    {
      "title": "React Tutorial",
      "note": "A step-by-step guide to learn React and build dynamic web apps.",
      "code": "// React apps start with components and JSX to build UI."
    },
    {
      "title": "React Home",
      "note": "The main entry point to React documentation and resources.",
      "code": "// Visit https://reactjs.org for official docs and tutorials."
    },
    {
      "title": "React Intro",
      "note": "React is a JavaScript library for building user interfaces with reusable components.",
      "code": "import React from 'react';\\nconst App = () => <h1>Hello, React!</h1>;"
    },
    {
      "title": "React Get Started",
      "note": "How to set up a React project using Create React App or other tools.",
      "code": "npx create-react-app my-app\\ncd my-app\\nnpm start"
    },
    {
      "title": "React Upgrade",
      "note": "Guidance on upgrading React versions and managing dependencies.",
      "code": "npm install react@latest react-dom@latest"
    },
    {
      "title": "React ES6",
      "note": "React embraces ES6 features like arrow functions, classes, and modules.",
      "code": "class MyComponent extends React.Component {\\n  render() {\\n    return <div>Hello ES6!</div>;\\n  }\\n}"
    },
    {
      "title": "React Render HTML",
      "note": "Render HTML content in React using JSX syntax, which looks like HTML inside JavaScript.",
      "code": "const element = <h1>Hello, world!</h1>;\\nReactDOM.render(element, document.getElementById('root'));"
    },
    {
      "title": "React JSX",
      "note": "JSX is a syntax extension allowing writing HTML inside JavaScript in React.",
      "code": "const jsx = <div className=\"container\">Welcome to JSX!</div>;"
    },
    {
      "title": "React Components",
      "note": "Components are building blocks of React UI, can be functional or class-based.",
      "code": "function Greeting() {\\n  return <h2>Hello from Component!</h2>;\\n}"
    },
    {
      "title": "React Class",
      "note": "Class components use ES6 classes to manage state and lifecycle methods.",
      "code": "class Clock extends React.Component {\\n  render() {\\n    return <div>Time: {new Date().toLocaleTimeString()}</div>;\\n  }\\n}"
    },
    {
      "title": "React Props",
      "note": "Props are inputs to components to pass data and customize behavior.",
      "code": "function Welcome(props) {\\n  return <h1>Hello, {props.name}</h1>;\\n}"
    },
    {
      "title": "React Events",
      "note": "React handles events using camelCase syntax and passing functions as handlers.",
      "code": "<button onClick={() => alert('Clicked!')}>Click Me</button>"
    },
    {
      "title": "React Conditionals",
      "note": "Render UI conditionally using JavaScript if/else or ternary operators inside JSX.",
      "code": "{isLoggedIn ? <Dashboard /> : <Login />}"
    },
    {
      "title": "React Lists",
      "note": "Render lists of elements efficiently using map() with unique keys.",
      "code": "{items.map(item => <li key={item.id}>{item.name}</li>)}"
    },
    {
      "title": "React Forms",
      "note": "Controlled components manage form inputs with React state.",
      "code": "const [value, setValue] = React.useState('');\\n<input value={value} onChange={e => setValue(e.target.value)} />"
    },
    {
      "title": "React Router",
      "note": "React Router enables client-side navigation and dynamic routing.",
      "code": "import { BrowserRouter, Route, Switch } from 'react-router-dom';"
    },
    {
      "title": "React Memo",
      "note": "React.memo is a higher-order component that memoizes functional components to prevent unnecessary re-renders.",
      "code": "const MemoizedComponent = React.memo(function MyComponent(props) { return <div>{props.value}</div>; });"
    },
    {
      "title": "React CSS Styling",
      "note": "Style React components with CSS classes or inline styles.",
      "code": "<div className=\"container\" style={{ color: 'blue' }}>Styled Text</div>"
    },
    {
      "title": "React Sass Styling",
      "note": "Use Sass (Syntactically Awesome Stylesheets) to write more maintainable CSS in React projects.",
      "code": "// Import your Sass file\\nimport './styles.scss';"
    },
    {
      "title": "React Hooks",
      "note": "Hooks let you use React features like state and lifecycle without writing classes.",
      "code": "import React, { useState } from 'react';"
    },
    {
      "title": "What is a Hook?",
      "note": "Hooks are functions like useState and useEffect that add React features to functional components.",
      "code": "const [count, setCount] = useState(0);"
    },
    {
      "title": "useState",
      "note": "useState manages state in functional components.",
      "code": "const [value, setValue] = useState('initial');"
    },
    {
      "title": "useEffect",
      "note": "useEffect performs side effects like data fetching or subscriptions.",
      "code": "useEffect(() => {\\n  document.title = `Count: ${count}`;\\n}, [count]);"
    },
    {
      "title": "useContext",
      "note": "useContext accesses data from React Context without prop drilling.",
      "code": "const value = useContext(MyContext);"
    },
    {
      "title": "useRef",
      "note": "useRef stores mutable values and references DOM elements.",
      "code": "const inputRef = useRef();\\n<input ref={inputRef} />"
    },
    {
      "title": "useReducer",
      "note": "useReducer manages complex state logic similar to Redux reducers.",
      "code": "const [state, dispatch] = useReducer(reducer, initialState);"
    },
    {
      "title": "useCallback",
      "note": "useCallback memoizes callback functions to optimize performance.",
      "code": "const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);"
    },
    {
      "title": "useMemo",
      "note": "useMemo memoizes expensive calculations and returns cached results.",
      "code": "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);"
    },
    {
      "title": "Custom Hooks",
      "note": "Create reusable hooks to share logic across components.",
      "code": "function useCustom() {\\n  const [state, setState] = useState(null);\\n  // custom logic\\n  return [state, setState];\\n}"
    },
    {
      "title": "React Exercises",
      "note": "Practice exercises to strengthen your React knowledge.",
      "code": "// Try building simple components and hooks yourself!"
    },
    {
      "title": "React Compiler",
      "note": "React uses Babel and Webpack to compile JSX and bundle code for the browser.",
      "code": "// Babel transpiles JSX to JavaScript\\n// Webpack bundles modules"
    },
    {
      "title": "React Quiz",
      "note": "Test your React skills with quizzes and challenges.",
      "code": "// Online quizzes help reinforce learning."
    },
    {
      "title": "React Syllabus",
      "note": "A structured curriculum outlining React topics and learning goals.",
      "code": "// Use this syllabus as a roadmap for your learning journey."
    },
    {
      "title": "React Study Plan",
      "note": "A detailed schedule to master React step-by-step.",
      "code": "// Break topics into daily or weekly goals for steady progress."
    },
    {
      "title": "React Server",
      "note": "Server-side rendering (SSR) with React improves SEO and performance.",
      "code": "// Use frameworks like Next.js for SSR."
    },
    {
      "title": "React Interview Prep",
      "note": "Prepare for React job interviews with common questions and projects.",
      "code": "// Practice coding problems and review React fundamentals."
    },
    {
      "title": "React Certificate",
      "note": "Earn certification by completing React courses and projects.",
      "code": "// Show proof of your React skills to employers."
    },
    {
      "title": "React Context API",
      "note": "Provides a way to pass data through the component tree without prop drilling.",
      "code": "const MyContext = React.createContext();\\n<MyContext.Provider value={value}>...</MyContext.Provider>"
    },
    {
      "title": "React Suspense & Lazy Loading",
      "note": "Load components lazily and show fallback UI during loading.",
      "code": "const LazyComponent = React.lazy(() => import('./LazyComponent'));\\n<Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>"
    },
    {
      "title": "React Error Boundaries",
      "note": "Components that catch JavaScript errors anywhere in their child component tree.",
      "code": "class ErrorBoundary extends React.Component {\\n  componentDidCatch(error, info) { /* handle error */ }\\n  render() { return this.props.children; }\\n}"
    },
    {
      "title": "React Portals",
      "note": "Render children into a DOM node outside the parent component hierarchy.",
      "code": "ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'))"
    },
    {
      "title": "React Fragments",
      "note": "Group multiple elements without adding extra nodes to the DOM.",
      "code": "<> <Child1 /> <Child2 /> </>"
    }
  ],

  nodejs: [
    {
      "title": "Node HOME",
      "note": "Node.js is a JavaScript runtime built on Chrome's V8 engine allowing server-side JavaScript execution.",
      "code": "console.log('Welcome to Node.js!');"
    },
    {
      "title": "Node Intro",
      "note": "Node.js uses event-driven, non-blocking I/O model suitable for scalable network apps.",
      "code": "const http = require('http');\nhttp.createServer((req, res) => res.end('Hello Node')).listen(3000);"
    },
    {
      "title": "Node Get Started",
      "note": "Install Node.js, write JavaScript files, and run them via command line using `node filename.js`.",
      "code": "console.log('Node.js is running!');"
    },
    {
      "title": "Node JS Requirements",
      "note": "Node.js requires an OS, V8 engine, and the Node runtime installed for development.",
      "code": "// Check Node version\nconsole.log(process.version);"
    },
    {
      "title": "Node.js vs Browser",
      "note": "Node.js runs JavaScript on the server, browsers run JS on the client with DOM access.",
      "code": "// Node has no window or document object\nconsole.log(typeof window); // undefined"
    },
    {
      "title": "Node Cmd Line",
      "note": "Use the Node REPL or run scripts from the command line for interactive coding or execution.",
      "code": "// Run in terminal:\n// node\n// then type JS commands interactively"
    },
    {
      "title": "Node V8 Engine",
      "note": "V8 compiles JavaScript to native machine code, powering Node's performance.",
      "code": "// V8 is built-in; no code needed"
    },
    {
      "title": "Node Architecture",
      "note": "Node uses a single-threaded event loop architecture for async, non-blocking I/O.",
      "code": "// Example: event loop with setTimeout\nsetTimeout(() => console.log('Delayed'), 1000);"
    },
    {
      "title": "Node Event Loop",
      "note": "The event loop handles async callbacks in Node, enabling non-blocking I/O operations.",
      "code": "console.log('Start');\nsetTimeout(() => console.log('Inside event loop'), 0);\nconsole.log('End');"
    },
    {
      "title": "Asynchronous",
      "note": "Node executes I/O operations asynchronously to avoid blocking the main thread.",
      "code": "const fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});"
    },
    {
      "title": "Node Async",
      "note": "Async programming in Node uses callbacks, promises, and async/await for flow control.",
      "code": "async function fetchData() {\n  return 'Data loaded';\n}\nfetchData().then(console.log);"
    },
    {
      "title": "Node Promises",
      "note": "Promises represent future values and allow chaining of async operations.",
      "code": "const promise = new Promise(resolve => setTimeout(() => resolve('Done'), 1000));\npromise.then(console.log);"
    },
    {
      "title": "Node Async/Await",
      "note": "Async/await syntax provides clearer asynchronous code using promises behind the scenes.",
      "code": "async function run() {\n  const result = await Promise.resolve('Success');\n  console.log(result);\n}\nrun();"
    },
    {
      "title": "Node Errors Handling",
      "note": "Handle errors with try/catch, callbacks with error params, and promise catch methods.",
      "code": "try {\n  throw new Error('Oops');\n} catch (e) {\n  console.error(e.message);\n}"
    },
    {
      "title": "Module Basics",
      "note": "Node modules encapsulate code. Use require to import, module.exports to expose code.",
      "code": "// math.js\nmodule.exports.sum = (a,b) => a + b;\n\n// app.js\nconst math = require('./math');\nconsole.log(math.sum(1,2));"
    },
    {
      "title": "Node Modules",
      "note": "Built-in, user-defined, and third-party modules organize Node.js functionality.",
      "code": "const fs = require('fs');\nconsole.log(typeof fs.readFile);"
    },
    {
      "title": "Node ES Modules",
      "note": "ES Modules use `import` and `export` syntax supported natively in modern Node versions.",
      "code": "// math.mjs\nexport function add(a, b) { return a + b; }\n\n// app.mjs\nimport { add } from './math.mjs';\nconsole.log(add(3,4));"
    },
    {
      "title": "Node NPM",
      "note": "NPM is Node's package manager used to install and manage dependencies.",
      "code": "// In terminal:\nnpm install express"
    },
    {
      "title": "Node package.json",
      "note": "package.json configures project metadata, scripts, and dependencies.",
      "code": "{\n  \"name\": \"my-app\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\"start\": \"node app.js\"}\n}"
    },
    {
      "title": "Node NPM Scripts",
      "note": "NPM scripts automate commands defined in package.json under the scripts section.",
      "code": "\"scripts\": {\n  \"start\": \"node app.js\",\n  \"test\": \"echo \\\"Running tests\\\"\"\n}"
    },
    {
      "title": "Node Manage Dep",
      "note": "Use `npm install` and `npm uninstall` to manage dependencies, updating package.json and package-lock.json.",
      "code": "// Install lodash\nnpm install lodash\n// Remove lodash\nnpm uninstall lodash"
    },
    {
      "title": "Node Publish Packages",
      "note": "Publish your packages to npm registry using `npm publish` after login and versioning.",
      "code": "// terminal commands:\nnpm login\nnpm publish"
    },
    {
      "title": "Core Modules",
      "note": "Node has core modules like fs, http, path, crypto providing essential functionality.",
      "code": "const os = require('os');\nconsole.log(os.platform());"
    },
    {
      "title": "HTTP Module",
      "note": "Provides functionality to create HTTP servers and clients.",
      "code": "const http = require('http');\nhttp.createServer((req, res) => res.end('Hello HTTP')).listen(3000);"
    },
    {
      "title": "HTTPS Module",
      "note": "Allows creation of HTTPS servers with SSL/TLS encryption.",
      "code": "// Requires SSL certs\n// const https = require('https');\n// https.createServer(options, handler).listen(443);"
    },
    {
      "title": "File System (fs)",
      "note": "Read/write files asynchronously or synchronously.",
      "code": "const fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});"
    },
    {
      "title": "Path Module",
      "note": "Utility for handling and transforming file paths.",
      "code": "const path = require('path');\nconsole.log(path.join(__dirname, 'file.txt'));"
    },
    {
      "title": "OS Module",
      "note": "Provides OS-related utility methods and properties.",
      "code": "const os = require('os');\nconsole.log(os.cpus().length);"
    },
    {
      "title": "URL Module",
      "note": "Utility to parse and format URLs.",
      "code": "const url = require('url');\nconst myURL = new URL('https://example.com/path?name=node');\nconsole.log(myURL.hostname);"
    },
    {
      "title": "Events Module",
      "note": "Implements EventEmitter for handling events asynchronously.",
      "code": "const EventEmitter = require('events');\nconst emitter = new EventEmitter();\nemitter.on('event', () => console.log('Event fired'));\nemitter.emit('event');"
    },
    {
      "title": "Stream Module",
      "note": "Handles streaming data in chunks for efficiency.",
      "code": "const fs = require('fs');\nconst readStream = fs.createReadStream('file.txt');\nreadStream.on('data', chunk => console.log(chunk.toString()));"
    },
    {
      "title": "Buffer Module",
      "note": "Handles raw binary data buffers.",
      "code": "const buf = Buffer.from('Hello');\nconsole.log(buf.toString());"
    },
    {
      "title": "Crypto Module",
      "note": "Provides cryptographic functionality such as hashing and encryption.",
      "code": "const crypto = require('crypto');\nconst hash = crypto.createHash('sha256').update('data').digest('hex');\nconsole.log(hash);"
    },
    {
      "title": "Timers Module",
      "note": "Allows scheduling code with setTimeout, setInterval, and clear timers.",
      "code": "setTimeout(() => console.log('Timeout!'), 1000);"
    },
    {
      "title": "DNS Module",
      "note": "Performs DNS lookups and resolves hostnames.",
      "code": "const dns = require('dns');\ndns.lookup('example.com', (err, address) => {\n  if (err) throw err;\n  console.log(address);\n});"
    },
    {
      "title": "Assert Module",
      "note": "Used for writing test assertions to verify code correctness.",
      "code": "const assert = require('assert');\nassert.strictEqual(1 + 1, 2);"
    },
    {
      "title": "Util Module",
      "note": "Provides utilities for debugging and other helpful functions.",
      "code": "const util = require('util');\nconsole.log(util.isArray([]));"
    },
    {
      "title": "Readline Module",
      "note": "Creates interactive command line interfaces for reading input.",
      "code": "const readline = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\nreadline.question('Name? ', name => {\n  console.log(`Hello, ${name}`);\n  readline.close();\n});"
    },
    {
      "title": "JS & TS Features",
      "note": "Node supports modern JavaScript and TypeScript for better language features and type safety.",
      "code": "// ES6 example\nconst greet = name => `Hello, ${name}!`;\nconsole.log(greet('Node'));"
    },
    {
      "title": "Node ES6+",
      "note": "Node supports ES6+ features like arrow functions, destructuring, classes, and template literals.",
      "code": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return `Hi, I am ${this.name}`;\n  }\n}\nconsole.log(new Person('Node').greet());"
    },
    {
      "title": "Node Process",
      "note": "Provides info about current Node process and control over it.",
      "code": "console.log(process.pid);\nprocess.exit(0);"
    },
    {
      "title": "Node TypeScript",
      "note": "TypeScript adds static typing to Node.js, improving developer experience and code quality.",
      "code": "// example.ts\nconst greet = (name: string): string => `Hello, ${name}`;\nconsole.log(greet('TS'));"
    },
    {
      "title": "Node Adv. TypeScript",
      "note": "Advanced TypeScript features in Node include interfaces, generics, decorators, and type inference.",
      "code": "interface User { name: string; age?: number; }\nconst user: User = { name: 'Alice' };\nconsole.log(user);"
    },
    {
      "title": "Node Lint & Formatting",
      "note": "Use ESLint and Prettier to maintain code quality and consistent style in Node projects.",
      "code": "// Run ESLint and Prettier via npm scripts or CLI"
    },
    {
      "title": "Node Frameworks",
      "note": "Frameworks like Express simplify building web apps with routing and middleware support.",
      "code": "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hi'));\napp.listen(3000);"
    },
    {
      "title": "Express.js",
      "note": "Express.js is a minimal web framework for Node providing routing and middleware.",
      "code": "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello Express'));\napp.listen(3000);"
    },
    {
      "title": "Middleware Concept",
      "note": "Middleware functions have access to request and response objects to modify or handle requests.",
      "code": "app.use((req, res, next) => { console.log('Middleware'); next(); });"
    },
    {
      "title": "REST API Design",
      "note": "REST APIs use HTTP verbs to operate on resources, enabling client-server communication.",
      "code": "app.get('/users', (req, res) => res.json([{id:1,name:'Alice'}]));"
    },
    {
      "title": "API Authentication",
      "note": "Secure APIs using tokens, sessions, or OAuth for user identity verification.",
      "code": "// Middleware to check auth token\napp.use((req, res, next) => {\n  if (!req.headers.authorization) return res.status(401).send('Unauthorized');\n  next();\n});"
    },
    {
      "title": "Node.js with Frontend",
      "note": "Node often serves backend APIs consumed by frontend frameworks like React or Angular.",
      "code": "// Backend API example\napp.get('/data', (req, res) => res.json({msg:'Hello'}));"
    },
    {
      "title": "MySQL Get Started",
      "note": "Use Node MySQL modules to connect and query MySQL databases.",
      "code": "const mysql = require('mysql');\nconst con = mysql.createConnection({host:'localhost', user:'root', password:''});\ncon.connect(err => { if(err) throw err; console.log('Connected!'); });"
    },
    {
      "title": "MySQL Insert / Delete / Update",
      "note": "Execute SQL commands via Node MySQL client to manipulate database records.",
      "code": "con.query('INSERT INTO users(name) VALUES(?)', ['John'], (err) => { if(err) throw err; console.log('Inserted'); });"
    },
    {
      "title": "MongoDB Get Started",
      "note": "Use MongoDB Node driver or Mongoose to connect and manipulate MongoDB databases.",
      "code": "const { MongoClient } = require('mongodb');\nconst uri = 'mongodb://localhost:27017';\nMongoClient.connect(uri, (err, client) => {\n  if(err) throw err;\n  console.log('Connected to MongoDB');\n  client.close();\n});"
    },
    {
      "title": "MongoDB CRUD",
      "note": "Perform Create, Read, Update, Delete operations on MongoDB collections.",
      "code": "const collection = client.db('test').collection('users');\ncollection.insertOne({name:'John'}, (err, res) => { if(err) throw err; console.log('Inserted'); });"
    },
    {
      "title": "Node.js Crypto",
      "note": "Crypto module supports hashing, encryption, and signing.",
      "code": "const crypto = require('crypto');\nconst hash = crypto.createHash('sha256').update('data').digest('hex');\nconsole.log(hash);"
    },
    {
      "title": "Node.js File Operations",
      "note": "Use fs module for reading, writing, and manipulating files.",
      "code": "const fs = require('fs');\nfs.writeFile('file.txt', 'Hello', err => { if (err) throw err; console.log('Saved'); });"
    },
    {
      "title": "Node.js Event Loop",
      "note": "Handles non-blocking async operations using callbacks, promises, and timers.",
      "code": "console.log('Start');\nsetTimeout(() => console.log('Async'), 0);\nconsole.log('End');"
    },
    {
      "title": "Node.js Child Process",
      "note": "Allows spawning subprocesses to execute system commands or other scripts.",
      "code": "const { exec } = require('child_process');\nexec('ls', (err, stdout) => { if(err) throw err; console.log(stdout); });"
    },
    {
      "title": "Node.js Debugging",
      "note": "Use built-in debugger or external tools to debug Node applications.",
      "code": "// Run with:\n// node inspect app.js"
    },
    {
      "title": "Node.js Clustering",
      "note": "Run multiple Node.js processes to take advantage of multi-core systems.",
      "code": "const cluster = require('cluster');\nif (cluster.isMaster) {\n  cluster.fork();\n} else {\n  require('http').createServer((req, res) => res.end('Clustered')).listen(3000);\n}"
    },
    {
      "title": "Socket.io Get Started",
      "note": "Socket.io enables real-time, bi-directional communication between client and server.",
      "code": "const io = require('socket.io')(3000);\nio.on('connection', socket => { socket.on('message', msg => console.log(msg)); });"
    },
    {
      "title": "Socket.io Events",
      "note": "Handle custom events between client and server using Socket.io's event system.",
      "code": "socket.on('chat message', msg => console.log(msg));"
    },
    {
      "title": "Node.js Debug Console",
      "note": "Use `console` methods and Node inspector for debugging output and breakpoints.",
      "code": "console.debug('Debug info');"
    },
    {
      "title": "Node.js CLI App",
      "note": "Build command-line tools using Node to accept input, process, and output results.",
      "code": "console.log('Hello CLI');"
    },
    {
      "title": "Node.js REPL",
      "note": "Read-Eval-Print-Loop allows interactive execution of JavaScript in terminal.",
      "code": "// Start REPL by running `node` without args in terminal"
    }
  ],
  SQL:
    [
      {
        "title": "SQL HOME",
        "note": "The starting point for learning SQL concepts and commands.",
        "code": "-- SQL is used to manage relational databases."
      },
      {
        "title": "SQL Intro",
        "note": "SQL (Structured Query Language) manages and manipulates data in relational databases.",
        "code": "SELECT 'Welcome to SQL';"
      },
      {
        "title": "SQL Syntax",
        "note": "The structure of SQL statements, starting with keywords and ending with a semicolon.",
        "code": "SELECT column1, column2 FROM table_name;"
      },
      {
        "title": "SQL Select",
        "note": "Retrieve specific columns or all columns from a table.",
        "code": "SELECT first_name, last_name FROM employees;"
      },
      {
        "title": "SQL Select Distinct",
        "note": "Return only unique (distinct) values from a column.",
        "code": "SELECT DISTINCT department FROM employees;"
      },
      {
        "title": "SQL Where",
        "note": "Filter records based on a condition.",
        "code": "SELECT * FROM employees WHERE department = 'Sales';"
      },
      {
        "title": "SQL Order By",
        "note": "Sort the result set by one or more columns.",
        "code": "SELECT * FROM employees ORDER BY last_name ASC;"
      },
      {
        "title": "SQL And",
        "note": "Use multiple conditions that must all be true.",
        "code": "SELECT * FROM employees WHERE department = 'Sales' AND city = 'London';"
      },
      {
        "title": "SQL Or",
        "note": "Use multiple conditions where at least one must be true.",
        "code": "SELECT * FROM employees WHERE department = 'Sales' OR department = 'HR';"
      },
      {
        "title": "SQL Not",
        "note": "Negate a condition.",
        "code": "SELECT * FROM employees WHERE NOT department = 'HR';"
      },
      {
        "title": "SQL Insert Into",
        "note": "Insert new data into a table.",
        "code": "INSERT INTO employees (first_name, last_name, department) VALUES ('John', 'Doe', 'IT');"
      },
      {
        "title": "SQL Null Values",
        "note": "Test for NULL values using IS NULL or IS NOT NULL.",
        "code": "SELECT * FROM employees WHERE manager_id IS NULL;"
      },
      {
        "title": "SQL Update",
        "note": "Update existing data in a table.",
        "code": "UPDATE employees SET department = 'Marketing' WHERE employee_id = 3;"
      },
      {
        "title": "SQL Delete",
        "note": "Delete records from a table.",
        "code": "DELETE FROM employees WHERE employee_id = 5;"
      },
      {
        "title": "SQL Select Top",
        "note": "Limit the number of rows returned.",
        "code": "SELECT TOP 5 * FROM employees;"
      },
      {
        "title": "SQL Aggregate Functions",
        "note": "Perform calculations on a set of values and return a single value.",
        "code": "SELECT AVG(salary) AS avg_salary FROM employees;"
      },
      {
        "title": "SQL Min and Max",
        "note": "Return the smallest or largest value.",
        "code": "SELECT MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM employees;"
      },
      {
        "title": "SQL Count",
        "note": "Count the number of rows matching a condition.",
        "code": "SELECT COUNT(*) AS total_employees FROM employees;"
      },
      {
        "title": "SQL Sum",
        "note": "Return the sum of a numeric column.",
        "code": "SELECT SUM(salary) AS total_salary FROM employees;"
      },
      {
        "title": "SQL Avg",
        "note": "Return the average value of a numeric column.",
        "code": "SELECT AVG(salary) AS avg_salary FROM employees;"
      },
      {
        "title": "SQL Like",
        "note": "Search for a specified pattern in a column.",
        "code": "SELECT * FROM employees WHERE first_name LIKE 'J%';"
      },
      {
        "title": "SQL Wildcards",
        "note": "Use wildcard characters with LIKE for pattern matching.",
        "code": "SELECT * FROM employees WHERE first_name LIKE '_a%';"
      },
      {
        "title": "SQL In",
        "note": "Match values in a list.",
        "code": "SELECT * FROM employees WHERE department IN ('Sales', 'Marketing');"
      },
      {
        "title": "SQL Between",
        "note": "Select values within a given range.",
        "code": "SELECT * FROM employees WHERE salary BETWEEN 3000 AND 5000;"
      },
      {
        "title": "SQL Aliases",
        "note": "Rename a column or table for readability.",
        "code": "SELECT first_name AS fname, last_name AS lname FROM employees;"
      },
      {
        "title": "SQL Joins",
        "note": "Combine rows from multiple tables.",
        "code": "SELECT employees.name, departments.department_name FROM employees JOIN departments ON employees.dept_id = departments.id;"
      },
      {
        "title": "SQL Inner Join",
        "note": "Return rows with matching values in both tables.",
        "code": "SELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id;"
      },
      {
        "title": "SQL Left Join",
        "note": "Return all rows from the left table and matched rows from the right table.",
        "code": "SELECT * FROM customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;"
      },
      {
        "title": "SQL Right Join",
        "note": "Return all rows from the right table and matched rows from the left table.",
        "code": "SELECT * FROM customers RIGHT JOIN orders ON customers.customer_id = orders.customer_id;"
      },
      {
        "title": "SQL Full Join",
        "note": "Return all rows when there is a match in one of the tables.",
        "code": "SELECT * FROM customers FULL OUTER JOIN orders ON customers.customer_id = orders.customer_id;"
      },
      {
        "title": "SQL Self Join",
        "note": "Join a table to itself.",
        "code": "SELECT a.employee_name, b.manager_name FROM employees a, employees b WHERE a.manager_id = b.employee_id;"
      },
      {
        "title": "SQL Union",
        "note": "Combine the results of two or more SELECT statements, removing duplicates.",
        "code": "SELECT city FROM customers UNION SELECT city FROM suppliers;"
      },
      {
        "title": "SQL Union All",
        "note": "Combine results of two SELECT statements, keeping duplicates.",
        "code": "SELECT city FROM customers UNION ALL SELECT city FROM suppliers;"
      },
      {
        "title": "SQL Group By",
        "note": "Group rows sharing a property so aggregate functions can be applied.",
        "code": "SELECT department, COUNT(*) AS total FROM employees GROUP BY department;"
      },
      {
        "title": "SQL Having",
        "note": "Filter groups after aggregation.",
        "code": "SELECT department, COUNT(*) AS total FROM employees GROUP BY department HAVING COUNT(*) > 5;"
      },
      {
        "title": "SQL Exists",
        "note": "Test for the existence of rows in a subquery.",
        "code": "SELECT * FROM customers WHERE EXISTS (SELECT * FROM orders WHERE customers.customer_id = orders.customer_id);"
      },
      {
        "title": "SQL Any, All",
        "note": "Compare a value to any or all values returned by a subquery.",
        "code": "SELECT * FROM products WHERE price > ALL (SELECT price FROM products WHERE category = 'Electronics');"
      },
      {
        "title": "SQL Select Into",
        "note": "Copy data from one table into a new table.",
        "code": "SELECT * INTO new_table FROM old_table;"
      },
      {
        "title": "SQL Insert Into Select",
        "note": "Copy data from one table and insert into another.",
        "code": "INSERT INTO archive_table SELECT * FROM main_table WHERE year = 2024;"
      },
      {
        "title": "SQL Case",
        "note": "Perform conditional logic in SQL statements.",
        "code": "SELECT order_id, CASE WHEN quantity > 10 THEN 'Bulk' ELSE 'Small' END AS order_type FROM orders;"
      },
      {
        "title": "SQL Null Functions",
        "note": "Functions to handle NULL values, such as COALESCE and ISNULL.",
        "code": "SELECT COALESCE(phone, 'No Phone') AS contact_number FROM customers;"
      },
      {
        "title": "SQL Stored Procedures",
        "note": "A stored procedure is a precompiled set of SQL statements stored in the database.",
        "code": "CREATE PROCEDURE GetAllEmployees AS SELECT * FROM employees;"
      },
      {
        "title": "SQL Comments",
        "note": "Use comments to explain SQL code.",
        "code": "-- This is a single-line comment\n/* This is a multi-line comment */"
      },
      {
        "title": "SQL Operators",
        "note": "Operators like =, >, <, >=, <=, <> are used to compare values.",
        "code": "SELECT * FROM employees WHERE salary >= 5000;"
      },
      {
        "title": "SQL Create DB",
        "note": "Create a new database.",
        "code": "CREATE DATABASE my_database;"
      },
      {
        "title": "SQL Drop DB",
        "note": "Delete an existing database.",
        "code": "DROP DATABASE my_database;"
      },
      {
        "title": "SQL Backup DB",
        "note": "Create a backup of a database.",
        "code": "BACKUP DATABASE my_database TO DISK = 'C:/backup/my_database.bak';"
      },
      {
        "title": "SQL Create Table",
        "note": "Create a new table in a database.",
        "code": "CREATE TABLE employees (id INT, name VARCHAR(50), department VARCHAR(50));"
      },
      {
        "title": "SQL Drop Table",
        "note": "Delete a table and its data.",
        "code": "DROP TABLE employees;"
      },
      {
        "title": "SQL Alter Table",
        "note": "Modify an existing table's structure.",
        "code": "ALTER TABLE employees ADD email VARCHAR(100);"
      },
      {
        "title": "SQL Constraints",
        "note": "Rules enforced on table data to maintain integrity.",
        "code": "CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50) NOT NULL);"
      },
      {
        "title": "SQL Not Null",
        "note": "Ensure a column cannot have NULL values.",
        "code": "CREATE TABLE products (id INT NOT NULL, name VARCHAR(50) NOT NULL);"
      },
      {
        "title": "SQL Unique",
        "note": "Ensure all values in a column are unique.",
        "code": "CREATE TABLE users (id INT PRIMARY KEY, email VARCHAR(100) UNIQUE);"
      },
      {
        "title": "SQL Primary Key",
        "note": "Uniquely identify each row in a table.",
        "code": "CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));"
      },
      {
        "title": "SQL Foreign Key",
        "note": "Link rows in one table to rows in another table.",
        "code": "CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT, FOREIGN KEY (customer_id) REFERENCES customers(id));"
      },
      {
        "title": "SQL Check",
        "note": "Ensure a column's values meet a specific condition.",
        "code": "CREATE TABLE products (id INT PRIMARY KEY, price DECIMAL CHECK (price > 0));"
      },
      {
        "title": "SQL Default",
        "note": "Set a default value for a column when no value is provided.",
        "code": "CREATE TABLE customers (id INT PRIMARY KEY, country VARCHAR(50) DEFAULT 'USA');"
      },
      {
        "title": "SQL Index",
        "note": "Improve query performance using indexes.",
        "code": "CREATE INDEX idx_lastname ON employees(last_name);"
      },
      {
        "title": "SQL Auto Increment",
        "note": "Automatically generate unique values for a column.",
        "code": "CREATE TABLE employees (id INT IDENTITY(1,1) PRIMARY KEY, name VARCHAR(50));"
      },
      {
        "title": "SQL Dates",
        "note": "Store and query date/time values.",
        "code": "SELECT * FROM orders WHERE order_date > '2024-01-01';"
      },
      {
        "title": "SQL Views",
        "note": "A view is a virtual table based on the result of a query.",
        "code": "CREATE VIEW sales_summary AS SELECT product_id, SUM(quantity) AS total_sold FROM sales GROUP BY product_id;"
      },
      {
        "title": "SQL Injection",
        "note": "A security risk where malicious SQL is inserted into queries.",
        "code": "-- Avoid using string concatenation in SQL queries."
      },
      {
        "title": "SQL Hosting",
        "note": "Run your SQL database on a remote or cloud server.",
        "code": "-- Example: MySQL on AWS RDS."
      },
      {
        "title": "SQL Data Types",
        "note": "Define the type of data a column can hold (e.g., INT, VARCHAR, DATE).",
        "code": "CREATE TABLE sample (id INT, name VARCHAR(50), created_at DATE);"
      }
    ],

  Python: [
    {
      "title": "Python HOME",
      "note": "The main landing point for Python resources, documentation, and tutorials.",
      "code": "print('Welcome to Python!')"
    },
    {
      "title": "Python Intro",
      "note": "Python is a high-level, interpreted programming language known for its readability and versatility.",
      "code": "print('Hello, Python!')"
    },
    {
      "title": "Python Get Started",
      "note": "Install Python, write your first program, and run it using the Python interpreter.",
      "code": "# Save as hello.py\nprint('Welcome to Python!')"
    },
    {
      "title": "Python Syntax",
      "note": "Python uses indentation instead of curly braces to define code blocks.",
      "code": "if 5 > 2:\n    print('Five is greater than two!')"
    },
    {
      "title": "Python Comments",
      "note": "Use comments to explain your code. Single-line comments start with #.",
      "code": "# This is a comment\nprint('Hello')"
    },
    {
      "title": "Python Variables",
      "note": "Variables store data values. You don’t need to declare a type before using them.",
      "code": "name = 'Alice'\nprint(name)"
    },
    {
      "title": "Python Data Types",
      "note": "Common types include str, int, float, bool, list, tuple, dict, and set.",
      "code": "age = 25\nprice = 19.99\nis_active = True\nnames = ['Alice', 'Bob']"
    },
    {
      "title": "Python Numbers",
      "note": "Numbers can be integers, floating-point, or complex.",
      "code": "x = 10\npi = 3.14\nz = 2 + 3j"
    },
    {
      "title": "Python Casting",
      "note": "Convert variables from one type to another using int(), float(), str().",
      "code": "x = int(3.5)\ny = float('2.7')\nname = str(123)"
    },
    {
      "title": "Python Strings",
      "note": "Strings are text enclosed in quotes and support many built-in methods.",
      "code": "greeting = 'Hello'\nprint(greeting.upper())"
    },
    {
      "title": "Python Booleans",
      "note": "Booleans represent True or False values.",
      "code": "is_ready = True\nprint(5 > 3)"
    },
    {
      "title": "Python Operators",
      "note": "Operators are symbols that perform operations on variables and values.",
      "code": "sum_val = 5 + 3\nis_equal = (5 == 3)"
    },
    {
      "title": "Python Lists",
      "note": "Lists are ordered, changeable collections of items.",
      "code": "fruits = ['apple', 'banana', 'cherry']\nfruits.append('orange')"
    },
    {
      "title": "Python Tuples",
      "note": "Tuples are ordered, unchangeable collections of items.",
      "code": "coordinates = (10, 20)"
    },
    {
      "title": "Python Sets",
      "note": "Sets are unordered collections with no duplicate items.",
      "code": "colors = {'red', 'green', 'blue'}"
    },
    {
      "title": "Python Dictionaries",
      "note": "Dictionaries store key-value pairs.",
      "code": "person = {'name': 'Alice', 'age': 25}\nprint(person['name'])"
    },
    {
      "title": "Python If...Else",
      "note": "Conditional statements execute code based on conditions.",
      "code": "if age >= 18:\n    print('Adult')\nelse:\n    print('Minor')"
    },
    {
      "title": "Python Match",
      "note": "Match-case is a structural pattern matching feature (Python 3.10+).",
      "code": "status = 404\nmatch status:\n    case 200:\n        print('OK')\n    case 404:\n        print('Not Found')"
    },
    {
      "title": "Python While Loops",
      "note": "Repeats a block of code while a condition is true.",
      "code": "count = 0\nwhile count < 5:\n    print(count)\n    count += 1"
    },
    {
      "title": "Python For Loops",
      "note": "Iterates over a sequence (like a list or string).",
      "code": "for fruit in ['apple', 'banana']:\n    print(fruit)"
    },
    {
      "title": "Python Functions",
      "note": "Functions group reusable blocks of code.",
      "code": "def greet(name):\n    return f'Hello, {name}'\nprint(greet('Alice'))"
    },
    {
      "title": "Python Lambda",
      "note": "Lambda functions are small, anonymous functions.",
      "code": "square = lambda x: x * x\nprint(square(4))"
    },
    {
      "title": "Python Arrays",
      "note": "Arrays store multiple items of the same type (use list or array module).",
      "code": "import array as arr\nnums = arr.array('i', [1, 2, 3])"
    },
    {
      "title": "Python OOP",
      "note": "Object-Oriented Programming uses classes and objects.",
      "code": "class Car:\n    def __init__(self, brand):\n        self.brand = brand\nmycar = Car('Toyota')"
    },
    {
      "title": "Python Classes/Objects",
      "note": "Classes define blueprints for objects.",
      "code": "class Person:\n    def __init__(self, name):\n        self.name = name\np1 = Person('Alice')"
    },
    {
      "title": "Python Inheritance",
      "note": "Inheritance allows classes to inherit attributes and methods from another class.",
      "code": "class Animal:\n    def speak(self):\n        print('Sound')\nclass Dog(Animal):\n    pass"
    },
    {
      "title": "Python Iterators",
      "note": "Iterators are objects that can be iterated one element at a time.",
      "code": "nums = [1, 2, 3]\nmyit = iter(nums)\nprint(next(myit))"
    },
    {
      "title": "Python Polymorphism",
      "note": "Polymorphism allows the same method to have different behavior depending on the object.",
      "code": "class Bird:\n    def sound(self):\n        print('Chirp')\nclass Dog:\n    def sound(self):\n        print('Bark')"
    },
    {
      "title": "Python Scope",
      "note": "Scope determines where variables can be accessed in code.",
      "code": "x = 'global'\ndef test():\n    x = 'local'\n    print(x)"
    },
    {
      "title": "Python Modules",
      "note": "Modules are files containing Python code, which can be imported into other programs.",
      "code": "# mymodule.py\ndef greet():\n    print('Hello')\n\n# main.py\nimport mymodule\nmymodule.greet()"
    },
    {
      "title": "Python Dates",
      "note": "The datetime module works with dates and times.",
      "code": "import datetime\nnow = datetime.datetime.now()\nprint(now)"
    },
    {
      "title": "Python Math",
      "note": "The math module provides mathematical functions.",
      "code": "import math\nprint(math.sqrt(16))"
    },
    {
      "title": "Python JSON",
      "note": "The json module parses JSON strings and converts Python objects to JSON.",
      "code": "import json\ndata = {'name': 'Alice'}\njson_str = json.dumps(data)"
    },
    {
      "title": "Python RegEx",
      "note": "Regular expressions allow for pattern matching in strings.",
      "code": "import re\nmatch = re.search(r'\\d+', 'abc123')\nprint(match.group())"
    },
    {
      "title": "Python PIP",
      "note": "PIP is the package installer for Python.",
      "code": "# Install requests package\npip install requests"
    },
    {
      "title": "Python Try...Except",
      "note": "Used to handle exceptions and prevent program crashes.",
      "code": "try:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
    },
    {
      "title": "Python String Formatting",
      "note": "Format strings using f-strings, format(), or % operator.",
      "code": "name = 'Alice'\nprint(f'Hello {name}')"
    },
    {
      "title": "Python User Input",
      "note": "Get input from the user using input().",
      "code": "name = input('Enter your name: ')\nprint('Hello', name)"
    },
    {
      "title": "Python VirtualEnv",
      "note": "Virtual environments isolate project dependencies.",
      "code": "python -m venv myenv\nsource myenv/bin/activate"
    },
    {
      "title": "Python File Handling",
      "note": "Work with files to read, write, and manipulate data.",
      "code": "f = open('data.txt', 'r')\nprint(f.read())\nf.close()"
    },
    {
      "title": "Python Read Files",
      "note": "Read the contents of a file in different ways.",
      "code": "with open('data.txt', 'r') as f:\n    print(f.read())"
    },
    {
      "title": "Python Write/Create Files",
      "note": "Write to a file or create a new one if it doesn't exist.",
      "code": "with open('data.txt', 'w') as f:\n    f.write('Hello, World!')"
    },
    {
      "title": "Python Delete Files",
      "note": "Delete a file using the os module.",
      "code": "import os\nif os.path.exists('data.txt'):\n    os.remove('data.txt')"
    }
  ],
  Java: [
    {
      "title": "Java HOME",
      "note": "Main starting point for Java resources and documentation.",
      "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Welcome to Java!\");\n    }\n}"
    },
    {
      "title": "Java Intro",
      "note": "Java is a high-level, class-based, object-oriented programming language.",
      "code": "System.out.println(\"Hello, Java!\");"
    },
    {
      "title": "Java Get Started",
      "note": "Install JDK, write your first Java program, and run it using javac and java commands.",
      "code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
    },
    {
      "title": "Java Syntax",
      "note": "Java syntax is similar to C/C++ with strict rules on semicolons and braces.",
      "code": "int number = 5;\nif (number > 0) {\n    System.out.println(\"Positive number\");\n}"
    },
    {
      "title": "Java Output",
      "note": "Use System.out.println() to print output to the console.",
      "code": "System.out.println(\"Hello, output!\");"
    },
    {
      "title": "Java Comments",
      "note": "Single-line comments use //, multi-line comments use /* ... */.",
      "code": "// This is a single-line comment\n/* This is a\n   multi-line comment */"
    },
    {
      "title": "Java Variables",
      "note": "Variables store data values with a declared type.",
      "code": "int age = 25;\nString name = \"Alice\";"
    },
    {
      "title": "Java Data Types",
      "note": "Java has primitive types (int, double, boolean, etc.) and reference types (objects).",
      "code": "int x = 10;\ndouble pi = 3.14;\nboolean isTrue = false;"
    },
    {
      "title": "Java Type Casting",
      "note": "Convert data types explicitly or implicitly.",
      "code": "int x = (int) 3.14; // explicit\ndouble y = 10;     // implicit"
    },
    {
      "title": "Java Operators",
      "note": "Operators perform arithmetic, comparison, logical operations.",
      "code": "int sum = 5 + 3;\nboolean result = (5 > 3) && (2 < 4);"
    },
    {
      "title": "Java Strings",
      "note": "Strings are objects representing sequences of characters.",
      "code": "String greeting = \"Hello\";\nSystem.out.println(greeting.toUpperCase());"
    },
    {
      "title": "Java Math",
      "note": "Java Math class provides basic math functions.",
      "code": "int absVal = Math.abs(-10);\ndouble sqrtVal = Math.sqrt(16);"
    },
    {
      "title": "Java Booleans",
      "note": "Boolean type stores true or false.",
      "code": "boolean isActive = true;\nboolean isDone = false;"
    },
    {
      "title": "Java If...Else",
      "note": "Conditional statements to run code blocks based on conditions.",
      "code": "if (age >= 18) {\n    System.out.println(\"Adult\");\n} else {\n    System.out.println(\"Minor\");\n}"
    },
    {
      "title": "Java Switch",
      "note": "Select one of many code blocks to run based on a value.",
      "code": "switch(day) {\n  case 1:\n    System.out.println(\"Monday\");\n    break;\n  default:\n    System.out.println(\"Other day\");\n}"
    },
    {
      "title": "Java While Loop",
      "note": "Repeats a block while condition is true.",
      "code": "int i = 0;\nwhile (i < 5) {\n    System.out.println(i);\n    i++;\n}"
    },
    {
      "title": "Java For Loop",
      "note": "Iterate a set number of times.",
      "code": "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}"
    },
    {
      "title": "Java Break/Continue",
      "note": "'break' exits a loop; 'continue' skips to next iteration.",
      "code": "for (int i=0; i<5; i++) {\n  if (i==3) break;\n  if (i==1) continue;\n  System.out.println(i);\n}"
    },
    {
      "title": "Java Arrays",
      "note": "Arrays store fixed-size collections of elements of the same type.",
      "code": "int[] numbers = {1, 2, 3, 4};\nSystem.out.println(numbers[0]);"
    },
    {
      "title": "Java Methods",
      "note": "Blocks of code that perform a specific task and can be called by name.",
      "code": "public void greet() {\n    System.out.println(\"Hello from method!\");\n}"
    },
    {
      "title": "Java Method Parameters",
      "note": "Methods can accept inputs called parameters to work with.",
      "code": "public int add(int a, int b) {\n    return a + b;\n}"
    },
    {
      "title": "Java Method Overloading",
      "note": "Same method name with different parameters for different behaviors.",
      "code": "public int add(int a, int b) { return a + b; }\npublic double add(double a, double b) { return a + b; }"
    },
    {
      "title": "Java Scope",
      "note": "Defines where variables and methods are accessible within the program.",
      "code": "{\n  int x = 5; // local to this block\n}\n// x not accessible here"
    },
    {
      "title": "Java Recursion",
      "note": "A method calling itself to solve a problem in smaller steps.",
      "code": "public int factorial(int n) {\n  if (n <= 1) return 1;\n  else return n * factorial(n - 1);\n}"
    },
    {
      "title": "Java Classes",
      "note": "Blueprints for creating objects that encapsulate data and behavior.",
      "code": "public class Car {\n    String model;\n    int year;\n}"
    },
    {
      "title": "Java OOP",
      "note": "Object-Oriented Programming concepts including encapsulation, inheritance, and polymorphism.",
      "code": "// Example: Creating an object\nCar myCar = new Car();"
    },
    {
      "title": "Java Classes/Objects",
      "note": "Classes define objects; objects are instances of classes.",
      "code": "Car myCar = new Car();\nmyCar.model = \"Toyota\";"
    },
    {
      "title": "Java Class Attributes",
      "note": "Variables that hold data inside a class.",
      "code": "public class Person {\n    String name;\n    int age;\n}"
    },
    {
      "title": "Java Class Methods",
      "note": "Functions defined inside classes to perform actions.",
      "code": "public class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}"
    },
    {
      "title": "Java Constructors",
      "note": "Special methods to initialize objects when they are created.",
      "code": "public class Person {\n    String name;\n    Person(String name) {\n        this.name = name;\n    }\n}"
    },
    {
      "title": "Java this Keyword",
      "note": "Refers to the current object instance.",
      "code": "this.name = name; // Assign parameter to instance variable"
    },
    {
      "title": "Java Modifiers",
      "note": "Keywords that set access levels and behavior, like public, private, static.",
      "code": "private int age;\npublic static final double PI = 3.14159;"
    },
    {
      "title": "Java Encapsulation",
      "note": "Hiding data by making attributes private and providing public getters/setters.",
      "code": "private String name;\npublic String getName() { return name; }\npublic void setName(String n) { name = n; }"
    },
    {
      "title": "Java Packages / API",
      "note": "Packages group related classes; APIs provide reusable functions.",
      "code": "import java.util.ArrayList;\nArrayList<String> list = new ArrayList<>();"
    },
    {
      "title": "Java Inheritance",
      "note": "A class can inherit fields and methods from another class.",
      "code": "public class Dog extends Animal {\n    public void bark() {\n        System.out.println(\"Woof!\");\n    }\n}"
    },
    {
      "title": "Java Polymorphism",
      "note": "Methods can have different behaviors based on the object’s class.",
      "code": "Animal a = new Dog();\na.makeSound(); // Calls Dog’s version"
    },
    {
      "title": "Java super Keyword",
      "note": "Refers to the parent class and is used to call parent constructors or methods.",
      "code": "super(); // Calls parent class constructor"
    },
    {
      "title": "Java Inner Classes",
      "note": "Classes defined inside other classes, used to logically group classes.",
      "code": "class Outer {\n    class Inner {\n        void display() { System.out.println(\"Inner class\"); }\n    }\n}"
    },
    {
      "title": "Java Abstraction",
      "note": "Hiding complex details by using abstract classes or interfaces.",
      "code": "abstract class Animal {\n    abstract void sound();\n}"
    },
    {
      "title": "Java Interface",
      "note": "Defines methods that classes can implement, enabling multiple inheritance.",
      "code": "interface Movable {\n    void move();\n}\nclass Car implements Movable {\n    public void move() { System.out.println(\"Car moves\"); }\n}"
    },
    {
      "title": "Java Enums",
      "note": "Special classes representing fixed sets of constants.",
      "code": "enum Day { MONDAY, TUESDAY, WEDNESDAY }"
    },
    {
      "title": "Java User Input",
      "note": "Read input from the user via the Scanner class.",
      "code": "import java.util.Scanner;\nScanner sc = new Scanner(System.in);\nString name = sc.nextLine();"
    },
    {
      "title": "Java Date",
      "note": "Work with dates and times using java.util.Date or java.time classes.",
      "code": "import java.util.Date;\nDate now = new Date();\nSystem.out.println(now);"
    },
    {
      "title": "Java Errors",
      "note": "Problems in code that prevent normal execution; often caused by syntax or runtime issues.",
      "code": "// Example: ArrayIndexOutOfBoundsException\nint[] arr = new int[3];\narr[5] = 10; // Error"
    },
    {
      "title": "Java Debugging",
      "note": "Process of finding and fixing bugs using tools like IDE debuggers or print statements.",
      "code": "System.out.println(\"Debug info: variable x = \" + x);"
    },
    {
      "title": "Java Exceptions",
      "note": "Events that disrupt normal flow; handled with try-catch blocks to prevent program crashes.",
      "code": "try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero!\");\n}"
    },
    {
      "title": "Java File Handling",
      "note": "Work with files to read, write, and manipulate data using Java IO classes.",
      "code": "import java.io.*;\n\nFile file = new File(\"data.txt\");"
    },
    {
      "title": "Java Files",
      "note": "Represent files and directory pathnames using the File class.",
      "code": "File file = new File(\"data.txt\");\nif(file.exists()) {\n    System.out.println(\"File exists\");\n}"
    },
    {
      "title": "Java Create/Write Files",
      "note": "Create new files and write text data using FileWriter or BufferedWriter.",
      "code": "try (FileWriter writer = new FileWriter(\"data.txt\")) {\n    writer.write(\"Hello, World!\");\n} catch (IOException e) {\n    e.printStackTrace();\n}"
    },
    {
      "title": "Java Read Files",
      "note": "Read contents of a file using FileReader or BufferedReader.",
      "code": "try (BufferedReader reader = new BufferedReader(new FileReader(\"data.txt\"))) {\n    String line;\n    while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n    }\n} catch (IOException e) {\n    e.printStackTrace();\n}"
    },
    {
      "title": "Java Delete Files",
      "note": "Delete a file using the File class's delete() method.",
      "code": "File file = new File(\"data.txt\");\nif (file.delete()) {\n    System.out.println(\"File deleted successfully\");\n} else {\n    System.out.println(\"Failed to delete the file\");\n}"
    },
    {
      "title": "Java Data Structures",
      "note": "Learn various ways to store and organize data efficiently.",
      "code": "// Example: Using an array\nint[] numbers = {1, 2, 3, 4};"
    },
    {
      "title": "Java Collections",
      "note": "Framework that provides interfaces and classes for collections like lists, sets, and maps.",
      "code": "import java.util.*;\nList<String> list = new ArrayList<>();"
    },
    {
      "title": "Java List",
      "note": "An ordered collection (sequence) that allows duplicates.",
      "code": "List<String> fruits = new ArrayList<>();\nfruits.add(\"Apple\");"
    },
    {
      "title": "Java ArrayList",
      "note": "Resizable-array implementation of the List interface.",
      "code": "ArrayList<Integer> numbers = new ArrayList<>();\nnumbers.add(10);"
    },
    {
      "title": "Java LinkedList",
      "note": "Doubly-linked list implementation of List and Deque interfaces.",
      "code": "LinkedList<String> names = new LinkedList<>();\nnames.add(\"Alice\");"
    },
    {
      "title": "Java List Sorting",
      "note": "Sort lists using Collections.sort() or custom comparators.",
      "code": "Collections.sort(fruits);\n// For custom sort: Collections.sort(list, Comparator);"
    },
    {
      "title": "Java Set",
      "note": "Collection that contains no duplicate elements.",
      "code": "Set<String> set = new HashSet<>();\nset.add(\"Java\");"
    },
    {
      "title": "Java HashSet",
      "note": "Hash table based implementation of Set with no ordering guarantee.",
      "code": "HashSet<Integer> numbers = new HashSet<>();\nnumbers.add(1);"
    },
    {
      "title": "Java TreeSet",
      "note": "Sorted set implementation backed by a TreeMap.",
      "code": "TreeSet<String> sortedSet = new TreeSet<>();\nsortedSet.add(\"B\");"
    },
    {
      "title": "Java LinkedHashSet",
      "note": "Hash table and linked list implementation of Set with predictable iteration order.",
      "code": "LinkedHashSet<String> linkedSet = new LinkedHashSet<>();"
    },
    {
      "title": "Java Map",
      "note": "Object that maps keys to values; keys are unique.",
      "code": "Map<Integer, String> map = new HashMap<>();"
    },
    {
      "title": "Java HashMap",
      "note": "Hash table based implementation of Map interface.",
      "code": "HashMap<String, Integer> map = new HashMap<>();\nmap.put(\"One\", 1);"
    },
    {
      "title": "Java TreeMap",
      "note": "Sorted map implementation based on Red-Black tree.",
      "code": "TreeMap<Integer, String> treeMap = new TreeMap<>();"
    },
    {
      "title": "Java LinkedHashMap",
      "note": "Hash table and linked list implementation of Map with predictable iteration order.",
      "code": "LinkedHashMap<String, String> linkedMap = new LinkedHashMap<>();"
    },
    {
      "title": "Java Iterator",
      "note": "Interface to iterate over collections.",
      "code": "Iterator<String> it = list.iterator();\nwhile(it.hasNext()) {\n    System.out.println(it.next());\n}"
    },
    {
      "title": "Java Wrapper Classes",
      "note": "Object representation of primitive data types, allowing them to be used as objects.",
      "code": "Integer num = Integer.valueOf(10);\nDouble pi = Double.valueOf(3.14);"
    },
    {
      "title": "Java Generics",
      "note": "Enable classes, interfaces, and methods to operate on types specified by the programmer.",
      "code": "List<String> list = new ArrayList<>();"
    },
    {
      "title": "Java Annotations",
      "note": "Provide metadata to Java code for use by the compiler or runtime.",
      "code": "@Override\npublic String toString() { return \"example\"; }"
    },
    {
      "title": "Java RegEx",
      "note": "Use regular expressions for pattern matching and text manipulation.",
      "code": "import java.util.regex.*;\nPattern p = Pattern.compile(\"a*b\");"
    },
    {
      "title": "Java Threads",
      "note": "Execute code concurrently using threads for parallelism and performance.",
      "code": "Thread t = new Thread(() -> System.out.println(\"Running in thread\"));\nt.start();"
    },
    {
      "title": "Java Lambda",
      "note": "Short blocks of code which take parameters and return a value, used mainly for functional programming.",
      "code": "Runnable r = () -> System.out.println(\"Lambda expression\");"
    },
    {
      "title": "Java Advanced Sorting",
      "note": "Use Comparator and Comparable interfaces for custom object sorting.",
      "code": "Collections.sort(list, (a, b) -> a.length() - b.length());"
    },
    {
      "title": "Add Two Numbers",
      "note": "Simple method to add two integers.",
      "code": "public int add(int a, int b) {\n    return a + b;\n}"
    },
    {
      "title": "Count Words",
      "note": "Count the number of words in a string.",
      "code": "String s = \"Hello world\";\nint count = s.split(\"\\\\s+\").length;"
    },
    {
      "title": "Reverse a String",
      "note": "Reverse characters in a string.",
      "code": "String reversed = new StringBuilder(s).reverse().toString();"
    },
    {
      "title": "Sum of Array Elements",
      "note": "Calculate the sum of integers in an array.",
      "code": "int sum = 0;\nfor(int num : arr) sum += num;"
    },
    {
      "title": "Convert String to Array",
      "note": "Convert a string into an array of characters.",
      "code": "char[] chars = s.toCharArray();"
    },
    {
      "title": "Sort an Array",
      "note": "Sort elements of an integer array in ascending order.",
      "code": "Arrays.sort(arr);"
    },
    {
      "title": "Find Array Average",
      "note": "Calculate the average value of array elements.",
      "code": "double avg = (double) sum / arr.length;"
    },
    {
      "title": "Find Smallest Element",
      "note": "Find the smallest number in an integer array.",
      "code": "int min = Arrays.stream(arr).min().getAsInt();"
    },
    {
      "title": "ArrayList Loop",
      "note": "Iterate over elements in an ArrayList.",
      "code": "for(String item : list) {\n    System.out.println(item);\n}"
    },
    {
      "title": "HashMap Loop",
      "note": "Iterate over entries in a HashMap.",
      "code": "for(Map.Entry<Key, Value> entry : map.entrySet()) {\n    System.out.println(entry.getKey() + \": \" + entry.getValue());\n}"
    },
    {
      "title": "Loop Through an Enum",
      "note": "Iterate over all constants in an enum.",
      "code": "for(Day d : Day.values()) {\n    System.out.println(d);\n}"
    },
    {
      "title": "Area of Rectangle",
      "note": "Calculate area given width and height.",
      "code": "int area = width * height;"
    },
    {
      "title": "Even or Odd Number",
      "note": "Check if a number is even or odd.",
      "code": "if(num % 2 == 0) {\n    System.out.println(\"Even\");\n} else {\n    System.out.println(\"Odd\");\n}"
    },
    {
      "title": "Positive or Negative",
      "note": "Check if a number is positive, negative, or zero.",
      "code": "if(num > 0) System.out.println(\"Positive\");\nelse if(num < 0) System.out.println(\"Negative\");\nelse System.out.println(\"Zero\");"
    },
    {
      "title": "Square Root",
      "note": "Calculate the square root of a number using Math class.",
      "code": "double root = Math.sqrt(num);"
    },
    {
      "title": "Random Number",
      "note": "Generate a random integer within a range.",
      "code": "int rand = new Random().nextInt(100); // 0-99"
    },
    {
      "title": "Java Reference",
      "note": "Comprehensive overview of Java language and features.",
      "code": "// Reference material for Java programming"
    },
    {
      "title": "Java Keywords",
      "note": "Reserved words with special meaning in Java.",
      "code": "abstract, boolean, break, class, final, for, if, new, public, static, void, while, etc."
    },
    {
      "title": "Java String Methods",
      "note": "Common methods to manipulate strings like length(), substring(), and equals().",
      "code": "String s = \"Hello\";\ns.length();\ns.substring(1, 3);"
    },
    {
      "title": "Java Math Methods",
      "note": "Methods for mathematical operations like sqrt(), pow(), and random().",
      "code": "Math.sqrt(16);\nMath.pow(2, 3);"
    },
    {
      "title": "Java Output Methods",
      "note": "Print output to console using System.out methods.",
      "code": "System.out.println(\"Hello World\");"
    },
    {
      "title": "Java Arrays Methods",
      "note": "Utility methods for arrays like sort() and binarySearch().",
      "code": "Arrays.sort(arr);\nint index = Arrays.binarySearch(arr, 5);"
    },
    {
      "title": "Java ArrayList Methods",
      "note": "Common ArrayList operations like add(), remove(), and size().",
      "code": "list.add(\"item\");\nlist.remove(0);"
    },
    {
      "title": "Java LinkedList Methods",
      "note": "LinkedList operations like addFirst(), addLast(), and get().",
      "code": "linkedList.addFirst(\"start\");"
    },
    {
      "title": "Java HashMap Methods",
      "note": "Operations on HashMap like put(), get(), and containsKey().",
      "code": "map.put(\"key\", \"value\");\nmap.get(\"key\");"
    },
    {
      "title": "Java Scanner Methods",
      "note": "Methods to read user input such as nextInt(), nextLine().",
      "code": "Scanner sc = new Scanner(System.in);\nint num = sc.nextInt();"
    },
    {
      "title": "Java Iterator Methods",
      "note": "Methods to traverse collections with Iterator interface.",
      "code": "Iterator<String> it = list.iterator();\nwhile(it.hasNext()) {\n    System.out.println(it.next());\n}"
    },
    {
      "title": "Java Errors & Exceptions",
      "note": "Common exceptions and error handling techniques in Java.",
      "code": "try {\n    // code\n} catch (Exception e) {\n    e.printStackTrace();\n}"
    },
    {
      "title": "Java Examples",
      "note": "Sample Java programs demonstrating key concepts.",
      "code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
    },
    {
      "title": "Java Compiler",
      "note": "Use javac to compile Java source files.",
      "code": "javac HelloWorld.java"
    },
    {
      "title": "Java Exercises",
      "note": "Practice problems to improve Java skills.",
      "code": "// Implement factorial, Fibonacci, etc."
    },
    {
      "title": "Java Quiz",
      "note": "Test your knowledge with Java quizzes.",
      "code": "// Multiple choice and coding quizzes"
    },
    {
      "title": "Java Server",
      "note": "Basic setup of Java server applications.",
      "code": "// Example using Java Servlets or Spring Boot"
    },
    {
      "title": "Java Syllabus",
      "note": "Structured learning path for Java programming.",
      "code": "// Topics and timeline for study"
    },
    {
      "title": "Java Study Plan",
      "note": "Organized plan to learn Java step-by-step.",
      "code": "// Daily or weekly goals"
    },
    {
      "title": "Java Certificate",
      "note": "Earn certifications to validate Java skills.",
      "code": "// Oracle Java Certifications info"
    }
  ],
  php: [
    {
      "title": "PHP Intro",
      "note": "PHP is a popular server-side scripting language designed for web development.",
      "code": "<?php\n// Hello World example\necho 'Hello, PHP!';\n?>"
    },
    {
      "title": "PHP Install",
      "note": "Install PHP on your system or use a web server like XAMPP, WAMP, or LAMP.",
      "code": "// Check PHP version\nphp -v"
    },
    {
      "title": "PHP Syntax",
      "note": "PHP scripts are enclosed in <?php ... ?> tags and end statements with a semicolon.",
      "code": "<?php\necho 'PHP syntax example';\n?>"
    },
    {
      "title": "PHP Comments",
      "note": "Use //, # for single-line and /* ... */ for multi-line comments.",
      "code": "<?php\n// This is a comment\n# Another comment\n/* Multi-line\ncomment */\n?>"
    },
    {
      "title": "PHP Variables",
      "note": "Variables start with $ and are case-sensitive.",
      "code": "<?php\n$name = 'Alice';\nage = 25;\necho $name;\n?>"
    },
    {
      "title": "PHP Echo / Print",
      "note": "Echo and print output strings or variables to the browser.",
      "code": "<?php\necho 'Hello World';\nprint 'Welcome to PHP';\n?>"
    },
    {
      "title": "PHP Data Types",
      "note": "Common data types include string, integer, float, boolean, array, object, and NULL.",
      "code": "<?php\n$number = 123;\n$text = 'Sample text';\n$isActive = true;\n?>"
    },
    {
      "title": "PHP Strings",
      "note": "Strings can be enclosed in single or double quotes and support concatenation with the dot operator.",
      "code": "<?php\n$greeting = 'Hello';\n$name = 'World';\necho $greeting . ' ' . $name;\n?>"
    },
    {
      "title": "PHP Numbers",
      "note": "Handle integers and floating-point numbers.",
      "code": "<?php\n$intNum = 10;\n$floatNum = 3.14;\n?>"
    },
    {
      "title": "PHP Casting",
      "note": "Convert between data types using casting.",
      "code": "<?php\n$number = (int) '123';\n$string = (string) 456;\n?>"
    },
    {
      "title": "PHP Math",
      "note": "Use built-in math functions like abs(), round(), sqrt(), and pow().",
      "code": "<?php\necho sqrt(16); // 4\n?>"
    },
    {
      "title": "PHP Constants",
      "note": "Define constant values using define() or const.",
      "code": "<?php\ndefine('PI', 3.1416);\necho PI;\n?>"
    },
    {
      "title": "PHP Magic Constants",
      "note": "Predefined constants like __FILE__, __LINE__, and __DIR__ provide script info.",
      "code": "<?php\necho __FILE__;\n?>"
    },
    {
      "title": "PHP Operators",
      "note": "Perform arithmetic, comparison, logical, and assignment operations.",
      "code": "<?php\n$a = 5 + 3;\nif($a > 7 && $a < 10) { echo 'Yes'; }\n?>"
    },
    {
      "title": "PHP If...Else...Elseif",
      "note": "Control code flow with conditional statements.",
      "code": "<?php\nif($a > 10) {\n  echo 'Greater';\n} elseif($a == 10) {\n  echo 'Equal';\n} else {\n  echo 'Smaller';\n}\n?>"
    },
    {
      "title": "PHP Switch",
      "note": "Select one of many blocks of code to execute.",
      "code": "<?php\nswitch($color) {\n  case 'red':\n    echo 'Red';\n    break;\n  default:\n    echo 'Other';\n}\n?>"
    },
    {
      "title": "PHP Loops",
      "note": "Use for, while, and foreach loops to repeat code.",
      "code": "<?php\nfor($i=0; $i<5; $i++) {\n  echo $i;\n}\n?>"
    },
    {
      "title": "PHP Functions",
      "note": "Group reusable code into functions.",
      "code": "<?php\nfunction greet($name) {\n  return 'Hello ' . $name;\n}\necho greet('Alice');\n?>"
    },
    {
      "title": "PHP Arrays",
      "note": "Store multiple values in indexed or associative arrays.",
      "code": "<?php\n$colors = array('Red', 'Green', 'Blue');\necho $colors[0];\n?>"
    },
    {
      "title": "PHP Superglobals",
      "note": "Predefined variables like $_GET, $_POST, $_SESSION for global data access.",
      "code": "<?php\necho $_SERVER['PHP_SELF'];\n?>"
    },
    {
      "title": "PHP RegEx",
      "note": "Use preg_match and preg_replace for pattern matching.",
      "code": "<?php\nif(preg_match('/^a/', 'apple')) {\n  echo 'Match';\n}\n?>"
    },
    {
      "title": "PHP Forms",
      "note": "Create HTML forms and collect user input with PHP.",
      "code": "<form method='post'>\n  Name: <input type='text' name='name'>\n  <input type='submit'>\n</form>"
    },
    {
      "title": "PHP Form Handling",
      "note": "Process submitted form data using $_POST or $_GET superglobals.",
      "code": "<?php\n$name = $_POST['name'] ?? '';\necho 'Hello ' . htmlspecialchars($name);\n?>"
    },
    {
      "title": "PHP Form Validation",
      "note": "Validate user input to ensure it meets requirements.",
      "code": "<?php\nif(empty($_POST['email'])) {\n  echo 'Email is required';\n}\n?>"
    },
    {
      "title": "PHP Form Required",
      "note": "Mark fields as required to prevent empty submissions.",
      "code": "<input type='text' name='username' required>"
    },
    {
      "title": "PHP Form URL/E-mail",
      "note": "Validate URLs and email addresses using filter_var().",
      "code": "<?php\nif(filter_var($email, FILTER_VALIDATE_EMAIL)) {\n  echo 'Valid email';\n}\n?>"
    },
    {
      "title": "PHP Form Complete",
      "note": "Combine form creation, submission, and validation.",
      "code": "// Combine all form handling and validation logic"
    },
    {
      "title": "PHP Date and Time",
      "note": "Work with dates and times using date(), time(), and DateTime class.",
      "code": "<?php\necho date('Y-m-d H:i:s');\n?>"
    },
    {
      "title": "PHP Include",
      "note": "Include and reuse PHP files using include and require.",
      "code": "<?php include 'header.php'; ?>"
    },
    {
      "title": "PHP File Handling",
      "note": "Open, read, write, and close files with PHP functions.",
      "code": "<?php\n$file = fopen('file.txt', 'r');\necho fread($file, filesize('file.txt'));\nfclose($file);\n?>"
    },
    {
      "title": "PHP File Open/Read",
      "note": "Open and read contents from a file.",
      "code": "<?php\n$content = file_get_contents('file.txt');\necho $content;\n?>"
    },
    {
      "title": "PHP File Create/Write",
      "note": "Create or overwrite files with file_put_contents().",
      "code": "<?php\nfile_put_contents('file.txt', 'Hello World');\n?>"
    },
    {
      "title": "PHP File Upload",
      "note": "Upload files from users via forms and handle on server.",
      "code": "<?php\nmove_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);\n?>"
    },
    {
      "title": "PHP Cookies",
      "note": "Store small pieces of data in the user's browser.",
      "code": "<?php\nsetcookie('user', 'Alice', time() + 3600);\n?>"
    },
    {
      "title": "PHP Sessions",
      "note": "Maintain user state using sessions across pages.",
      "code": "<?php\nsession_start();\n$_SESSION['username'] = 'Alice';\n?>"
    },
    {
      "title": "PHP Filters",
      "note": "Sanitize and validate data with filter functions.",
      "code": "<?php\n$email = filter_var($email, FILTER_SANITIZE_EMAIL);\n?>"
    },
    {
      "title": "PHP Filters Advanced",
      "note": "Use options and flags for advanced filtering.",
      "code": "<?php\nfilter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED);\n?>"
    },
    {
      "title": "PHP Callback Functions",
      "note": "Functions passed as parameters to other functions.",
      "code": "<?php\nfunction callFunc($func) {\n  $func();\n}\ncallFunc(function() { echo 'Callback!'; });\n?>"
    },
    {
      "title": "PHP JSON",
      "note": "Encode and decode JSON data for API interaction.",
      "code": "<?php\n$json = json_encode(['name' => 'Alice']);\n$data = json_decode($json, true);\n?>"
    },
    {
      "title": "PHP Exceptions",
      "note": "Handle runtime errors using try-catch blocks.",
      "code": "<?php\ntry {\n  throw new Exception('Error occurred');\n} catch (Exception $e) {\n  echo $e->getMessage();\n}\n?>"
    },
    {
      "title": "PHP What is OOP",
      "note": "Object-oriented programming allows modeling using classes and objects.",
      "code": "<?php\nclass Person {\n  public $name;\n  function __construct($name) {\n    $this->name = $name;\n  }\n}\n?>"
    },
    {
      "title": "PHP Classes/Objects",
      "note": "Create and use classes and objects in PHP.",
      "code": "<?php\n$person = new Person('Alice');\necho $person->name;\n?>"
    },
    {
      "title": "PHP Constructor",
      "note": "Special method called when creating an object.",
      "code": "<?php\nfunction __construct() {\n  // initialization code\n}\n?>"
    },
    {
      "title": "PHP Destructor",
      "note": "Method called when an object is destroyed.",
      "code": "<?php\nfunction __destruct() {\n  // cleanup code\n}\n?>"
    },
    {
      "title": "PHP Access Modifiers",
      "note": "Control visibility with public, private, and protected.",
      "code": "<?php\npublic \$name;\nprivate \$id;\n?>"
    },
    {
      "title": "PHP Inheritance",
      "note": "Create child classes that inherit from parent classes.",
      "code": "<?php\nclass Child extends Parent {}\n?>"
    },
    {
      "title": "PHP Abstract Classes",
      "note": "Classes with abstract methods that must be implemented by subclasses.",
      "code": "<?php\nabstract class Animal {\n  abstract function sound();\n}\n?>"
    },
    {
      "title": "PHP Interfaces",
      "note": "Define methods that implementing classes must include.",
      "code": "<?php\ninterface Logger {\n  public function log(\$msg);\n}\n?>"
    },
    {
      "title": "PHP Traits",
      "note": "Reuse methods in multiple classes with traits.",
      "code": "<?php\ntrait LoggerTrait {\n  public function log(\$msg) { echo \$msg; }\n}\n?>"
    },
    {
      "title": "PHP Static Methods",
      "note": "Methods that can be called without creating an object.",
      "code": "<?php\nclass Math {\n  public static function add(\$a, \$b) { return \$a + \$b; }\n}\necho Math::add(5, 3);\n?>"
    },
    {
      "title": "PHP Static Properties",
      "note": "Properties shared by all instances of a class.",
      "code": "<?php\nclass Counter {\n  public static \$count = 0;\n}\n?>"
    },
    {
      "title": "PHP Namespaces",
      "note": "Organize code and avoid name collisions using namespaces.",
      "code": "<?php\nnamespace MyProject;\n?>"
    },
    {
      "title": "PHP Iterables",
      "note": "Use iterable types for foreach loops and generators.",
      "code": "<?php\nfunction gen() {\n  yield 1;\n  yield 2;\n}\nforeach(gen() as \$val) {\n  echo \$val;\n}\n?>"
    },
    {
      "title": "MySQL Database",
      "note": "Manage MySQL databases with PHP for dynamic content.",
      "code": "// Connect using mysqli or PDO"
    },
    {
      "title": "MySQL Connect",
      "note": "Connect to MySQL database using mysqli or PDO.",
      "code": "<?php\n$conn = new mysqli('localhost', 'user', 'pass', 'db');\n?>"
    },
    {
      "title": "MySQL Create DB",
      "note": "Create a new database using SQL query.",
      "code": "<?php\n$conn->query('CREATE DATABASE mydb');\n?>"
    },
    {
      "title": "MySQL Create Table",
      "note": "Create tables inside databases.",
      "code": "<?php\n$sql = 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100))';\n$conn->query($sql);\n?>"
    },
    {
      "title": "MySQL Insert Data",
      "note": "Insert rows into a database table.",
      "code": "<?php\n$conn->query(\"INSERT INTO users (name) VALUES ('Alice')\");\n?>"
    },
    {
      "title": "MySQL Get Last ID",
      "note": "Retrieve last inserted ID.",
      "code": "<?php\n$last_id = $conn->insert_id;\n?>"
    },
    {
      "title": "MySQL Insert Multiple",
      "note": "Insert multiple rows with one query.",
      "code": "<?php\n$sql = \"INSERT INTO users (name) VALUES ('Bob'), ('Carol')\";\n$conn->query($sql);\n?>"
    },
    {
      "title": "MySQL Prepared",
      "note": "Use prepared statements to prevent SQL injection.",
      "code": "<?php\n$stmt = $conn->prepare('INSERT INTO users (name) VALUES (?)');\n$stmt->bind_param('s', $name);\n$stmt->execute();\n?>"
    },
    {
      "title": "MySQL Select Data",
      "note": "Retrieve data from tables using SELECT queries.",
      "code": "<?php\n$result = $conn->query('SELECT * FROM users');\nwhile($row = $result->fetch_assoc()) {\n  echo $row['name'];\n}\n?>"
    },
    {
      "title": "MySQL Where",
      "note": "Filter results with WHERE clause.",
      "code": "<?php\n$result = $conn->query(\"SELECT * FROM users WHERE id = 1\");\n?>"
    },
    {
      "title": "MySQL Order By",
      "note": "Sort results with ORDER BY.",
      "code": "<?php\n$result = $conn->query(\"SELECT * FROM users ORDER BY name ASC\");\n?>"
    },
    {
      "title": "MySQL Delete Data",
      "note": "Delete rows from tables.",
      "code": "<?php\n$conn->query(\"DELETE FROM users WHERE id = 1\");\n?>"
    },
    {
      "title": "MySQL Update Data",
      "note": "Update existing rows.",
      "code": "<?php\n$conn->query(\"UPDATE users SET name = 'Dave' WHERE id = 2\");\n?>"
    },
    {
      "title": "MySQL Limit Data",
      "note": "Limit the number of returned rows.",
      "code": "<?php\n$result = $conn->query(\"SELECT * FROM users LIMIT 10\");\n?>"
    },
    {
      "title": "PHP XML Parsers",
      "note": "Parse XML data using built-in PHP parsers.",
      "code": "// Use SimpleXML or XMLReader"
    },
    {
      "title": "PHP SimpleXML Parser",
      "note": "Simple interface to read XML files.",
      "code": "<?php\n$xml = simplexml_load_file('file.xml');\necho $xml->title;\n?>"
    },
    {
      "title": "PHP SimpleXML - Get",
      "note": "Retrieve data from XML elements.",
      "code": "<?php\necho $xml->book[0]->author;\n?>"
    },
    {
      "title": "PHP XML Expat",
      "note": "Use XML parser based on Expat library for streaming XML parsing.",
      "code": "// XML parser with xml_parse functions"
    },
    {
      "title": "PHP XML DOM",
      "note": "Manipulate XML documents as a tree using DOM extension.",
      "code": "// Use DOMDocument class"
    },
    {
      "title": "AJAX Intro",
      "note": "Use AJAX to update web pages asynchronously.",
      "code": "// JavaScript XMLHttpRequest example"
    },
    {
      "title": "AJAX PHP",
      "note": "Process AJAX requests with PHP scripts.",
      "code": "// PHP script returns JSON response"
    },
    {
      "title": "AJAX Database",
      "note": "Fetch database data asynchronously using AJAX and PHP.",
      "code": "// AJAX calls PHP which queries DB and returns data"
    },
    {
      "title": "AJAX XML",
      "note": "Exchange XML data with server asynchronously.",
      "code": "// Use XMLHttpRequest to get XML"
    },
    {
      "title": "AJAX Live Search",
      "note": "Implement search suggestions using AJAX calls.",
      "code": "// JavaScript fetch with input event"
    },
    {
      "title": "AJAX Poll",
      "note": "Create dynamic polls with AJAX and PHP.",
      "code": "// Send and receive poll data asynchronously"
    },
    {
      "title": "PHP Examples",
      "note": "Collection of PHP scripts demonstrating features.",
      "code": "// Hello world, form handling, DB interaction"
    },
    {
      "title": "PHP Compiler",
      "note": "Compile and execute PHP code online or locally.",
      "code": "// Use php command line or online tools"
    },
    {
      "title": "PHP Quiz",
      "note": "Test your PHP knowledge with quizzes.",
      "code": "// Multiple choice and code challenges"
    },
    {
      "title": "PHP Exercises",
      "note": "Practice PHP coding exercises.",
      "code": "// Solve problems to improve skills"
    },
    {
      "title": "PHP Server",
      "note": "Setup and run PHP on web servers like Apache or Nginx.",
      "code": "// Configure php.ini and server settings"
    },
    {
      "title": "PHP Syllabus",
      "note": "Outline of PHP topics for structured learning.",
      "code": "// Learning path for PHP beginners"
    },
    {
      "title": "PHP Study Plan",
      "note": "Organized schedule to learn PHP step-by-step.",
      "code": "// Daily or weekly study goals"
    },
    {
      "title": "PHP Certificate",
      "note": "Get certified to validate your PHP skills.",
      "code": "// PHP certification exam info"
    },
    {
      "title": "PHP Reference",
      "note": "Detailed documentation of PHP language features.",
      "code": "// PHP.net official docs"
    },
    {
      "title": "PHP Array",
      "note": "Built-in functions to manipulate arrays.",
      "code": "array_push(\$arr, 'value');"
    },
    {
      "title": "PHP Calendar",
      "note": "Functions for calendar-related tasks.",
      "code": "cal_days_in_month(CAL_GREGORIAN, 5, 2025);"
    },
    {
      "title": "PHP Date",
      "note": "Functions to manipulate and format dates.",
      "code": "date('Y-m-d');"
    },
    {
      "title": "PHP Directory",
      "note": "Functions to interact with directories and folders.",
      "code": "scandir('/path/to/dir');"
    },
    {
      "title": "PHP Error",
      "note": "Handle errors and set error reporting levels.",
      "code": "error_reporting(E_ALL);"
    },
    {
      "title": "PHP Exception",
      "note": "Handle exceptions with try-catch blocks.",
      "code": "try {\n  // code\n} catch (Exception \$e) {\n  echo \$e->getMessage();\n}"
    },
    {
      "title": "PHP Filesystem",
      "note": "Manage files and directories programmatically.",
      "code": "file_exists('file.txt');"
    },
    {
      "title": "PHP Filter",
      "note": "Sanitize and validate input data.",
      "code": "filter_var(\$email, FILTER_VALIDATE_EMAIL);"
    },
    {
      "title": "PHP FTP",
      "note": "Upload and download files via FTP.",
      "code": "ftp_connect('ftp.example.com');"
    },
    {
      "title": "PHP JSON",
      "note": "Encode and decode JSON data.",
      "code": "json_encode(\$array);"
    },
    {
      "title": "PHP Keywords",
      "note": "Reserved words in PHP language.",
      "code": "abstract, interface, static, etc."
    },
    {
      "title": "PHP Libxml",
      "note": "Library for XML parsing and validation.",
      "code": "libxml_use_internal_errors(true);"
    },
    {
      "title": "PHP Mail",
      "note": "Send emails using PHP mail() function.",
      "code": "mail('test@example.com', 'Subject', 'Message');"
    },
    {
      "title": "PHP Math",
      "note": "Mathematical functions like round(), abs(), and pow().",
      "code": "pow(2, 3);"
    },
    {
      "title": "PHP Misc",
      "note": "Miscellaneous PHP functions and features.",
      "code": "// Various small utilities"
    },
    {
      "title": "PHP MySQLi",
      "note": "Improved MySQL extension for database interaction.",
      "code": "$mysqli = new mysqli('host', 'user', 'pass', 'db');"
    },
    {
      "title": "PHP Network",
      "note": "Functions to interact with networks and sockets.",
      "code": "fsockopen('www.example.com', 80);"
    },
    {
      "title": "PHP Output Control",
      "note": "Control output buffering and flushing.",
      "code": "ob_start();"
    },
    {
      "title": "PHP RegEx",
      "note": "Use regular expressions for pattern matching.",
      "code": "preg_match('/pattern/', \$string);"
    },
    {
      "title": "PHP SimpleXML",
      "note": "Parse XML using the SimpleXML extension.",
      "code": "simplexml_load_string(\$xmlString);"
    },
    {
      "title": "PHP Stream",
      "note": "Handle data streams for files and network.",
      "code": "fopen('php://input', 'r');"
    },
    {
      "title": "PHP String",
      "note": "Functions for string manipulation.",
      "code": "strlen(\$str);"
    },
    {
      "title": "PHP Variable Handling",
      "note": "Manipulate variables dynamically.",
      "code": "isset(\$var);"
    },
    {
      "title": "PHP XML Parser",
      "note": "Use XML parser functions to process XML data.",
      "code": "xml_parser_create();"
    },
    {
      "title": "PHP Zip",
      "note": "Create and extract zip archives.",
      "code": "$zip = new ZipArchive();"
    },
    {
      "title": "PHP Timezones",
      "note": "Manage and convert time zones.",
      "code": "date_default_timezone_set('America/New_York');"
    },
    {
      "title": "C Intro",
      "note": "Learn the basics of C programming language and its applications.",
      "code": "#include <stdio.h>\nint main() {\n  printf(\"Hello, C!\\n\");\n  return 0;\n}"
    },
    {
      "title": "C Get Started",
      "note": "Set up your environment and compile your first C program.",
      "code": "gcc hello.c -o hello\n./hello"
    },
    {
      "title": "C Syntax",
      "note": "Understand C's syntax including statements, blocks, and functions.",
      "code": "int x = 5;\nif (x > 0) {\n  printf(\"Positive\\n\");\n}"
    },
    {
      "title": "C Output",
      "note": "Use printf to output text and variables.",
      "code": "printf(\"Number: %d\\n\", 10);"
    },
    {
      "title": "C Comments",
      "note": "Use // for single-line and /* */ for multi-line comments.",
      "code": "// This is a comment\n/* Multi-line\ncomment */"
    },
    {
      "title": "C Variables",
      "note": "Declare variables to store data of different types.",
      "code": "int age = 30;\nfloat price = 99.99;"
    },
    {
      "title": "C Data Types",
      "note": "Basic types like int, float, char, and more.",
      "code": "char letter = 'A';\nint count = 100;"
    },
    {
      "title": "C Constants",
      "note": "Use const keyword or #define for constants.",
      "code": "#define PI 3.14\nconst int MAX = 100;"
    },
    {
      "title": "C Operators",
      "note": "Arithmetic, logical, relational, and bitwise operators.",
      "code": "int sum = 5 + 3;\nint flag = (a > b) && (c < d);"
    },
    {
      "title": "C Booleans",
      "note": "Use _Bool or stdbool.h for boolean types.",
      "code": "#include <stdbool.h>\nbool isTrue = true;"
    },
    {
      "title": "C If...Else",
      "note": "Conditional branching in programs.",
      "code": "if (x > 0) {\n  printf(\"Positive\\n\");\n} else {\n  printf(\"Non-positive\\n\");\n}"
    },
    {
      "title": "C Switch",
      "note": "Select among many options based on a variable.",
      "code": "switch(option) {\n  case 1: printf(\"One\\n\"); break;\n  default: printf(\"Other\\n\");\n}"
    },
    {
      "title": "C While Loop",
      "note": "Repeat code while a condition is true.",
      "code": "int i = 0;\nwhile (i < 5) {\n  printf(\"%d\\n\", i);\n  i++;\n}"
    },
    {
      "title": "C For Loop",
      "note": "Repeat code a fixed number of times.",
      "code": "for (int i = 0; i < 5; i++) {\n  printf(\"%d\\n\", i);\n}"
    },
    {
      "title": "C Break/Continue",
      "note": "Control loop execution with break and continue.",
      "code": "for (int i = 0; i < 10; i++) {\n  if (i == 5) break;\n  if (i % 2 == 0) continue;\n  printf(\"%d\\n\", i);\n}"
    },
    {
      "title": "C Arrays",
      "note": "Store collections of elements of the same type.",
      "code": "int numbers[5] = {1, 2, 3, 4, 5};"
    },
    {
      "title": "C Strings",
      "note": "Store sequences of characters ending with a null terminator.",
      "code": "char name[] = \"Alice\";"
    },
    {
      "title": "C User Input",
      "note": "Read input from users using scanf.",
      "code": "int age;\nprintf(\"Enter age: \");\nscanf(\"%d\", &age);"
    },
    {
      "title": "C Memory Address",
      "note": "Access variables' memory addresses using & operator.",
      "code": "int x = 10;\nprintf(\"Address: %p\", &x);"
    },
    {
      "title": "C Pointers",
      "note": "Store memory addresses and manipulate data indirectly.",
      "code": "int x = 10;\nint *p = &x;\nprintf(\"Value: %d\", *p);"
    },
    {
      "title": "C Functions",
      "note": "Modularize code into reusable blocks with functions.",
      "code": "int add(int a, int b) {\n  return a + b;\n}"
    },
    {
      "title": "C Function Parameters",
      "note": "Pass data to functions via parameters.",
      "code": "void greet(char *name) {\n  printf(\"Hello %s\\n\", name);\n}"
    },
    {
      "title": "C Scope",
      "note": "Variable visibility within blocks and functions.",
      "code": "int x = 5; // global\nvoid func() {\n  int x = 10; // local\n}"
    },
    {
      "title": "C Function Declaration",
      "note": "Declare functions before using them in code.",
      "code": "int multiply(int a, int b);"
    },
    {
      "title": "C Recursion",
      "note": "Functions calling themselves for iterative problems.",
      "code": "int factorial(int n) {\n  if (n == 0) return 1;\n  else return n * factorial(n-1);\n}"
    },
    {
      "title": "C Math Functions",
      "note": "Use math library functions like sqrt, pow, sin.",
      "code": "#include <math.h>\ndouble x = sqrt(16);"
    },
    {
      "title": "C Files",
      "note": "Open, read, write, and close files using stdio functions.",
      "code": "FILE *f = fopen(\"data.txt\", \"r\");\nchar c = fgetc(f);\nfclose(f);"
    },
    {
      "title": "C Create Files",
      "note": "Create or open files for writing.",
      "code": "FILE *f = fopen(\"file.txt\", \"w\");\nfputs(\"Hello\", f);\nfclose(f);"
    },
    {
      "title": "C Write To Files",
      "note": "Write data into files.",
      "code": "fprintf(f, \"Number: %d\", 100);"
    },
    {
      "title": "C Read Files",
      "note": "Read data from files using fscanf or fgets.",
      "code": "char buffer[100];\nfgets(buffer, 100, f);"
    },
    {
      "title": "C Structures",
      "note": "Define custom data types grouping variables.",
      "code": "struct Point {\n  int x;\n  int y;\n};"
    },
    {
      "title": "C Structs & Pointers",
      "note": "Use pointers to access struct members.",
      "code": "struct Point p;\nstruct Point *ptr = &p;\nptr->x = 10;"
    },
    {
      "title": "C Unions",
      "note": "Store different data types in the same memory location.",
      "code": "union Data {\n  int i;\n  float f;\n};"
    },
    {
      "title": "C Enums",
      "note": "Define named integer constants.",
      "code": "enum Color { RED, GREEN, BLUE };"
    },
    {
      "title": "C Memory Management",
      "note": "Allocate and free memory dynamically using malloc and free.",
      "code": "int *p = malloc(sizeof(int));\nfree(p);"
    },
    {
      "title": "C Errors",
      "note": "Handle runtime errors and check function return values.",
      "code": "if (ptr == NULL) {\n  printf(\"Memory allocation failed\");\n}"
    },
    {
      "title": "C Debugging",
      "note": "Use debugging tools like gdb to find and fix bugs.",
      "code": "// Run gdb ./program"
    },
    {
      "title": "C NULL",
      "note": "NULL pointer constant indicating no valid address.",
      "code": "int *p = NULL;"
    },
    {
      "title": "C Error Handling",
      "note": "Check return values and use errno for errors.",
      "code": "if (fopen(...) == NULL) {\n  perror(\"File open error\");\n}"
    },
    {
      "title": "C Input Validation",
      "note": "Validate user input before processing.",
      "code": "if (scanf(\"%d\", &num) != 1) {\n  printf(\"Invalid input\");\n}"
    },
    {
      "title": "C Date",
      "note": "Use time.h to work with date and time.",
      "code": "#include <time.h>\ntime_t now = time(NULL);"
    },
    {
      "title": "C Macros",
      "note": "Use #define to create constants and macros.",
      "code": "#define MAX 100\n#define SQUARE(x) ((x) * (x))"
    },
    {
      "title": "C Organize Code",
      "note": "Split code into multiple files and use header files.",
      "code": "// Use #include \"header.h\""
    },
    {
      "title": "C Storage Classes",
      "note": "Control variable lifetime and scope with storage classes like static, extern.",
      "code": "static int count = 0;"
    },
    {
      "title": "C Projects",
      "note": "Practice building C programs with real-world examples.",
      "code": "// Project ideas like calculator, file parser"
    },
    {
      "title": "C Keywords",
      "note": "Reserved words in C language.",
      "code": "int, return, if, else, switch, etc."
    },
    {
      "title": "C <stdio.h>",
      "note": "Standard I/O library functions.",
      "code": "printf(\"Hello\");\nscanf(\"%d\", &num);"
    },
    {
      "title": "C <stdlib.h>",
      "note": "Standard library including memory and process control.",
      "code": "malloc(), free(), exit()"
    },
    {
      "title": "C <string.h>",
      "note": "String handling functions like strcpy, strlen.",
      "code": "strcpy(dest, src);"
    },
    {
      "title": "C <math.h>",
      "note": "Math functions like sqrt, pow, sin.",
      "code": "sqrt(9);"
    },
    {
      "title": "C <ctype.h>",
      "note": "Character handling functions like isalpha, isdigit.",
      "code": "isalpha('A');"
    },
    {
      "title": "C <time.h>",
      "note": "Time and date functions.",
      "code": "time(NULL);"
    },
    {
      "title": "C Examples",
      "note": "Sample C programs and exercises.",
      "code": "// Hello World, factorial, array sorting"
    },
    {
      "title": "C Real-Life Examples",
      "note": "Practical C programs for common tasks.",
      "code": "// File parser, calculator, game"
    },
    {
      "title": "C Exercises",
      "note": "Practice problems to improve C skills.",
      "code": "// Solve loops, functions, pointers exercises"
    },
    {
      "title": "C Quiz",
      "note": "Test your knowledge with C quizzes.",
      "code": "// Multiple choice questions"
    },
    {
      "title": "C Compiler",
      "note": "Use GCC or other compilers to build C programs.",
      "code": "gcc program.c -o program"
    },
    {
      "title": "C Syllabus",
      "note": "Structured plan for learning C language.",
      "code": "// Topic outline for beginners"
    },
    {
      "title": "C Study Plan",
      "note": "Daily or weekly schedule to master C programming.",
      "code": "// Assign topics and exercises"
    },
    {
      "title": "C Certificate",
      "note": "Certification programs to validate your C skills.",
      "code": "// Info about exams and credentials"
    },
    {
      "title": "C Networking",
      "note": "Learn socket programming for TCP/UDP communication in C.",
      "code": "#include <sys/socket.h>\n// Basic socket setup code"
    },
    {
      "title": "C Multithreading",
      "note": "Use pthreads library to write concurrent programs in C.",
      "code": "#include <pthread.h>\nvoid* thread_func(void* arg) { /*...*/ }"
    },
    {
      "title": "C Interfacing",
      "note": "Interface C code with assembly or other programming languages.",
      "code": "// Example: Calling assembly from C or vice versa"
    },
    {
      "title": "Embedded C",
      "note": "Programming microcontrollers and hardware with C language.",
      "code": "// Direct register manipulation example for microcontrollers"
    },
    {
      "title": "C Optimization",
      "note": "Techniques to optimize performance and memory usage in C.",
      "code": "// Use compiler flags and optimize loops"
    },
    {
      "title": "C Security",
      "note": "Write secure C code and prevent common vulnerabilities like buffer overflows.",
      "code": "// Use safe functions like strncpy instead of strcpy"
    },
    {
      "title": "C Design Patterns",
      "note": "Implement common software design patterns using C language.",
      "code": "// Example: Singleton pattern implemented in C"
    },
    {
      "title": "C Build Systems",
      "note": "Automate building C projects using Makefiles and other tools.",
      "code": "all:\n\tgcc main.c -o main"
    },
    {
      "title": "C Testing",
      "note": "Use unit testing frameworks like Unity or CMock for testing C code.",
      "code": "// Basic test case example using Unity"
    },
    {
      "title": "C GUI",
      "note": "Create graphical user interfaces using libraries like GTK or WinAPI.",
      "code": "// GTK example: creating a simple window"
    }
  ],
  Cpp: [
    {
      "title": "C++ Intro",
      "note": "C++ is a powerful, high-performance programming language with support for procedural, object-oriented, and generic programming.",
      "code": "#include <iostream>\nint main() {\n    std::cout << \"Hello, C++!\" << std::endl;\n    return 0;\n}"
    },
    {
      "title": "C++ Get Started",
      "note": "Set up your environment, write your first program, and compile it using a C++ compiler like g++.",
      "code": "// Save as main.cpp\n// Compile: g++ main.cpp -o main\n// Run: ./main"
    },
    {
      "title": "C++ Syntax",
      "note": "C++ syntax builds on C with additional features like classes and templates.",
      "code": "int add(int a, int b) {\n    return a + b;\n}"
    },
    {
      "title": "C++ Output",
      "note": "Use std::cout for console output.",
      "code": "#include <iostream>\nstd::cout << \"Hello World!\" << std::endl;"
    },
    {
      "title": "C++ Comments",
      "note": "Single-line comments start with //, multi-line comments are enclosed with /* */.",
      "code": "// This is a single-line comment\n/* This is a\n   multi-line comment */"
    },
    {
      "title": "C++ Variables",
      "note": "Variables store data and must be declared with a type before use.",
      "code": "int age = 30;\ndouble price = 99.99;"
    },
    {
      "title": "C++ User Input",
      "note": "Use std::cin to get input from the user.",
      "code": "int num;\nstd::cin >> num;"
    },
    {
      "title": "C++ Data Types",
      "note": "Common types include int, double, char, bool, and more complex types like arrays and classes.",
      "code": "int a = 5;\ndouble b = 3.14;\nchar c = 'A';"
    },
    {
      "title": "C++ Operators",
      "note": "C++ supports arithmetic, relational, logical, bitwise, and other operators.",
      "code": "int sum = a + b;\nbool check = (a > b) && (b != 0);"
    },
    {
      "title": "C++ Strings",
      "note": "Use std::string for convenient string handling.",
      "code": "#include <string>\nstd::string name = \"Alice\";"
    },
    {
      "title": "C++ Math",
      "note": "Use <cmath> library for mathematical functions.",
      "code": "#include <cmath>\ndouble result = std::sqrt(16.0);"
    },
    {
      "title": "C++ Booleans",
      "note": "Boolean type stores true or false values.",
      "code": "bool isReady = true;"
    },
    {
      "title": "C++ If...Else",
      "note": "Control program flow with if, else if, and else statements.",
      "code": "if (a > b) {\n    std::cout << \"a is greater\";\n} else {\n    std::cout << \"b is greater\";\n}"
    },
    {
      "title": "C++ Switch",
      "note": "Use switch for multi-way branching based on integral values.",
      "code": "switch(choice) {\n    case 1: //...\n    break;\n    default: //...\n}"
    },
    {
      "title": "C++ While Loop",
      "note": "Repeat a block while a condition is true.",
      "code": "while(count < 10) {\n    count++;\n}"
    },
    {
      "title": "C++ For Loop",
      "note": "Loop with initialization, condition, and increment/decrement.",
      "code": "for(int i = 0; i < 5; i++) {\n    std::cout << i << std::endl;\n}"
    },
    {
      "title": "C++ Break/Continue",
      "note": "Break exits the loop; continue skips to next iteration.",
      "code": "for(int i=0; i<10; i++) {\n  if(i == 5) break;\n  if(i % 2 == 0) continue;\n}"
    },
    {
      "title": "C++ Arrays",
      "note": "Fixed-size collections of elements of the same type.",
      "code": "int arr[5] = {1, 2, 3, 4, 5};"
    },
    {
      "title": "C++ Structures",
      "note": "User-defined types grouping related variables.",
      "code": "struct Point {\n  int x;\n  int y;\n};"
    },
    {
      "title": "C++ Enums",
      "note": "Define named integral constants.",
      "code": "enum Color { RED, GREEN, BLUE };"
    },
    {
      "title": "C++ References",
      "note": "Aliases for variables, used to avoid copying.",
      "code": "int a = 5;\nint& ref = a;"
    },
    {
      "title": "C++ Pointers",
      "note": "Store memory addresses and manipulate them.",
      "code": "int* ptr = &a;"
    },
    {
      "title": "C++ Memory Management",
      "note": "Manage dynamic memory using new and delete.",
      "code": "int* p = new int(10);\ndelete p;"
    },
    {
      "title": "C++ Functions",
      "note": "Blocks of reusable code that perform a specific task.",
      "code": "int add(int x, int y) { return x + y; }"
    },
    {
      "title": "C++ Function Parameters",
      "note": "Functions can accept parameters to operate on data.",
      "code": "void greet(std::string name) { std::cout << \"Hello \" << name; }"
    },
    {
      "title": "C++ Function Overloading",
      "note": "Multiple functions with the same name but different parameters.",
      "code": "int add(int a, int b);\ndouble add(double a, double b);"
    },
    {
      "title": "C++ Scope",
      "note": "Defines where variables are accessible in the code.",
      "code": "{ int x = 10; /* x is scoped here */ }"
    },
    {
      "title": "C++ Recursion",
      "note": "Functions calling themselves to solve problems.",
      "code": "int factorial(int n) { return (n <= 1) ? 1 : n * factorial(n-1); }"
    },
    {
      "title": "C++ Lambda",
      "note": "Anonymous functions useful for short snippets of code.",
      "code": "auto add = [](int a, int b) { return a + b; };"
    },
    {
      "title": "C++ Classes",
      "note": "Blueprints for creating objects encapsulating data and functions.",
      "code": "class Person {\n  public:\n    string name;\n    void greet() { std::cout << \"Hi \" << name; }\n};"
    },
    {
      "title": "C++ OOP",
      "note": "Object-oriented programming concepts: encapsulation, inheritance, polymorphism.",
      "code": "// Example of inheritance\nclass Student : public Person { /*...*/ };"
    },
    {
      "title": "C++ Classes/Objects",
      "note": "Create and use instances of classes.",
      "code": "Person p;\np.name = \"Alice\";\np.greet();"
    },
    {
      "title": "C++ Class Methods",
      "note": "Functions defined inside classes to operate on data.",
      "code": "void setName(std::string n) { name = n; }"
    },
    {
      "title": "C++ Constructors",
      "note": "Special methods called when an object is created.",
      "code": "Person(std::string n) { name = n; }"
    },
    {
      "title": "C++ Access Specifiers",
      "note": "Control visibility of class members: public, private, protected.",
      "code": "private:\n int age;"
    },
    {
      "title": "C++ Encapsulation",
      "note": "Wrapping data and methods together and restricting access.",
      "code": "class Person {\nprivate:\n string name;\npublic:\n void setName(string n) { name = n; }\n};"
    },
    {
      "title": "C++ Friend Functions",
      "note": "Functions that can access private members of a class.",
      "code": "friend void showName(Person& p);"
    },
    {
      "title": "C++ Inheritance",
      "note": "Derive new classes from existing ones to reuse code.",
      "code": "class Student : public Person { /*...*/ };"
    },
    {
      "title": "C++ Polymorphism",
      "note": "Ability to use objects of different classes through a common interface.",
      "code": "virtual void speak() { std::cout << \"Hello\"; }"
    },
    {
      "title": "C++ Templates",
      "note": "Write generic and reusable code with templates.",
      "code": "template <typename T>\nT max(T a, T b) { return (a > b) ? a : b; }"
    },
    {
      "title": "C++ Files",
      "note": "Read from and write to files using fstream library.",
      "code": "#include <fstream>\nstd::ofstream file(\"data.txt\");\nfile << \"Hello C++!\";\nfile.close();"
    },
    {
      "title": "C++ Date",
      "note": "Work with dates and times using <ctime> library.",
      "code": "#include <ctime>\ntime_t now = time(0);\nstd::cout << ctime(&now);"
    },
    {
      "title": "C++ Errors",
      "note": "Identify and handle errors and exceptions in code.",
      "code": "try {\n // code\n} catch (std::exception& e) {\n std::cout << e.what();\n}"
    },
    {
      "title": "C++ Debugging",
      "note": "Use debugging tools like gdb or IDE debuggers to find bugs.",
      "code": "// Compile with -g flag and run gdb ./program"
    },
    {
      "title": "C++ Exceptions",
      "note": "Handle errors gracefully with try, catch, and throw statements.",
      "code": "throw std::runtime_error(\"Error occurred\");"
    },
    {
      "title": "C++ Input Validation",
      "note": "Check user input for correctness and safety.",
      "code": "if(std::cin.fail()) { std::cin.clear(); std::cin.ignore(); }"
    },
    {
      "title": "C++ Data Structures & STL",
      "note": "Use Standard Template Library containers like vector, list, and map.",
      "code": "#include <vector>\nstd::vector<int> nums = {1, 2, 3};"
    },
    {
      "title": "C++ Vectors",
      "note": "Dynamic arrays provided by STL.",
      "code": "std::vector<int> v;\nv.push_back(10);"
    },
    {
      "title": "C++ List",
      "note": "Doubly linked list container from STL.",
      "code": "#include <list>\nstd::list<int> l;"
    },
    {
      "title": "C++ Stacks",
      "note": "LIFO container adapter.",
      "code": "#include <stack>\nstd::stack<int> s;"
    },
    {
      "title": "C++ Queues",
      "note": "FIFO container adapter.",
      "code": "#include <queue>\nstd::queue<int> q;"
    },
    {
      "title": "C++ Deque",
      "note": "Double-ended queue container.",
      "code": "#include <deque>\nstd::deque<int> d;"
    },
    {
      "title": "C++ Sets",
      "note": "Sorted unique element container.",
      "code": "#include <set>\nstd::set<int> s;"
    },
    {
      "title": "C++ Maps",
      "note": "Key-value associative container.",
      "code": "#include <map>\nstd::map<int, std::string> m;"
    },
    {
      "title": "C++ Iterators",
      "note": "Objects that point to elements in containers and allow traversal.",
      "code": "for(auto it = v.begin(); it != v.end(); ++it) {\n    std::cout << *it << std::endl;\n}"
    },
    {
      "title": "C++ Algorithms",
      "note": "Predefined operations like sort, find, and accumulate in STL.",
      "code": "#include <algorithm>\nsort(v.begin(), v.end());"
    },
    {
      "title": "C++ Namespaces",
      "note": "Group related code and avoid name conflicts.",
      "code": "namespace MyNamespace {\n    void func() {}\n}"
    },
    {
      "title": "C++ Projects",
      "note": "Build and manage complete C++ applications.",
      "code": "// Organize code into files, classes, and modules"
    },
    {
      "title": "C++ Add Two Numbers",
      "note": "Simple program to add two numbers and display the result.",
      "code": "int a = 5, b = 3;\nstd::cout << (a + b);"
    },
    {
      "title": "C++ Random Numbers",
      "note": "Generate random numbers using <random> library.",
      "code": "#include <random>\nstd::random_device rd;\nstd::mt19937 gen(rd());\nstd::uniform_int_distribution<> dist(1, 100);\nint randomNum = dist(gen);"
    },
    {
      "title": "C++ Reference",
      "note": "Comprehensive reference for C++ language features and libraries.",
      "code": "// Refer to cppreference.com or official docs"
    },
    {
      "title": "C++ Keywords",
      "note": "Reserved words in C++ with special meaning.",
      "code": "// Examples: int, class, virtual, template"
    },
    {
      "title": "C++ <iostream>",
      "note": "Standard library for input-output operations.",
      "code": "#include <iostream>"
    },
    {
      "title": "C++ <fstream>",
      "note": "File stream library to read and write files.",
      "code": "#include <fstream>"
    },
    {
      "title": "C++ <cmath>",
      "note": "Mathematical functions library.",
      "code": "#include <cmath>"
    },
    {
      "title": "C++ <string>",
      "note": "String class and related functions.",
      "code": "#include <string>"
    },
    {
      "title": "C++ <cstring>",
      "note": "Functions for C-style strings.",
      "code": "#include <cstring>"
    },
    {
      "title": "C++ <ctime>",
      "note": "Date and time utilities.",
      "code": "#include <ctime>"
    },
    {
      "title": "C++ <vector>",
      "note": "Dynamic array container.",
      "code": "#include <vector>"
    },
    {
      "title": "C++ <algorithm>",
      "note": "Algorithms like sort, find, and more.",
      "code": "#include <algorithm>"
    },
    {
      "title": "C++ Examples",
      "note": "Sample programs and exercises to practice C++.",
      "code": "// Examples to practice various concepts"
    },
    {
      "title": "C++ Real-Life Examples",
      "note": "Applications of C++ in real-world projects.",
      "code": "// Examples like games, GUI apps, and more"
    },
    {
      "title": "C++ Compiler",
      "note": "Compile C++ code using tools like g++ or clang.",
      "code": "// g++ main.cpp -o main"
    },
    {
      "title": "C++ Exercises",
      "note": "Practice problems to improve C++ skills.",
      "code": "// Solve coding challenges"
    },
    {
      "title": "C++ Quiz",
      "note": "Test your C++ knowledge with quizzes.",
      "code": "// Multiple choice or coding quizzes"
    },
    {
      "title": "C++ Syllabus",
      "note": "Detailed curriculum for learning C++.",
      "code": "// Organized topics and lessons"
    },
    {
      "title": "C++ Study Plan",
      "note": "Plan your C++ learning journey with a schedule.",
      "code": "// Weekly or daily learning goals"
    },
    {
      "title": "C++ Certificate",
      "note": "Certification to validate your C++ programming skills.",
      "code": "// Information on exams and credentials"
    }
  ],
  CSharp: [
    {
      "title": "C# Intro",
      "note": "C# is a modern, object-oriented programming language developed by Microsoft, widely used for building Windows applications and web services.",
      "code": "using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello, C#!\");\n    }\n}"
    },
    {
      "title": "C# Get Started",
      "note": "Set up your development environment with Visual Studio or .NET CLI, write your first program, and run it.",
      "code": "// Create Program.cs, then use: dotnet run"
    },
    {
      "title": "C# Syntax",
      "note": "C# syntax is similar to other C-style languages, using braces to define code blocks.",
      "code": "if (5 > 3) {\n    Console.WriteLine(\"Five is greater than three.\");\n}"
    },
    {
      "title": "C# Output",
      "note": "Use Console.WriteLine() for displaying output to the console.",
      "code": "Console.WriteLine(\"Hello World!\");"
    },
    {
      "title": "C# Comments",
      "note": "Single-line comments start with //, multi-line comments use /* */.",
      "code": "// This is a comment\n/* This is a\n   multi-line comment */"
    },
    {
      "title": "C# Variables",
      "note": "Variables store data and must be declared with a type.",
      "code": "int age = 25;\nstring name = \"Alice\";"
    },
    {
      "title": "C# Data Types",
      "note": "Common types include int, double, bool, char, string, and more.",
      "code": "double price = 19.99;\nbool isAvailable = true;"
    },
    {
      "title": "C# Type Casting",
      "note": "Convert between data types using explicit or implicit casting.",
      "code": "int x = (int) 9.8;  // explicit cast"
    },
    {
      "title": "C# User Input",
      "note": "Read input from the console using Console.ReadLine().",
      "code": "string input = Console.ReadLine();"
    },
    {
      "title": "C# Operators",
      "note": "C# supports arithmetic, relational, logical, and assignment operators.",
      "code": "int sum = 5 + 3;\nbool isEqual = (a == b);"
    },
    {
      "title": "C# Math",
      "note": "Use the Math class for common mathematical functions.",
      "code": "double root = Math.Sqrt(16);"
    },
    {
      "title": "C# Strings",
      "note": "Strings are immutable sequences of characters with many built-in methods.",
      "code": "string greeting = \"Hello\";\nint length = greeting.Length;"
    },
    {
      "title": "C# Booleans",
      "note": "Boolean type stores true or false.",
      "code": "bool isReady = true;"
    },
    {
      "title": "C# If...Else",
      "note": "Control program flow based on conditions.",
      "code": "if (age >= 18) {\n    Console.WriteLine(\"Adult\");\n} else {\n    Console.WriteLine(\"Minor\");\n}"
    },
    {
      "title": "C# Switch",
      "note": "Multi-way branching based on a variable’s value.",
      "code": "switch(day) {\n    case 1:\n        Console.WriteLine(\"Monday\");\n        break;\n    default:\n        Console.WriteLine(\"Other day\");\n        break;\n}"
    },
    {
      "title": "C# While Loop",
      "note": "Repeat a block while a condition is true.",
      "code": "int i = 0;\nwhile (i < 5) {\n    Console.WriteLine(i);\n    i++;\n}"
    },
    {
      "title": "C# For Loop",
      "note": "Loop with initialization, condition, and increment.",
      "code": "for (int i = 0; i < 5; i++) {\n    Console.WriteLine(i);\n}"
    },
    {
      "title": "C# Break/Continue",
      "note": "Break exits the loop; continue skips to the next iteration.",
      "code": "for (int i = 0; i < 10; i++) {\n    if (i == 5) break;\n    if (i % 2 == 0) continue;\n    Console.WriteLine(i);\n}"
    },
    {
      "title": "C# Arrays",
      "note": "Fixed-size collections of elements of the same type.",
      "code": "int[] numbers = {1, 2, 3, 4};"
    },
    {
      "title": "C# Methods",
      "note": "Blocks of reusable code defined in classes.",
      "code": "public int Add(int a, int b) {\n    return a + b;\n}"
    },
    {
      "title": "C# Method Parameters",
      "note": "Pass arguments to methods to influence their behavior.",
      "code": "void Greet(string name) {\n    Console.WriteLine(\"Hello, \" + name);\n}"
    },
    {
      "title": "C# Method Overloading",
      "note": "Define multiple methods with the same name but different parameters.",
      "code": "int Add(int a, int b) { return a + b; }\ndouble Add(double a, double b) { return a + b; }"
    },
    {
      "title": "C# Classes",
      "note": "Templates for creating objects with properties and methods.",
      "code": "public class Person {\n    public string Name { get; set; }\n    public void Greet() {\n        Console.WriteLine(\"Hi, \" + Name);\n    }\n}"
    },
    {
      "title": "C# OOP",
      "note": "Principles like encapsulation, inheritance, and polymorphism.",
      "code": "// Example: inheritance\nclass Student : Person { }"
    },
    {
      "title": "C# Classes/Objects",
      "note": "Create and use instances of classes.",
      "code": "Person p = new Person();\np.Name = \"Alice\";\np.Greet();"
    },
    {
      "title": "C# Class Members",
      "note": "Properties and methods that belong to a class.",
      "code": "public int Age { get; set; }"
    },
    {
      "title": "C# Constructors",
      "note": "Special methods called when an object is instantiated.",
      "code": "public Person(string name) {\n    Name = name;\n}"
    },
    {
      "title": "C# Access Modifiers",
      "note": "Control visibility with public, private, protected, and internal.",
      "code": "private int id;"
    },
    {
      "title": "C# Properties",
      "note": "Encapsulate fields with get and set accessors.",
      "code": "public string Name { get; set; }"
    },
    {
      "title": "C# Inheritance",
      "note": "Derive new classes from existing ones to reuse and extend behavior.",
      "code": "class Student : Person { }"
    },
    {
      "title": "C# Polymorphism",
      "note": "Use virtual and override to enable runtime method binding.",
      "code": "public virtual void Speak() {\n    Console.WriteLine(\"Hello\");\n}"
    },
    {
      "title": "C# Abstraction",
      "note": "Define abstract classes and methods to create base templates.",
      "code": "abstract class Animal {\n    public abstract void MakeSound();\n}"
    },
    {
      "title": "C# Interface",
      "note": "Define contracts for classes to implement.",
      "code": "interface IWalkable {\n    void Walk();\n}"
    },
    {
      "title": "C# Enums",
      "note": "Define named constants to improve code readability.",
      "code": "enum Days { Sunday, Monday, Tuesday }"
    },
    {
      "title": "C# Files",
      "note": "Read and write files using System.IO namespace.",
      "code": "using System.IO;\nFile.WriteAllText(\"file.txt\", \"Hello World!\");"
    },
    {
      "title": "C# Exceptions",
      "note": "Handle runtime errors using try, catch, and finally.",
      "code": "try {\n    // code\n} catch (Exception ex) {\n    Console.WriteLine(ex.Message);\n}"
    },
    {
      "title": "C# Add Two Numbers",
      "note": "Simple example to add two integers and display the result.",
      "code": "int a = 5, b = 3;\nConsole.WriteLine(a + b);"
    },
    {
      "title": "C# Examples",
      "note": "Sample programs to practice and understand C# concepts.",
      "code": "// Example code snippets"
    },
    {
      "title": "C# Compiler",
      "note": "Compile C# programs using Visual Studio or the dotnet CLI.",
      "code": "// dotnet build and dotnet run commands"
    },
    {
      "title": "C# Exercises",
      "note": "Practice problems to improve C# programming skills.",
      "code": "// Solve coding challenges"
    },
    {
      "title": "C# Quiz",
      "note": "Test your knowledge with quizzes on C# topics.",
      "code": "// Multiple choice or coding quizzes"
    },
    {
      "title": "C# Server",
      "note": "Run C# applications on servers with ASP.NET or other frameworks.",
      "code": "// Host web applications"
    },
    {
      "title": "C# Syllabus",
      "note": "Structured curriculum for learning C# programming.",
      "code": "// Detailed topic list"
    },
    {
      "title": "C# Study Plan",
      "note": "Organize your learning schedule and goals for mastering C#.",
      "code": "// Weekly/daily plan"
    },
    {
      "title": "C# Certificate",
      "note": "Certification programs to validate your C# skills.",
      "code": "// Information on certification exams"
    }

  ],
  MySQL: [
    {
      "title": "MySQL Intro",
      "note": "MySQL is an open-source relational database management system (RDBMS) that uses SQL to manage data.",
      "code": "-- Connect to MySQL server and manage databases"
    },
    {
      "title": "MySQL RDBMS",
      "note": "RDBMS organizes data into tables with relationships between them.",
      "code": "-- Tables, keys, and relationships form the core of RDBMS"
    },
    {
      "title": "MySQL SELECT",
      "note": "Retrieve data from one or more tables.",
      "code": "SELECT * FROM users;"
    },
    {
      "title": "MySQL WHERE",
      "note": "Filter records based on conditions.",
      "code": "SELECT * FROM users WHERE age > 30;"
    },
    {
      "title": "MySQL AND, OR, NOT",
      "note": "Combine multiple conditions using logical operators.",
      "code": "SELECT * FROM users WHERE age > 30 AND status = 'active';"
    },
    {
      "title": "MySQL ORDER BY",
      "note": "Sort results in ascending or descending order.",
      "code": "SELECT * FROM users ORDER BY created_at DESC;"
    },
    {
      "title": "MySQL INSERT INTO",
      "note": "Add new records to a table.",
      "code": "INSERT INTO users (name, age) VALUES ('Alice', 28);"
    },
    {
      "title": "MySQL NULL Values",
      "note": "Handle records with missing or unknown values.",
      "code": "SELECT * FROM users WHERE middle_name IS NULL;"
    },
    {
      "title": "MySQL UPDATE",
      "note": "Modify existing records.",
      "code": "UPDATE users SET status = 'inactive' WHERE last_login < '2023-01-01';"
    },
    {
      "title": "MySQL DELETE",
      "note": "Remove records from a table.",
      "code": "DELETE FROM users WHERE id = 10;"
    },
    {
      "title": "MySQL LIMIT",
      "note": "Limit the number of returned records.",
      "code": "SELECT * FROM users LIMIT 5;"
    },
    {
      "title": "MySQL MIN and MAX",
      "note": "Find the minimum or maximum value in a column.",
      "code": "SELECT MIN(age), MAX(age) FROM users;"
    },
    {
      "title": "MySQL COUNT, AVG, SUM",
      "note": "Aggregate functions to count, average, or sum values.",
      "code": "SELECT COUNT(*), AVG(age), SUM(salary) FROM employees;"
    },
    {
      "title": "MySQL LIKE",
      "note": "Search for a pattern in a string.",
      "code": "SELECT * FROM users WHERE name LIKE 'A%';"
    },
    {
      "title": "MySQL Wildcards",
      "note": "Use % and _ as wildcards in LIKE queries.",
      "code": "SELECT * FROM products WHERE code LIKE '_123%';"
    },
    {
      "title": "MySQL IN",
      "note": "Check if a value matches any value in a list.",
      "code": "SELECT * FROM users WHERE country IN ('USA', 'Canada');"
    },
    {
      "title": "MySQL BETWEEN",
      "note": "Filter records within a range.",
      "code": "SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-01-31';"
    },
    {
      "title": "MySQL Aliases",
      "note": "Rename columns or tables in the output.",
      "code": "SELECT name AS username FROM users;"
    },
    {
      "title": "MySQL Joins",
      "note": "Combine rows from multiple tables based on related columns.",
      "code": "SELECT u.name, o.amount FROM users u INNER JOIN orders o ON u.id = o.user_id;"
    },
    {
      "title": "MySQL INNER JOIN",
      "note": "Return records with matching values in both tables.",
      "code": "SELECT * FROM A INNER JOIN B ON A.id = B.a_id;"
    },
    {
      "title": "MySQL LEFT JOIN",
      "note": "Return all records from left table and matched records from right table.",
      "code": "SELECT * FROM A LEFT JOIN B ON A.id = B.a_id;"
    },
    {
      "title": "MySQL RIGHT JOIN",
      "note": "Return all records from right table and matched from left table.",
      "code": "SELECT * FROM A RIGHT JOIN B ON A.id = B.a_id;"
    },
    {
      "title": "MySQL CROSS JOIN",
      "note": "Return Cartesian product of rows from tables.",
      "code": "SELECT * FROM A CROSS JOIN B;"
    },
    {
      "title": "MySQL Self Join",
      "note": "Join a table to itself to compare rows.",
      "code": "SELECT A.name, B.name FROM employees A, employees B WHERE A.manager_id = B.id;"
    },
    {
      "title": "MySQL UNION",
      "note": "Combine results of two SELECT statements, removing duplicates.",
      "code": "SELECT city FROM customers UNION SELECT city FROM suppliers;"
    },
    {
      "title": "MySQL UNION ALL",
      "note": "Combine results including duplicates.",
      "code": "SELECT city FROM customers UNION ALL SELECT city FROM suppliers;"
    },
    {
      "title": "MySQL GROUP BY",
      "note": "Group rows sharing values to aggregate data.",
      "code": "SELECT country, COUNT(*) FROM users GROUP BY country;"
    },
    {
      "title": "MySQL HAVING",
      "note": "Filter groups based on aggregate conditions.",
      "code": "SELECT country, COUNT(*) FROM users GROUP BY country HAVING COUNT(*) > 10;"
    },
    {
      "title": "MySQL EXISTS",
      "note": "Check for the existence of rows in a subquery.",
      "code": "SELECT * FROM customers WHERE EXISTS (SELECT * FROM orders WHERE orders.customer_id = customers.id);"
    },
    {
      "title": "MySQL ANY, ALL",
      "note": "Compare values to a set with ANY or ALL operators.",
      "code": "SELECT * FROM products WHERE price > ANY (SELECT price FROM sales);"
    },
    {
      "title": "MySQL INSERT SELECT",
      "note": "Insert rows returned by a SELECT query.",
      "code": "INSERT INTO archive_orders SELECT * FROM orders WHERE order_date < '2022-01-01';"
    },
    {
      "title": "MySQL CASE",
      "note": "Add conditional logic inside queries.",
      "code": "SELECT name, CASE WHEN age < 18 THEN 'Minor' ELSE 'Adult' END AS status FROM users;"
    },
    {
      "title": "MySQL Null Functions",
      "note": "Functions to handle NULL values, e.g., IFNULL(), COALESCE().",
      "code": "SELECT IFNULL(middle_name, 'N/A') FROM users;"
    },
    {
      "title": "MySQL Comments",
      "note": "Add comments to SQL scripts using -- or /* */.",
      "code": "-- This is a single-line comment\n/* This is a\nmulti-line comment */"
    },
    {
      "title": "MySQL Operators",
      "note": "Arithmetic, comparison, logical, and bitwise operators in MySQL.",
      "code": "SELECT * FROM table WHERE price > 100 AND stock < 50;"
    },
    {
      "title": "MySQL Create DB",
      "note": "Create a new database.",
      "code": "CREATE DATABASE mydb;"
    },
    {
      "title": "MySQL Drop DB",
      "note": "Delete a database and all its objects.",
      "code": "DROP DATABASE mydb;"
    },
    {
      "title": "MySQL Create Table",
      "note": "Define a new table and its columns.",
      "code": "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));"
    },
    {
      "title": "MySQL Drop Table",
      "note": "Delete a table and its data.",
      "code": "DROP TABLE users;"
    },
    {
      "title": "MySQL Alter Table",
      "note": "Modify a table’s structure.",
      "code": "ALTER TABLE users ADD COLUMN email VARCHAR(100);"
    },
    {
      "title": "MySQL Constraints",
      "note": "Rules to enforce data integrity like NOT NULL, UNIQUE, PRIMARY KEY.",
      "code": "CREATE TABLE users (id INT PRIMARY KEY, email VARCHAR(100) UNIQUE NOT NULL);"
    },
    {
      "title": "MySQL Not Null",
      "note": "Ensure columns cannot have NULL values.",
      "code": "ALTER TABLE users MODIFY email VARCHAR(100) NOT NULL;"
    },
    {
      "title": "MySQL Unique",
      "note": "Ensure all values in a column are unique.",
      "code": "CREATE UNIQUE INDEX idx_email ON users(email);"
    },
    {
      "title": "MySQL Primary Key",
      "note": "Uniquely identify records in a table.",
      "code": "ALTER TABLE users ADD PRIMARY KEY (id);"
    },
    {
      "title": "MySQL Foreign Key",
      "note": "Create a relationship between tables.",
      "code": "ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users(id);"
    },
    {
      "title": "MySQL Check",
      "note": "Add constraints to check column values.",
      "code": "ALTER TABLE users ADD CONSTRAINT chk_age CHECK (age >= 18);"
    },
    {
      "title": "MySQL Default",
      "note": "Assign default values to columns.",
      "code": "ALTER TABLE users ALTER COLUMN status SET DEFAULT 'active';"
    },
    {
      "title": "MySQL Create Index",
      "note": "Create an index to improve query performance.",
      "code": "CREATE INDEX idx_name ON users(name);"
    },
    {
      "title": "MySQL Auto Increment",
      "note": "Automatically generate unique numbers for a column.",
      "code": "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY);"
    },
    {
      "title": "MySQL Dates",
      "note": "Store and query date and time values.",
      "code": "SELECT * FROM events WHERE event_date > '2024-01-01';"
    },
    {
      "title": "MySQL Views",
      "note": "Virtual tables defined by queries.",
      "code": "CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active';"
    },
    {
      "title": "MySQL Data Types",
      "note": "Define types of data stored in columns, e.g., INT, VARCHAR, DATE.",
      "code": "CREATE TABLE sample (id INT, name VARCHAR(50), created_at DATE);"
    },
    {
      "title": "MySQL Functions",
      "note": "Built-in functions for string, numeric, date operations, etc.",
      "code": "SELECT UPPER(name), NOW() FROM users;"
    },
    {
      "title": "MySQL Examples",
      "note": "Practice queries and database operations.",
      "code": "-- Example queries for learning"
    },
    {
      "title": "MySQL Editor",
      "note": "Use graphical tools or command-line editors to manage databases.",
      "code": "-- Tools: MySQL Workbench, phpMyAdmin"
    },
    {
      "title": "MySQL Quiz",
      "note": "Test your MySQL knowledge with quizzes.",
      "code": "-- Sample multiple choice questions"
    },
    {
      "title": "MySQL Exercises",
      "note": "Hands-on practice problems for MySQL skills.",
      "code": "-- Write and run SQL queries"
    },
    {
      "title": "MySQL Syllabus",
      "note": "Structured curriculum to learn MySQL from basics to advanced topics.",
      "code": "-- List of topics and objectives"
    },
    {
      "title": "MySQL Study Plan",
      "note": "Organize your learning schedule for MySQL mastery.",
      "code": "-- Daily/weekly study goals"
    },
    {
      "title": "MySQL Certificate",
      "note": "Certification exams to validate your MySQL knowledge.",
      "code": "-- Information about exams and credentials"
    }
  ],

  Django: [{
    "title": "Django Home",
    "note": "Start here to learn about Django, a high-level Python web framework.",
    "code": "# Official docs: https://www.djangoproject.com/"
  },
  {
    "title": "Django Intro",
    "note": "Django follows the MTV architecture to build scalable web applications.",
    "code": "# Model, Template, View architecture overview"
  },
  {
    "title": "Django Get Started",
    "note": "Setup environment, install Django, and run your first project.",
    "code": "python -m venv env\nsource env/bin/activate\npip install django"
  },
  {
    "title": "Create Virtual Environment",
    "note": "Isolate project dependencies using virtual environments.",
    "code": "python -m venv env\nsource env/bin/activate"
  },
  {
    "title": "Install Django",
    "note": "Install Django using pip package manager.",
    "code": "pip install django"
  },
  {
    "title": "Django Create Project",
    "note": "Initialize a new Django project.",
    "code": "django-admin startproject myproject"
  },
  {
    "title": "Django Create App",
    "note": "Create a Django app to organize code.",
    "code": "python manage.py startapp myapp"
  },
  {
    "title": "Django Views",
    "note": "Define logic for what data to show in response to requests.",
    "code": "def home(request):\n    return HttpResponse('Hello, Django!')"
  },
  {
    "title": "Django URLs",
    "note": "Map URLs to views using URLconf.",
    "code": "path('', views.home, name='home')"
  },
  {
    "title": "Django Templates",
    "note": "Create HTML templates to render dynamic content.",
    "code": "{% block content %}Hello, {{ user }}!{% endblock %}"
  },
  {
    "title": "Django Models",
    "note": "Define data structure and interact with the database.",
    "code": "class Member(models.Model):\n    name = models.CharField(max_length=100)"
  },
  {
    "title": "Django Insert Data",
    "note": "Add new records to the database via models.",
    "code": "member = Member(name='Alice')\nmember.save()"
  },
  {
    "title": "Django Update Data",
    "note": "Modify existing records.",
    "code": "member.name = 'Bob'\nmember.save()"
  },
  {
    "title": "Django Delete Data",
    "note": "Remove records from the database.",
    "code": "member.delete()"
  },
  {
    "title": "Django Update Model",
    "note": "Change model schema and apply migrations.",
    "code": "python manage.py makemigrations\npython manage.py migrate"
  },
  {
    "title": "Display Data",
    "note": "Send data from views to templates for display.",
    "code": "return render(request, 'index.html', {'members': members})"
  },
  {
    "title": "Prep Template and View",
    "note": "Prepare templates and corresponding views to handle requests.",
    "code": "def member_list(request):\n    members = Member.objects.all()\n    return render(request, 'members.html', {'members': members})"
  },
  {
    "title": "Add Link to Details",
    "note": "Add detail page links for individual objects.",
    "code": "<a href=\"{% url 'member_detail' member.id %}\">Details</a>"
  },
  {
    "title": "Add Master Template",
    "note": "Create base template for reuse across pages.",
    "code": "{% block content %}{% endblock %}"
  },
  {
    "title": "Add Main Index Page",
    "note": "Create homepage to navigate app features.",
    "code": "def index(request):\n    return render(request, 'index.html')"
  },
  {
    "title": "Django 404 Template",
    "note": "Customize page shown when requested page is not found.",
    "code": "404.html template in templates folder"
  },
  {
    "title": "Add Test View",
    "note": "Create simple view to test Django setup.",
    "code": "def test(request):\n    return HttpResponse('Test Successful')"
  },
  {
    "title": "Django Admin",
    "note": "Built-in admin interface for managing data.",
    "code": "python manage.py createsuperuser"
  },
  {
    "title": "Create User",
    "note": "Add users via admin or programmatically.",
    "code": "User.objects.create_user('username', 'email', 'password')"
  },
  {
    "title": "Include Models",
    "note": "Register models with admin for management.",
    "code": "admin.site.register(Member)"
  },
  {
    "title": "Set List Display",
    "note": "Customize admin list view columns.",
    "code": "class MemberAdmin(admin.ModelAdmin):\n    list_display = ('name', 'email')"
  },
  {
    "title": "Update Members",
    "note": "Edit member info from admin panel.",
    "code": "Edit directly in Django admin UI"
  },
  {
    "title": "Add Members",
    "note": "Add new members through admin or app forms.",
    "code": "Forms or admin panel input"
  },
  {
    "title": "Delete Members",
    "note": "Remove members via admin or code.",
    "code": "member.delete()"
  },
  {
    "title": "Django Syntax",
    "note": "Basic Django template language syntax and constructs.",
    "code": "{% if user.is_authenticated %}Welcome, {{ user.username }}{% endif %}"
  },
  {
    "title": "Django Variables",
    "note": "Use variables inside templates to display data.",
    "code": "{{ variable_name }}"
  },
  {
    "title": "Django Tags",
    "note": "Control flow and logic in templates using tags.",
    "code": "{% for item in list %}{{ item }}{% endfor %}"
  },
  {
    "title": "Django If Else",
    "note": "Conditional logic in templates.",
    "code": "{% if user.is_staff %}Admin{% else %}User{% endif %}"
  },
  {
    "title": "Django For Loop",
    "note": "Loop over lists or querysets in templates.",
    "code": "{% for member in members %}{{ member.name }}{% endfor %}"
  },
  {
    "title": "Django Comment",
    "note": "Add comments inside templates that won't render.",
    "code": "{# This is a comment #}"
  },
  {
    "title": "Django Include",
    "note": "Include reusable template snippets.",
    "code": "{% include 'navbar.html' %}"
  },
  {
    "title": "QuerySet Introduction",
    "note": "QuerySet is Django's way to retrieve and filter data.",
    "code": "members = Member.objects.all()"
  },
  {
    "title": "QuerySet Get",
    "note": "Retrieve a single object matching the query.",
    "code": "member = Member.objects.get(id=1)"
  },
  {
    "title": "QuerySet Filter",
    "note": "Filter records based on conditions.",
    "code": "members = Member.objects.filter(age__gte=18)"
  },
  {
    "title": "QuerySet Order By",
    "note": "Order results by specified fields.",
    "code": "members = Member.objects.order_by('name')"
  },
  {
    "title": "Static Files",
    "note": "Manage CSS, JavaScript, and images for your project.",
    "code": "STATIC_URL = '/static/'"
  },
  {
    "title": "Add Static Files",
    "note": "Add and serve static files in your project.",
    "code": "Place files in static/ directory"
  },
  {
    "title": "Install WhiteNoise",
    "note": "Use WhiteNoise to serve static files in production.",
    "code": "pip install whitenoise"
  },
  {
    "title": "Collect Static Files",
    "note": "Gather all static files into a single directory.",
    "code": "python manage.py collectstatic"
  },
  {
    "title": "Add Global Static Files",
    "note": "Use global static assets for your templates.",
    "code": "<link rel=\"stylesheet\" href=\"{% static 'css/style.css' %}\">"
  },
  {
    "title": "Add Styles to the Project",
    "note": "Style your site with CSS.",
    "code": "Use CSS files linked in templates"
  },
  {
    "title": "PostgreSQL Intro",
    "note": "Use PostgreSQL as the database backend for Django.",
    "code": "Set DATABASES in settings.py for PostgreSQL"
  },
  {
    "title": "Create AWS Account",
    "note": "Setup an AWS account to host your database.",
    "code": "# Use AWS console to create account"
  },
  {
    "title": "Create Database in RDS",
    "note": "Create PostgreSQL database in AWS RDS.",
    "code": "# Use AWS RDS dashboard"
  },
  {
    "title": "Connect to Database",
    "note": "Configure Django to connect to your PostgreSQL database.",
    "code": "DATABASES = {... 'ENGINE': 'django.db.backends.postgresql', ...}"
  },
  {
    "title": "Add Members",
    "note": "Add data to your database using Django models.",
    "code": "Member.objects.create(name='Alice')"
  },
  {
    "title": "Deploy Django",
    "note": "Deploy your Django app to production servers.",
    "code": "Use Elastic Beanstalk or other platforms"
  },
  {
    "title": "Elastic Beanstalk (EB)",
    "note": "AWS service to deploy and manage applications easily.",
    "code": "# eb init\n# eb create\n# eb deploy"
  },
  {
    "title": "Create requirements.txt",
    "note": "List all Python dependencies.",
    "code": "pip freeze > requirements.txt"
  },
  {
    "title": "Create django.config",
    "note": "Configure Elastic Beanstalk deployment settings.",
    "code": "# Configuration files inside .ebextensions"
  },
  {
    "title": "Create .zip File",
    "note": "Package your project for deployment.",
    "code": "zip -r project.zip myproject/"
  },
  {
    "title": "Deploy with EB",
    "note": "Deploy your zipped app using Elastic Beanstalk CLI.",
    "code": "eb deploy"
  },
  {
    "title": "Update Project",
    "note": "Make changes and redeploy your project.",
    "code": "Edit code, then eb deploy again"
  },
  {
    "title": "Add Slug Field",
    "note": "Add slug fields for SEO-friendly URLs.",
    "code": "slug = models.SlugField(unique=True)"
  },
  {
    "title": "Add Bootstrap 5",
    "note": "Integrate Bootstrap 5 for responsive design.",
    "code": "Include Bootstrap CSS & JS in templates"
  },
  {
    "title": "Template Tag Reference",
    "note": "List of useful Django template tags.",
    "code": "https://docs.djangoproject.com/en/stable/ref/templates/builtins/"
  },
  {
    "title": "Filter Reference",
    "note": "Common Django template filters.",
    "code": "https://docs.djangoproject.com/en/stable/ref/templates/builtins/"
  },
  {
    "title": "Field lookups Reference",
    "note": "Use lookups to filter QuerySets effectively.",
    "code": "https://docs.djangoproject.com/en/stable/ref/models/querysets/#field-lookups"
  },
  {
    "title": "Django Exercises",
    "note": "Practice Django coding problems.",
    "code": "# Write apps, views, and templates"
  },
  {
    "title": "Django Compiler",
    "note": "Use Django shell to test code snippets.",
    "code": "python manage.py shell"
  },
  {
    "title": "Django Quiz",
    "note": "Test your knowledge with quizzes.",
    "code": "# Sample questions on Django concepts"
  },
  {
    "title": "Django Syllabus",
    "note": "Structured plan for learning Django.",
    "code": "# Topics and goals"
  },
  {
    "title": "Django Study Plan",
    "note": "Organize your Django learning schedule.",
    "code": "# Daily/weekly study tasks"
  },
  {
    "title": "Django Server",
    "note": "Run Django development server to test your app.",
    "code": "python manage.py runserver"
  },
  {
    "title": "Django Certificate",
    "note": "Earn certificates validating your Django skills.",
    "code": "# Info about certifications"
  }
  ],
  typescript:
    [
      {
        "title": "TS HOME",
        "note": "Start learning TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",
        "code": "// Official site: https://www.typescriptlang.org/"
      },
      {
        "title": "TS Introduction",
        "note": "Understand the benefits of TypeScript including static typing and enhanced tooling.",
        "code": "let message: string = 'Hello, TypeScript!';"
      },
      {
        "title": "TS Get Started",
        "note": "Set up your TypeScript environment and compile your first program.",
        "code": "npm install -g typescript\ntsc hello.ts"
      },
      {
        "title": "TS Simple Types",
        "note": "Learn basic types like string, number, boolean, and void.",
        "code": "let isDone: boolean = false;\nlet count: number = 10;\nlet name: string = 'Alice';"
      },
      {
        "title": "TS Special Types",
        "note": "Explore special types such as any, unknown, never, and void.",
        "code": "let value: any = 5;\nfunction error(message: string): never {\n  throw new Error(message);\n}"
      },
      {
        "title": "TS Arrays",
        "note": "Declare arrays with type annotations.",
        "code": "let list: number[] = [1, 2, 3];"
      },
      {
        "title": "TS Tuples",
        "note": "Create fixed-length arrays with known types at each index.",
        "code": "let tuple: [string, number] = ['hello', 10];"
      },
      {
        "title": "TS Object Types",
        "note": "Define object shapes using types and interfaces.",
        "code": "let person: { name: string; age: number } = { name: 'Bob', age: 25 };"
      },
      {
        "title": "TS Enums",
        "note": "Define enumerated types for a set of named constants.",
        "code": "enum Color { Red, Green, Blue }\nlet c: Color = Color.Green;"
      },
      {
        "title": "TS Aliases & Interfaces",
        "note": "Create reusable type aliases and interfaces for objects and functions.",
        "code": "type Point = { x: number; y: number };\ninterface User { id: number; name: string; }"
      },
      {
        "title": "TS Union Types",
        "note": "Allow variables to hold more than one type.",
        "code": "let value: string | number = 5;\nvalue = 'hello';"
      },
      {
        "title": "TS Functions",
        "note": "Add type annotations to function parameters and return types.",
        "code": "function add(x: number, y: number): number {\n  return x + y;\n}"
      },
      {
        "title": "TS Casting",
        "note": "Explicitly tell the compiler about the variable type using casting.",
        "code": "let someValue: any = 'this is a string';\nlet strLength: number = (someValue as string).length;"
      },
      {
        "title": "TS Classes",
        "note": "Use classes with typed properties and methods, supporting OOP concepts.",
        "code": "class Person {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}"
      },
      {
        "title": "TS Basic Generics",
        "note": "Write reusable components with generic types.",
        "code": "function identity<T>(arg: T): T {\n  return arg;\n}"
      },
      {
        "title": "TS Utility Types",
        "note": "Use built-in utility types like Partial, Readonly, and Pick to manipulate types.",
        "code": "type PartialUser = Partial<User>;"
      },
      {
        "title": "TS Keyof",
        "note": "Extract keys of a type as a union of string literals.",
        "code": "type UserKeys = keyof User; // 'id' | 'name'"
      },
      {
        "title": "TS Null",
        "note": "Handle null and undefined values with strict null checks.",
        "code": "let name: string | null = null;"
      },
      {
        "title": "TS Definitely Typed",
        "note": "Use community-maintained type definitions for popular JavaScript libraries.",
        "code": "npm install --save-dev @types/lodash"
      },
      {
        "title": "TS 5 Updates",
        "note": "Latest features and improvements in TypeScript 5.x versions.",
        "code": "// See release notes at https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html"
      },
      {
        "title": "TS Editor",
        "note": "Write and test TypeScript code in your favorite editor like VSCode.",
        "code": "// Enable TypeScript extension in VSCode for autocompletion and error checking."
      },
      {
        "title": "TS Exercises",
        "note": "Practice coding challenges to strengthen your TypeScript skills.",
        "code": "// Build functions, classes, and interfaces with proper typings."
      },
      {
        "title": "TS Quiz",
        "note": "Test your knowledge with TypeScript quizzes and trivia.",
        "code": "// Multiple choice questions on types, interfaces, generics, and more."
      },
      {
        "title": "TS Syllabus",
        "note": "A structured plan to learn TypeScript from basics to advanced topics.",
        "code": "// Plan includes all core concepts and practice projects."
      },
      {
        "title": "TS Study Plan",
        "note": "Organize your study schedule to master TypeScript step-by-step.",
        "code": "// Daily and weekly goals for effective learning."
      },
      {
        "title": "TS Certificate",
        "note": "Certification programs to validate your TypeScript expertise.",
        "code": "// Info about online courses and exams."
      }
    ],
  AngularJS:
    [
      {
        "title": "AngularJS HOME",
        "note": "Starting point for learning AngularJS, a structural framework for dynamic web apps.",
        "code": "// Official site: https://angularjs.org/"
      },
      {
        "title": "AngularJS Intro",
        "note": "Understand the basics of AngularJS, including MVC architecture and two-way data binding.",
        "code": "<div ng-app=\"\" ng-init=\"name='AngularJS'\">{{name}}</div>"
      },
      {
        "title": "AngularJS Expressions",
        "note": "Bind data to HTML using expressions enclosed in double curly braces {{ }}.",
        "code": "{{ 5 + 5 }} <!-- Outputs: 10 -->"
      },
      {
        "title": "AngularJS Modules",
        "note": "Define AngularJS modules to encapsulate app components and dependencies.",
        "code": "var app = angular.module('myApp', []);"
      },
      {
        "title": "AngularJS Directives",
        "note": "Extend HTML with custom attributes to create reusable components.",
        "code": "<div ng-show=\"isVisible\">This is visible</div>"
      },
      {
        "title": "AngularJS Model",
        "note": "Bind HTML controls to model data using ng-model for two-way data binding.",
        "code": "<input ng-model=\"username\"> Hello, {{username}}"
      },
      {
        "title": "AngularJS Data Binding",
        "note": "Synchronize data between model and view automatically.",
        "code": "<input ng-model=\"age\"> Age is {{age}}"
      },
      {
        "title": "AngularJS Controllers",
        "note": "Define app logic by attaching controllers to HTML elements.",
        "code": "app.controller('MyCtrl', function($scope) { $scope.greet = 'Hello'; });"
      },
      {
        "title": "AngularJS Scopes",
        "note": "Scope objects act as the glue between controller and view.",
        "code": "$scope.message = 'Welcome!';"
      },
      {
        "title": "AngularJS Filters",
        "note": "Format data displayed to the user, such as currency or date formatting.",
        "code": "{{ amount | currency }}"
      },
      {
        "title": "AngularJS Services",
        "note": "Reusable singleton objects for data or logic shared across the app.",
        "code": "app.service('myService', function() { this.data = 'Service Data'; });"
      },
      {
        "title": "AngularJS Http",
        "note": "Perform asynchronous HTTP requests for data exchange.",
        "code": "$http.get('/api/data').then(response => { $scope.data = response.data; });"
      },
      {
        "title": "AngularJS Tables",
        "note": "Display data in tabular form with ng-repeat for dynamic rows.",
        "code": "<tr ng-repeat=\"item in items\"><td>{{item.name}}</td></tr>"
      },
      {
        "title": "AngularJS Select",
        "note": "Bind select options to arrays or objects using ng-options.",
        "code": "<select ng-model=\"selected\" ng-options=\"item for item in items\"></select>"
      },
      {
        "title": "AngularJS SQL",
        "note": "Integrate AngularJS with backend databases using APIs.",
        "code": "// Typically handled via HTTP requests to server-side SQL APIs."
      },
      {
        "title": "AngularJS DOM",
        "note": "Manipulate DOM elements and respond to user interactions.",
        "code": "ng-click=\"doSomething()\""
      },
      {
        "title": "AngularJS Events",
        "note": "Handle user and browser events using built-in directives.",
        "code": "<button ng-click=\"alert('Clicked!')\">Click me</button>"
      },
      {
        "title": "AngularJS Forms",
        "note": "Create and manage forms with validation and user input binding.",
        "code": "<form name=\"myForm\"><input ng-model=\"user.name\" required></form>"
      },
      {
        "title": "AngularJS Validation",
        "note": "Validate form fields using AngularJS built-in validation.",
        "code": "<span ng-show=\"myForm.name.$error.required\">Name is required</span>"
      },
      {
        "title": "AngularJS API",
        "note": "Use AngularJS APIs for extending and customizing app behavior.",
        "code": "// Refer to AngularJS documentation for available APIs."
      },
      {
        "title": "AngularJS W3.CSS",
        "note": "Combine AngularJS with W3.CSS for styling web applications.",
        "code": "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">"
      },
      {
        "title": "AngularJS Includes",
        "note": "Include HTML fragments using ng-include for modular templates.",
        "code": "<div ng-include=\"'header.html'\"></div>"
      },
      {
        "title": "AngularJS Animations",
        "note": "Add animation effects to your app using ngAnimate module.",
        "code": "app.animation('.my-animation', function() { /* animation code */ });"
      },
      {
        "title": "AngularJS Routing",
        "note": "Configure client-side routes for single-page applications.",
        "code": "app.config(function($routeProvider) { $routeProvider.when('/home', { templateUrl: 'home.html' }); });"
      },
      {
        "title": "AngularJS Application",
        "note": "Build complete AngularJS applications with modular structure and MVC pattern.",
        "code": "// Use modules, controllers, services, and views together."
      },
      {
        "title": "AngularJS Examples",
        "note": "Explore sample AngularJS projects and code snippets.",
        "code": "// See official tutorials and GitHub repos."
      },
      {
        "title": "AngularJS Syllabus",
        "note": "Comprehensive learning plan covering all AngularJS topics.",
        "code": "// Follow tutorials progressively from basics to advanced."
      },
      {
        "title": "AngularJS Study Plan",
        "note": "Organize your AngularJS learning schedule for better retention.",
        "code": "// Plan daily or weekly milestones."
      },
      {
        "title": "AngularJS Certificate",
        "note": "Certification options to prove your AngularJS skills.",
        "code": "// Look for online courses and exams."
      },
      {
        "title": "AngularJS Reference",
        "note": "Detailed API reference and documentation for AngularJS.",
        "code": "// Official docs: https://docs.angularjs.org/api"
      }
    ],
  Git:
    [
      {
        "title": "Git HOME",
        "note": "Starting point for learning Git, the distributed version control system.",
        "code": "// Official site: https://git-scm.com/"
      },
      {
        "title": "Git Intro",
        "note": "Introduction to Git concepts like repositories, commits, and branches.",
        "code": "git init"
      },
      {
        "title": "Git Install",
        "note": "Steps to install Git on different operating systems.",
        "code": "// Download from https://git-scm.com/downloads"
      },
      {
        "title": "Git Config",
        "note": "Configure user details and preferences for Git.",
        "code": "git config --global user.name \"Your Name\"\ngit config --global user.email you@example.com"
      },
      {
        "title": "Git Get Started",
        "note": "Initialize a repository and make your first commit.",
        "code": "git init\ngit add .\ngit commit -m \"Initial commit\""
      },
      {
        "title": "Git New Files",
        "note": "Track new files by adding them to the staging area.",
        "code": "git add filename.txt"
      },
      {
        "title": "Git Staging",
        "note": "Prepare changes to be committed using the staging area.",
        "code": "git add file1.txt file2.txt"
      },
      {
        "title": "Git Commit",
        "note": "Save staged changes to the local repository with a message.",
        "code": "git commit -m \"Describe your changes\""
      },
      {
        "title": "Git Tagging",
        "note": "Label specific commits with tags for releases or versions.",
        "code": "git tag v1.0"
      },
      {
        "title": "Git Stash",
        "note": "Temporarily save changes without committing them.",
        "code": "git stash\n// To apply stash later: git stash apply"
      },
      {
        "title": "Git History",
        "note": "View the commit history of the repository.",
        "code": "git log"
      },
      {
        "title": "Git Help",
        "note": "Access Git documentation and help commands.",
        "code": "git help commit\n// or\nman git-commit"
      },
      {
        "title": "Git Branch",
        "note": "Create and manage branches for parallel development.",
        "code": "git branch feature-branch\ngit checkout feature-branch"
      },
      {
        "title": "Git Merge",
        "note": "Combine changes from different branches.",
        "code": "git checkout main\ngit merge feature-branch"
      },
      {
        "title": "Git Workflow",
        "note": "Best practices for using Git in development workflows.",
        "code": "// Example: Feature branching and pull requests"
      },
      {
        "title": "Git Best Practices",
        "note": "Guidelines for writing clear commits and managing branches.",
        "code": "// Commit early, commit often; use meaningful messages."
      },
      {
        "title": "Git Glossary",
        "note": "Definitions of common Git terms like commit, branch, merge.",
        "code": "// Reference terms in Git docs."
      },
      {
        "title": "GitHub Get Started",
        "note": "Set up a GitHub account and create your first repository.",
        "code": "// Sign up at https://github.com"
      },
      {
        "title": "Git What is SSH?",
        "note": "Use SSH keys to securely connect to GitHub repositories.",
        "code": "ssh-keygen -t rsa -b 4096 -C \"you@example.com\""
      },
      {
        "title": "GitHub Add SSH",
        "note": "Add your SSH public key to GitHub for authentication.",
        "code": "// Copy key: cat ~/.ssh/id_rsa.pub"
      },
      {
        "title": "GitHub Set Remote",
        "note": "Link local repositories to GitHub remotes for pushing and pulling.",
        "code": "git remote add origin git@github.com:user/repo.git"
      },
      {
        "title": "GitHub Edit Code",
        "note": "Modify files directly in the GitHub web interface.",
        "code": "// Use GitHub's online editor."
      },
      {
        "title": "Pull from GitHub",
        "note": "Fetch and merge changes from the remote repository.",
        "code": "git pull origin main"
      },
      {
        "title": "Push to GitHub",
        "note": "Upload your commits to the remote GitHub repository.",
        "code": "git push origin main"
      },
      {
        "title": "GitHub Branch",
        "note": "Manage branches on GitHub to organize development.",
        "code": "// Create, switch, or delete branches on GitHub UI"
      },
      {
        "title": "Pull Branch from GitHub",
        "note": "Fetch and checkout branches from GitHub.",
        "code": "git fetch\ngit checkout feature-branch"
      },
      {
        "title": "Push Branch to GitHub",
        "note": "Push your local branch to GitHub for collaboration.",
        "code": "git push origin feature-branch"
      },
      {
        "title": "GitHub Flow",
        "note": "A lightweight branching model for efficient collaboration.",
        "code": "// Feature branches, pull requests, and code reviews"
      },
      {
        "title": "GitHub Pages",
        "note": "Host static websites directly from GitHub repositories.",
        "code": "// Enable Pages from repo settings"
      },
      {
        "title": "Git GUI Clients",
        "note": "Use graphical tools to manage Git repositories visually.",
        "code": "// Examples: GitHub Desktop, Sourcetree, GitKraken"
      },
      {
        "title": "GitHub Fork",
        "note": "Create a copy of a repository to contribute without affecting the original.",
        "code": "// Use GitHub's Fork button"
      },
      {
        "title": "Git Clone from GitHub",
        "note": "Download a repository from GitHub to your local machine.",
        "code": "git clone git@github.com:user/repo.git"
      },
      {
        "title": "GitHub Send Pull Request",
        "note": "Propose changes from your fork or branch to be merged into the main project.",
        "code": "// Use GitHub UI to create a pull request"
      },
      {
        "title": "Git Revert",
        "note": "Undo a commit by creating a new commit that reverses changes.",
        "code": "git revert <commit-hash>"
      },
      {
        "title": "Git Reset",
        "note": "Move the HEAD pointer to undo commits or staging changes.",
        "code": "git reset --hard <commit-hash>"
      },
      {
        "title": "Git Amend",
        "note": "Modify the most recent commit.",
        "code": "git commit --amend -m \"New commit message\""
      },
      {
        "title": "Git Rebase",
        "note": "Reapply commits on top of another base tip for cleaner history.",
        "code": "git rebase main"
      },
      {
        "title": "Git Reflog",
        "note": "View the history of all your HEAD references.",
        "code": "git reflog"
      },
      {
        "title": "Git Recovery",
        "note": "Techniques to recover lost commits or branches.",
        "code": "// Use reflog and reset"
      },
      {
        "title": "Git .gitignore",
        "note": "Specify files and folders Git should ignore.",
        "code": "*.log\nnode_modules/"
      },
      {
        "title": "Git .gitattributes",
        "note": "Control attributes like line endings and merge strategies.",
        "code": "*.txt text eol=lf"
      },
      {
        "title": "Git Large File Storage (LFS)",
        "note": "Manage large files efficiently in Git repositories.",
        "code": "git lfs track \"*.psd\""
      },
      {
        "title": "Git Signing Commits/Tags",
        "note": "Cryptographically sign commits and tags to verify authenticity.",
        "code": "git commit -S -m \"Signed commit\""
      },
      {
        "title": "Git Cherrypick & Patch",
        "note": "Apply individual commits from one branch to another.",
        "code": "git cherry-pick <commit-hash>"
      },
      {
        "title": "Git Merge Conflicts",
        "note": "Resolve conflicts that occur when merging branches.",
        "code": "// Manually edit conflicted files, then git add and commit"
      },
      {
        "title": "Git CI/CD",
        "note": "Integrate Git with Continuous Integration and Delivery pipelines.",
        "code": "// Configure with tools like Jenkins, GitHub Actions"
      },
      {
        "title": "Git Hooks",
        "note": "Scripts triggered by Git actions like commit or push.",
        "code": ".git/hooks/pre-commit"
      },
      {
        "title": "Git Submodules",
        "note": "Include and manage external Git repositories within a parent repo.",
        "code": "git submodule add https://github.com/example/repo.git"
      },
      {
        "title": "Git Remote Advanced",
        "note": "Advanced remote repository management techniques.",
        "code": "git remote set-url origin new_url"
      },
      {
        "title": "Git Exercises",
        "note": "Practice problems to improve your Git skills.",
        "code": "// Try branching, merging, and resolving conflicts"
      },
      {
        "title": "Git Quiz",
        "note": "Test your Git knowledge with quizzes.",
        "code": "// Use online Git quiz platforms"
      },
      {
        "title": "Git Syllabus",
        "note": "Structured learning path for mastering Git.",
        "code": "// Follow tutorials from beginner to advanced"
      },
      {
        "title": "Git Study Plan",
        "note": "Organize your study schedule for efficient Git learning.",
        "code": "// Plan daily topics and exercises"
      },
      {
        "title": "Git Certificate",
        "note": "Certification programs to validate your Git expertise.",
        "code": "// Explore certificates from platforms like GitHub, Coursera"
      }
    ],
  PostgrlSQL: [
  
    {
      "title": "PostgreSQL Home",
      "note": "Starting point for PostgreSQL tutorials and resources.",
      "code": "// Official site: https://www.postgresql.org/"
    },
    {
      "title": "PostgreSQL Intro",
      "note": "Introduction to PostgreSQL, a powerful open-source relational database.",
      "code": "// PostgreSQL supports advanced SQL features and extensibility."
    },
    {
      "title": "PostgreSQL Install",
      "note": "How to install PostgreSQL on various operating systems.",
      "code": "// Download installer from https://www.postgresql.org/download/"
    },
    {
      "title": "PostgreSQL Get Started",
      "note": "Basics of connecting and running your first queries.",
      "code": "psql -U username -d database_name"
    },
    {
      "title": "PostgreSQL pgAdmin 4",
      "note": "Using pgAdmin 4 GUI tool to manage PostgreSQL databases.",
      "code": "// Download and install pgAdmin from https://www.pgadmin.org/"
    },
    {
      "title": "PostgreSQL CREATE TABLE",
      "note": "Create new tables to store your data.",
      "code": "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(50));"
    },
    {
      "title": "PostgreSQL INSERT INTO",
      "note": "Insert data into your tables.",
      "code": "INSERT INTO users (name) VALUES ('Alice');"
    },
    {
      "title": "PostgreSQL Fetch Data",
      "note": "Retrieve data from tables using SELECT queries.",
      "code": "SELECT * FROM users;"
    },
    {
      "title": "PostgreSQL ADD COLUMN",
      "note": "Add new columns to existing tables.",
      "code": "ALTER TABLE users ADD COLUMN email VARCHAR(100);"
    },
    {
      "title": "PostgreSQL UPDATE",
      "note": "Update existing records.",
      "code": "UPDATE users SET email = 'alice@example.com' WHERE id = 1;"
    },
    {
      "title": "PostgreSQL ALTER COLUMN",
      "note": "Modify column definitions.",
      "code": "ALTER TABLE users ALTER COLUMN email TYPE TEXT;"
    },
    {
      "title": "PostgreSQL DROP COLUMN",
      "note": "Remove columns from tables.",
      "code": "ALTER TABLE users DROP COLUMN email;"
    },
    {
      "title": "PostgreSQL DELETE",
      "note": "Delete records from tables.",
      "code": "DELETE FROM users WHERE id = 1;"
    },
    {
      "title": "PostgreSQL DROP TABLE",
      "note": "Remove entire tables from the database.",
      "code": "DROP TABLE users;"
    },
    {
      "title": "Create Demo Database",
      "note": "Create a sample database for practice and testing.",
      "code": "CREATE DATABASE demo_db;"
    },
    {
      "title": "PostgreSQL Syntax",
      "note": "Understand the syntax rules of PostgreSQL SQL language.",
      "code": "// SQL keywords are case-insensitive."
    },
    {
      "title": "PostgreSQL Operators",
      "note": "Use arithmetic, comparison, and logical operators in queries.",
      "code": "SELECT * FROM users WHERE age > 18 AND active = TRUE;"
    },
    {
      "title": "PostgreSQL SELECT",
      "note": "Basic data retrieval from tables.",
      "code": "SELECT name, age FROM users;"
    },
    {
      "title": "PostgreSQL SELECT DISTINCT",
      "note": "Get unique values from a column.",
      "code": "SELECT DISTINCT city FROM users;"
    },
    {
      "title": "PostgreSQL WHERE",
      "note": "Filter rows based on conditions.",
      "code": "SELECT * FROM users WHERE active = TRUE;"
    },
    {
      "title": "PostgreSQL ORDER BY",
      "note": "Sort query results.",
      "code": "SELECT * FROM users ORDER BY age DESC;"
    },
    {
      "title": "PostgreSQL LIMIT",
      "note": "Limit the number of rows returned.",
      "code": "SELECT * FROM users LIMIT 10;"
    },
    {
      "title": "PostgreSQL MIN and MAX",
      "note": "Find minimum and maximum values in a column.",
      "code": "SELECT MIN(age), MAX(age) FROM users;"
    },
    {
      "title": "PostgreSQL COUNT",
      "note": "Count rows matching a query.",
      "code": "SELECT COUNT(*) FROM users WHERE active = TRUE;"
    },
    {
      "title": "PostgreSQL SUM",
      "note": "Calculate the total sum of a numeric column.",
      "code": "SELECT SUM(salary) FROM employees;"
    },
    {
      "title": "PostgreSQL AVG",
      "note": "Calculate the average value of a numeric column.",
      "code": "SELECT AVG(age) FROM users;"
    },
    {
      "title": "PostgreSQL LIKE",
      "note": "Search for patterns in string columns.",
      "code": "SELECT * FROM users WHERE name LIKE 'A%';"
    },
    {
      "title": "PostgreSQL IN",
      "note": "Check if a value matches any value in a list.",
      "code": "SELECT * FROM users WHERE city IN ('New York', 'Los Angeles');"
    },
    {
      "title": "PostgreSQL BETWEEN",
      "note": "Filter values within a range.",
      "code": "SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-01-31';"
    },
    {
      "title": "PostgreSQL AS",
      "note": "Assign aliases to columns or tables.",
      "code": "SELECT name AS username FROM users;"
    },
    {
      "title": "PostgreSQL Joins",
      "note": "Combine rows from multiple tables based on relationships.",
      "code": "// INNER JOIN, LEFT JOIN, RIGHT JOIN examples"
    },
    {
      "title": "PostgreSQL INNER JOIN",
      "note": "Return matching rows from both tables.",
      "code": "SELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.id;"
    },
    {
      "title": "PostgreSQL LEFT JOIN",
      "note": "Return all rows from left table and matched from right.",
      "code": "SELECT * FROM customers LEFT JOIN orders ON customers.id = orders.customer_id;"
    },
    {
      "title": "PostgreSQL RIGHT JOIN",
      "note": "Return all rows from right table and matched from left.",
      "code": "SELECT * FROM orders RIGHT JOIN customers ON orders.customer_id = customers.id;"
    },
    {
      "title": "PostgreSQL FULL JOIN",
      "note": "Return rows when there is a match in one of the tables.",
      "code": "SELECT * FROM table1 FULL JOIN table2 ON table1.id = table2.id;"
    },
    {
      "title": "PostgreSQL CROSS JOIN",
      "note": "Return the Cartesian product of rows from tables.",
      "code": "SELECT * FROM table1 CROSS JOIN table2;"
    },
    {
      "title": "PostgreSQL UNION",
      "note": "Combine results of two SELECT queries, removing duplicates.",
      "code": "SELECT city FROM customers UNION SELECT city FROM suppliers;"
    },
    {
      "title": "PostgreSQL GROUP BY",
      "note": "Group rows sharing values for aggregate functions.",
      "code": "SELECT city, COUNT(*) FROM customers GROUP BY city;"
    },
    {
      "title": "PostgreSQL HAVING",
      "note": "Filter groups after aggregation.",
      "code": "SELECT city, COUNT(*) FROM customers GROUP BY city HAVING COUNT(*) > 5;"
    },
    {
      "title": "PostgreSQL EXISTS",
      "note": "Check if subquery returns any rows.",
      "code": "SELECT * FROM customers WHERE EXISTS (SELECT 1 FROM orders WHERE orders.customer_id = customers.id);"
    },
    {
      "title": "PostgreSQL ANY",
      "note": "Compare a value to any value in a list or subquery.",
      "code": "SELECT * FROM products WHERE price > ANY (SELECT price FROM discounts);"
    },
    {
      "title": "PostgreSQL ALL",
      "note": "Compare a value to all values in a list or subquery.",
      "code": "SELECT * FROM products WHERE price > ALL (SELECT price FROM discounts);"
    },
    {
      "title": "PostgreSQL CASE",
      "note": "Conditional expressions in queries.",
      "code": "SELECT name, CASE WHEN age >= 18 THEN 'Adult' ELSE 'Minor' END AS age_group FROM users;"
    },
    {
      "title": "PostgreSQL Exercises",
      "note": "Practice problems to reinforce PostgreSQL skills.",
      "code": "// Write queries to solve real-world scenarios"
    },
    {
      "title": "PostgreSQL Quiz",
      "note": "Test your knowledge with PostgreSQL quizzes.",
      "code": "// Use online platforms or create your own"
    },
    {
      "title": "PostgreSQL Syllabus",
      "note": "A structured course outline to learn PostgreSQL.",
      "code": "// Follow topics from basics to advanced"
    },
    {
      "title": "PostgreSQL Study Plan",
      "note": "Organized schedule to master PostgreSQL efficiently.",
      "code": "// Daily or weekly study goals"
    },
    {
      "title": "PostgreSQL Certificate",
      "note": "Certification programs to validate your PostgreSQL knowledge.",
      "code": "// Look for certifications from vendors or online courses"
    }
  ],
  MongoDB:
    [
      {
        "title": "MongoDB HOME",
        "note": "Starting point for MongoDB tutorials and documentation.",
        "code": "// Official site: https://www.mongodb.com/"
      },
      {
        "title": "MongoDB Get Started",
        "note": "Introduction to MongoDB, a NoSQL document database.",
        "code": "// Install MongoDB and start the server."
      },
      {
        "title": "MongoDB Query API",
        "note": "Learn how to query MongoDB using its rich API.",
        "code": "db.collection.find({})"
      },
      {
        "title": "MongoDB Create DB",
        "note": "Create a new MongoDB database.",
        "code": "use myNewDatabase"
      },
      {
        "title": "MongoDB Collection",
        "note": "Create and manage collections (tables) in MongoDB.",
        "code": "db.createCollection('users')"
      },
      {
        "title": "MongoDB Insert",
        "note": "Insert documents (records) into a collection.",
        "code": "db.users.insertOne({name: 'Alice', age: 25})"
      },
      {
        "title": "MongoDB Find",
        "note": "Retrieve documents using queries.",
        "code": "db.users.find({age: {$gt: 20}})"
      },
      {
        "title": "MongoDB Update",
        "note": "Update existing documents.",
        "code": "db.users.updateOne({name: 'Alice'}, {$set: {age: 26}})"
      },
      {
        "title": "MongoDB Delete",
        "note": "Delete documents from a collection.",
        "code": "db.users.deleteOne({name: 'Alice'})"
      },
      {
        "title": "MongoDB Query Operators",
        "note": "Use operators like $gt, $lt, $in to filter data.",
        "code": "db.users.find({age: {$in: [25, 30, 35]}})"
      },
      {
        "title": "MongoDB Update Operators",
        "note": "Use operators like $set, $inc for updating fields.",
        "code": "db.users.updateOne({}, {$inc: {age: 1}})"
      },
      {
        "title": "MongoDB Aggregations",
        "note": "Perform advanced data aggregation and grouping.",
        "code": "db.orders.aggregate([{$group: {_id: '$status', count: {$sum: 1}}}])"
      },
      {
        "title": "MongoDB Indexing/Search",
        "note": "Create indexes for faster queries and use text search.",
        "code": "db.users.createIndex({name: 'text'})"
      },
      {
        "title": "MongoDB Validation",
        "note": "Enforce data validation rules on collections.",
        "code": "{ validator: { age: { $gte: 18 } } }"
      },
      {
        "title": "MongoDB Data API",
        "note": "Interact with MongoDB using RESTful Data API endpoints.",
        "code": "// Use MongoDB Atlas Data API for serverless access"
      },
      {
        "title": "MongoDB Drivers",
        "note": "Use official drivers to connect MongoDB with various languages.",
        "code": "// Examples for Node.js, Python, Java, C#"
      },
      {
        "title": "MongoDB Node.js Driver",
        "note": "Using the MongoDB driver with Node.js applications.",
        "code": "const client = new MongoClient(uri); await client.connect();"
      },
      {
        "title": "MongoDB Charts",
        "note": "Visualize MongoDB data using MongoDB Charts.",
        "code": "// Create dashboards and embed charts"
      },
      {
        "title": "MongoDB Exercises",
        "note": "Practice problems to build MongoDB skills.",
        "code": "// Create queries, insert and update documents"
      },
      {
        "title": "MongoDB Syllabus",
        "note": "Structured course outline for learning MongoDB.",
        "code": "// Progress from basics to advanced topics"
      },
      {
        "title": "MongoDB Study Plan",
        "note": "Organized schedule to master MongoDB efficiently.",
        "code": "// Daily or weekly learning goals"
      },
      {
        "title": "MongoDB Certificate",
        "note": "Certification programs to validate MongoDB expertise.",
        "code": "// MongoDB University offers official certificates"
      }
    ],
  Kotlin: [
    {
      "title": "Kotlin HOME",
      "note": "Starting point for Kotlin tutorials and resources.",
      "code": "// Official Kotlin website: https://kotlinlang.org/"
    },
    {
      "title": "Kotlin Intro",
      "note": "Introduction to Kotlin, a modern JVM-based programming language.",
      "code": "fun main() {\n    println(\"Hello, Kotlin!\")\n}"
    },
    {
      "title": "Kotlin Get Started",
      "note": "Set up Kotlin environment and write your first program.",
      "code": "// Install IntelliJ IDEA and Kotlin plugin, then run a Kotlin file."
    },
    {
      "title": "Kotlin Syntax",
      "note": "Learn Kotlin’s concise and expressive syntax.",
      "code": "val greeting: String = \"Hello\"\nprintln(greeting)"
    },
    {
      "title": "Kotlin Output",
      "note": "Print output to the console.",
      "code": "println(\"Hello, World!\")"
    },
    {
      "title": "Kotlin Comments",
      "note": "Use single-line and multi-line comments.",
      "code": "// This is a comment\n/* This is a\n   multi-line comment */"
    },
    {
      "title": "Kotlin Variables",
      "note": "Declare mutable and immutable variables with `var` and `val`.",
      "code": "var age = 25\nval name = \"Alice\""
    },
    {
      "title": "Kotlin Data Types",
      "note": "Basic types like Int, Double, String, Boolean, and more.",
      "code": "val number: Int = 42\nval pi: Double = 3.14\nval isActive: Boolean = true"
    },
    {
      "title": "Kotlin Operators",
      "note": "Perform arithmetic, logical, and comparison operations.",
      "code": "val sum = 5 + 3\nval isEqual = (sum == 8)"
    },
    {
      "title": "Kotlin Strings",
      "note": "Work with strings and string templates.",
      "code": "val message = \"Hello, $name!\""
    },
    {
      "title": "Kotlin Booleans",
      "note": "Use boolean values for conditional logic.",
      "code": "val isAdult = age > 18"
    },
    {
      "title": "Kotlin If...Else",
      "note": "Control flow using if, else if, and else statements.",
      "code": "if (age > 18) {\n    println(\"Adult\")\n} else {\n    println(\"Minor\")\n}"
    },
    {
      "title": "Kotlin When",
      "note": "Use `when` as a powerful switch-case alternative.",
      "code": "when(age) {\n    18 -> println(\"Just became adult\")\n    in 19..65 -> println(\"Adult\")\n    else -> println(\"Other\")\n}"
    },
    {
      "title": "Kotlin While Loop",
      "note": "Execute code repeatedly while a condition is true.",
      "code": "var i = 0\nwhile(i < 5) {\n    println(i)\n    i++\n}"
    },
    {
      "title": "Kotlin Break/Continue",
      "note": "Control loop execution with break and continue.",
      "code": "for(i in 1..10) {\n    if(i == 5) break\n    if(i % 2 == 0) continue\n    println(i)\n}"
    },
    {
      "title": "Kotlin Arrays",
      "note": "Store fixed-size collections of elements.",
      "code": "val numbers = arrayOf(1, 2, 3, 4)"
    },
    {
      "title": "Kotlin For Loop",
      "note": "Iterate over collections and ranges.",
      "code": "for (num in numbers) {\n    println(num)\n}"
    },
    {
      "title": "Kotlin Ranges",
      "note": "Define ranges of values to loop over or check membership.",
      "code": "for (i in 1..5) {\n    println(i)\n}"
    },
    {
      "title": "Kotlin Functions",
      "note": "Define reusable blocks of code with functions.",
      "code": "fun greet(name: String) {\n    println(\"Hello, $name!\")\n}"
    },
    {
      "title": "Kotlin Classes",
      "note": "Define blueprints for objects with properties and methods.",
      "code": "class Person(val name: String, var age: Int)"
    },
    {
      "title": "Kotlin OOP",
      "note": "Object-Oriented Programming concepts in Kotlin.",
      "code": "// Includes encapsulation, inheritance, and polymorphism."
    },
    {
      "title": "Kotlin Classes/Objects",
      "note": "Create and use class instances.",
      "code": "val p = Person(\"Alice\", 30)\nprintln(p.name)"
    },
    {
      "title": "Kotlin Constructors",
      "note": "Initialize objects using primary and secondary constructors.",
      "code": "class Person(val name: String) {\n    constructor(name: String, age: Int): this(name) {\n        // init\n    }\n}"
    },
    {
      "title": "Kotlin Class Functions",
      "note": "Define functions inside classes to operate on data.",
      "code": "class Person {\n    fun greet() {\n        println(\"Hi!\")\n    }\n}"
    },
    {
      "title": "Kotlin Inheritance",
      "note": "Create subclasses that inherit from superclasses.",
      "code": "open class Animal\nclass Dog : Animal()"
    },
    {
      "title": "Kotlin Examples",
      "note": "Practice Kotlin with real code examples.",
      "code": "// Examples demonstrating key concepts"
    },
    {
      "title": "Kotlin Compiler",
      "note": "Tools to compile Kotlin code into bytecode or native code.",
      "code": "// Use `kotlinc` command-line compiler"
    },
    {
      "title": "Kotlin Exercises",
      "note": "Hands-on coding problems to master Kotlin.",
      "code": "// Write functions, classes, and algorithms"
    },
    {
      "title": "Kotlin Quiz",
      "note": "Test your Kotlin knowledge with quizzes.",
      "code": "// Multiple choice and coding questions"
    },
    {
      "title": "Kotlin Syllabus",
      "note": "Structured curriculum for learning Kotlin.",
      "code": "// Step-by-step topics and assignments"
    },
    {
      "title": "Kotlin Study Plan",
      "note": "Organized schedule to efficiently learn Kotlin.",
      "code": "// Daily or weekly learning goals"
    },
    {
      "title": "Kotlin Certificate",
      "note": "Certification programs to validate Kotlin skills.",
      "code": "// Exams and certificates from official sources"
    }
  ],
  INTROTOBASICSPROGRAMMING:
    [
      {
        "title": "Intro",
        "note": "Introduction to basic programming concepts and fundamentals.",
        "code": "// Overview of programming basics"
      },
      {
        "title": "Programming",
        "note": "Writing instructions for computers to perform tasks.",
        "code": "// Write code to solve problems"
      },
      {
        "title": "Variables",
        "note": "Containers for storing data values that can change.",
        "code": "int age = 30;"
      },
      {
        "title": "If Statements",
        "note": "Control flow that executes code based on conditions.",
        "code": "if (age > 18) {\n  // adult logic\n}"
      },
      {
        "title": "Arrays",
        "note": "Collections of elements stored in a fixed-size sequential structure.",
        "code": "int[] numbers = {1, 2, 3, 4};"
      },
      {
        "title": "Loops",
        "note": "Repeat blocks of code while conditions are met.",
        "code": "for (int i = 0; i < 5; i++) {\n  // loop body\n}"
      },
      {
        "title": "Functions",
        "note": "Reusable blocks of code that perform specific tasks.",
        "code": "void greet() {\n  System.out.println(\"Hello\");\n}"
      },
      {
        "title": "Scope",
        "note": "Defines where variables and functions are accessible in code.",
        "code": "// Variables inside functions are local scope"
      },
      {
        "title": "Data Types",
        "note": "Different types of data such as integers, floats, strings, and booleans.",
        "code": "int age = 30;\nfloat price = 19.99f;\nboolean isActive = true;"
      },
      {
        "title": "Operators",
        "note": "Symbols that perform operations on variables and values.",
        "code": "int sum = 5 + 3;\nbool isEqual = (a == b);"
      },
      {
        "title": "Comments",
        "note": "Non-executable text to explain code, ignored by compilers/interpreters.",
        "code": "// This is a single-line comment\n/* This is a multi-line comment */"
      },
      {
        "title": "Bits and Bytes",
        "note": "Fundamental units of digital data in computing.",
        "code": "// 1 byte = 8 bits"
      },
      {
        "title": "Binary Numbers",
        "note": "Number system using base 2, representing data with 0s and 1s.",
        "code": "1010 (binary) = 10 (decimal)"
      },
      {
        "title": "Hexadecimal Numbers",
        "note": "Base 16 number system used in programming and memory addressing.",
        "code": "0x1A (hex) = 26 (decimal)"
      },
      {
        "title": "Boolean Algebra",
        "note": "Mathematical logic dealing with true/false values.",
        "code": "true AND false = false"
      }
    ],
  Rust:
    [
      {
        "title": "Rust HOME",
        "note": "Starting point for Rust programming resources and documentation.",
        "code": "// Overview and official resources"
      },
      {
        "title": "Rust Intro",
        "note": "Introduction to Rust, a systems programming language focused on safety and performance.",
        "code": "// Hello, Rust!"
      },
      {
        "title": "Rust Get Started",
        "note": "Setup Rust environment and write your first program.",
        "code": "fn main() {\n    println!(\"Hello, Rust!\");\n}"
      },
      {
        "title": "Rust Syntax",
        "note": "Basic syntax rules for writing Rust programs.",
        "code": "// Variables, functions, and control flow syntax"
      },
      {
        "title": "Rust Output",
        "note": "Printing text to the console using println! macro.",
        "code": "println!(\"Hello, Rust!\");"
      },
      {
        "title": "Rust Comments",
        "note": "Single-line and multi-line comments in Rust code.",
        "code": "// This is a comment\n/* Multi-line\ncomment */"
      },
      {
        "title": "Rust Variables",
        "note": "Immutable by default; use 'mut' keyword for mutable variables.",
        "code": "let mut x = 5;\nx = 6;"
      },
      {
        "title": "Rust Data Types",
        "note": "Common Rust types: integers, floats, booleans, chars, tuples, arrays.",
        "code": "let x: i32 = 10;\nlet y: f64 = 3.14;\nlet is_true: bool = true;"
      },
      {
        "title": "Rust Constants",
        "note": "Declare constants with 'const' keyword; must have type annotation.",
        "code": "const MAX_POINTS: u32 = 100_000;"
      },
      {
        "title": "Rust Operators",
        "note": "Use arithmetic, comparison, logical, and assignment operators.",
        "code": "let sum = 5 + 3;\nlet is_equal = x == y;"
      },
      {
        "title": "Rust Booleans",
        "note": "Boolean values true and false for logical operations.",
        "code": "let is_active: bool = true;"
      },
      {
        "title": "Rust If..Else",
        "note": "Conditional branching with if, else if, and else.",
        "code": "if x > 5 {\n    println!(\"x is greater than 5\");\n} else {\n    println!(\"x is 5 or less\");\n}"
      },
      {
        "title": "Rust Match",
        "note": "Powerful pattern matching control flow.",
        "code": "match x {\n    1 => println!(\"One\"),\n    2 | 3 => println!(\"Two or Three\"),\n    _ => println!(\"Other\"),\n}"
      },
      {
        "title": "Rust Loops",
        "note": "Looping using loop, while, and for.",
        "code": "loop {\n    break;\n}\nwhile x < 10 {\n    x += 1;\n}\nfor i in 0..5 {\n    println!(\"{}\", i);\n}"
      },
      {
        "title": "Rust While Loops",
        "note": "Execute code while condition is true.",
        "code": "while x < 10 {\n    x += 1;\n}"
      },
      {
        "title": "Rust For Loops",
        "note": "Iterate over ranges, collections, or iterators.",
        "code": "for i in 0..5 {\n    println!(\"{}\", i);\n}"
      },
      {
        "title": "Rust Functions",
        "note": "Define reusable code blocks with fn keyword.",
        "code": "fn add(a: i32, b: i32) -> i32 {\n    a + b\n}"
      },
      {
        "title": "Rust Scope",
        "note": "Variables are scoped to the blocks in which they are declared.",
        "code": "{\n    let x = 5;\n    println!(\"{}\", x);\n} // x is not accessible here"
      },
      {
        "title": "Rust Strings",
        "note": "String slices (&str) and String type for owned, growable strings.",
        "code": "let s1 = \"hello\"; // &str\nlet mut s2 = String::from(\"hello\");"
      },
      {
        "title": "Rust Ownership",
        "note": "Core concept managing memory safety without garbage collection.",
        "code": "let s = String::from(\"hello\");\nlet s2 = s; // s moved, s not usable anymore"
      },
      {
        "title": "Rust Borrowing",
        "note": "References allow borrowing without taking ownership.",
        "code": "fn calculate_length(s: &String) -> usize {\n    s.len()\n}"
      },
      {
        "title": "Rust Data Structures",
        "note": "Built-in collections and compound types.",
        "code": "// Arrays, vectors, tuples, hash maps"
      },
      {
        "title": "Rust Arrays",
        "note": "Fixed-size collection of elements of the same type.",
        "code": "let a = [1, 2, 3, 4, 5];"
      },
      {
        "title": "Rust Vectors",
        "note": "Growable array type from the standard library.",
        "code": "let mut v = Vec::new();\nv.push(5);"
      },
      {
        "title": "Rust Tuples",
        "note": "Fixed-size grouping of elements with different types.",
        "code": "let tup: (i32, f64, u8) = (500, 6.4, 1);"
      },
      {
        "title": "Rust HashMap",
        "note": "Collection of key-value pairs from the standard library.",
        "code": "use std::collections::HashMap;\nlet mut scores = HashMap::new();\nscores.insert(String::from(\"Blue\"), 10);"
      },
      {
        "title": "Rust Structs",
        "note": "Custom data types with named fields.",
        "code": "struct User {\n    username: String,\n    email: String,\n    active: bool,\n}"
      },
      {
        "title": "Rust Enums",
        "note": "Type that can be one of several variants.",
        "code": "enum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n    ChangeColor(i32, i32, i32),\n}"
      }
    ],

}



















    

  
