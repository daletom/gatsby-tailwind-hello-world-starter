import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Imgix from "react-imgix"

export default ({ data }) => {
  return (
  <div class="p-4"> 
    <picture class="h-auto w-full">
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
    <img width="1200" height="600" src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1200&fit=crop&ar=2%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"></img>
  </picture>
    <div class="flex flex-wrap">
    {data.allWpPost.edges.map(({ node }) => (
      <div class="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
      {/* <Link to={node.slug}> */}
        <p class="text-2xl p-2">{parse(node.title)}</p>
        {/* </Link> */}
        <Imgix 
        src={node.featuredImage.node.sourceUrl}
        imgixParams={{ fit: "crop", crop: "focalpoint", ar: "1.8:1"}}
        sizes="(min-width: 1024px) calc(33vw - 60px), (min-width: 768px) calc(50vw - 100px), calc(100vw - 70px)"
        loading="lazy"
        imgProps={{
          alt: "FarFarAway News image"
        }}
        />
        <p class="p-2">{parse(node.content)}</p>
      </div>
    ))}
    </div>
    </div>
    )
}

export const query = graphql`
query {
  allWpPost {
    edges {
      node {
        title
        content
        slug
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
`
