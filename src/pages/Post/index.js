import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export function Post() {
  const params = useParams();
  const { search } = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log(queryParams.get('orderBy'));

  return (
    <>
      <h1 style={{ marginLeft: 24 }}>Post {params.id}</h1>
      <span />
    </>
  );
}
