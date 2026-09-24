import { execSync } from 'node:child_process'

// Only build during deploy, never on a local install.
if (process.env.GANDI) {
  execSync('npm run build', {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' },
  })
}
