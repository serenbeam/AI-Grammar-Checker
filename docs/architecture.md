# Architecture

## Overview

O' Grammar Checker follows a layered and scalable architecture designed for maintainability, simplicity, and future extensibility.

The current architecture prioritizes:

- Clear separation of concerns
- Reusable components
- Predictable state management
- Scalable folder structure
- Incremental feature development

The architecture is intentionally lightweight for MVP development while remaining flexible enough for future production requirements.

---

## Architecture Principles

The project follows several core architectural principles:

### Separation of Concerns

Each folder and module has a single responsibility and should avoid handling unrelated logic.

### Reusability

Reusable components, hooks, and utilities are centralized to reduce duplication.

### Scalability

The project structure allows additional features and screens to be introduced without major refactoring.

### Maintainability

Consistent naming conventions and folder responsibilities improve long-term maintainability.

### Incremental Development

Features are introduced gradually through isolated feature branches and documented technical decisions.

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| React Native | Cross-platform mobile framework |
| TypeScript | Type safety and maintainability |
| React Navigation | Navigation management |
| Zustand | Global state management |
| AsyncStorage | Local persistence |
| Axios | HTTP client |
| FlashList | High performance list rendering |
| OpenRouter | AI gateway provider |
| Qwen3 | Grammar correction model |

---

## Project Structure

```text
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
│
├── components/
│   ├── common/
│   └── navigation/
│
├── constants/
├── hooks/
├── navigation/
├── screens/
├── services/
├── store/
├── theme/
├── types/
└── utils/
```

This structure is considered stable and should remain unchanged unless a significant architectural change is required.

---

## Layer Responsibilities

### assets

Contains static application resources.

Examples:

- Fonts
- Icons
- Images

---

### components

Contains reusable user interface components.

Subfolders:

- common
- navigation

---

### constants

Contains static values and application constants.

Examples:

- API constants
- Storage keys
- Configuration values

---

### hooks

Contains reusable custom React hooks.

Examples:

- Business logic hooks
- Shared state hooks

---

### navigation

Contains navigation configuration and navigators.

Examples:

- Root navigator
- Bottom tab navigator
- Stack navigator

---

### screens

Contains screen-level components.

Examples:

- Check Screen
- History Screen
- Settings Screen

---

### services

Contains external communication logic.

Examples:

- OpenRouter service
- Grammar service
- History service
- API clients

---

### store

Contains global application state using Zustand.

Examples:

- Grammar store
- History store
- Settings store

---

### theme

Contains centralized design tokens and theme definitions.

Examples:

- Colors
- Typography
- Spacing
- Shadow
- Radius

---

### types

Contains shared TypeScript types and interfaces.

Examples:

- API response types
- Common types
- Grammar types
- History types
- Settings types

---

### utils

Contains pure utility functions.

Examples:

- Date formatting
- String manipulation
- Response parsing

---

## Navigation Architecture

The application uses a combination of:

- Native Stack Navigator
- Bottom Tab Navigator

Current navigation structure:

```text
RootNavigator
│
└── BottomTabNavigator
    ├── CheckScreen
    ├── HistoryScreen
    └── SettingsScreen
```

This structure allows future screen expansion while keeping the MVP simple.

---

## State Management Architecture

Global state management is implemented using Zustand.

Current responsibilities include:

- Grammar results
- History persistence
- Settings state

General data flow:

```text
UI
 ↓
Store Action
 ↓
Service Layer
 ↓
Store Update
 ↓
UI Re-render
```

---

## Persistence Architecture

History persistence is implemented using Zustand Persist with AsyncStorage.

Flow:

```text
User Action
 ↓
Store Update
 ↓
Persist Middleware
 ↓
AsyncStorage
 ↓
Application Restart
 ↓
Hydration
 ↓
UI Rendering
```

This ensures history data survives application restarts.

---

## Service Layer Architecture

The service layer isolates API communication from presentation logic.

Flow:

```text
Screen
 ↓
Store Action
 ↓
Service Layer
 ↓
OpenRouter API
 ↓
Qwen3 Model
 ↓
Structured Response
```

---

## AI Integration Architecture

Grammar correction requests follow the flow below:

```text
User Input
 ↓
Input Validation
 ↓
OpenRouter Service
 ↓
Qwen3 Model
 ↓
Response Parsing
 ↓
History Persistence
 ↓
UI Rendering
```

This approach allows future AI provider replacement with minimal impact on application layers.

---

## Theme Architecture

The application uses centralized theme management.

Current capabilities:

- Shared color definitions
- Shared spacing system
- Shared typography system
- Shared shadow system
- Shared radius system

Future capabilities:

- Dark mode
- Runtime theme switching
- Custom themes

---

## Scalability Considerations

The current architecture has been designed to support future requirements including:

- iOS support
- Additional AI providers
- Multiple AI models
- Export functionality
- Open source contributions

---

## Future Architecture Evolution

Potential future improvements include:

- Feature-based modules
- Dependency injection
- TanStack Query integration
- Continuous Integration (CI)
- Automated testing

These improvements are intentionally deferred until they provide clear value to the project.
