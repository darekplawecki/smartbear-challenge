import React, { FC, useEffect, useState } from 'react';
import { ApiDefinitionInfo } from './components/ApiDefinitionInfo';
import { ApiDefinitionPaths } from './components/ApiDefinitionPaths';
import { getApiDefinition } from '../../api/apiDefinition/apiDefinitionClient';
import { ApiDefinition } from './components/types/apiDefinition';
import { mapApiDefinition } from './ApiDefinitionOverview.utils';

const ApiDefinitionOverview: FC = () => {
  const [loading, setLoading] = useState(true);
  const [apiDefinition, setApiDefinition] = useState<ApiDefinition>();

  useEffect(() => {
    getApiDefinition()
      .then((data) => {
        setApiDefinition(mapApiDefinition(data));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!apiDefinition) {
    return <div>API Definition could not be loaded.</div>;
  }

  return (
    <div>
      <ApiDefinitionInfo info={apiDefinition.info} />
      <ApiDefinitionPaths
        paths={apiDefinition.paths}
        tags={apiDefinition.tags}
      />
    </div>
  );
};

export default ApiDefinitionOverview;
