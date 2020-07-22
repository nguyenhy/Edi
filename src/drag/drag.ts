interface IDragBox {
    $element: Element | null,
    option: Object | null,
}

class DragBox implements IDragBox {
    $element: Element;
    option: Object;
    constructor() {
        this.$element = this.createDragElement();
        this.option = {};
    }

    init(): DragBox {


        return this;
    }

    private createDragElement(): Element {
        let $temp = document.createElement('div') as Element;
        $temp.innerHTML = this.dragElementTemplate();
        let firstchild = $temp.children.item(0) as Element;
        return firstchild;
    }

    private dragElementTemplate(): string {
        return ''
            + '<div>demo</div>'
            ;
    }
}

export default DragBox;
export {
    IDragBox,
}