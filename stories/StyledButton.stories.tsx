import type { ComponentStory, ComponentMeta } from "@storybook/react";
import StyledButton from "../pages/components/styledButton";

// storyのmetadataをdefault export
export default {
  title: "StyledButton", // コンポーネントのタイトル(任意)
  component: StyledButton, // 実際に使用するコンポーネント（上でimportしたもの）
} as ComponentMeta<typeof StyledButton>;

/// 1. Storybookで描画するためのコンポーネントの雛形を用意しておく
const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

// 2. bindを用いて雛形を元にしたコピーを作成
// 名前付きエクスポートはデフォルトでストーリーオブジェクトを表す
export const Default: ComponentStory<typeof StyledButton> = Template.bind({});
// 3. Propsに値を設定しない
Default.args = {
  label: "Default",
  onClick: () => {
    alert("クリック");
  },
};
Default.storyName = "デフォルト";

export const SubButton: ComponentStory<typeof StyledButton> = Template.bind({});
SubButton.args = {
  label: "SubButton",
  backgroundColor: "#f6f0ea",
  color: "#622d18",
};
SubButton.storyName = "サブボタン";

export const Small: ComponentStory<typeof StyledButton> = Template.bind({});
Small.args = {
  label: "Small",
  size: "sm",
};
Small.storyName = "小さいボタン";

export const Large: ComponentStory<typeof StyledButton> = Template.bind({});
Large.args = {
  label: "Large",
  size: "lg",
};
Large.storyName = "大きいボタン";

export const SubSmall: ComponentStory<typeof StyledButton> = Template.bind({});
SubSmall.args = {
  label: "SubSmall",
  backgroundColor: "#f6f0ea",
  color: "#622d18",
  size: "sm",
};
SubSmall.storyName = "小さいサブボタン";
