const ASPECT = 300 / 263;

export default function Logo({ size = 32, className = "" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-icon.png"
      alt=""
      width={Math.round(size * ASPECT)}
      height={size}
      style={{ height: size, width: "auto" }}
      className={className}
    />
  );
}
