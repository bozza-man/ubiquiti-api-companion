# GitHub Setup Guide

This document outlines the GitHub integration features that have been set up for this project.

## Features Implemented

1. **GitHub Actions Workflows**
   - CI workflow for testing, building, and validating the project
   - Weekly scheduled job to update specs and create PRs
   - NPM publishing workflow triggered on release creation

2. **Issue Templates**
   - Bug report template with environment details
   - Feature request template for suggesting enhancements

3. **Pull Request Template**
   - Structured template for contributors
   - Checklist to ensure all necessary steps are completed

4. **GitHub-Specific README**
   - Enhanced README with badges and GitHub-specific content
   - Replaced during GitHub setup process

5. **Funding Configuration**
   - FUNDING.yml for setting up sponsorship options

6. **GitHub Setup Script**
   - Automated repository creation and initialization
   - Initial release creation

## How to Use

### Initialize GitHub Repository

Run the following command to set up a new GitHub repository:

```bash
npm run setup-github
```

This script will:
1. Check if GitHub CLI is installed
2. Create a new repository
3. Set up the initial commit
4. Push the code to GitHub
5. Create an initial v0.1.0 release

### GitHub Actions

GitHub Actions workflows will automatically run on:
- Push to main/master branch
- Pull requests to main/master branch
- Weekly schedule (Sunday at midnight UTC)
- Release creation

## Manual Setup (if script doesn't work)

If the automated script doesn't work, follow these steps:

1. Create a new repository on GitHub
2. Initialize the local repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Connect the local repository to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/yourusername/ubiquiti-api-companion.git
   git push -u origin main
   ```
4. Replace README.md with README.github.md contents
5. Create an initial release through the GitHub web interface

## Next Steps

After setting up the GitHub repository:

1. Set up branch protection rules for the main branch
2. Configure NPM_TOKEN secret for npm publishing
3. Update the FUNDING.yml with your sponsorship details
4. Set up Dependabot for automatic dependency updates