var CLICK_TEXT = "[click]"
var CREDIT_TEXT = "[credit]"

var NODE_TYPES = {
    END_OF_TURN: "END_OF_TURN"
}

// main
function always_be_running() {
    // get the system logs
    system_log_nodes = document.getElementsByClassName("system");
    size = system_log_nodes.length

    // prepare node array
    node_data = []

    // iterate through nodes
    for (index = 0;index < size; index++) {

        node = system_log_nodes[index]
        // system_node = new SystemNode(node)

        node_hash = process_node(node)

        if (node_hash != null) {
            console.log(node_hash)
            node_data.push(node_hash)            
        }
    }

    // send nodes for parsing
    chrome.runtime.sendMessage(node_data)

    // // convert nodes to data points
    // graph_data = []

    // for (index = 0; index < node_data.length; index++) {
    //     if (node_data[index]["username"] == "lopert") {
    //         graph_data.push(node_data[index]["credits"])
    //     }
    // }
    // console.log(graph_data)

    // chrome.runtime.sendMessage(graph_data);
}

always_be_running();

//chrome.runtime.sendMessage(system_log_nodes[size-1].innerText);