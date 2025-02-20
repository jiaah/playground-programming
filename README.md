# Code Practice Project

This is a space for practicing and learning various programming concepts and technologies.

## Getting Started

This project uses pnpm as its package manager.

### Installing pnpm

``` 
npm install -g pnpm
```	

### Installing Dependencies

Install dependencies for all projects

``` 
pnpm install 
```

Or install for specific project

``` 
cd [project-directory]
pnpm install
```

### Running Development Servers

Run all projects
```
pnpm dev
```

Or run individual project
```
cd [project-directory]
pnpm dev
```
각 프로젝트는 다음 포트에서 실행됩니다:

```
- React: http://localhost:3000
- Vanilla (Vite): http://localhost:3001
- Next.js (-p flag): http://localhost:3002
```

## Project Structure
### Why Vite for Vanilla Project?
- Development server that:
  - Handles TypeScript compilation
  - Resolves CORS issues
  - Provides instant HMR updates
- Enhanced module support:
  - No file extensions needed for imports
  - Direct node_modules imports (`import x from 'package'`)
  - Import non-JS files (CSS, JSON, etc.)