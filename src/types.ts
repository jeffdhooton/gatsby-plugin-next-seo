import { LiteralUnion } from 'type-fest';

export interface OpenGraphImages {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface OpenGraphVideos {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface OpenGraphVideoActors {
  profile: string;
  role?: string;
}

export interface OpenGraph {
  /**
   * The canonical URL of your object that will be used as its permanent ID in
   * the graph.
   */
  url?: string;

  /**
   * The type of your object. Depending on the type you specify, other
   * properties may also be required.
   */
  type?: string;

  /**
   * The open graph title, this can be different than your meta title.
   */
  title?: string;

  /**
   * The open graph description, this can be different than your meta
   * description.
   */
  description?: string;

  /**
   * An array of images (object) to be used by social media platforms, slack etc
   * as a preview. If multiple supplied you can choose one when sharing.
   */
  images?: readonly OpenGraphImages[];

  /**
   * An array of videos.
   */
  videos?: readonly OpenGraphVideos[];

  /**
   * The default height for the image used.
   */
  defaultImageHeight?: number;

  /**
   * The default width of the image used.
   */
  defaultImageWidth?: number;

  /**
   * The locale the open graph tags are marked up in. Of the format
   * language_TERRITORY.
   *
   * @default 'en_US'
   */
  locale?: string;

  /**
   * If your object is part of a larger web site, the name which should be
   * displayed for the overall site.
   */
  site_name?: string;

  /**
   * The open graph profile configuration object.
   */
  profile?: OpenGraphProfile;

  /**
   * The open graph book configuration object.
   */
  book?: OpenGraphBook;

  /**
   * The open graph article configuration object.
   */
  article?: OpenGraphArticle;

  /**
   * The open graph video configuration object.
   */
  video?: OpenGraphVideo;
}

export interface OpenGraphProfile {
  /**
   * Person's first name.
   */
  firstName?: string;

  /**
   * Person's last name.
   */
  lastName?: string;

  /**
   * Person's username.
   */
  username?: string;

  /**
   * Person's gender.
   */
  gender?: string;
}

export interface OpenGraphBook {
  /**
   * The list of author names for the book.
   */
  authors?: readonly string[];

  /**
   * The International Standard Book Number which identifies the book.
   *
   * @remarks
   *
   * An ISBN is essentially a product identifier used by publishers, booksellers, libraries, internet retailers and other supply chain participants for ordering, listing, sales records and stock control purposes. The ISBN identifies the registrant as well as the specific title, edition and format.
   */
  isbn?: string;

  /**
   * The books release date.
   */
  releaseDate?: string;

  /**
   * Tags used to further describe the book.
   */
  tags?: readonly string[];
}

export interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;

  authors?: readonly string[];
  section?: string;
  tags?: readonly string[];
}

export interface OpenGraphVideo {
  actors?: readonly OpenGraphVideoActors[];
  directors?: readonly string[];
  writers?: readonly string[];
  duration?: number;
  releaseDate?: string;
  tags?: readonly string[];
  series?: string;
}

export type TwitterCardType = 'summary' | 'summary_large_image' | 'app' | 'player';

export interface Twitter {
  /**
   * `@username` for the content creator / author (outputs as `twitter:creator`).
   */
  handle?: string;

  /**
   * `@username` for the website used in the card footer.
   */
  site?: string;

  /**
   * The card type, which will be one of `summary`, `summary_large_image`,
   * `app`, or `player`.
   */
  cardType?: LiteralUnion<TwitterCardType, string>;
}

interface MobileAlternate {
  /**
   * Set what screen size the mobile website should be served from.
   */
  media: string;

  /**
   * Set the mobile page alternate url.
   */
  href: string;
}

interface LanguageAlternate {
  hrefLang: string;
  href: string;
}

export interface BaseSeoProps {
  /**
   * Set the meta title of the page
   */
  title?: string;

  /**
   * Allows you to set default title template that will be added to your title.
   *
   * @remarks
   *
   * Replaces `%s` with your title string
   *
   * ```js
   * title = 'This is my title';
   * titleTemplate = 'Gatsby SEO | %s';
   * // outputs: Gatsby SEO | This is my title
   * ```
   *
   * ```js
   * title = 'This is my title';
   * titleTemplate = '%s | Gatsby SEO';
   * // outputs: This is my title | Gatsby SEO
   * ```
   */
  titleTemplate?: string;

  /**
   * Sets whether page should be indexed or not.
   *
   * @remarks
   *
   * Setting this to `true` will set `noindex,follow` (to set `nofollow`, please
   * refer to [`nofollow`](#noFollow)). This works on a page by page basis. This
   * property works in tandem with the `nofollow` property and together they
   * populate the `robots` and `googlebot` meta tags. **Note:** The `noindex`
   * and the [`nofollow`](#noFollow) properties are a little different than all
   * the others in the sense that setting them as a default does not work as
   * expected. This is due to the fact Gatsby SEO already has a default of
   * `index,follow` because `gatsby-plugin-next-seo` is a SEO plugin after all.
   * So if you want to globally these properties, please see
   * [dangerouslySetAllPagesToNoIndex](#dangerouslySetAllPagesToNoIndex) and
   * [dangerouslySetAllPagesToNoFollow](#dangerouslySetAllPagesToNoFollow).
   *
   * **Example No Index on a single page:**
   *
   * If you have a single page that you want no indexed you can achieve this by:
   *
   * ```tsx
   * import React from 'react';
   * import { GatsbySeo } from 'gatsby-plugin-next-seo';
   *
   * export default () => (
   *   <>
   *     <GatsbySeo noindex={true} />
   *     <p>This page is no indexed</p>
   *   </>
   * );
   * ```
   */
  noindex?: boolean;

  /**
   * Sets whether page should be followed or not.
   *
   * @remarks
   *
   * Setting this to `true` will set `index,nofollow` (to set `noindex`, please
   * refer to [`noindex`](#noIndex)). This works on a page by page basis. This
   * property works in tandem with the `noindex` property and together they
   * populate the `robots` and `googlebot` meta tags.
   *
   * **Note:** The `noindex` and the [`nofollow`](#noFollow) properties are a
   * little different than all the others in the sense that setting them as a
   * default does not work as expected. This is due to the fact Gatsby SEO
   * already has a default of `index,follow` because `gatsby-plugin-next-seo` is
   * a SEO plugin after all. So if you want to globally these properties, please
   * see [dangerouslySetAllPagesToNoIndex](#dangerouslySetAllPagesToNoIndex) and
   * [dangerouslySetAllPagesToNoFollow](#dangerouslySetAllPagesToNoFollow).
   *
   * **Example No Follow on a single page:**
   *
   * If you have a single page that you want no indexed you can achieve this by:
   *
   * ```jsx
   * import React from 'react';
   * import { GatsbySeo } from 'gatsby-plugin-next-seo';
   *
   * export default () => (
   *   <>
   *     <GatsbySeo nofollow={true} />
   *     <p>This page is not followed</p>
   *   </>
   * );
   * ```
   */
  nofollow?: boolean;

  /**
   * Set the page meta description.
   */
  description?: string;

  /**
   * Set the page canonical url.
   *
   * @remarks
   *
   * Add this on a page per page basis when you want to consolidate duplicate
   * URLs.
   *
   * ```js
   * canonical = 'https://www.canonical.ie/';
   * ```
   */
  canonical?: string;

  /**
   * Mobile configuration object.
   *
   * @remarks
   *
   * This link relation is used to indicate a relation between a desktop and a
   * mobile website to search engines.
   *
   * Example:
   *
   * ```jsx
   * mobileAlternate={{
   *   media: 'only screen and (max-width: 640px)',
   *   href: 'https://m.canonical.ie',
   * }}
   * ```
   *
   * ```jsx
   * languageAlternate={{
   *   hrefLang: 'de-AT',
   *   href: 'https://www.canonical.ie/de',
   * }}
   * ```
   */
  mobileAlternate?: MobileAlternate;

  /**
   * Set the language of the alternate urls. Excepts object: `{ hrefLang:
   * string, href: string }`.
   */
  languageAlternates?: readonly LanguageAlternate[];

  /**
   * The open graph configuration object.
   */
  openGraph?: OpenGraph;

  /**
   * Used for Facebook Insights, you must add a facebook app ID to your page to
   * for it.
   *
   * @remarks
   *
   * ```tsx
   * facebook={{
   *   appId: 1234567890,
   * }}
   * ```
   *
   */
  facebook?: { appId: string };

  /**
   * The twitter configuration object.
   *
   * @remarks
   *
   * Twitter will read the `og:title`, `og:image` and `og:description` tags for
   * their card, this is why `gatsby-plugin-next-seo` omits `twitter:title`,
   * `twitter:image` and `twitter:description` so not to duplicate.
   *
   * Some tools may report this an error. See [Issue
   * #14](https://github.com/garmeeh/gatsby-plugin-next-seo/issues/14)
   */
  twitter?: Twitter;

  /**
   * Allows you to add a meta tag that is not documented here.
   *
   * @remarks
   *
   * This allows you to add any other meta tags that are not covered in the
   * `config`.
   *
   * `content` is required. Then either `name` or `property`. (Only one on each)
   *
   * Example:
   *
   * ```js
   * additionalMetaTags={[{
   *   property: 'dc:creator',
   *   content: 'Jane Doe'
   * }, {
   *   name: 'application-name',
   *   content: 'GatsbySeo'
   * }]}
   * ```
   *
   * Invalid Examples:
   *
   * These are invalid as they contain `property` and `name` on the same entry.
   *
   * ```js
   * additionalMetaTags={[{
   *   property: 'dc:creator',
   *   name: 'dc:creator',
   *   content: 'Jane Doe'
   * }, {
   *   property: 'application-name',
   *   name: 'application-name',
   *   content: 'GatsbySeo'
   * }]}
   * ```
   */
  metaTags?: readonly MetaProps[];

  /**
   * Allows you to add a link tag that is not documented here.
   */
  linkTags?: readonly LinkProps[];
}

export interface DeferSeoProps {
  /**
   * Whether or not to defer the addition of the head tag.
   *
   * @default false
   */
  defer?: boolean;
}

export interface GatsbySeoProps extends BaseSeoProps, DeferSeoProps {}

export interface DefaultSeoProps {
  /**
   * It has the prefix of `dangerously` because it will `noindex` all pages. As
   * this is an SEO plugin, that is kinda dangerous action. It is **not** bad to
   * use this, just please be sure you want to `noindex` **EVERY** page. You can
   * still override this at a page level if you have a use case to `index` a
   * page. This can be done by setting `noindex: false`.
   */
  dangerouslySetAllPagesToNoIndex?: boolean;

  /**
   * It has the prefix of `dangerously` because it will `nofollow` all pages. As
   * this is an SEO plugin, that is kinda dangerous action. It is **not** bad to
   * use this, just please be sure you want to `nofollow` **EVERY** page. You
   * can still override this at a page level if you have a use case to `follow`
   * a page. This can be done by setting `nofollow: false`.
   */
  dangerouslySetAllPagesToNoFollow?: boolean;

  /**
   * The default open graph image width.
   */
  defaultOpenGraphImageWidth?: number;

  /**
   * The default open graph image height.
   */
  defaultOpenGraphImageHeight?: number;

  /**
   * The default open graph video width.
   */
  defaultOpenGraphVideoWidth?: number;

  /**
   * The default open graph video height.
   */
  defaultOpenGraphVideoHeight?: number;
}

export interface AllSeoProps extends DefaultSeoProps, GatsbySeoProps {}

export interface GatsbySeoPluginOptions extends DefaultSeoProps, BaseSeoProps {}

export interface OtherElementAttributes {
  [key: string]: string | number | boolean | null | undefined;
}

export type HtmlProps = JSX.IntrinsicElements['html'] & OtherElementAttributes;
export type BodyProps = JSX.IntrinsicElements['body'] & OtherElementAttributes;
export type LinkProps = JSX.IntrinsicElements['link'];
export type MetaProps = JSX.IntrinsicElements['meta'];
export type NoscriptProps = JSX.IntrinsicElements['noscript'];
export type ScriptProps = JSX.IntrinsicElements['script'];
export type StyleProps = JSX.IntrinsicElements['style'];
export type TitleProps = JSX.IntrinsicElements['title'];
