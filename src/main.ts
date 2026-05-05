// Importations
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

const episodes: Array<() => void> = [
  episode1,
  episode2,
  episode3,
  episode4,
  episode5,
  episode6,
  episode7,
  episode8,
  episode9,
  episode10,
  episode11,
  episode12,
  episode13,
];

const buttons = Array.from(document.querySelectorAll("aside button"));

buttons.forEach((button, index) => {
  button.addEventListener("click", episodes[index]);
});
