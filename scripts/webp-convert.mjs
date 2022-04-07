#!/usr/bin/env zx
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

const imagesPath = "./public/images";
const destinationName = "dist";

function log(state, message) {
  let marker = chalk;
  switch (state) {
    case "success":
      marker = chalk.black.bgGreen;
      break;
    case "error":
      marker = chalk.white.bgRed.bold;
      break;
    case "info":
      marker = chalk.blue.bgBlack.bold;
      break;
  }
  console.log(marker(message));
}

function removeFileExtension(filename) {
  return filename.split(".")[0];
}

// Pass in empty array to builld all images
async function buildImages(images) {
  let fileArg = [`${imagesPath}/*.{jpg,png}`];
  if (images) fileArg = images;
  await imagemin(fileArg, {
    destination: `${imagesPath}/${destinationName}`,
    plugins: [imageminWebp({ quality: 75 })],
  }).then(() => {
    if (images) {
      log("success", `Images built:\n\t${images.join("\n\t")}`);
      return;
    }
    log("success", "Built all images");
  });
}

async function main() {
  // * Will build all images if destination do not exist.
  // * Probably because it's a fresh install.
  try {
    await quiet($`ls ${imagesPath}/${destinationName}`);
  } catch {
    await buildImages();
    return;
  }

  const imagesString = await quiet($`ls ${imagesPath}`);
  const images = await imagesString.stdout
    .split("\n")
    .filter((i) => !!i)
    .filter((i) => i !== destinationName);

  const imagesFromBuild = await quiet($`ls ${imagesPath}/${destinationName}`);
  const imagesConverted = await imagesFromBuild.stdout
    .split("\n")
    .filter((i) => !!i)
    .map(removeFileExtension);

  const imagesNotConverted = images.filter((i) => {
    return !imagesConverted.includes(removeFileExtension(i));
  });

  if (!imagesNotConverted.length) {
    log("info", "Already converted all images");
    return;
  }

  const imagesNotConvertedWithFilePaths = imagesNotConverted.map((i) => {
    return `${imagesPath}/${i}`;
  });

  await buildImages(imagesNotConvertedWithFilePaths);
}

await main();
