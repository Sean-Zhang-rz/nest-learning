import { readFile } from 'fs/promises';
import * as yaml from 'js-yaml';
import { join } from 'path';


export default async () => {  
  const configFilePath = join(process.cwd(), './.env/dev.yaml');

  const config = await readFile(configFilePath) as unknown as string;

  return yaml.load(config);
};
