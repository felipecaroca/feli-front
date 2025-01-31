import type { NextConfig } from 'next'
import fs from 'fs'
import path from 'path'

const env = (process.env.ENV_FILE || 'LOCAL').toLowerCase()
const envPath = path.resolve(process.cwd(), `.env.${env}.json`)
const json: Record<string, string> = fs.existsSync(envPath)? JSON.parse(fs.readFileSync(envPath, {encoding: 'utf8'})): {}
  

const nextConfig: NextConfig = {
  /* config options here */
  env: json,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react']
  },
  images: {
    domains: ['upload.wikimedia.org'] // TODO: cambiar al dominio donde se subirán las imagenes
  }
}

export default nextConfig
