export function Loader({ message = "Loading..." }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="animate-pulse text-gray-500">{message}</p>
    </div>
  );
}
