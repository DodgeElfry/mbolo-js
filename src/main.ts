import "./css/style.css"
import { episode1 } from "./ts/episode-1"
import { episode2 } from "./ts/episode-2"
import { episode3 } from "./ts/episode-3"
import { episode4 } from "./ts/episode-4"
import { episode5 } from "./ts/episode-5"
import { episode6 } from "./ts/episode-6"
import { episode7 } from "./ts/episode-7"
import { episode8 } from "./ts/episode-8"
import { episode9 } from "./ts/episode-9"
import { episode10 } from "./ts/episode-10"
import { episode11 } from "./ts/episode-11"
import { episode12 } from "./ts/episode-12"
import { episode13 } from "./ts/episode-13"

const episodes: Record<string, () => void> = {
  "Episode-1": episode1,
  "Episode-2": episode2,
  "Episode-3": episode3,
  "Episode-4": episode4,
  "Episode-5": episode5,
  "Episode-6": episode6,
  "Episode-7": episode7,
  "Episode-8": episode8,
  "Episode-9": episode9,
  "Episode-10": episode10,
  "Episode-11": episode11,
  "Episode-12": episode12,
  "Episode-13": episode13,
};

Object.entries(episodes).forEach(([buttonId, runEpisode]) => {
  const button = document.getElementById(buttonId);

  button?.addEventListener("click", runEpisode);
});
