import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { lighten } from "polished";

const codeBgColor = "rgba(0,0,0,0.5)";

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        div.token-line {
          margin: 0.5rem 0;
        }
        blockquote p{
          background: rgba(0, 0, 0, 0.2) !important;
        }
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        *::selection {
          background: ${lighten("0.35", "#737380")}!important;
        }

        body {
          font-size: 16px;
          font-family: 'Roboto', sans-serif;
          /* background-color: ${theme.colors.background}; */
          text-rendering: optimizelegibility;
        }

        h1 {
          font-size: 32px;
          color: white;
          font-weight: normal;
          margin-bottom: 24px;
        }

        h2 {
          font-size: 24px;
        }

        h3 {
          font-size: 18px;
        }

        h4 {
          font-size: 16px;
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
          color: white;
          margin: 24px 0 16px 0;
          font-weight: normal;
        }

        p {
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 16px;
          font-weight: 400;
        }

        code.inline-code {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          padding: 0.2em 0.2em 0.3em 0.2em;
          background-color: ${codeBgColor};
          color: rgba(248, 248, 242);
          font-size: 14px;
          border-radius: 3px;
          font-feature-settings: 'clig' 0, 'calt' 0;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }

        a {
          color: white;
          font-weight: bold;
          letter-spacing: 0.1rem;
          &:hover {
            color: ${theme.colors.primary};
            transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            opacity: 1;
          }
        }

        blockquote {
          margin: 0;

          p {
            padding: 1rem;
            background: #f5f5fa;
            border-radius: 5px;
          }
        }

        hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          margin-bottom: 16px;
          color: #444;
        }

        th,
        td {
          text-align: left;
          padding: 12px;
        }

        tr:nth-of-type(2n) td {
          background-color: ${theme.colors.sidebar.itemActive};
        }

        tr {
          background-color: #ffffff;
        }

        iframe {
          margin-bottom: 16px;
        }

        img {
          max-width: 100%;
        }

        ul,
        ol {
          color: white;
          padding-left: 15px;
          margin-bottom: 16px;

          li {
            line-height: 28px;
          }
        }

        .gatsby-highlight {
          position: relative;

          .token {
            font-style: normal !important;
          }
        }

        pre[class*='language-']::before {
          background: ${codeBgColor};
          border-radius: 0 0 4px 4px;
          color: #232129;
          font-size: 12px;
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          letter-spacing: 0.075em;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          position: absolute;
          left: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }

        pre[class*='language-'] code {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }
 

        pre[class~='language-js']::before,
        pre[class~='language-javascript']::before {
          content: 'js';
          background: ${codeBgColor};
        }

        pre[class~='language-jsx']::before {
          content: 'jsx';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-typescript']::before,
        pre[class~='language-ts']::before {
          content: 'ts';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-tsx']::before {
          content: 'tsx';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-graphql']::before {
          content: 'GraphQL';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-html']::before {
          content: 'html';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-css']::before {
          content: 'css';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-mdx']::before {
          content: 'mdx';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-shell']::before {
          content: 'shell';
          color: #fff;
        }

        pre[class~='language-sh']::before {
          content: 'sh';
          color: #fff;
        }

        pre[class~='language-bash']::before {
          content: 'bash';
          color: #fff;
        }

        pre[class~='language-yaml']::before {
          content: 'yaml';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-markdown']::before {
          content: 'md';
          color: #fff;
        }

        pre[class~='language-json']::before,
        pre[class~='language-json5']::before {
          content: 'json';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-diff']::before {
          content: 'diff';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-text']::before {
          content: 'text';
          background: ${codeBgColor};
          color: #fff;
        }

        pre[class~='language-flow']::before {
          content: 'flow';
          background: ${codeBgColor};
          color: #fff;
        }
      `}
    />
  );
}
