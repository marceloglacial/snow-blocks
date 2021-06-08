import { registerBlockType } from '@wordpress/blocks';
import useHubSpot from '../../hooks/useHubSpot';
import SiteSelection from './components/SiteSelecion';

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
    hubSpotApiKey: {
      type: 'string',
      default: '',
    },
  },
  edit: (props) => {
    const { attributes, setAttributes } = props;
    const { hubSpotApiKey, hubSpotSite } = attributes;
    const { data, isLoading, isError } = useHubSpot(hubSpotApiKey, hubSpotSite);

    if (isError) return 'ERROR!';
    if (isLoading) return 'loading ...';

    const handleSelect = (e) => {
      e.preventDefault();
      setAttributes({ formID: e.target.value });
    };

    if (!hubSpotApiKey && !hubSpotSite)
      return (
        <section className='hubspot'>
          <SiteSelection {...props} />
        </section>
      );

    if (hubSpotApiKey && data.status === 'error')
      return (
        <section className='hubspot'>
          <h3>{data.message}</h3>
          <SiteSelection {...props} />
        </section>
      );

    return (
      <section className='hubspot'>
        <h3>Please select your Form</h3>
        <select
          defaultValue={props.attributes.formID}
          onChange={(e) => handleSelect(e)}
        >
          <option>--------</option>
          {data.results?.map((item) => {
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
