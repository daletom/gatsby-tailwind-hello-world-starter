import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Imgix from "react-imgix"

export default ({ data }) => {
  return (
  <div class="p-4"> 
    <picture>
    <source
      media="(min-width: 2100px)"
      srcset="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=2400&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <source
      media="(min-width: 1800px)"
      srcset="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=2100&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <source
      media="(min-width: 1600px)"
      srcset="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1800&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <source
      media="(min-width: 1400px)"
      srcset="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1600&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <source
      media="(min-width: 1200px)"
      srcset="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1400&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <source
      media="(min-width: 900px)"
      srcset="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1200&fit=crop&ar=3%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <source
      media="(min-width: 600px)"
      srcset="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=900&fit=crop&ar=3%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <source
      media="(min-width: 450px)"
      src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=600&fit=crop&ar=1%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <source
      media="(min-width: 1px)"
      srcset="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=550&fit=crop&ar=1%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"
            />
    <img src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1200&fit=crop&ar=2%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"></img>
  </picture>
    <div class="flex flex-wrap">
    {data.allWpPost.edges.map(({ node }) => (
      <div class="p-4 w-1/3">
      {/* <Link to={node.slug}> */}
        <p class="text-2xl p-2">{parse(node.title)}</p>
        {/* </Link> */}
        <Imgix 
        src={node.featuredImage.node.sourceUrl}
        imgixParams={{ fit: "crop", crop: "focalpoint"}}
        width={400}
        height={400}
        loading="lazy"
        />
        <p class="p-2">{parse(node.excerpt)}</p>
      </div>
    ))}
    </div>
    </div>
    )
}

export const query = graphql`
query {
  allWpPost(sort: {order: DESC, fields: date}) {
    edges {
      node {
        title
        excerpt
        slug
        featuredImage {
          node {
            srcSet
            sourceUrl
            sizes
          }
        }
      }
    }
  }
}
`
