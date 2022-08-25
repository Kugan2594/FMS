const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#eee", // primary color for all components,
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
