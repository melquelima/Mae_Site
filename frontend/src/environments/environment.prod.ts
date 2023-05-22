export const environment = {
  production: true,
  base_url:location.origin,
  //base_url: "http://localhost:4000"
  side_bar:[
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
    }
]
};
