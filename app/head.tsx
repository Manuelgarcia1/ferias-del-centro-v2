export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      {/* El viewport y favicon ya vienen de metadata en layout.tsx */}
      {/* Si quisieras un tag extra, por ejemplo Open Graph: */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ferias del Centro – Desde 1983" />
      <meta
        property="og:description"
        content="Más de 40 años comercializando hacienda en San Carlos de Bolívar."
      />
      {/* etc. */}
    </>
  );
}
