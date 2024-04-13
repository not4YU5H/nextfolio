import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { isFilled } from "@prismicio/client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = async ({ slice }: ContentIndexProps): Promise<JSX.Element> => {
  const client = createClient()
  const projects = await client.getAllByType("project_page");
  const research_paper = await client.getAllByType("research_papers");
  const contentType = slice.primary.content_type || "Projects"
  const items = contentType === "Projects" ? projects : research_paper;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      <ContentList items={items} contentType={contentType} viewMoreText={slice.primary.view_more_text} fallbackItemImage={slice.primary.fallback_item_image} />
    </Bounded>
  );
};

export default ContentIndex;
