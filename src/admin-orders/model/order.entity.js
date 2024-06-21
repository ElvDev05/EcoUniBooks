export class Order {
    constructor(id,
                cliente_id,
                fecha_pedido,
                estado,
                items,
                total,
                direccion_envio
    ) {
        this._id = id;
        this.cliente_id = cliente_id;
        this.fecha_pedido = fecha_pedido;
        this.estado = estado;
        this.items = items;
        this.total = total;
        this.direccion_envio = direccion_envio;
    }

    static fromDisplayableOrder(displayableOrder) {
        return new Order(
            displayableOrder._id,
            displayableOrder.cliente_id,
            displayableOrder.fecha_pedido,
            displayableOrder.estado,
            displayableOrder.items,
            displayableOrder.total,
            displayableOrder.direccion_envio
        );
    }

    static toDisplayableOrder(order) {
        return {
            _id: order._id,
            cliente_id: order.cliente_id,
            fecha_pedido: order.fecha_pedido,
            estado: order.estado,
            items: order.items,
            total: order.total,
            direccion_envio: order.direccion_envio
        };
    }
}

