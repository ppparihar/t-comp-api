module.exports = {
    plugins: {
      istanbul: {
        dir: "./test/coverage-report",
        reporters: ["text-summary", "lcov"],
        include: [
          "/t-comp-api/t-comp-api.html"
        ],
        exclude: [
          "/polymer/polymer.js",
          "/wecomponentsjs/webcomponents-lite.js"
        ]
      },
      local: {
        "browsers": ["chrome"]
      }
    }
  }
  