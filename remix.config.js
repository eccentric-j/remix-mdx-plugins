/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  mdx: async (filename) => {
    const [mdxAnnotations] = await Promise.all([
      import("mdx-annotations").then((mod) => {
        return mod.mdxAnnotations;
      }),
    ]);

    return {
      remarkPlugins: [mdxAnnotations.remark],
    };
  },
};
