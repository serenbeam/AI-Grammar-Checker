# Application Flows

## Overview

This document describes the primary application flows inside O' Grammar Checker.

The goal is to provide a high-level understanding of how data moves through the application and how different layers interact with each other.

---

# Grammar Check Flow

This is the primary flow of the application.

```text
User Input
    ↓
Input Validation
    ↓
Check Button Pressed
    ↓
Abort Previous Request
    ↓
Create New AbortController
    ↓
Loading State Enabled
    ↓
Grammar Service Request
    ↓
OpenRouter API
    ↓
Qwen3 Model Processing
    ↓
Response Received
    ↓
Response Parsing
    ↓
History Persistence
    ↓
Store Update
    ↓
Loading State Disabled
    ↓
UI Re-render
```

## Description

1. User enters text into the input field.
2. Input validation ensures the text is not empty.
3. Any previous active request is cancelled.
4. A new request controller is created.
5. The grammar request is sent through the service layer.
6. OpenRouter forwards the request to the Qwen3 model.
7. The response is parsed into a structured format.
8. The result is saved to history storage.
9. The UI updates with corrected text and explanation.

---

# Request State Flow

The application manages loading, success, and error states during grammar checking.

```text
User Starts Request
    ↓
loading = true
    ↓
API Request
    ↓
Request Success ?
   / \
 Yes  No
 /      \
Result   Error State Updated
Updated
 ↓
UI Updated
```

---

# Error State Flow

Current implementation supports basic error state management.

## Input Validation Error

```text
Empty Input
    ↓
Validation Failed
    ↓
Error State Updated
```

## API Request Error

```text
API Request Failed
    ↓
Catch Block Triggered
    ↓
Extract API Error Message
    ↓
Fallback To Default Message
    ↓
Error State Updated
    ↓
Loading State Disabled
```

Current implementation includes:

- Input validation errors
- API request errors
- Loading state management

Current implementation stores error information in global state but does not yet render error messages in the user interface.

Future improvements may include:

- Retry mechanism
- Centralized error handling
- Error logging
- Analytics integration
- Error categorization

---

# Request Cancellation Flow

To avoid race conditions and unnecessary API usage, the application cancels any active grammar request before starting a new one.

```text
New Request Started
    ↓
Abort Previous Request
    ↓
Create New AbortController
    ↓
Send New Request
    ↓
Previous Request Throws CanceledError
    ↓
Canceled Request Ignored
```

Benefits:

- Prevents race conditions.
- Ensures only the latest request updates the UI.
- Reduces unnecessary API usage.
- Improves responsiveness during rapid user interactions.

---

# History Persistence Flow

History should survive application restarts.

```text
Grammar Result Generated
    ↓
History Added To Store
    ↓
Persist Middleware Triggered
    ↓
AsyncStorage Updated
```

When the application starts again:

```text
Application Launch
    ↓
Store Initialization
    ↓
Persist Hydration
    ↓
AsyncStorage Read
    ↓
Store Rehydrated
    ↓
History Screen Rendered
```

---

# Application Startup Flow

Application initialization sequence.

```text
Application Launch
    ↓
Theme Initialization
    ↓
Store Initialization
    ↓
Persist Hydration
    ↓
Navigation Initialization
    ↓
Root Navigator Mounted
    ↓
Bottom Tab Navigator Rendered
```

---

# Navigation Flow

Current navigation structure:

```text
RootNavigator
│
└── BottomTabNavigator
    ├── CheckScreen
    ├── HistoryScreen
    └── SettingsScreen
```

Users can freely navigate between all screens using the bottom tab navigator.

---

# Settings Flow

Current implementation:

```text
User Opens Settings Screen
    ↓
Settings Screen Rendered
```

Current status:

- UI only
- No persistence
- No side effects

Future implementation may include:

- Theme switching
- Dark mode
- Application preferences
- AI model preferences

---

# Future Flows

The following flows will be documented once implemented:

- Clipboard Flow
- Tone Selector Flow
- Theme Switching Flow
- Dark Mode Flow
- iOS Specific Flow

---

# Flow Evolution Policy

Application flows should evolve incrementally.

Major flow changes should be documented to ensure:

- Maintainability
- Contributor onboarding
- Architectural consistency
