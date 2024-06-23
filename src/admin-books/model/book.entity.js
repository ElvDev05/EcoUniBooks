export class Book {
    constructor(id,
        titulo,
        autor,
        descripcion,
        precio,
        formato,
        categoria,
        stock,
        condicion,
        fecha_publicacion,
        publicado_por,
                imagen
    ) {
        this._id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.descripcion = descripcion;
        this.precio = precio;
        this.formato = formato;
        this.categoria = categoria;
        this.stock = stock;
        this.condicion = condicion;
        this.fecha_publicacion = fecha_publicacion;
        this.publicado_por = publicado_por;
        this.imagen = imagen;
        // this.status = this.publicado_por ? 'Published' : 'Unpublished';
    }

    static fromDisplayableBook(displayableBook) {
        return new Book(
            displayableBook._id,
            displayableBook.titulo,
            displayableBook.autor,
            displayableBook.descripcion,
            displayableBook.precio,
            displayableBook.formato,
            displayableBook.categoria,
            displayableBook.stock,
            displayableBook.condicion,
            displayableBook.fecha_publicacion,
            displayableBook.publicado_por,
            displayableBook.imagen
        );
    }

    static toDisplayableBook(book) {
        return {
            _id: book._id,
            titulo: book.titulo,
            autor: book.autor,
            descripcion: book.descripcion,
            precio: book.precio,
            formato: book.formato,
            categoria: book.categoria,
            stock: book.stock,
            condicion: book.condicion,
            fecha_publicacion: book.fecha_publicacion,
            publicado_por: book.publicado_por,
            imagen: book.imagen
            // status: book.publicado_por ? 'Published' : 'Unpublished'
        };
    }
}