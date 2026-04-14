import veloLogoSrc from '../assets/velo_logo.png'

/**
 * VELO logo — uses the actual image asset.
 * Accepts either className or a style object for size control.
 * mix-blend-mode: screen removes the black background on dark surfaces.
 */
export default function VeloLogo({ className, style = {} }) {
  return (
    <img
      src={veloLogoSrc}
      alt="VELO DIGITAL"
      className={className}
      style={{
        objectFit: 'contain',
        mixBlendMode: 'screen',
        ...style,
      }}
    />
  )
}
