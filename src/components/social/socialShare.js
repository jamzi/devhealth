import React from "react"
import Styled from "styled-components"

const getSocialLinks = ({ post, slug, twitterUsername }) => [
  {
    type: "twitter",
    link: `https://twitter.com/intent/tweet/?text=${
      post.frontmatter.title
    }&url=https://devhealth.io${slug.slice(
      0,
      slug.length - 1
    )}%2F&via=${twitterUsername}`,
    icon: (
      <Icon viewBox="0 0 24 24">
        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
      </Icon>
    ),
  },
  {
    type: "facebook",
    link: `https://www.facebook.com/sharer/sharer.php?u=https://devhealth.io${slug.slice(
      0,
      slug.length - 1
    )}`,
    icon: (
      <Icon viewBox="0 0 24 24">
        <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
      </Icon>
    ),
  },
  {
    type: "linkedin",
    link: `https://www.linkedin.com/shareArticle?mini=true&url=https://devhealth.io${slug.slice(
      0,
      slug.length - 1
    )}&title=${post.frontmatter.title}&source=${post.frontmatter.title}`,
    icon: (
      <Icon viewBox="0 0 24 24">
        <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />{" "}
      </Icon>
    ),
  },
]

const SocialShare = ({ post, slug, twitterUsername }) => {
  return (
    <SocialShareWrapper>
      <div>Share this post</div>
      {getSocialLinks({ post, slug, twitterUsername }).map(social => (
        <ShareLink
          key={social.type}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </ShareLink>
      ))}
    </SocialShareWrapper>
  )
}

const SocialShareWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 15px;
`

const ShareLink = Styled.a`
  margin-left: 10px;
  box-shadow: none;
`

const Icon = Styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 24px;
  height: 24px;

  ${ShareLink}:hover & {
    fill: hsla(0,0%,0%,0.59);
  }
`

export default SocialShare
