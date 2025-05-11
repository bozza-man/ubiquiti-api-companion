#!/bin/bash

# Setup GitHub Repository Script (auto version)
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

# Set repository name
repo_name="ubiquiti-api-companion"

echo "This script will create a new GitHub repository called $repo_name."
echo "Proceeding with automatic setup..."

# Create repository
echo "Creating repository $repo_name..."
gh repo create $repo_name --public --description "A comprehensive and up-to-date Ubiquiti API library built on OpenAPI standards" || echo "Repository may already exist, continuing..."

# Set up GitHub-specific README for the repository
if [ -f README.github.md ]; then
    echo "Using GitHub-specific README.md for the repository."
    cp README.github.md README.md
fi

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
fi

# Add and commit all files
git add .
git commit -m "Initial commit" || echo "Nothing to commit, continuing..."

# Rename default branch to main
git branch -M main

# Check if remote is already set
if ! git remote | grep -q "origin"; then
    echo "Setting git remote..."
    git remote add origin "https://github.com/$(gh api user | jq -r .login)/$repo_name.git"
else
    echo "Remote origin already exists"
fi

# Push to GitHub
echo "Pushing code to GitHub..."
git push -u origin main || echo "Failed to push to GitHub, you may need to do this manually"

# Create initial release
echo "Creating initial release..."
gh release create v0.1.0 \
    --title "v0.1.0" \
    --notes "Initial release of the Ubiquiti API Companion" || echo "Failed to create release, you may need to do this manually"

echo "GitHub repository setup complete!"
echo "Repository URL: https://github.com/$(gh api user | jq -r .login)/$repo_name"