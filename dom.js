window.dom = {
    find(className, scope) {
        return (scope || document).querySelectorAll(className)
    },
    style(node, attr, attrValue) {
        //dom.style(div,'color')
        if (arguments.length === 2) {
            return node.style[attr]
        } else if (arguments.length === 3) {
            //dom.style(div,color,'red')
            node.style[attr] = attrValue
        } else if (attr instanceof Object) {
            //dom.style(div,{color,'red'})
            for (let key in attr) {
                node.style[key] = attr[key]
            }
        }

    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn(nodeList[i])
        }

    }
}

