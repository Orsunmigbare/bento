import React from "react"
import styled, { keyframes } from "styled-components"
import { NavLink } from "react-router-dom"
import { Heading, Wrapper, Layout, List, theming } from "@staccx/base"
import IconArrowRight from "../Icons/IconArrowRight"

const HeaderMenuSubMenu = ({
  expanded,
  inverted,
  subMenuItems,
  closeMenu,
  item,
  handleSubmenu,
  handleExpand
}) => {
  const handleClose = () => {
    closeMenu()
    handleExpand(null)
  }

  return (
    <SubMenu expanded={expanded} inverted={inverted || undefined}>
      <Wrapper variant={[theming.VARIANT_DEFAULT, "innerPadded"]}>
        <Inner>
          <div>
            <SubMenuHeading level={1}>{item.title}</SubMenuHeading>
          </div>
          <div>
            <SubmenuItems as={List}>
              {subMenuItems.map(submenuItem => (
                <li key={submenuItem._key + submenuItem.path.current}>
                  <SubMenuLink
                    to={submenuItem.path.current}
                    data-link
                    onClick={handleClose}
                  >
                    <Layout rowGap="tiny">
                      <div>
                        <TitleHeading level={4} as="span">
                          {submenuItem.pageTitle}
                        </TitleHeading>
                        <span>
                          {"\u00a0"}
                          <Icon />
                        </span>
                      </div>
                      <SubSubMenuHeading level={3} as="h2">
                        {submenuItem.title}
                      </SubSubMenuHeading>
                      <Description>{submenuItem.meta.description}</Description>
                    </Layout>
                  </SubMenuLink>
                </li>
              ))}
            </SubmenuItems>
          </div>
        </Inner>
      </Wrapper>
    </SubMenu>
  )
}

const headerHeight = "114px"

const SubmenuItems = styled(Layout)`
  @media only screen and (max-width: ${theming.wrapper.large}) {
    grid-row-gap: 0px;
  }
`

const SubMenuHeading = styled(Heading)`
  @media only screen and (max-width: ${theming.wrapper.large}) {
    display: none;
  }
`

const SubSubMenuHeading = styled(Heading)`
  @media only screen and (max-width: ${theming.wrapper.large}) {
    color: ${theming.color("primaryWcag")};
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;

  > div:last-child {
    flex-basis: 60%;
    @media only screen and (max-width: ${theming.wrapper.large}) {
      flex-basis: 100%;
    }
  }
`

const Description = styled.p`
  font-size: ${theming.font.small};
  margin: 0;
`

const SubMenuBounceIn = keyframes`
  from {
    opacity: 0;
    //transform: translateY(calc(100% - 12px));
  }

  to {
    opacity: 1;
    //transform: translateY(100%);
  }
`

const SubMenu = styled.div`
  display: ${p => (p.expanded ? "block" : "none")};
  border-top: 2px solid ${theming.color.line};
  padding: ${theming.spacing("grid")} 0;
  @media only screen and (max-width: ${theming.wrapper.large}) {
    padding: 0;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;

    > li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
  }

  @media only screen and (min-width: ${theming.wrapper.large}) {
    position: fixed;
    overflow-y: scroll;
    top: ${headerHeight};
    left: 0;
    background-color: ${theming.color.white};
    width: 100%;
    height: calc(100vh - ${headerHeight});
    z-index: 50;
    animation: ${SubMenuBounceIn} 0.2s ease forwards 1;

    > li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  }
`

const SubMenuLink = styled(NavLink)`
  display: block;
  color: currentColor;
  text-decoration: none;
  font-size: ${theming.font.base};
  padding: ${theming.spacing.small};
  cursor: pointer;
  @media only screen and (max-width: ${theming.wrapper.large}) {
    //border: 1px solid ${theming.color.line};
    border-bottom: 1px solid ${theming.color.line};
  }
  @media only screen and (min-width: ${theming.wrapper.large}) {
    color: ${theming.color("textDark")};
    transition: background 0.2s ease, color 0.2s ease;

    &:hover,
    &:active,
    &:focus {
      background-color: ${theming.color("g4")};
      color: ${theming.color("primaryWcag")};

      > svg {
        color: ${theming.color.primary};
        transform: translateX(3px);
      }
    }
  }
`

const TitleHeading = styled(Heading)`
  color: ${theming.color("g1")};
  font-size: ${theming.font("small")};
  font-weight: 500;
  @media only screen and (max-width: ${theming.wrapper.large}) {
    color: ${theming.color.line};
  }
`

const Icon = styled(IconArrowRight)`
  pointer-events: none;
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: ${theming.spacing.tiny};
  color: ${theming.color("primary")};
  transition: transform 0.2s ease;
`

export default HeaderMenuSubMenu