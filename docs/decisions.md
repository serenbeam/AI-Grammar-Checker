# Technical Decisions

## Purpose

This document records significant technical decisions made during the development of O' Grammar Checker.

The goal is to preserve architectural context, simplify future maintenance, and help contributors understand the reasoning behind implementation choices.

Decisions may be revisited as the application evolves.

---

## State Management

### Decision

Use Zustand as the global state management solution.

### Reasoning

- Lightweight and minimal boilerplate.
- Simple learning curve.
- Excellent TypeScript support.
- Easy integration with persistence middleware.
- Well suited for MVP-sized applications.

### Alternatives Considered

- Redux Toolkit
- React Context API

### Re-evaluation Trigger

This decision should be revisited if:

- Application complexity increases significantly.
- Server state management becomes dominant.
- Multiple independent feature modules are introduced.

---

## Local Persistence

### Decision

Use Zustand Persist with AsyncStorage for local data persistence.

### Reasoning

- Minimal implementation complexity.
- Seamless integration with Zustand.
- Provides persistent history between application sessions.
- Improves user experience.

### Alternatives Considered

- Direct AsyncStorage implementation.
- SQLite.
- MMKV Storage.

### Re-evaluation Trigger

This decision should be revisited if:

- Large datasets are introduced.
- Advanced querying becomes necessary.
- Offline-first capabilities become a priority.

---

## AI Provider

### Decision

Use OpenRouter as the AI gateway provider.

### Reasoning

- Supports multiple AI providers behind a single API.
- Reduces vendor lock-in.
- Simplifies future model migration.
- Provides pricing flexibility.

### Alternatives Considered

- Direct OpenAI integration.
- Direct Anthropic integration.
- Self-hosted models.

### Re-evaluation Trigger

This decision should be revisited if:

- Production traffic significantly increases.
- Cost optimization becomes critical.
- Provider-specific features become necessary.

---

## AI Model

### Decision

Use Qwen3 as the initial grammar correction model.

### Reasoning

- Strong instruction-following capabilities.
- Good cost-to-performance ratio.
- Suitable for grammar correction tasks.
- Available through OpenRouter.

### Alternatives Considered

- GPT models.
- Claude models.
- Gemini models.

### Re-evaluation Trigger

This decision should be revisited if:

- Output quality becomes insufficient.
- Pricing changes significantly.
- Better alternatives become available.

---

## Navigation Strategy

### Decision

Use Native Stack Navigator together with Bottom Tab Navigator.

### Reasoning

- Industry standard for React Native applications.
- Good performance characteristics.
- Supports future application growth.
- Simple MVP implementation.

### Alternatives Considered

- Single stack navigation.
- Drawer navigation.

---

## Branching Strategy

### Decision

Use a simplified branching model:

```text
main
└── feature/*
```

### Reasoning

- Optimized for solo development.
- Reduces process overhead.
- Keeps workflow simple and predictable.

### Future Evolution

A `develop` branch may be introduced when:

- Multiple contributors join the project.
- Parallel releases become necessary.
- Release management complexity increases.

---

## Documentation Strategy

### Decision

Separate repository entry documentation from technical documentation.

### Structure

```text
README.md
docs/
├── overview.md
├── architecture.md
├── decisions.md
├── flows.md
└── branching.md
```

### Reasoning

- Keeps README concise.
- Allows technical documentation to scale independently.
- Improves maintainability.

---

## Deferred Decisions

The following decisions have been intentionally postponed to future phases.

| Topic | Status |
|-------|--------|
| Tone Selector | Deferred to Phase 2 |
| Clipboard Support | Deferred to Phase 2 |
| Dark Mode | Deferred to Phase 2 |
| Theme Switching | Deferred to Phase 2 |
| iOS Support | Deferred |
| Automated Testing | Deferred |
| CI Integration | Deferred |
| TanStack Query | Deferred |

These features are not rejected. They have simply been deferred until they provide clear value to the project.

---

## Decision Review Policy

Technical decisions should be reviewed when:

- New requirements emerge.
- Project scale changes significantly.
- Team size increases.
- Maintenance costs outweigh the original benefits.

The architecture should evolve incrementally rather than through large-scale rewrites.
