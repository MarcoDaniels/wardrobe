module.exports = (baseConfig, env, config) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            loader: require.resolve('awesome-typescript-loader'),
        },
        {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    );
    config.resolve.extensions.push('.ts', '.tsx', '.css', '.scss');
    return config;
};
