import { problemCards } from "@/lib/problemCards";
import { notFound } from "next/navigation";
import ProblemRenderer from "@/components/uiComponents/problemRenderer";

export default function ProblemPage({ params }: { params: { id: string } }) {
  const problem = problemCards.find((p) => p.id === params.id);
  if (!problem) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{problem.title}</h1>
      <p className="text-gray-600 mb-4">{problem.description}</p>
      <ProblemRenderer id={params.id} />
    </div>
  );
}
