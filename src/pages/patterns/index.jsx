import React from 'react'
import Pattern from './../../components/Pattern';
import { examples, } from './config.json';


const normaliseData = (data) => {
  const array = data.allMarkdownRemark.edges;
  const normalise = (result, value) => {
    return {
      ...result,
      [value.node.frontmatter.component]: { 
        html: value.node.html,
        responsive: value.node.frontmatter.responsive,
      }
    }
  }

  return array.reduce(normalise, {});
}


const buildPatterns = (docs, examples) => {
  return Object.keys(docs).map((name) => {
    if(!examples[name]) {
      return null;
    }

    return (
      <Pattern 
        title={name}
        responsive={docs[name].responsive}
        description={docs[name].html}
        iframes={examples[name]}
      />
    )
  })
}


export default function Patterns({ data }) {
  const docs = normaliseData(data);

  if (docs.length < 1) {
    return null;
  }

  return (
    <div>
      {buildPatterns(docs, examples)}
    </div>
  )
}
  

export const query = graphql`
  query DocumentationQuery {
    allMarkdownRemark {
      edges {
        node {
          id,
          html,
          frontmatter {
            component,
            responsive,
          },
        }
      }
    }
  }
`;