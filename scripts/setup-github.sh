#!/bin/bash

# Setup GitHub Repository Script
# This script helps initialize a GitHub repository for this project

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) is not installed. Please install it first."
    echo "See https://cli.github.com/ for installation instructions."
    exit 1
fi

# Check if logged in to GitHub
if ! gh auth status &> /dev/null; then
    echo "You are not logged in to GitHub. Please run 'gh auth login' first."
    exit 1
fi

# Confirm repository creation
echo "This script will create a new GitHub repository for the Ubiquiti API Companion."
read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Repository creation canceled."
    exit 0
fi

# Get repository name
read -p "Enter repository name (default: ubiquiti-api-companion): " repo_name
repo_name=${repo_name:-ubiquiti-api-companion}

# Create repository
echo "Creating repository $repo_name..."
gh repo create $repo_name --public --description "A comprehensive and up-to-date Ubiquiti API library built on OpenAPI standards"

# Set up GitHub-specific README for the repository
if [ -f README.github.md ]; then
    echo "Using GitHub-specific README.md for the repository."
    cp README.github.md README.md
fi

# Set up git remote
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/$(gh api user | jq -r .login)/$repo_name.git

# Push to GitHub
echo "Pushing code to GitHub..."
git push -u origin main

# Create initial release
echo "Creating initial release..."
gh release create v0.1.0 \
    --title "v0.1.0" \
    --notes "Initial release of the Ubiquiti API Companion"

echo "GitHub repository setup complete!"
echo "Repository URL: https://github.com/$(gh api user | jq -r .login)/$repo_name"