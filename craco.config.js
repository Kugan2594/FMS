const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#0920E1", // primary color for all components,
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
