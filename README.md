# RoboLearn Academy

A free, responsive, static learning website for a beginner Computer Programming & Robotics with Arduino course. It uses plain HTML, CSS and JavaScript — no WordPress, build tools, database or paid hosting required.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in Chrome, Edge or Firefox.
3. For best results, run a local server (optional): `python -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Pages
- `index.html` — homepage and featured modules
- `courses.html` — full 8-module course catalogue
- `lesson.html?id=1` — lesson page; change id from 1 to 8
- `quiz.html` — automatically scored quiz with feedback
- `forum.html` — local discussion board
- `certificate.html` — certificate after all modules are marked complete
- `contact.html` — feedback form that opens the visitor's email app

## Included learning materials
- Original SVG illustrations in `assets/images/`
- Eight short locally stored MP4 title/intro placeholders in `assets/videos/` (if generated in this package)
- WAV placeholder audio tones in `assets/audio/`
- Each lesson has a browser text-to-speech narration button, so spoken lesson content works without downloading audio.
- Replace placeholder video and audio files with your own demonstrations and voice recordings when ready.

## Important limitations and setup
- Progress and forum posts are stored in browser Local Storage. They persist on the same browser/device, but are not shared between students or devices.
- To create a shared public forum, create a free GitHub repository and enable GitHub Discussions, or configure Giscus using a public GitHub repository with Discussions enabled. Add its embed snippet to `forum.html`.
- In `js/contact.js`, replace `YOUR-EMAIL@example.com` with your contact email.
- A static site cannot securely authenticate students, store shared grades, or provide a central database. Those features require a backend or connected service.

## Free hosting
### GitHub Pages
1. Create a free GitHub account and a repository named `robolearn-academy`.
2. Upload the contents of this folder (not the ZIP itself).
3. Open repository Settings → Pages.
4. Select deploy from branch `main`, folder `/root`, then Save.
5. Wait for the deployment URL shown by GitHub Pages.

### Netlify
Sign in to Netlify and drag the extracted folder into the manual deploy area, or connect the GitHub repository.

### Cloudflare Pages
Create a Pages project connected to your GitHub repository. No build command is needed; set the output directory to `/`.

## Course outline
1. Introduction to Computers
2. Programming Fundamentals
3. Introduction to Robotics
4. Arduino and Microcontrollers
5. Electronics and Circuits
6. Sensors and Robot Inputs
7. Build a Robot Car
8. Final Robotics Project
