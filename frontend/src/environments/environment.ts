// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url:"http://localhost:4000",
  side_bar:
  [
  {
    path: "/dashboards",
    title: "Dashboards",
    type: "sub",
    icontype: "ni-atom text-primary",
    isCollapsed: true,
    children: [
      { path: "dashboard", title: "Dashboard", type: "link" },
      { path: "alternative", title: "Alternative", type: "link" }
    ]
  },
  {
    path: "/produtos",
    title: "Produtos",
    type: "sub",
    icontype: "ni-shop text-orange",
    isCollapsed: true,
    children: [
      { path: "pesquisar", title: "Pesquisar", type: "link" },
      { path: "new", title: "Novo", type: "link" },
      { path: "categorias", title: "Categorias", type: "link" },
      { path: "tags", title: "Tag", type: "link" },
    ]
  },
  {
    path: "/examples",
    title: "Examples",
    type: "sub",
    icontype: "ni-ungroup text-orange",
    collapse: "examples",
    isCollapsed: true,
    children: [
      { path: "pricing", title: "Pricing", type: "link" },
      { path: "login", title: "Login", type: "link" },
      { path: "register", title: "Register", type: "link" },
      { path: "lock", title: "Lock", type: "link" },
      { path: "timeline", title: "Timeline", type: "link" },
      { path: "profile", title: "Profile", type: "link" }
    ]
  },
  {
    path: "/components",
    title: "Components",
    type: "sub",
    icontype: "ni-ui-04 text-info",
    collapse: "components",
    isCollapsed: true,
    children: [
      { path: "buttons", title: "Buttons", type: "link" },
      { path: "cards", title: "Cards", type: "link" },
      { path: "grid", title: "Grid", type: "link" },
      { path: "notifications", title: "Notifications", type: "link" },
      { path: "icons", title: "Icons", type: "link" },
      { path: "typography", title: "Typography", type: "link" },
      {
        path: "multilevel",
        isCollapsed: true,
        title: "Multilevel",
        type: "sub",
        collapse: "multilevel",
        children: [
          { title: "Third level menu" },
          { title: "Just another link" },
          { title: "One last link" }
        ]
      }
    ]
  },
  {
    path: "/forms",
    title: "Forms",
    type: "sub",
    icontype: "ni-single-copy-04 text-pink",
    collapse: "forms",
    isCollapsed: true,
    children: [
      { path: "elements", title: "Elements", type: "link" },
      { path: "components", title: "Components", type: "link" },
      { path: "validation", title: "Validation", type: "link" }
    ]
  },
  {
    path: "/tables",
    title: "Tables",
    type: "sub",
    icontype: "ni-align-left-2 text-default",
    collapse: "tables",
    isCollapsed: true,
    children: [
      { path: "tables", title: "Tables", type: "link" },
      { path: "sortable", title: "Sortable", type: "link" },
      { path: "ngx-datatable", title: "Ngx Datatable", type: "link" }
    ]
  },
  {
    path: "/maps",
    title: "Maps",
    type: "sub",
    icontype: "ni-map-big text-primary",
    collapse: "maps",
    isCollapsed: true,
    children: [
      { path: "google", title: "Google Maps", type: "link" },
      { path: "vector", title: "Vector Map", type: "link" }
    ]
  },
  {
    path: "/widgets",
    title: "Widgets",
    type: "link",
    icontype: "ni-archive-2 text-green"
  },
  {
    path: "/charts",
    title: "Charts",
    type: "link",
    icontype: "ni-chart-pie-35 text-info"
  },
  {
    path: "/calendar",
    title: "Calendar",
    type: "link",
    icontype: "ni-calendar-grid-58 text-red"
  }
]
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
