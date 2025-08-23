export const courseContent: Record<string, {
  id: string
  title: string
  explanation: string
  code?: string
  output?: string
  language?: string
}[]> = {
  'react-fundamentals': [
    {
      id: 'jsx-intro',
      title: 'Intro to JSX',
      explanation: `JSX lets you write HTML in JavaScript.\nIt’s used to describe UI in React.`,
      code: `const element = <h1>Hello, world!</h1>;`,
      output: `<h1>Hello, world!</h1>`,
      language: 'javascript',
    },
    {
      id: 'components',
      title: 'Components',
      explanation: `Components let you split the UI into independent pieces.`,
      code: `function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}`,
      language: 'javascript',
    },
  ],
  'node-js-api': [
    {
      id: 'setup-express',
      title: 'Setting Up Express',
      explanation: `Express is a web framework for Node.js. You can build APIs using it.`,
      code: `const express = require('express')\nconst app = express()\napp.listen(3000)`,
      output: `Server running at http://localhost:3000`,
      language: 'javascript',
    },
  ],
  // Add more courses...
}
