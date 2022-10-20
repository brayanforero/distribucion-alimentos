const BASE_ROOT = '/'
const BASE_URL_DASHBOARD = `${BASE_ROOT}dashboard`

const routes = {
  home: BASE_ROOT,
  dashboard: BASE_URL_DASHBOARD,
  members: {
    index: `${BASE_URL_DASHBOARD}/members`,
    add: `${BASE_URL_DASHBOARD}/members/add`,
    update: `${BASE_URL_DASHBOARD}/update`,
  },
  deliveries: `${BASE_URL_DASHBOARD}/deliveries`,
  payments: `${BASE_URL_DASHBOARD}/payments`,
  settings: `${BASE_URL_DASHBOARD}/settings`,
}

export default routes
