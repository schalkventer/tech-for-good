# Public People Frontend &middot; ![stability-wip](https://img.shields.io/badge/stability-stable-green.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

🌍 This repo contains the Tech for Good static site.

## Stack

Built with [Gatsby](https://www.gatsbyjs.org/)

The following Gatsby plugins are used:
- [gatsby-link](https://www.npmjs.com/package/gatsby-link)
- [gatsby-plugin-google-fonts](https://www.npmjs.com/package/gatsby-plugin-google-fonts)
- [gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)
- [gatsby-plugin-sass](https://www.npmjs.com/package/gatsby-plugin-sass)
- [gatsby-source-filesystem](https://www.npmjs.com/package/gatsby-source-filesystem)
- [gatsby-transformer-remark](https://www.npmjs.com/package/gatsby-transformer-remark)

## Conventions

#### Files
- Underlying file architecture corresponds to guidelines established in [Gatsby documentation](https://www.gatsbyjs.org/docs/).

#### CSS
- [Tailwind CSS](http://tailwindcss.com/) is included for CSS utility classes.

## Development

1. Clone this project by running `git clone https://github.com/schalkventer/tech-for-good.git`.
2. Make sure you have [NodeJS](https://nodejs.org/en/) installed.
3. Run `npm install` in the root folder of the repository.
4. Run `npm start` to spin up the development server.*
5. Open `localhost:8000` in your browser.

\* _Development server uses hot-reloading. Changes will reflect immediately on `localhost:8000` without refreshing the browser_.

## Deployment

1. Code is merged into `master` on Github.
3. [Netlify](https://www.netlify.com/) builds a new static site instance of the repo via `npm run build`.
4. If build is valid it will be deployed to [Netlify](https://www.netlify.com/) at `techforgood.org.za`.