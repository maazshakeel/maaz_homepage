import Image from "next/image";
import React from "react";
import Markdoc, { type Config, type RenderableTreeNodes } from "@markdoc/markdoc";

type MarkdocContentProps = {
  contentNode: unknown;
};

type MarkdocImageProps = {
  src?: string;
  alt?: string;
};

function MarkdocImage({ src, alt = "" }: MarkdocImageProps) {
  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      quality={90}
      className="blog-figure-img"
      sizes="(max-width: 768px) 100vw, 768px"
    />
  );
}

const markdocConfig: Config = {
  nodes: {
    image: {
      render: "Image",
      attributes: {
        src: { type: String },
        alt: { type: String },
        title: { type: String },
      },
    },
  },
};

export function MarkdocContent({ contentNode }: MarkdocContentProps) {
  const errors = Markdoc.validate(contentNode as never, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid Markdoc content");
  }

  const renderable = Markdoc.transform(
    contentNode as never,
    markdocConfig,
  ) as RenderableTreeNodes;

  return (
    <div className="prose-blog">
      {Markdoc.renderers.react(renderable, React, {
        components: {
          Image: MarkdocImage,
        },
      })}
    </div>
  );
}
