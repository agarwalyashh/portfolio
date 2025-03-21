import GitHubCalendar from "react-github-calendar";

const theme = {
  light: ["#ffffff", "#00ff99"],
  dark: ["#2e2e38", "#00e187"],
};

function Github() {
  return (
    <GitHubCalendar username="agarwalyashh" blockMargin={6} theme={theme} />
  );
}

export default Github;
