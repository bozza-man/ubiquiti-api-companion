#!/usr/bin/env node

/**
 * This script generates client libraries from OpenAPI specifications
 * for various programming languages.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const SPECS_DIR = path.join(__dirname, '..', 'src', 'specs');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'generated');

// Specs to generate clients for
const SPECS = [
  {
    name: 'unifi-network',
    file: path.join(SPECS_DIR, 'unifi-network.yaml'),
    outputDir: path.join(OUTPUT_DIR, 'unifi-network')
  },
  {
    name: 'unifi-protect',
    file: path.join(SPECS_DIR, 'unifi-protect.yaml'),
    outputDir: path.join(OUTPUT_DIR, 'unifi-protect')
  },
  {
    name: 'ubiquiti-combined',
    file: path.join(SPECS_DIR, 'ubiquiti-combined.yaml'),
    outputDir: path.join(OUTPUT_DIR, 'ubiquiti-combined')
  }
];

async function main() {
  console.log('Generating client libraries from OpenAPI specs...');

  // Install required packages if they're not already installed
  try {
    require('openapi-typescript-codegen');
  } catch (e) {
    console.log('Installing openapi-typescript-codegen...');
    execSync('npm install --no-save openapi-typescript-codegen js-yaml', { stdio: 'inherit' });
  }

  const { generate } = require('openapi-typescript-codegen');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Process each spec
  for (const spec of SPECS) {
    try {
      if (!fs.existsSync(spec.file)) {
        console.warn(`⚠️ Spec file not found: ${spec.file} - skipping`);
        continue;
      }

      console.log(`Generating TypeScript client for ${spec.name}...`);

      // Make sure the output directory exists
      if (!fs.existsSync(spec.outputDir)) {
        fs.mkdirSync(spec.outputDir, { recursive: true });
      }

      // Generate TypeScript client
      await generate({
        input: spec.file,
        output: spec.outputDir,
        httpClient: 'axios',
        useOptions: true,
        useUnionTypes: true
      });

      console.log(`✅ TypeScript client for ${spec.name} generated.`);

      // Create an index file that re-exports everything
      const indexPath = path.join(spec.outputDir, 'index.ts');

      // Check if services directory exists and what files it contains
      const servicesDir = path.join(spec.outputDir, 'services');
      let servicesImport = '';

      if (fs.existsSync(servicesDir)) {
        // Check if index.ts exists in services
        if (fs.existsSync(path.join(servicesDir, 'index.ts'))) {
          servicesImport = "export * from './services/index';\n";
        } else {
          // Import all service files individually
          const serviceFiles = fs.readdirSync(servicesDir)
            .filter(file => file.endsWith('.ts'))
            .map(file => `export * from './services/${file.replace('.ts', '')}';`)
            .join('\n');

          if (serviceFiles) {
            servicesImport = serviceFiles + '\n';
          }
        }
      }

      fs.writeFileSync(indexPath, `// Generated TypeScript client for ${spec.name} API
// Re-export all generated files for easy importing
export * from './core/request';
export * from './core/ApiError';
export * from './core/ApiRequestOptions';
export * from './core/ApiResult';
export * from './core/CancelablePromise';
export * from './core/OpenAPI';
${servicesImport}
`);

      console.log(`✅ Index file created for ${spec.name}.`);
    } catch (error) {
      console.error(`Error generating client for ${spec.name}:`, error);
    }
  }

  // Create the main index.ts file that re-exports all clients
  try {
    const mainIndexPath = path.join(OUTPUT_DIR, 'index.ts');
    let mainIndexContent = `// Generated TypeScript clients for Ubiquiti APIs
// This file re-exports all generated clients for easy importing

`;

    for (const spec of SPECS) {
      if (fs.existsSync(path.join(spec.outputDir, 'index.ts'))) {
        const exportName = spec.name.replace(/-./g, x => x[1].toUpperCase());
        mainIndexContent += `// ${spec.name} API
export * as ${exportName} from './${path.basename(spec.outputDir)}';\n\n`;
      }
    }

    fs.writeFileSync(mainIndexPath, mainIndexContent);
    console.log('✅ Main index file created.');
  } catch (error) {
    console.error('Error creating main index file:', error);
  }

  console.log('Client library generation complete.');
}

main();