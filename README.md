# DJ Kat

desktop app with a cat reacting to the music playing on your computer
https://makeagif.com/youtube-to-gif
https://ezgif.com/remove-background/ezgif-600897b3edc81a6f.gif.html

-----------------------

## 1. Project Goal
A lightweight Windows desktop pet built with **Tauri**, **Rust**, and **Vanilla HTML/CSS/JS** that:
- Lives on the desktop (transparent & always-on-top)
- Reacts to **system audio**
- Displays **currently playing media information**
- Switches animations based on music characteristics
- Uses minimal system resources

---

# 2. Tech Stack

## Frontend
- HTML5
- CSS3
- Vanilla JavaScript

## Backend
- Rust
- Tauri v2

## Windows APIs
- WASAPI Loopback (System Audio Capture)
- Global System Media Transport Controls (Current Media Session)

---

# 3. Architecture

```text
Windows
│
├── Media Session API
│      └── Song Title, Artist, Album Art
│
├── WASAPI Loopback
│      └── System Audio
│
▼
Rust Backend
│
├── Audio Capture
├── Audio Analysis
├── Beat Detection
├── Media Metadata
└── Event Emitter
│
▼
Frontend (HTML/CSS/JS)
│
├── Desktop Pet
├── Song Display
├── Album Art
├── Animation Controller
└── Settings
```

---

# 5. Development Workflow

## Phase 1 — Project Setup  ---> |||
- Install Rust
- Install Tauri
- Create project
- Configure transparent window
- Configure always-on-top window

---

## Phase 2 — UI
- Pet container
- Song info panel
- Album art
- Settings panel
- Load GIF assets

---

## Phase 3 — Animation System
- GIF manager
- Animation switching
- Idle state
- Sleep state
- Dance state

---

## Phase 4 — Windows Media Session
- Detect current media session
- Read:
  - Song title
  - Artist
  - Album
  - Album art
  - Playback state
- Send metadata to frontend

---

## Phase 5 — System Audio Capture
- WASAPI Loopback
- Read PCM samples
- Stream samples to analyzer

---

## Phase 6 — Audio Analysis
- Volume detection
- FFT
- Bass detection
- Mid frequencies
- Treble detection
- Audio energy

---

## Phase 7 — Beat Detection
- Beat detection
- Peak detection
- Tempo estimation
- Intensity calculation

---

## Phase 8 — State Engine
Determine pet state using:
- Playback status
- Volume
- Beat
- Energy

Example states:
- Idle
- Listening
- Dancing
- Headbanging
- Sleeping

---

## Phase 9 — Frontend Integration
Receive backend events
Update:
- Song title
- Artist
- Album art
- Current animation

---

## Phase 10 — Settings
- Pet size
- Window opacity
- Animation sensitivity
- Startup behavior
- Always-on-top toggle

---

## Phase 11 — Polish
- Smooth animation transitions
- Performance optimization
- Error handling
- Asset preloading
- Logging

---

# 6. Event Flow

```text
Music
    │
    ▼
System Audio
    │
    ▼
Rust Audio Capture
    │
    ▼
Audio Analysis
    │
    ▼
Pet State
    │
    ▼
Tauri Event
    │
    ▼
JavaScript
    │
    ▼
Animation Update
```

---

# 7. Media Flow

```text
Current Media Session
        │
        ▼
Rust
        │
        ▼
Metadata Event
        │
        ▼
JavaScript
        │
        ▼
Update Song UI
```

---

# 8. Rust Modules

### `main.rs`
Application entry point.

### `window.rs`
Window configuration and behavior.

### `audio.rs`
System audio capture.

### `fft.rs`
Frequency and beat analysis.

### `media.rs`
Current media session metadata.

### `events.rs`
Frontend event communication.

### `config.rs`
Application settings.

---

# 9. Frontend Modules

### `app.js`
Application bootstrap.

### `pet.js`
Pet controller.

### `animation.js`
GIF switching and transitions.

### `media.js`
Song information UI.

### `settings.js`
Settings management.

---

# 10. Future Features
- Multiple pets
- Custom pet packs
- Sprite animations
- User-created animations
- Plugin system
- Themes
- Keyboard shortcuts
- System tray
- Auto-updater
- Cross-platform (macOS/Linux)
