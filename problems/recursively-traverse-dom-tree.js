function traverse(node) {
    console.log(node.tagName);
    node = node.firstElementChild;

    while (node) {
        traverse(node);
        node = node.nextElementSibling;
    }
}

traverse(document.body);

export default traverse;