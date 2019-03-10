const path = require('path')

module.exports = config => {
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.vue', '.css', '.html')

  const tsLoader = {
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/],
      context: __dirname,
      configFile: 'tsconfig.json'
    }
  }

  config.module.rules.push(
    Object.assign(
      {
        test: /((client|server)\.js)|(\.tsx?)$/,
        exclude: /node_modules/
      },
      tsLoader
    )
  )

  for (const rule of config.module.rules) {
    if (rule.loader === 'vue-loader') {
      rule.options.loaders = {
        ...rule.options.loaders,
        ts: tsLoader
      }
    }
  }

  config.resolve.alias['@'] = path.resolve(__dirname, 'src')

  return config
}
