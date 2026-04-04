"use client";

import { ErrorState } from "@/components/ui/error";

export default function Error({ error, reset }) {
  return <ErrorState message={error.message} onRetry={reset} />;
}
