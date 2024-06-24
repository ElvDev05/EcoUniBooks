export class Review {

    constructor(id,book_id,opinion,calificacion,fecha) {
        this._id=id;
        this.libro_id=book_id;
        this.opinion = opinion;
        this.calificacion = calificacion;
        this.fecha = fecha;
    }

    static fromDisplayableReview(displayableReview){
        return new Review(displayableReview._id,
            displayableReview.libro_id,
            displayableReview.opinion,
            displayableReview.calificacion,
            displayableReview.fecha)
    }

    static toDisplayableReview(review){
        return {
            _id:review._id,
            book_id:review.book_id,
            opinion: review.opinion,
            calificacion:review.calificacion,
            fecha:review.fecha
        }
    }

}