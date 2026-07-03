# Branching Strategy

## Overview

This document describes the Git branching strategy used in O' Grammar Checker.

The goal is to keep development simple, predictable, and scalable as the project evolves.

---

## Current Strategy

The project currently follows a simplified branching model optimized for solo development.

```text
main
└── feature/*
```

---

## Branch Responsibilities

### main

The `main` branch always contains stable and release-ready code.

Rules:

- Only completed and tested features should be merged into `main`.
- Direct commits to `main` should be minimized whenever possible.
- Git tags should be created from `main` to mark important milestones.

Examples:

```text
v1.0.0-mvp-foundation
v1.1.0-phase1-complete
v1.2.0-phase2-release
```

---

### feature/*

Feature branches are used for isolated feature development.

Naming convention:

```text
feature/<feature-name>
```

Examples:

```text
feature/clipboard
feature/dark-mode
feature/tone-selector
feature/testing
feature/error-ui
```

Benefits:

- Isolates unfinished work.
- Reduces the risk of breaking stable code.
- Makes feature progress easier to track.
- Simplifies rollback when necessary.

---

## Development Workflow

Typical workflow:

```text
main
 ↓
Create feature branch
 ↓
Implement feature
 ↓
Test locally
 ↓
Merge into main
 ↓
Delete feature branch
```

Example:

```text
main
 └── feature/clipboard
        ↓
    Development
        ↓
      Testing
        ↓
Merge into main
```

---

## Release Tags

Important milestones should be marked using Git tags.

Examples:

```text
v1.0.0-mvp-foundation
v1.1.0-phase1-complete
v1.2.0-phase2-release
```

Benefits:

- Easier rollback.
- Better release tracking.
- Clear project history.
- Simplified milestone management.

---

## Versioning Strategy

The project follows Semantic Versioning principles.

Format:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
v1.0.0
│ │ └── Bug fixes
│ └──── Feature releases
└────── Breaking changes
```

Examples:

```text
v1.0.0-mvp-foundation
v1.1.0-phase1-complete
v1.1.1-history-fix
v1.2.0-phase2-release
v2.0.0-production-ready
```

---

## Future Evolution

A `develop` branch may be introduced in the future if project complexity increases.

Possible future structure:

```text
main
develop
└── feature/*
```

Conditions for introducing `develop`:

- Multiple contributors join the project.
- Parallel feature development becomes common.
- Release management complexity increases.
- Production releases require additional stabilization phases.

---

## Branch Protection Recommendations

Future recommendations for public repositories:

- Protect the `main` branch.
- Require pull requests before merging.
- Require successful CI checks before merging.

These practices are intentionally deferred while the project remains a solo development effort.

---

## Branching Philosophy

The branching strategy should remain as simple as possible while supporting project growth.

Additional complexity should only be introduced when it provides clear operational value.
