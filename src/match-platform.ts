import path from "path";
import fs from "fs";

function getPath() {
  switch (process.platform) {
    case "win32":
      return path.join(__dirname, "../bin/mdbook-windows.exe");
    case "darwin":
      return path.join(__dirname, "../bin/mdbook-macos");
    default:
      return path.join(__dirname, "../bin/mdbook-linux");
  }
}

fs.copyFileSync(getPath(), path.join(__dirname, "../bin/mdbook.exe"));
