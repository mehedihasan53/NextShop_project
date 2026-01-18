#!/usr/bin/env node

/**
 * Simple deployment helper script
 * Run with: node deploy.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 NextShop Backend Deployment Helper\n');

// Check if we're in the server directory
const currentDir = process.cwd();
const isInServerDir = fs.existsSync('package.json') && fs.existsSync('index.js');

if (!isInServerDir) {
    console.log('❌ Please run this script from the server directory:');
    console.log('   cd server');
    console.log('   node deploy.js');
    process.exit(1);
}

console.log('✅ Detected server directory');

// Check if Vercel CLI is installed
try {
    execSync('vercel --version', { stdio: 'ignore' });
    console.log('✅ Vercel CLI is installed');
} catch (error) {
    console.log('❌ Vercel CLI not found. Installing...');
    try {
        execSync('npm install -g vercel', { stdio: 'inherit' });
        console.log('✅ Vercel CLI installed successfully');
    } catch (installError) {
        console.log('❌ Failed to install Vercel CLI. Please install manually:');
        console.log('   npm install -g vercel');
        process.exit(1);
    }
}

// Check if user is logged in to Vercel
try {
    execSync('vercel whoami', { stdio: 'ignore' });
    console.log('✅ Logged in to Vercel');
} catch (error) {
    console.log('🔐 Please login to Vercel:');
    try {
        execSync('vercel login', { stdio: 'inherit' });
    } catch (loginError) {
        console.log('❌ Login failed. Please try again manually:');
        console.log('   vercel login');
        process.exit(1);
    }
}

// Deploy to Vercel
console.log('\n🚀 Deploying to Vercel...\n');

try {
    const output = execSync('vercel --prod --yes', {
        encoding: 'utf8',
        stdio: 'inherit'
    });

    console.log('\n🎉 Deployment successful!');
    console.log('\n📋 Next steps:');
    console.log('1. Copy your backend URL from above');
    console.log('2. Update your frontend environment variables');
    console.log('3. Test your API endpoints');

} catch (error) {
    console.log('\n❌ Deployment failed. Try manual deployment:');
    console.log('   vercel --prod');
    console.log('\nOr use the Vercel dashboard at https://vercel.com');
}