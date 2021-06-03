#!/usr/bin/env node

import * as fs from 'fs';
import commandLineArgs from 'command-line-args';
import nodeSassImport from 'node-sass-import';
import sass from 'sass';

const argOptions = [
  {
    name: 'source',
    alias: 's',
    type: String,
    description: 'Template file to render sass into.',
    defaultOption: true
  },
  {
    name: 'output',
    alias: 'o',
    type: String,
    description: 'Output file path.'
  }
];

const { source, output } = commandLineArgs(argOptions);

scssToCss(source).then((cssResult) => {
  const tsContent = `import { css } from 'lit';

export const style = css\`
${cssResult}
\`;
`;

  fs.writeFileSync(output, tsContent);
});

/**
 * Compile a scss file to css
 */
function scssToCss(sourceFilePath) {
  return new Promise((resolve, reject) => {
    sass.render(
      {
        file: sourceFilePath,
        importer: nodeSassImport
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.css.toString());
        }
      }
    );
  });
}
