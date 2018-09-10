import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { Panel, ToggleRefinement } from 'react-instantsearch-dom';
import { displayName, filterProps, WrapWithHits } from './util';

setAddon(JSXAddon);

const stories = storiesOf('ToggleRefinement', module);

stories
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="ToggleRefinement">
        <ToggleRefinement
          attribute="categories"
          label="Computers & Tablets"
          value={'Computers & Tablets'}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'checked by default',
    () => (
      <WrapWithHits linkedStoryGroup="ToggleRefinement">
        <ToggleRefinement
          attribute="categories"
          label="Computers & Tablets"
          value={'Computers & Tablets'}
          defaultRefinement={true}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with Panel',
    () => (
      <WrapWithHits linkedStoryGroup="ToggleRefinement">
        <Panel header="Toggle Refinement" footer="Footer">
          <ToggleRefinement
            attribute="categories"
            label="Computers & Tablets"
            value={'Computers & Tablets'}
          />
        </Panel>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
