import { useEffect } from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  RadioControl,
  CheckboxControl,
} from '@wordpress/components';
import useCategory from '../../../functions/useCategory';

const PostsListInspector = (props) => {
  const { attributes, setAttributes } = props;
  const { showImage, showText, showDate, categoryList } = attributes;
  const { categories, isLoading, isError } = useCategory();

  // Loading States
  if (isLoading)
    return (
      <InspectorControls>
        <PanelBody>Loading ...</PanelBody>
      </InspectorControls>
    );

  if (isError)
    return (
      <InspectorControls>
        <PanelBody>Something is wrong!</PanelBody>
      </InspectorControls>
    );

  // Checkbox control
  const addCategory = (id) =>
    setAttributes({ categoryList: [id, ...categoryList] });
  const removeCategory = (id) =>
    setAttributes({ categoryList: categoryList.filter((item) => item !== id) });
  const checkCategory = (id) => categoryList.includes(id);

  return (
    <InspectorControls>
      <PanelBody title={__('Filter by Category')} initialOpen={true}>
        {categories.map((category) => {
          const { id, name } = category;
          const isSelected = checkCategory(id);
          return (
            <CheckboxControl
              className='postslist__checkbox'
              key={id}
              label={name}
              checked={isSelected}
              onChange={() =>
                isSelected ? removeCategory(id) : addCategory(id)
              }
            />
          );
        })}
      </PanelBody>
      <PanelBody title={__('Show Image')} initialOpen={true}>
        <RadioControl
          selected={showImage}
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ]}
          onChange={(option) => {
            setAttributes({ showImage: option });
          }}
        />
      </PanelBody>
      <PanelBody title={__('Show Date')} initialOpen={true}>
        <RadioControl
          selected={showDate}
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ]}
          onChange={(option) => {
            setAttributes({ showDate: option });
          }}
        />
      </PanelBody>
      <PanelBody title={__('Show Text')} initialOpen={true}>
        <RadioControl
          selected={showText}
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ]}
          onChange={(option) => {
            setAttributes({ showText: option });
          }}
        />
      </PanelBody>
    </InspectorControls>
  );
};
export default PostsListInspector;
