const sharp = require("sharp");
const fs = require("fs");

const sizes = [
  {
    name: "XSm",
    width: 360,
    height: 640,
  },
  {
    name: "SmMd",
    width: 1366,
    height: 768,
  },
  {
    name: "Lg",
    width: 1920,
    height: 1080,
  },
  {
    name: "Sm",
    width: 375,
    height: 667,
  },
  {
    name: "Md",
    width: 1440,
    height: 900,
  },
];

// sizes.map((size) => {
//   sharp("PHL.jpg")
//     .resize(size.width, size.height)
//     .toBuffer()
//     .then((data) => {
//       fs.writeFileSync(`heroImage${size.name}.jpg`, data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

sharp("PHL.jpg")
  .resize(450, 300)
  .toBuffer()
  .then((data) => {
    fs.writeFileSync(`PHLsm.jpg`, data);
  })
  .catch((err) => {
    console.log(err);
  });
