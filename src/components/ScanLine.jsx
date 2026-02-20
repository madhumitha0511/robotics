export default function ScanLine() {
  return (
    <>
      <div className="scan-line" style={{ animationDuration: '10s' }} />
      <div className="scan-line" style={{ animationDuration: '15s', animationDelay: '5s', background: 'linear-gradient(to bottom, transparent, rgba(169,169,168,0.15), transparent)' }} />
    </>
  )
}
