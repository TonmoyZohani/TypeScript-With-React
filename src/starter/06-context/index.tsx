import { useTheme, ThemeProvider } from "./context";

const ParentComponent = () => {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};

function Component() {
  const theme = useTheme();

  console.log(theme);

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}
export default ParentComponent;
