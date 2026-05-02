import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useAtom } from "jotai";
import { themeAtom } from "../../global-state";
import { Container } from "./style";
import { useEffect, useMemo } from "preact/hooks";

export default function ChangeThemeButton() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);

  useEffect(() => {
    const prefersLightTheme = matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;

    if (prefersLightTheme) setAppTheme("light");
  }, []);

  const nextTheme = useMemo(
    () => (appTheme === "dark" ? "light" : "dark"),
    [appTheme],
  );

  // TODO: properly implement light theme before rendering element
  return null;

  return (
    <Container
      title={`Change to ${nextTheme} theme`}
      onClick={() => setAppTheme(nextTheme)}
    >
      {appTheme === "dark" ? <MoonIcon size={26} /> : <SunIcon size={26} />}
    </Container>
  );
}
