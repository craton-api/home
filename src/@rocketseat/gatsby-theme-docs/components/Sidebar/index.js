import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useSidebar } from "@rocketseat/gatsby-theme-docs-core";

import {
  Container,
  List,
  Heading,
  Item,
  SubItem
} from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/styles";
import { isExternalUrl } from "@rocketseat/gatsby-theme-docs/src/util/url";
import ExternalLink from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/ExternalLink";
import InternalLink from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/InternalLink";

function ListWithSubItems({ children, text }) {
  return (
    <>
      <Heading>{text}</Heading>
      <SubItem>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const {
    site: {
      siteMetadata: { footer, basePath }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          footer
          basePath
        }
      }
    }
  `);

  const data = useSidebar();

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <nav>
        <List>
          <Item style={{ marginTop: "1rem", letterSpacing: "0.02rem" }}>
            <InternalLink link={basePath} label="Home" />
          </Item>
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map(item => {
                return (
                  <Item key={item.link} style={{ letterSpacing: "0.02rem" }}>
                    {renderLink(item.link, item.label)}
                  </Item>
                );
              });

              return (
                <ListWithSubItems key={id} text={label}>
                  {subitems}
                </ListWithSubItems>
              );
            }

            return <Item key={id}>{renderLink(link, label)}</Item>;
          })}
        </List>
      </nav>
      <footer>
        <p>{footer}</p>
      </footer>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node
  ]).isRequired,
  text: PropTypes.string.isRequired
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired
};
