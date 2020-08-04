npm run build
sh autoCommit.sh npm发包
npm version patch
npm publish --registry=https://registry.npmjs.org --access public
