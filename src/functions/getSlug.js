const getSlug = (link) => {
  if (!link.includes('http')) return '';
  const domain = new URL(link).host + '/';
  return link.split(domain)[1];
};
export default getSlug;

//
// WIP get proper hostaname (without port)
//
