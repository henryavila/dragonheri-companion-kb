import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { createHash } from 'crypto'
import { join } from 'path'

const dataDir = join(import.meta.dirname, '..', 'public', 'data')
const files = readdirSync(dataDir).filter(f => f.endsWith('.js'))

const manifest = {}
for (const file of files) {
  const content = readFileSync(join(dataDir, file))
  const hash = createHash('md5').update(content).digest('hex').slice(0, 8)
  manifest[file] = hash
}

writeFileSync(
  join(dataDir, 'manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n'
)

console.log(`manifest.json generated (${files.length} files)`)
