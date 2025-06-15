/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "joshmcdev",
      removal: input?.stage === "production" ? "remove" : "remove",
      protect: false,
      home: "aws",
      providers: {
        aws: {
          region: "eu-west-2",
        },
      },
      region: "eu-west-2",
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
  console: {
    autodeploy: {
      target(event) {
        if (
          event.type === "branch" &&
          event.branch === "main" &&
          event.action === "pushed"
        ) {
          return { stage: "production" };
        }
      },
    },
  },
});
