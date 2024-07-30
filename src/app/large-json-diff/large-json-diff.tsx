"use client"

import Dashboard from "@/components/Dashboard/Dashboard";

interface Props {
  leftJsonPath: any,
  rightJsonPath: any
}
export  const LargeJsonDiff: React.FC<Props> = ({ leftJsonPath, rightJsonPath })  => {
  return (
    <main>
      <Dashboard oldLeftJson={leftJsonPath} oldRightJson={rightJsonPath} />
    </main>
  );
}
