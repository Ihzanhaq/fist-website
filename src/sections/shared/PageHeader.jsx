import Container from '@/components/Container'
import ImageBackground from '@/components/ImageBackground'
import SplitHeading from '@/components/SplitHeading'
import Reveal from '@/components/Reveal'

/**
 * Reusable inner-page hero: a relevant full-bleed image with the heading
 * overlaid in white. Two scrims sit over the image:
 *  - a content scrim (dark middle) so the white heading stays legible,
 *  - a short dark band at the very top so the transparent navbar's light
 *    chrome stays readable over the image in BOTH light and dark themes.
 * Both scrims use a fixed dark color (not the theme canvas) so the header
 * looks identical in light and dark mode. If no `image` is supplied, falls
 * back to a plain themed header.
 */
export default function PageHeader({ eyebrow, title, intro, image, imageAlt = '', children }) {
  const hasImage = Boolean(image)

  return (
    <header className="relative overflow-hidden">
      {hasImage && (
        <ImageBackground src={image} alt={imageAlt}>
          {/* Content scrim for the white heading. Fixed dark (not theme canvas)
              so the header reads identically in light and dark mode. */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/55 to-[#0a0a0b]" />
          {/* Nav-legibility band: dark at the very top, both themes */}
          <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#0a0a0b] to-transparent" />
        </ImageBackground>
      )}

      <Container className="relative pb-20 pt-36 md:pb-28 md:pt-52">
        <div className="max-w-3xl">
          <Reveal>
            <span
              className={`inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] ${
                hasImage ? 'text-white/70' : 'text-muted'
              }`}
            >
              <span className="h-px w-7 bg-accent" aria-hidden="true" />
              {eyebrow}
            </span>
          </Reveal>

          <SplitHeading
            className={`mt-6 text-headline ${hasImage ? 'text-white' : 'text-ink'}`}
          >
            {title}
          </SplitHeading>

          {intro && (
            <Reveal y={20} delay={0.1}>
              <p className={`mt-6 max-w-2xl text-lg ${hasImage ? 'text-white/80' : 'text-muted'}`}>
                {intro}
              </p>
            </Reveal>
          )}

          {children}
        </div>
      </Container>
    </header>
  )
}
