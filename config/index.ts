import fs from "fs";
import path from "path";

// Load environment config based on NODE_ENV
function loadConfig() {
  const env = process.env.NODE_ENV || "local";
  const configPath = path.join(__dirname, `${env}.json`);

  if (!fs.existsSync(configPath)) {
    throw new Error(`Configuration file for environment ${env} not found`);
  }

  const configData = fs.readFileSync(configPath, "utf-8");
  return JSON.parse(configData);
}

// Load configuration and export it
const config = loadConfig();
export default config;
