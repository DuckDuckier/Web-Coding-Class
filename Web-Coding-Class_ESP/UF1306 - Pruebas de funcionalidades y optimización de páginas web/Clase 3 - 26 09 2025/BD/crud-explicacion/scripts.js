function abrirEditar(producto) {
  const modal = `
  <div class="modal fade" id="modalEditar" tabindex="-1">
    <div class="modal-dialog">
      <form method="post" action="acciones.php" class="modal-content needs-validation" novalidate>
        <div class="modal-header"><h5 class="modal-title">✏️ Editar Producto</h5></div>
        <div class="modal-body">
          <input type="hidden" name="accion" value="editar">
          <input type="hidden" name="id" value="${producto.id}">
          <div class="mb-3">
            <label>Nombre:</label>
            <input type="text" name="nombre" class="form-control" value="${producto.nombre}" required>
          </div>
          <div class="mb-3">
            <label>Precio (€):</label>
            <input type="number" step="0.01" name="precio" class="form-control" value="${producto.precio}" required>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-warning">Actualizar</button>
        </div>
      </form>
    </div>
  </div>`;
  document.getElementById("modalesDinamicos").innerHTML = modal;
  new bootstrap.Modal(document.getElementById("modalEditar")).show();
}

function abrirEliminar(id) {
  const modal = `
  <div class="modal fade" id="modalEliminar" tabindex="-1">
    <div class="modal-dialog">
      <form method="post" action="acciones.php" class="modal-content">
        <div class="modal-header"><h5 class="modal-title">🗑️ Eliminar Producto</h5></div>
        <div class="modal-body">
          <input type="hidden" name="accion" value="eliminar">
          <input type="hidden" name="id" value="${id}">
          <p>¿Estás seguro de que deseas eliminar este producto?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-danger">Eliminar</button>
        </div>
      </form>
    </div>
  </div>`;
  document.getElementById("modalesDinamicos").innerHTML = modal;
  new bootstrap.Modal(document.getElementById("modalEliminar")).show();
}
