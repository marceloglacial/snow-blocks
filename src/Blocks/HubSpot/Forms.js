import { registerBlockType } from '@wordpress/blocks';
import useHubSpot from '../../hooks/useHubSpot';

registerBlockType('snow-blocks/hubspot-forms', {
  title: 'HubSpot Forms',
  category: 'widgets',
  icon: 'cover-image',
  supports: {
    html: false,
  },
  attributes: {
    formID: {
      type: 'string',
      default: '',
    },
  },
  edit: (props) => {
    const { setAttributes } = props;
    const { data, isLoading, isError } = useHubSpot();

    if (isError) return 'ERROR!';
    if (isLoading) return 'loading ...';

    const handleSelect = (e) => {
      e.preventDefault();
      setAttributes({ formID: e.target.value });
    };

    return (
      <section>
        <h3>Please select your Form</h3>
        <select
          defaultValue={props.attributes.formID}
          onChange={(e) => handleSelect(e)}
        >
          <option>--------</option>
          {data.results.map((item) => {
            const { archived, id, name } = item;
            if (archived) return null;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
      </section>
    );
  },
  save: (props) => null,
});
