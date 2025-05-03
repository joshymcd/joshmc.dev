/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "joshmcdev",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const domain =
      {
        production: "joshmc.dev",
      }[$app.stage] || $app.stage + ".joshmc.dev";

    new sst.aws.Astro("PersonalSite", {
      domain: domain,
    });
  },
});
