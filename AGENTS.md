# AGENTS.md

# AI Grammar Checker — AI Collaboration Guide

Version: 1.0
Status: Stable

Based on:
- PERSONAL_AGENTS v1.0

---

# Purpose

This document defines how AI should collaborate within this repository.

It supplements the project documentation by providing implementation rules, development workflow, and engineering standards specific to this project.

When conflicts exist:

1. User instructions
2. AGENTS.md
3. Project documentation
4. PERSONAL_AGENTS.md

---

# Project Overview

AI Grammar Checker is a React Native application that provides AI-powered grammar correction and explanations.

The project currently targets Android MVP while maintaining a scalable architecture suitable for future production use.

---

# Project Goals

Prioritize:

- Maintainability
- Readability
- Consistency
- Reusability
- Incremental development
- Clean architecture

Never sacrifice long-term maintainability for short-term implementation speed.

---

# Architecture

The project architecture is locked.

Always preserve the existing structure.

Do not introduce new architectural patterns unless explicitly requested.

Before adding anything new, understand how the current implementation works.

---

# Development Principles

Always:

- Analyze before coding.
- Reuse existing implementations.
- Keep changes minimal.
- Preserve consistency.
- Build incrementally.
- Follow the established architecture.

Avoid overengineering.

---

# Implementation Workflow

Before implementing any non-trivial change:

1. Analyze the request.
2. Review the relevant files.
3. Explain the proposed approach.
4. Mention which files will be modified.
5. Explain whether new files are required.
6. Mention any important trade-offs or assumptions.

Wait for user confirmation before implementation when the task involves:

- Architecture
- Folder structure
- Navigation
- State management
- New dependencies
- Refactoring
- Large UI changes
- Behavior changes
- Any decision with multiple valid approaches

For straightforward requests (small fixes, formatting, typo corrections, or changes explicitly requested by the user), implementation may proceed without additional confirmation.

---

# Repository Rules

Do not rename existing:

- folders
- files
- screens
- navigation
- services
- stores
- hooks
- types

unless explicitly requested.

Prefer modifying existing files.

Create new files only when they provide clear architectural value.

---

# Technology Stack

- React Native CLI
- TypeScript
- React Navigation
- Zustand
- Axios
- FlashList
- Lucide React Native
- React Native Config
- OpenRouter
- Qwen

Do not introduce additional libraries unless necessary.

Always explain why a new dependency is recommended.

---

# Folder Responsibilities

Follow the existing folder structure.

```
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/
│   ├── common/
│   └── navigation/
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

Do not move files between folders without justification.

---

# UI Rules

Prefer existing UI components before creating new ones.

Reuse existing:

- Button
- Card
- Loading
- EmptyState
- SectionHeader

Maintain consistent:

- spacing
- typography
- colors
- component patterns

Avoid inline styles whenever possible.

---

# Theme Rules

Always use the existing theme system.

Avoid hardcoded colors.

Use theme tokens whenever available.

Keep implementations compatible with future dark mode support.

---

# Component Rules

Components should have a single responsibility.

Keep components focused and readable.

Extract reusable components only when duplication becomes clear.

Prefer composition over unnecessary abstraction.

---

# Screen Rules

Each screen should have one primary responsibility.

Presentation should remain separate from business logic whenever practical.

Avoid unnecessary local state.

---

# State Management

Use:

- Zustand for global state.
- React state for local UI state.

Do not introduce another state management solution.

---

# Services

All API communication belongs inside the service layer.

Never perform API requests directly inside UI components.

Reuse existing services whenever possible.

---

# Hooks

Custom hooks should encapsulate reusable logic.

Avoid creating hooks that are only used once unless they clearly improve readability.

---

# Types

Reuse existing types.

Avoid duplicate interfaces.

Keep shared types centralized.

---

# Error Handling

Always handle:

- loading state
- error state
- empty state

Display meaningful error messages.

Avoid silent failures.

---

# Performance

Prioritize correctness before optimization.

Avoid premature optimization.

Optimize only when there is measurable benefit.

---

# Refactoring

Refactor only when it:

- improves readability
- improves maintainability
- reduces duplication
- reduces complexity

Avoid project-wide refactoring unless explicitly requested.

---

# Documentation

README.md is the primary project entry point.

Architecture documentation belongs inside the docs folder.

Keep documentation synchronized with implementation.

Avoid duplicate documentation.

---

# Git Workflow

Each commit should represent one logical change.

One feature per branch.

Recommended branch prefixes:

- feature/
- fix/
- docs/
- refactor/
- chore/

Avoid unrelated changes within the same commit.

---

# AI Communication

When discussing implementation:

- Explain reasoning.
- Explain trade-offs.
- Mention assumptions.
- Recommend the safest approach.
- Ask questions when requirements are ambiguous.

Do not assume requirements.

---

# Before Creating New Files

Always ask:

- Can an existing file be extended?
- Can an existing component be reused?
- Can an existing hook be reused?
- Can an existing service be reused?
- Can an existing type be reused?

If the answer is yes,

prefer reuse.

---

# Completion Checklist

Before completing any implementation, verify:

- Requirements satisfied
- Architecture preserved
- Existing components reused
- Existing services reused
- Existing hooks reused
- Existing types reused
- No unnecessary files created
- No unnecessary dependencies introduced
- Documentation updated (if required)
- Code formatted
- Lint issues resolved
- TypeScript errors resolved

---

# Guiding Principle

Build software that remains easy to understand, maintain, and extend.

Every implementation should improve the overall quality of the project while preserving its architecture and consistency.

End of document.