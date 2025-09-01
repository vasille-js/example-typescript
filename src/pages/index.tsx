import {page, styleSheet} from "vasille-web";

export default page(async () => {
  <div class={styles.styled}>Welcome to Vasille example</div>;
});

const styles = styleSheet({
  styled: {
    position: "fixed",
    inset: 0,
    background: "linear-gradient(45deg, #c94743, #8914a1, #41a3ff)",
    color: "white",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "font-size": "64px",
    "font-family": '"Noto Sans", Helvetica, sans-serif',
  }
})
