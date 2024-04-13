// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroSlice;

type HomepageDocumentDataSlices1Slice = never;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * `slices1` field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices1[]
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices1: prismic.SliceZone<HomepageDocumentDataSlices1Slice>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | EducationSlice
  | ContentIndexSlice
  | TechListSlice
  | BioSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ProjectPageDocumentDataSlicesSlice = ImageBlockSlice | TextBlockSlice;

/**
 * Content for Project Page documents
 */
interface ProjectPageDocumentData {
  /**
   * Title field in *Project Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Project Page*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Hover Image field in *Project Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.hover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hover_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Project Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectPageDocumentDataSlicesSlice> /**
   * Meta Description field in *Project Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Project Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Project Page document from Prismic
 *
 * - **API ID**: `project_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectPageDocumentData>,
    "project_page",
    Lang
  >;

type ResearchPapersDocumentDataSlicesSlice = ImageBlockSlice | TextBlockSlice;

/**
 * Content for Research Papers documents
 */
interface ResearchPapersDocumentData {
  /**
   * Title field in *Research Papers*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: research_papers.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Research Papers*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: research_papers.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Hover Image field in *Research Papers*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: research_papers.hover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hover_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Research Papers*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: research_papers.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ResearchPapersDocumentDataSlicesSlice> /**
   * Meta Description field in *Research Papers*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: research_papers.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Research Papers*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: research_papers.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Research Papers*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: research_papers.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Research Papers document from Prismic
 *
 * - **API ID**: `research_papers`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ResearchPapersDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ResearchPapersDocumentData>,
    "research_papers",
    Lang
  >;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
  /**
   * Link field in *Settings → Nav Item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Nav Item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Nav Item field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

  /**
   * CTA Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA Label field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * Insta Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.insta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  insta_link: prismic.LinkField;

  /**
   * GitHub Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.github_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github_link: prismic.LinkField;

  /**
   * LinkedIn Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.linkedin_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin_link: prismic.LinkField /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | PageDocument
  | ProjectPageDocument
  | ResearchPapersDocument
  | SettingsDocument;

/**
 * Primary content in *Bio → Primary*
 */
export interface BioSliceDefaultPrimary {
  /**
   * Heading field in *Bio → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *Bio → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Button Text field in *Bio → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Bio → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: bio.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Avatar field in *Bio → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio.primary.avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Default variation for Bio Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BioSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BioSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Bio*
 */
type BioSliceVariation = BioSliceDefault;

/**
 * Bio Shared Slice
 *
 * - **API ID**: `bio`
 * - **Description**: Bio
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BioSlice = prismic.SharedSlice<"bio", BioSliceVariation>;

/**
 * Primary content in *ContentIndex → Primary*
 */
export interface ContentIndexSliceDefaultPrimary {
  /**
   * Heading field in *ContentIndex → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content Type field in *ContentIndex → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.content_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  content_type: prismic.SelectField<"Projects" | "Research Papers">;

  /**
   * Description field in *ContentIndex → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * View More Text field in *ContentIndex → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.view_more_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  view_more_text: prismic.KeyTextField;

  /**
   * Fallback Item Image field in *ContentIndex → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.fallback_item_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_item_image: prismic.ImageField<never>;
}

/**
 * Default variation for ContentIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentIndexSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContentIndex*
 */
type ContentIndexSliceVariation = ContentIndexSliceDefault;

/**
 * ContentIndex Shared Slice
 *
 * - **API ID**: `content_index`
 * - **Description**: ContentIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSlice = prismic.SharedSlice<
  "content_index",
  ContentIndexSliceVariation
>;

/**
 * Primary content in *Experience → Primary*
 */
export interface EducationSliceDefaultPrimary {
  /**
   * Heading field in *Experience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Primary content in *Experience → Items*
 */
export interface EducationSliceDefaultItem {
  /**
   * Title field in *Experience → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Time Period field in *Experience → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.items[].time_period
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  time_period: prismic.KeyTextField;

  /**
   * Institution field in *Experience → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.items[].institution
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  institution: prismic.KeyTextField;

  /**
   * Description field in *Experience → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Experience Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EducationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EducationSliceDefaultPrimary>,
  Simplify<EducationSliceDefaultItem>
>;

/**
 * Slice variation for *Experience*
 */
type EducationSliceVariation = EducationSliceDefault;

/**
 * Experience Shared Slice
 *
 * - **API ID**: `education`
 * - **Description**: Education
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EducationSlice = prismic.SharedSlice<
  "education",
  EducationSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * First Name field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.first_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name: prismic.KeyTextField;

  /**
   * Last Name field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.last_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name: prismic.KeyTextField;

  /**
   * Tag Line field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tag_line
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_line: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ImageBlock → Primary*
 */
export interface ImageBlockSliceDefaultPrimary {
  /**
   * Image field in *ImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageBlock*
 */
type ImageBlockSliceVariation = ImageBlockSliceDefault;

/**
 * ImageBlock Shared Slice
 *
 * - **API ID**: `image_block`
 * - **Description**: ImageBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSlice = prismic.SharedSlice<
  "image_block",
  ImageBlockSliceVariation
>;

/**
 * Primary content in *TechList → Primary*
 */
export interface TechListSliceDefaultPrimary {
  /**
   * Heading field in *TechList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Primary content in *TechList → Items*
 */
export interface TechListSliceDefaultItem {
  /**
   * Tech Name field in *TechList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.items[].tech_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tech_name: prismic.KeyTextField;

  /**
   * Tech Color field in *TechList → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.items[].tech_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  tech_color: prismic.ColorField;
}

/**
 * Default variation for TechList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TechListSliceDefaultPrimary>,
  Simplify<TechListSliceDefaultItem>
>;

/**
 * Slice variation for *TechList*
 */
type TechListSliceVariation = TechListSliceDefault;

/**
 * TechList Shared Slice
 *
 * - **API ID**: `tech_list`
 * - **Description**: TechList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSlice = prismic.SharedSlice<
  "tech_list",
  TechListSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Text field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocumentDataSlices1Slice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectPageDocument,
      ProjectPageDocumentData,
      ProjectPageDocumentDataSlicesSlice,
      ResearchPapersDocument,
      ResearchPapersDocumentData,
      ResearchPapersDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavItemItem,
      AllDocumentTypes,
      BioSlice,
      BioSliceDefaultPrimary,
      BioSliceVariation,
      BioSliceDefault,
      ContentIndexSlice,
      ContentIndexSliceDefaultPrimary,
      ContentIndexSliceVariation,
      ContentIndexSliceDefault,
      EducationSlice,
      EducationSliceDefaultPrimary,
      EducationSliceDefaultItem,
      EducationSliceVariation,
      EducationSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageBlockSlice,
      ImageBlockSliceDefaultPrimary,
      ImageBlockSliceVariation,
      ImageBlockSliceDefault,
      TechListSlice,
      TechListSliceDefaultPrimary,
      TechListSliceDefaultItem,
      TechListSliceVariation,
      TechListSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
