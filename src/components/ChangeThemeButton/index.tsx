import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useAtom } from "jotai";
import { themeAtom } from "../../global-state";
import { Container } from "./style";
import { useEffect } from "preact/hooks";

export default function ChangeThemeButton() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);

  useEffect(() => {
    const prefersLightTheme = matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;

    if (prefersLightTheme) setAppTheme("light");
  }, []);

  return (
    <Container
      title="Change theme"
      onClick={() => setAppTheme(appTheme === "dark" ? "light" : "dark")}
    >
      {appTheme === "dark" ? <MoonIcon size={26} /> : <SunIcon size={26} />}
    </Container>
  );
}
