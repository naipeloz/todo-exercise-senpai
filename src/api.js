class apiTODO {
  getAll () {
    return fetch(`https://crudcrud.com/api/5e842f103abd4ae893c9d3ecd98b861c/todo`)
      .then((response) => response.json())
      .catch((error) => error);
  }
}
