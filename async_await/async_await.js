import { readFile, writeFile } from 'node:fs/promises';

async function processFile() {
  try {
    const config = await readFile('config.json', 'utf-8');
    const data = await readFile(JSON.parse(config).dataFile, 'utf-8');
    await writeFile('output.txt', data);
    console.log('Done!');
  } catch (err) {
    console.error(err);
  }
}

processFile();