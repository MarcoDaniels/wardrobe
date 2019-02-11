module.exports = (baseConfig, env, config) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('awesome-typescript-loader'),
                    options: {
                        transpileOnly: true,
                    },
                },
                require.resolve('react-docgen-typescript-loader'),
            ],
        },
        {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    );
    config.resolve.extensions.push('.ts', '.tsx', '.css', '.scss');
    return config;
};
