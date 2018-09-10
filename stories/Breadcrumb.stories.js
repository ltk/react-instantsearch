import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import {
  Breadcrumb,
  HierarchicalMenu,
  Panel,
  connectHierarchicalMenu,
} from 'react-instantsearch-dom';
import { displayName, filterProps, WrapWithHits } from './util';

setAddon(JSXAddon);

const stories = storiesOf('Breadcrumb', module);
const VirtualHierarchicalMenu = connectHierarchicalMenu(() => null);

stories
  .addWithJSX(
    'default',
    () => (
      <div>
        <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
          <Breadcrumb
            attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
          />
          <hr />
          <HierarchicalMenu
            attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
            defaultRefinement="Cameras & Camcorders > Digital Cameras"
            showMoreLimit={3}
            showMore={true}
          />
        </WrapWithHits>
      </div>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .add('with custom component', () => (
    <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
      <Breadcrumb
        attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
        separator={<span> ⚡ </span>}
      />
      <hr />
      <VirtualHierarchicalMenu
        attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
        defaultRefinement="Cameras & Camcorders > Digital Cameras"
      />
    </WrapWithHits>
  ))
  .add('playground', () => (
    <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
      <Breadcrumb
        attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
        separator={text('separator', ' / ')}
        translations={object('translations', {
          rootLabel: 'Home',
        })}
      />
      <VirtualHierarchicalMenu
        attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
        defaultRefinement="Cameras & Camcorders > Digital Cameras"
      />
    </WrapWithHits>
  ))
  .addWithJSX(
    'with Panel',
    () => (
      <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
        <Panel header="Breadcrumb" footer="footer">
          <Breadcrumb
            attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
          />
        </Panel>
        <hr />
        <HierarchicalMenu
          attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
          defaultRefinement="Cameras & Camcorders > Digital Cameras"
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with Panel but no refinement',
    () => (
      <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
        <Panel header="Breadcrumb" footer="footer">
          <Breadcrumb
            attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']}
          />
        </Panel>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
