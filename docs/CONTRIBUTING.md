# Contributing to the Ultimate Ubiquiti API Companion

Thank you for your interest in contributing to this project! We welcome contributions from anyone, whether you're a seasoned developer or just getting started.

## How to Contribute

Here are the ways you can contribute to the project:

1. **Report bugs and suggest features**: If you find a bug or have an idea for a new feature, please [create an issue](https://github.com/yourusername/ubiquiti-api-companion/issues/new).

2. **Improve documentation**: Documentation is crucial for any project. If you find any gaps or errors in the documentation, please help us improve it.

3. **Submit code changes**: If you've fixed a bug or implemented a new feature, submit a pull request.

4. **Share your use case**: Let us know how you're using the API, which can help us better understand how to improve it.

## Development Setup

1. **Fork and clone the repository**:
   ```bash
   git clone https://github.com/your-username/ubiquiti-api-companion.git
   cd ubiquiti-api-companion
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Run tests**:
   ```bash
   npm test
   ```

## Pull Request Process

1. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write code that follows the existing style
   - Add or update tests as needed
   - Update documentation to reflect your changes

3. **Commit your changes**:
   ```bash
   git commit -m "Description of your changes"
   ```

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Submit a pull request**: 
   - Fill out the pull request template
   - Reference any related issues
   - Explain what your changes do and why they should be included

## Code Style

- Follow TypeScript best practices
- Use consistent indentation (2 spaces)
- Use meaningful variable and function names
- Write comments for complex logic
- Add JSDoc comments for public API methods

## Adding API Endpoints

When adding new API endpoints:

1. Update the OpenAPI specification in `src/specs/`
2. Implement the endpoint in the appropriate API class
3. Add tests for the new endpoint
4. Document the endpoint in the API reference

## OpenAPI Specifications

The OpenAPI specifications in this project are crucial for documentation and client generation. When updating them:

1. Ensure they follow the OpenAPI 3.x specification
2. Keep them organized by logical groups
3. Include comprehensive descriptions, examples, and parameter validation
4. Run the update-specs.js script to validate your changes

## Testing

We use Jest for testing. All new features should include tests. To run the test suite:

```bash
npm test
```

## Commit Messages

Please follow these guidelines for commit messages:

- Use present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License.