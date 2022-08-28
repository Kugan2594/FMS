const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "blue", // primary color for all components,
                            "@menu-inline-toplevel-item-height": "80px",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
