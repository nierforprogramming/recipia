export function ErrorState({ message, onRetry }) {
  return (
    <div className="p-6 text-center">
      <p className="text-red-500">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="underline mt-2">
          Retry
        </button>
      )}
    </div>
  );
}
