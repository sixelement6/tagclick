async function getPost() {
  const resp = await fetch(
    "https://app.omie.com.br/api/v1/geral/produtos/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: ({
        call: "ListarProdutos",
        app_key: "1534719465279",
        app_secret: "05688d0ab54686f019cdf187089f6721",
        param: [
          {
            pagina: 1,
            registros_por_pagina: 500,
            apenas_importado_api: "N",
            filtrar_apenas_omiepdv: "N",
          },
        ],
      }),
    }
  );
  console.log(resp.json());

}
