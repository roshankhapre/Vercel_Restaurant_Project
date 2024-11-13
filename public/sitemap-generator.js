const Sitemap = require("react-router-sitemap").default;

new Sitemap(router)
  .build("https://www.darshancafe.com") // Replace with your domain
  .save("./public/sitemap.xml");
