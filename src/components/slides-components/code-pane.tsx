import React from 'react';
import { CodePane } from 'spectacle';
import DarkTheme, { Theme } from '../../styles/dark-code-theme';

interface StyledCodePaneProps {
  theme: Theme;
  language: string;
  indentSize: number;
  autoFillHeight: boolean;
  children: React.ReactNode;
}

const StyledCodePane: React.FC<StyledCodePaneProps> = ({
  theme = DarkTheme,
  language = 'html',
  indentSize = 4,
  autoFillHeight = true,
  children,
}) => (
  <CodePane
    language={language}
    autoFillHeight={autoFillHeight}
    indentSize={indentSize}
    theme={theme}
  >
    {children}
  </CodePane>
);

export default StyledCodePane;