import {
  compose,
  styleSheet,
  prefersLight,
  prefersDark,
  dark,
  laptop,
  tablet,
  mobile,
  value,
  theme
} from "vasille-web";


export const App = compose(() => {
  let dark = false;
  let currentTheme = value("red");

  document.body.classList.add(currentTheme);

  function switchDark() {
    dark = !dark;
  }
  function setTheme(theme: string) {
    if (theme === currentTheme) {
      return;
    }
    document.body.classList.remove(currentTheme);
    document.body.classList.add(theme);
    currentTheme = theme;
  }

  <div>
    <button class={[styles.auto]}>Auto dark by user preferences</button>
  </div>;
  <div class={[dark && "dark"]}>
    <button class={[styles.manual]} onclick={switchDark}>Switch dark mode</button>
  </div>;
  <div class={[styles.responsive]}>
    <p>I'm responsive</p>
  </div>;
  <div>
    <button class={[styles.themed]} onclick={() => setTheme("red")}>Set red theme</button>
    <button class={[styles.themed]} onclick={() => setTheme("green")}>Set green theme</button>
    <button class={[styles.themed]} onclick={() => setTheme("blue")}>Set blue theme</button>
  </div>;
});

const styles = styleSheet({
  auto: {
    "background-color": [prefersLight("#fff"), prefersDark("#111")],
    "color": [prefersLight("#111"), prefersDark("#fff")],
    ":hover": {
      "background-color": ["#eee", prefersDark('#222')],
    }
  },
  manual: {
    "background-color": ["#fff", dark("#111")],
    "color": ["#111", dark("#fff")],
  },
  responsive: {
    "width": [1000, laptop("50%"), tablet("75%"), mobile("100%")],
    "height": [100, tablet(mobile(50))],
    "background-color": "#adadad",
    "margin-left": 0,
    "margin-right": 0,
  },
  themed: {
    "border-width": 2,
    "border-color": [
      theme("red", "#f00"),
      theme("green", "#0f0"),
      theme("blue", "#00f")
    ],
    "margin": 10,
  }
})
