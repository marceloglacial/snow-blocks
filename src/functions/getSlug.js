const getSlug = (link) => {
  if (!link.includes('http')) return '';

  const hasHost = new URL(link).host;

  if (hasHost.includes(':')) {
    const domain = new URL(link).host + '/';
    return link.split(domain)[1];
  } else {
    const domain = new URL(link).hostname + '/';
    return link.split(domain);
  }
};
export default getSlug;
