# Friends Randomizer

A lightweight, client-side web app that picks a random Friends episode from the full canonical list of 235 episodes. Built as a static site with no backend. Just open it and spin the wheel!

## Features

- Uniformly samples from all 235 Friends episodes (Seasons 1–10)
- Displays the season number, episode number, and title
- Fetches an episode still image dynamically via the [TVmaze API](https://www.tvmaze.com/api)
- Links directly to the show on Max
- Swipe left or right on touch devices to get another episode
- Dark and light mode, with automatic detection based on system preference
- Installable as a Progressive Web App (PWA)
- Fully responsive, works on desktop and mobile

## Website

[Live Website](https://OrF8.github.io/RandomFriendsEpisode/)

## How It Works

1. All 235 episodes are stored in a canonical array in `script.js`, each entry containing the season number, episode number, and title.
2. When the user clicks **Pick an Episode** (or swipes), a random index is chosen with `Math.floor(Math.random() * episodes.length)`, giving each episode an equal probability of being selected.
3. The UI updates the season badge, episode number, and title immediately.
4. An asynchronous request is made to the TVmaze API to retrieve the episode still image, which is displayed once loaded.

## Project Structure

```
.
├── index.html          # App shell and markup
├── style.css           # All styling, including dark/light mode
├── script.js           # Episode data, sampling logic, and UI behavior
├── manifest.json       # PWA web app manifest
├── service-worker.js   # Service worker for offline/PWA support
├── icons/
│   ├── icon-192.png    # PWA icon (192 × 192)
│   └── icon-512.png    # PWA icon (512 × 512)
└── LICENSE
```

## PWA Support

The app includes a `manifest.json` and a `service-worker.js`, which enable it to be installed as a Progressive Web App on supported devices and browsers.

- On Android (Chrome), an **Install app** button appears in the top bar when the install prompt is available.
- On desktop Chrome and Edge, the browser may also offer an install option in the address bar.

## Notes / Limitations

- **Episode images** are fetched from the TVmaze API. If an episode has no image in their database, a fallback message is displayed instead.
- **PWA install prompt** behavior varies by browser. On iOS (Safari), the standard `beforeinstallprompt` event is not supported; users can still add the app to their Home Screen manually via the Share menu.

## Sources
- Episode data: manually compiled canonical list of 235 Friends episodes from [Wikipedia](https://en.wikipedia.org/wiki/List_of_Friends_episodes)
- Episode images: [TVmaze API](https://www.tvmaze.com/api)
- Friends © Warner Bros. Television / Bright/Kauffman/Crane Productions

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/OrF8/RandomFriendsEpisode/blob/master/LICENSE) file for details.