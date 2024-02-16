import Project from "@/components/projects/project";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center px-4">
      <Suspense>
        <Project />
      </Suspense>
    </div>
  );
}
