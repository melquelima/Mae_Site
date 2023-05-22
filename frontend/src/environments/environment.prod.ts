export const environment = {
  production: true,
  base_url:"/",
  //base_url: "http://localhost:4000"
  side_bar:[{
    path: "/produtos",
    title: "Produtos",
    type: "sub",
    icontype: "ni-shop text-orange",
    isCollapsed: true,
    children: [
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
      }
    ]
  }
]
};
