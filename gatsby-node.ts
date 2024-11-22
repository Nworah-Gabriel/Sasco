const path = require('path');

exports.onCreateWebpackConfig = ({ actions }: any) => {
  const reduxFolderPath = path.resolve(__dirname, 'src/reduxfolder');
  console.log('Setting Webpack alias for reduxfolder:', reduxFolderPath);

  actions.setWebpackConfig({
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'src/images'),
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        reduxfolder: path.resolve(__dirname, 'src/reduxfolder'),
      },
    },
  });
};
