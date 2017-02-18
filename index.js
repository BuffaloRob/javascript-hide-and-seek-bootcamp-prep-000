function getFirstSelector(selector) {
    //returns first element that matches
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    //increases the rank in all of the '.ranked-list's by 'n'. use parseInt
    const rankedLists = document.querySelectorAll('.ranked-list')

    for (let i = 0, l = rankedLists.length; i < l; i++) {
        let children = rankedLists[i].children

        for (let j=0, k=children.length; j<k; j++) {
            children[j].innerHTML = parseInt(children[j].innerHTML) + n
        }
    }
}    

function deepestChild() {
    let node = document.getElementById('grand-node')
    let nextNode = node.children[0] 

    while(nextNode) {
        node = nextNode
        nextNode = node.children[0]
    }
    return node
}
