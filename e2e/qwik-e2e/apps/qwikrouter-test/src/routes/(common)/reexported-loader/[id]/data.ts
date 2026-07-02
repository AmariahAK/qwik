import { routeLoader$ } from '@qwik.dev/router';

// eslint-disable-next-line qwik/loader-location
export const useReexportedLoader = routeLoader$(({ params }) => ({
  id: params.id,
}));
