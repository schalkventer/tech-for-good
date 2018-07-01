const loadFont = {
  resolve: 'gatsby-plugin-google-fonts',
  options: {
    fonts: [
      'roboto:400,700',
    ],
  },
};

const documentation = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `documentation`,
    path: `${__dirname}/src/`,
  },
};


module.exports = {
  plugins: [
    documentation,
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    loadFont,
    
  ],
};
