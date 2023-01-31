import "../src/index.css";

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  // 클릭이 되었을 때 스토리북 UI의 actions 패널에 나타날 콜백을 생성할 수 있도록 해준다.
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
