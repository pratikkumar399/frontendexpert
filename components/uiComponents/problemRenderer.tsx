'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function ProblemRenderer({ id }: { id: string }) {
  const DynamicComponent = useMemo(() => {
    return dynamic(() => import(`@/components/reactUi/${id}`), {
      ssr: false,
    });
  }, [id]);

  return <DynamicComponent />;
}
