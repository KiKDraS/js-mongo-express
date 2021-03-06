class Form{
    renderForm(){
        const formulario = document.querySelector('#formulario');
        formulario.innerHTML = ''
        const div = document.createElement('div');
        div.className = '' 
        div.innerHTML = `
            <h4 class="mt-2">Agrega un nuevo libro</h4>
            <form action="" id="book-form" class="card card-body" name="book-form">
                <div class="form-group">
                    <input type="text" class="form-control" id="title" placeholder="Titulo del libro" autofocus>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="author" placeholder="Autor">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="genero" placeholder="Categoría">
                </div>
                <div class="input-group mb-3">
                    <div class="custom-file">
                        <label for="image" class="custom-file-label">Subir imagen</label>
                        <input type="file" id="image" class="custom-file-input">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" form="book-form" id="send">Guardar</button>
            </form>
        `
        formulario.appendChild(div);
    }
}

export default Form;