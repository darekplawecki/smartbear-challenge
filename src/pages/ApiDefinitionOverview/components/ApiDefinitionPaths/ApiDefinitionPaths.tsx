import React, { FC } from 'react';
import { Path, Tag } from '../types/apiDefinition';
import { AccordionElement } from '../../../../components/organisms/AccordionElement';
import { groupPathsByTag } from './ApiDefinitionPaths.utils';

type ApiDefinitionPathsProps = {
  paths: Path[];
  tags: Tag[];
};

const ApiDefinitionPaths: FC<ApiDefinitionPathsProps> = ({ paths, tags }) => {
  const groupedPaths = groupPathsByTag(paths);
  return (
    <div>
      {Object.keys(groupedPaths).map((tagName) => {
        const tag = tags.find((tag) => tag.name === tagName);
        return (
          <AccordionElement
            key={tagName}
            headline={tagName}
            description={tag?.description}
            defaultOpen
          >
            Panel
          </AccordionElement>
        );
      })}
    </div>
  );
};

export default ApiDefinitionPaths;
